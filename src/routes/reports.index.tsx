import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FilterBar } from "@/components/filter-bar";
import { ReportCard } from "@/components/post-card";
import { useJournal } from "@/lib/journal";

export const Route = createFileRoute("/reports/")({ component: ReportsIndex });

function ReportsIndex() {
  const { reports } = useJournal();
  const [game, setGame] = useState("all");
  const counts = useMemo(() => {
    const next: Record<string, number> = { all: reports.length };
    for (const report of reports) {
      next[report.game] = (next[report.game] ?? 0) + 1;
    }
    return next;
  }, [reports]);
  const visible = game === "all" ? reports : reports.filter((report) => report.game === game);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="stamp text-xs text-ember-hot">After-action logs</p>
      <h1 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">Battle Reports</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Filter by system. World Eaters lead the shelf, but Warmachine, StarCraft, Kill Team, and the
        rest of the table live here too. Army lists, photos, and the honest write-up.
      </p>
      <div className="mt-8">
        <FilterBar value={game} onChange={setGame} counts={counts} />
      </div>
      {visible.length === 0 ? (
        <p className="mt-12 text-muted">No reports on this table yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {visible.map((report) => (
            <ReportCard key={report.slug} report={report} />
          ))}
        </div>
      )}
    </div>
  );
}
