import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, ShoppingBag, Youtube } from "lucide-react";

export const Route = createFileRoute("/links")({ component: Links });

const LINKS = [
  {
    href: "https://www.youtube.com/@thehotdust",
    title: "The Hot Dust on YouTube",
    hint: "Box-to-tabletop videos, World Eaters, terrain, and the games as they happen.",
    icon: Youtube,
    cta: "Open channel",
  },
  {
    href: "https://sotoverse.com",
    title: "Sotoverse Games",
    hint: "The Sotoverse Entertainment retail storefront — games, kits, and collectibles.",
    icon: ShoppingBag,
    cta: "Shop sotoverse.com",
  },
  {
    href: "https://www.youtube.com/@darkforgeminiatures",
    title: "Dark Forge Miniatures",
    hint: "Painting and 3D printing — the bench that gets models off the sprue and onto the table.",
    icon: Youtube,
    cta: "Open Dark Forge",
  },
];

function Links() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="stamp text-xs text-ember-hot">Sotoverse network</p>
      <h1 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">Links / Shop</h1>
      <p className="mt-4 text-muted">
        Three doors, one house. Watch the games, buy the kits, steal the paint recipes.
      </p>
      <div className="mt-10 grid gap-4">
        {LINKS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group flex gap-4 rounded-xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-ember/45"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-elevated text-ember-hot">
              <item.icon className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2 font-display text-2xl tracking-wide text-fg group-hover:text-ember-hot">
                {item.title}
                <ExternalLink className="size-4 text-muted" />
              </span>
              <span className="mt-1 block text-sm text-muted">{item.hint}</span>
              <span className="stamp mt-3 inline-block text-xs text-ember-hot">{item.cta}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
