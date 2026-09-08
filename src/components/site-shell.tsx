import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ExternalLink, Menu, ShoppingBag, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mark } from "@/components/mark";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/reports", label: "Battle Reports" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
  { to: "/links", label: "Links / Shop" },
] as const;

const NETWORK = [
  {
    href: "https://www.youtube.com/@thehotdust",
    label: "The Hot Dust",
    hint: "YouTube — box to tabletop",
    icon: Youtube,
  },
  {
    href: "https://sotoverse.com",
    label: "Sotoverse Games",
    hint: "Retail shop",
    icon: ShoppingBag,
  },
  {
    href: "https://www.youtube.com/@darkforgeminiatures",
    label: "Dark Forge Miniatures",
    hint: "Paint & 3D print",
    icon: Youtube,
  },
];

function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <Link to="/" className="flex min-h-11 items-center gap-3" onClick={() => setOpen(false)}>
          <Mark className="size-9" />
          <span className="leading-none">
            <span className="stamp block text-[15px] text-fg sm:text-base">The Hot Dust</span>
            <span className="mt-0.5 block text-[10px] tracking-[0.22em] uppercase text-muted">
              Sotoverse Entertainment
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "stamp inline-flex min-h-11 items-center rounded-md px-3 py-2 text-xs text-muted transition-colors duration-150 hover:text-fg",
                  active && "text-ember-hot",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button asChild variant="primary" className="ml-2">
            <Link to="/log">File a report</Link>
          </Button>
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-line text-fg lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-surface lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="stamp flex min-h-11 items-center text-sm text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/log"
              onClick={() => setOpen(false)}
              className="stamp mt-2 flex min-h-11 items-center justify-center rounded-md bg-ember text-ember-fg"
            >
              File a report
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="ember-rule" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Mark className="size-8" />
            <p className="stamp text-sm text-fg">The Hot Dust</p>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Battle reports, hobby shortcuts, and tabletop news under Sotoverse Entertainment.
            World Eaters first. Other tables welcome.
          </p>
        </div>
        <div>
          <p className="stamp text-xs text-faint">On this desk</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/reports" className="text-fg hover:text-ember-hot">
                Battle Reports
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-fg hover:text-ember-hot">
                News
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-fg hover:text-ember-hot">
                About
              </Link>
            </li>
            <li>
              <Link to="/log" className="text-fg hover:text-ember-hot">
                Field log
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="stamp text-xs text-faint">Sotoverse network</p>
          <ul className="mt-3 space-y-3">
            {NETWORK.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 text-sm text-fg hover:text-ember-hot"
                >
                  <item.icon className="mt-0.5 size-4 shrink-0 text-muted group-hover:text-ember-hot" />
                  <span>
                    <span className="flex items-center gap-1">
                      {item.label}
                      <ExternalLink className="size-3 opacity-50" />
                    </span>
                    <span className="block text-xs text-muted">{item.hint}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-4 py-4 text-center text-xs text-faint">
        A Sotoverse Entertainment desk. Fan coverage of the games we play — not affiliated with
        Games Workshop, Privateer Press, or Blizzard.
      </p>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col bg-bg text-fg">
      <div className="grain" aria-hidden="true" />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
