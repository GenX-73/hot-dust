import { GAMES } from "@/lib/journal";
import { cn } from "@/lib/utils";

export function FilterBar({
  value,
  onChange,
  counts,
}: {
  value: string;
  onChange: (id: string) => void;
  counts: Record<string, number>;
}) {
  const options = [{ id: "all", label: "All tables" }, ...GAMES.map((g) => ({ id: g.id, label: g.label }))];

  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
      {options.map((opt) => {
        const count = counts[opt.id] ?? 0;
        if (opt.id !== "all" && count === 0) return null;
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cn(
              "stamp inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md border px-3 text-xs transition-colors duration-150",
              active
                ? "border-ember bg-ember/15 text-ember-hot"
                : "border-line bg-surface text-muted hover:text-fg",
            )}
          >
            {opt.label}
            <span className="tabular-nums text-faint">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
