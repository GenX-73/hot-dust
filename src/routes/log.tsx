import { useState, type ComponentProps } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { GAMES, gameLabel, useJournal, type GameId, type Result } from "@/lib/journal";
import { cn, slugify } from "@/lib/utils";

export const Route = createFileRoute("/log")({ component: FieldLog });

function FieldInput({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-md border border-line bg-elevated px-3 text-base text-fg placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70",
        className,
      )}
      {...props}
    />
  );
}

function FieldLabel({ className, ...props }: ComponentProps<"label">) {
  return <label className={cn("stamp text-xs text-muted", className)} {...props} />;
}

function FieldArea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-md border border-line bg-elevated px-3 py-2.5 text-base text-fg placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70",
        className,
      )}
      {...props}
    />
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <FieldLabel>{label}</FieldLabel>
      {children}
    </label>
  );
}

function coverForGame(id: string) {
  if (id === "warmachine") return "/images/report-warmachine.jpg";
  if (id === "starcraft") return "/images/report-starcraft.jpg";
  if (id === "kill-team") return "/images/report-killteam.jpg";
  return "/images/report-eaters.jpg";
}

function FieldLog() {
  const { addReport, addNews } = useJournal();
  const navigate = useNavigate();
  const [kind, setKind] = useState<"report" | "news">("report");
  const [title, setTitle] = useState("");
  const [game, setGame] = useState<GameId>("40k-we");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [mission, setMission] = useState("");
  const [opponent, setOpponent] = useState("");
  const [result, setResult] = useState<Result>("victory");
  const [listText, setListText] = useState("");

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const slug = `${slugify(title) || "field-note"}-${Date.now().toString(36)}`;
    const paragraphs = body
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);
    const date = new Date().toISOString().slice(0, 10);
    if (!title.trim() || paragraphs.length === 0) {
      toast("Need a title and at least one paragraph.");
      return;
    }
    if (kind === "news") {
      addNews({
        slug,
        kind: "news",
        title: title.trim(),
        date,
        game,
        excerpt: excerpt.trim() || paragraphs[0].slice(0, 180),
        body: paragraphs,
        cover: "/images/news-dust.jpg",
        custom: true,
      });
      toast("Dispatch filed.");
      void navigate({ to: "/news/$slug", params: { slug } });
      return;
    }
    const entries = listText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [name, loadout] = line.split("—").map((part) => part.trim());
        return { name: name || line, loadout };
      });
    addReport({
      slug,
      kind: "report",
      title: title.trim(),
      date,
      game,
      excerpt: excerpt.trim() || paragraphs[0].slice(0, 180),
      body: paragraphs,
      cover: coverForGame(game),
      photos: [coverForGame(game)],
      mission: mission.trim() || undefined,
      opponent: opponent.trim() || undefined,
      result,
      custom: true,
      lists: entries.length
        ? [
            {
              player: "Filed list",
              faction: gameLabel(game),
              points: 0,
              entries,
            },
          ]
        : undefined,
    });
    toast("Battle report filed.");
    void navigate({ to: "/reports/$slug", params: { slug } });
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="stamp text-xs text-ember-hot">Field log</p>
      <h1 className="mt-2 font-display text-5xl tracking-wide">File a report</h1>
      <p className="mt-4 text-muted">
        Add a battle report or news dispatch. Posts stay on this device so you can keep the desk
        current between games.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-2 rounded-lg border border-line bg-surface p-1">
        {(["report", "news"] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setKind(value)}
            className={cn(
              "stamp min-h-11 rounded-md text-xs",
              kind === value ? "bg-ember text-ember-fg" : "text-muted hover:text-fg",
            )}
          >
            {value === "report" ? "Battle report" : "News dispatch"}
          </button>
        ))}
      </div>
      <form onSubmit={onSubmit} className="mt-8 grid gap-5">
        <Field label="Title">
          <FieldInput value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Field>
        <Field label="Game system">
          <select
            value={game}
            onChange={(e) => setGame(e.target.value as GameId)}
            className="flex h-11 w-full rounded-md border border-line bg-elevated px-3 text-base text-fg"
          >
            {GAMES.map((g) => (
              <option key={g.id} value={g.id}>
                {g.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Excerpt">
          <FieldInput
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="One-line hook"
          />
        </Field>
        {kind === "report" ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Mission">
                <FieldInput value={mission} onChange={(e) => setMission(e.target.value)} />
              </Field>
              <Field label="Opponent">
                <FieldInput value={opponent} onChange={(e) => setOpponent(e.target.value)} />
              </Field>
            </div>
            <Field label="Result">
              <select
                value={result}
                onChange={(e) => setResult(e.target.value as Result)}
                className="flex h-11 w-full rounded-md border border-line bg-elevated px-3 text-base text-fg"
              >
                <option value="victory">Victory</option>
                <option value="defeat">Defeat</option>
                <option value="draw">Draw</option>
              </select>
            </Field>
            <Field label="Army list (one unit per line, optional loadout after —)">
              <FieldArea
                value={listText}
                onChange={(e) => setListText(e.target.value)}
                placeholder={"10 Khorne Berzerkers — eviscerator\nForgefiend"}
              />
            </Field>
          </>
        ) : null}
        <Field label="Writeup (blank line between paragraphs)">
          <FieldArea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="min-h-48"
            required
          />
        </Field>
        <Button type="submit">{kind === "report" ? "File report" : "File dispatch"}</Button>
      </form>
    </div>
  );
}
