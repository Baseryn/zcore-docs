// src/app/api/blog/route.ts
import { NextResponse } from 'next/server';
import { blogSource } from '@/lib/source';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  const baseUrl = 'https://zcore.baseryn.com';

  const posts = [...blogSource.getPages()]
    .sort((a, b) => {
      const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
      const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
      return dateB - dateA;
    })
    .map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      date: post.data.date ? new Date(post.data.date).toISOString() : null,
      image: post.data.image ?? null,
      author: post.data.author ?? 'Ali Alf Ostovar',
      authorRole: post.data.authorRole ?? 'Baseryn',
      readTime: post.data.readTime ?? '',
      category: post.data.category ?? 'Engineering',
      tags: post.data.tags ?? [],
      slug: post.slugs[0],
      url: `${baseUrl}${post.url}`,
    }));

  return NextResponse.json(
    {
      success: true,
      total: posts.length,
      data: posts,
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
      },
    }
  );
}