import Link from 'next/link';
import { blogSource } from '@/lib/source';

export default function BlogPage() {
  const posts = [...blogSource.getPages()].sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;

    return dateB - dateA;
  });

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-10">
      {/* Header */}
      <header className="mb-16 max-w-3xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-500" />

          <span className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-400">
            ZCore Blog
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Architecture, decisions, and lessons from building 
          <span className="ms-2 text-emerald-400">
            ZCore. 
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-fd-muted-foreground">
          Thoughts on software architecture, FastAPI, Python, modular systems,
          and the engineering decisions behind ZCore.
        </p>
      </header>

      {/* Articles */}
      <section>
        <div className="mb-7 flex items-center justify-between border-b border-fd-border pb-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-fd-muted-foreground">
            Articles
          </h2>

          <span className="text-sm text-fd-muted-foreground">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-fd-border bg-fd-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_-25px_rgba(16,185,129,0.25)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <span className="rounded-full border border-fd-border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-fd-muted-foreground">
                  {post.data.category}
                </span>

                {post.data.date && (
                  <time className="text-xs text-fd-muted-foreground">
                    {new Date(post.data.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                )}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold leading-7 tracking-tight transition-colors group-hover:text-emerald-400">
                  {post.data.title}
                </h3>

                {post.data.description && (
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-fd-muted-foreground">
                    {post.data.description}
                  </p>
                )}
              </div>

              <div className="mt-auto pt-8 text-sm font-medium text-emerald-400">
                <span className="inline-flex items-center gap-2">
                  Read more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}