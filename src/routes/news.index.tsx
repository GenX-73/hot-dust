import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FilterBar } from "@/components/filter-bar";
import { NewsCard } from "@/components/post-card";
import { useJournal } from "@/lib/journal";

export const Route = createFileRoute("/news/")({ component: NewsIndex });

function NewsIndex() {
  const { news } = useJournal();
  const [game, setGame] = useState("all");
  const counts = useMemo(() => {
    const next: Record<string, number> = { all: news.length };
    for (const post of news) {
      if (post.game) next[post.game] = (next[post.game] ?? 0) + 1;
    }
    return next;
  }, [news]);
  const visible = game === "all" ? news : news.filter((post) => post.game === game);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="stamp text-xs text-ember-hot">Dispatches</p>
      <h1 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">News</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Roundups from the hobby: dataslate notes, other systems, shop-floor finds, and the paint
        desk. Filter when you only want one table.
      </p>
      <div className="mt-8">
        <FilterBar value={game} onChange={setGame} counts={counts} />
      </div>
      {visible.length === 0 ? (
        <p className="mt-12 text-muted">No dispatches on this table yet.</p>
      ) : (
        <div className="mt-8 grid gap-4">
          {visible.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
