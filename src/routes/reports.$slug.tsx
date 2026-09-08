import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { gameLabel, useJournal, type ArmyList } from "@/lib/journal";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/reports/$slug")({ component: ReportArticle });

function ArmyLists({ lists }: { lists: ArmyList[] }) {
  return (
    <section className="mt-10">
      <p className="stamp text-xs text-faint">Army lists</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {lists.map((list) => (
          <article key={list.player} className="rounded-lg border border-line bg-elevated p-5">
            <header className="border-b border-line pb-3">
              <p className="stamp text-xs text-ember-hot">{list.faction}</p>
              <h3 className="mt-1 font-display text-2xl tracking-wide">{list.player}</h3>
              {list.points > 0 ? (
                <p className="mt-1 stamp text-[11px] tabular-nums text-muted">{list.points} pts</p>
              ) : null}
            </header>
            <ul className="mt-3 space-y-2">
              {list.entries.map((entry) => (
                <li
                  key={`${list.player}-${entry.name}-${entry.loadout ?? ""}`}
                  className="flex items-baseline justify-between gap-3 border-b border-line/60 py-1.5 text-sm last:border-0"
                >
                  <span>{entry.name}</span>
                  {entry.loadout ? (
                    <span className="text-right text-xs text-muted">{entry.loadout}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReportArticle() {
  const { slug } = Route.useParams();
  const { reports } = useJournal();
  const report = reports.find((item) => item.slug === slug);

  if (!report) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl">Report not found</h1>
        <Link to="/reports" className="mt-6 inline-flex stamp text-sm text-ember-hot">
          Back to reports
        </Link>
      </div>
    );
  }

  return (
    <article>
      <header className="relative min-h-[48vh] overflow-hidden">
        <img src={report.cover} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
        <div className="relative mx-auto flex min-h-[48vh] max-w-3xl flex-col justify-end px-4 pb-10 pt-20 sm:px-6">
          <Link
            to="/reports"
            className="mb-6 inline-flex min-h-11 w-fit items-center gap-2 stamp text-xs text-ash hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            All reports
          </Link>
          <div className="flex flex-wrap gap-2">
            <Badge tone="ember">{gameLabel(report.game)}</Badge>
            {report.result ? (
              <Badge tone={report.result === "victory" ? "ember" : "muted"}>{report.result}</Badge>
            ) : null}
            <span className="stamp text-[11px] text-ash">{formatDate(report.date)}</span>
          </div>
          <h1 className="mt-3 font-display text-4xl tracking-wide sm:text-6xl">{report.title}</h1>
          {report.mission ? (
            <p className="mt-3 stamp text-xs text-muted">Mission · {report.mission}</p>
          ) : null}
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {report.opponent ? (
          <p className="stamp text-xs text-ember-hot">Versus {report.opponent}</p>
        ) : null}
        <div className="prose-dust mt-6 text-[1.05rem] leading-relaxed text-ash">
          {report.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        {report.lists?.length ? <ArmyLists lists={report.lists} /> : null}
        {report.photos.length > 1 ? (
          <section className="mt-10">
            <p className="stamp text-xs text-faint">Table photos</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {report.photos.map((src) => (
                <img key={src} src={src} alt="" className="aspect-[16/10] w-full rounded-lg object-cover" />
              ))}
            </div>
          </section>
        ) : null}
        {report.youtube ? (
          <p className="mt-10">
            <a
              href={report.youtube}
              target="_blank"
              rel="noreferrer"
              className="stamp text-sm text-ember-hot hover:text-ember"
            >
              Watch on The Hot Dust YouTube
            </a>
          </p>
        ) : null}
      </div>
    </article>
  );
}
