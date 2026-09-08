import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { formatDate, cn } from "@/lib/utils";
import { gameLabel, type BattleReport, type NewsPost, type Result } from "@/lib/journal";

function ResultBadge({ result }: { result?: Result }) {
  if (!result) return null;
  return (
    <Badge tone={result === "victory" ? "ember" : result === "draw" ? "ash" : "muted"}>
      {result}
    </Badge>
  );
}

export function ReportCard({
  report,
  featured = false,
}: {
  report: BattleReport;
  featured?: boolean;
}) {
  return (
    <Link
      to="/reports/$slug"
      params={{ slug: report.slug }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-panel)] transition-colors duration-200 hover:border-ember/40",
        featured && "md:flex-row",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-elevated",
          featured ? "aspect-[16/10] md:aspect-auto md:min-h-[280px] md:w-[54%]" : "aspect-[16/10]",
        )}
      >
        <img
          src={report.cover}
          alt=""
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
      </div>
      <div className={cn("flex flex-1 flex-col gap-3 p-5", featured && "md:justify-center md:p-8")}>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="ember">{gameLabel(report.game)}</Badge>
          <ResultBadge result={report.result} />
          <span className="stamp text-[11px] text-faint">{formatDate(report.date)}</span>
        </div>
        <h3
          className={cn(
            "font-display tracking-wide text-fg group-hover:text-ember-hot",
            featured ? "text-3xl sm:text-4xl" : "text-2xl",
          )}
        >
          {report.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted sm:text-base">{report.excerpt}</p>
        {report.opponent ? (
          <p className="stamp text-[11px] text-faint">vs {report.opponent}</p>
        ) : null}
      </div>
    </Link>
  );
}

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link
      to="/news/$slug"
      params={{ slug: post.slug }}
      className="group grid grid-cols-[96px_1fr] gap-4 rounded-lg border border-line bg-surface p-3 transition-colors duration-200 hover:border-ember/40 sm:grid-cols-[140px_1fr] sm:p-4"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-md bg-elevated">
        <img src={post.cover} alt="" className="size-full object-cover" />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{gameLabel(post.game)}</Badge>
          <span className="stamp text-[11px] text-faint">{formatDate(post.date)}</span>
        </div>
        <h3 className="mt-2 font-display text-xl tracking-wide text-fg group-hover:text-ember-hot">
          {post.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
      </div>
    </Link>
  );
}
