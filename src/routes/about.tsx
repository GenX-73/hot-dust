import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <div>
      <div className="relative min-h-[42vh] overflow-hidden">
        <img src="/images/about-desk.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-3xl flex-col justify-end px-4 pb-10 pt-20 sm:px-6">
          <p className="stamp text-xs text-ember-hot">Sotoverse Entertainment</p>
          <h1 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">About The Hot Dust</h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="prose-dust text-[1.05rem] leading-relaxed text-ash">
          <p>
            The Hot Dust is the wargaming desk of Sotoverse Entertainment — battle reports, hobby
            shortcuts, and tabletop news from a garage table that has to share a calendar with work,
            family, and a pile of grey plastic.
          </p>
          <p>
            I am Dave. Busy husband and dad. World Eaters are the main army. Adepta Sororitas share
            the shelf. The channel promise is simple: from box to tabletop. Speed-painting, terrain
            that reads at three feet, lists I can actually finish, games I can actually play.
          </p>
          <p>
            This site is not a single-faction shrine. 40K leads because that is what is on the table
            most weeks. Warmachine lives in the same garage. StarCraft is what I play while contrast
            paint dries. Kill Team is the weeknight format. If it is a wargame or a strategy game
            worth logging, it belongs here.
          </p>
          <p>
            Sotoverse Entertainment is the house. Sotoverse Games at sotoverse.com is the retail
            floor — vintage and modern games, kits, and the odd treasure. Dark Forge Miniatures is
            the paint-and-print bench. The Hot Dust YouTube channel is the camera on the table.
          </p>
          <p>
            I do not promise a schedule. I file reports when the game happens and the house is
            quiet. If you want the next one, subscribe on YouTube and check the Field Log here —
            that is also where new reports and news get written for this desk.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/log">File a report</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/links">Shop & channels</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
