import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard, ReportCard } from "@/components/post-card";
import { useJournal } from "@/lib/journal";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { reports, news } = useJournal();
  const featured = reports.find((r) => r.featured) ?? reports[0];
  const rest = reports.filter((r) => r.slug !== featured?.slug).slice(0, 3);
  const latestNews = news.slice(0, 4);

  return (
    <div>
      <section className="relative min-h-[78vh] overflow-hidden">
        <img src="/images/hero-ash.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/78 to-bg/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="stamp text-xs text-ember-hot">Sotoverse Entertainment</p>
          <h1 className="mt-3 max-w-3xl font-display text-6xl tracking-[0.08em] text-fg sm:text-7xl md:text-8xl">
            The Hot Dust
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ash sm:text-xl">
            Battle reports from the garage table, plus news across 40K, Warmachine, StarCraft, and
            whatever else hits the felt this week. From box to tabletop.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/reports">
                Latest reports
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://www.youtube.com/@thehotdust" target="_blank" rel="noreferrer">
                <Play className="size-4" />
                Watch the channel
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="stamp text-xs text-ember-hot">After-action</p>
            <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">
              Latest battle reports
            </h2>
          </div>
          <Link
            to="/reports"
            className="stamp hidden min-h-11 items-center text-xs text-muted hover:text-ember-hot sm:inline-flex"
          >
            All reports
          </Link>
        </div>
        <div className="mt-8 grid gap-6">
          {featured ? <ReportCard report={featured} featured /> : null}
          <div className="grid gap-6 md:grid-cols-3">
            {rest.map((report) => (
              <ReportCard key={report.slug} report={report} />
            ))}
          </div>
        </div>
      </section>

      <div className="ember-rule mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="stamp text-xs text-ember-hot">Dispatches</p>
            <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">Tabletop news</h2>
          </div>
          <Link
            to="/news"
            className="stamp hidden min-h-11 items-center text-xs text-muted hover:text-ember-hot sm:inline-flex"
          >
            All news
          </Link>
        </div>
        <div className="mt-8 grid gap-4">
          {latestNews.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
