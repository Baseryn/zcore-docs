import { MetadataRoute } from 'next';
import { blogSource, source } from '@/lib/source';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zcore.baseryn.com';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const docPages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSource.getPages().map(
    (post) => ({
      url: `${baseUrl}${post.url}`,
      lastModified: post.data.date ?? new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  );

  return [...staticPages, ...docPages, ...blogPages];
}