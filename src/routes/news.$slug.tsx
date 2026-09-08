import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { gameLabel, useJournal } from "@/lib/journal";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/news/$slug")({ component: NewsArticle });

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
        <img src={post.cover} alt="" className="absolute inset-0 size-full object-cover" />
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
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {post.source ? (
          <p className="stamp text-xs text-muted">Source · {post.source}</p>
        ) : null}
        <div className="prose-dust mt-6 text-[1.05rem] leading-relaxed text-ash">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
