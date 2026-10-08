import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogSource } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = blogSource.getPage([params.slug]);

  if (!post) {
    notFound();
  }

  const MDX = post.data.body;

  const posts = [...blogSource.getPages()].sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;

    return dateB - dateA;
  });

  const currentIndex = posts.findIndex((item) => item.url === post.url);

  const previousPost =
    currentIndex >= 0 && currentIndex < posts.length - 1
      ? posts[currentIndex + 1]
      : undefined;

  const nextPost =
    currentIndex > 0 ? posts[currentIndex - 1] : undefined;

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10 md:px-8 md:py-10">
      {/* Article Header */}
      <header className="mb-14">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-500" />

          <span className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-400">
            {post.data.category}
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-4xl lg:text-5xl lg:leading-[1.08]">
          {post.data.title}
        </h1>

        {post.data.description && (
          <p className="mt-7 max-w-3xl text-lg leading-8 text-fd-muted-foreground md:text-xl">
            {post.data.description}
          </p>
        )}

        {/* Author / Meta */}
        <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          {post.data.author && (
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-400">
                {post.data.author
                  .split(' ')
                  .map((name) => name[0])
                  .slice(0, 2)
                  .join('')}
              </div>

              <div>
                <div className="text-sm font-medium">
                  {post.data.author}
                </div>

                {post.data.authorRole && (
                  <div className="text-xs text-fd-muted-foreground">
                    {post.data.authorRole}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="hidden h-8 w-px bg-fd-border sm:block" />

          <div className="flex flex-wrap items-center gap-4 text-sm text-fd-muted-foreground">
            {post.data.date && (
              <time>
                {new Date(post.data.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}

            {post.data.readTime && (
              <>
                <span className="h-1 w-1 rounded-full bg-fd-muted-foreground/50" />
                <span>{post.data.readTime}</span>
              </>
            )}
          </div>
        </div>

        {/* Tags */}
        {post.data.tags && post.data.tags.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2">
            {post.data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-fd-border px-3 py-1 text-xs text-fd-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Divider */}
      <div className="mb-14 h-px bg-gradient-to-r from-emerald-500/40 via-fd-border to-transparent" />

      {/* Article */}
      <article
        className="
          prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-semibold
          prose-headings:tracking-tight
          prose-h2:mt-16
          prose-h2:mb-6
          prose-h2:text-3xl
          prose-h3:mt-12
          prose-h3:text-2xl
          prose-p:leading-8
          prose-p:text-fd-foreground/90
          prose-a:text-emerald-400
          prose-a:no-underline
          hover:prose-a:underline
          prose-strong:text-fd-foreground
          prose-code:text-emerald-400
          prose-pre:rounded-2xl
          prose-pre:border
          prose-pre:border-fd-border
          prose-blockquote:border-emerald-500
          prose-blockquote:text-fd-muted-foreground
          prose-hr:border-fd-border
        "
      >
        <MDX components={getMDXComponents()} />
      </article>

      {/* Article Navigation */}
      {(previousPost || nextPost) && (
        <nav className="mt-20 grid gap-4 border-t border-fd-border pt-8 md:grid-cols-2">
          {previousPost ? (
            <Link
              href={previousPost.url}
              className="group rounded-xl border border-fd-border p-5 transition-colors hover:border-emerald-500/40"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Previous
              </span>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-emerald-400 transition-transform group-hover:-translate-x-1">
                  ←
                </span>

                <span className="font-medium transition-colors group-hover:text-emerald-400">
                  {previousPost.data.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={nextPost.url}
              className="group rounded-xl border border-fd-border p-5 text-right transition-colors hover:border-emerald-500/40"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Next
              </span>

              <div className="mt-2 flex items-center justify-end gap-2">
                <span className="font-medium transition-colors group-hover:text-emerald-400">
                  {nextPost.data.title}
                </span>

                <span className="text-emerald-400 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}

      {/* Footer */}
      <footer className="mt-16 border-t border-fd-border pt-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/blog"
              className="text-lg font-semibold tracking-tight transition-colors hover:text-emerald-400"
            >
              ZCore
            </Link>

            <p className="mt-1 text-sm text-fd-muted-foreground">
              Build with FastAPI. Add ZCore where it helps.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-fd-muted-foreground">
            <Link
              href="/"
              className="transition-colors hover:text-emerald-400"
            >
              Documentation
            </Link>

            <Link
              href="/blog"
              className="transition-colors hover:text-emerald-400"
            >
              Blog
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-fd-border/60 pt-5 text-xs text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} ZCore</span>
        </div>
      </footer>
    </main>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blogSource.getPages().map((post) => ({
    slug: post.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = blogSource.getPage([params.slug]);

  if (!post) {
    notFound();
  }

  return {
    title: post.data.title,
    description: post.data.description,
  };
}