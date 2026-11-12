import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { gameLabel, useJournal } from "@/lib/journal";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/news/$slug")({
  component: NewsArticle,
});

function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a key={i} href={link[2]} target="_blank" rel="noreferrer" className="text-ember-hot underline">
          {link[1]}
        </a>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <span key={i}>{part}</span>;
  });
}

function NewsArticle() {
  const { slug } = Route.useParams();
  const { news } = useJournal();
  const post = news.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl">Dispatch not found</h1>
        <Link to="/news" className="mt-6 inline-flex stamp text-sm text-ember-hot">
          Back to news
        </Link>
      </div>
    );
  }

  return (
    <article>
      <header className="relative min-h-[40vh] overflow-hidden">
        {post.cover ? (
          <img src={post.cover} alt="" className="absolute inset-0 size-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-elevated" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/25" />
        <div className="relative mx-auto flex min-h-[40vh] max-w-3xl flex-col justify-end px-4 pb-10 pt-20 sm:px-6">
          <Link
            to="/news"
            className="mb-6 inline-flex min-h-11 w-fit items-center gap-2 stamp text-xs text-ash hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            All news
          </Link>
          <div className="flex flex-wrap gap-2">
            <Badge tone="ember">{gameLabel(post.game)}</Badge>
            <span className="stamp text-[11px] text-ash">{formatDate(post.date)}</span>
          </div>
          <h1 className="mt-3 font-display text-4xl tracking-wide sm:text-5xl">{post.title}</h1>
          {post.byline ? (
            <p className="mt-2 stamp text-sm text-ash">By {post.byline}</p>
          ) : null}
          {post.excerpt ? (
            <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
          ) : null}
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {post.source ? (
          <p className="stamp text-xs text-muted">
            Source · {post.sourceUrl ? <a href={post.sourceUrl} className="underline" target="_blank" rel="noreferrer">{post.source}</a> : post.source}
          </p>
        ) : null}
        <div className="prose-dust mt-6 text-[1.05rem] leading-relaxed text-ash">
          {post.body.map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={idx} className="mt-8 font-display text-2xl tracking-wide text-fg">
                  {paragraph.slice(3)}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={idx} className="mt-6 font-display text-xl tracking-wide text-fg">
                  {paragraph.slice(4)}
                </h3>
              );
            }
            return (
              <p key={idx} className="mt-4">
                {renderInline(paragraph)}
              </p>
            );
          })}
        </div>
        {post.sources && post.sources.length > 0 ? (
          <div className="mt-10 border-t border-line pt-6">
            <p className="stamp text-xs text-muted">Sources</p>
            <ul className="mt-2 space-y-1 text-sm">
              {post.sources.map((s, i) => (
                <li key={i}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="text-ember-hot underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
