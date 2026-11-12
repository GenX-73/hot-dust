import { useEffect, useState } from "react";

export type GameId =
  | "40k-we"
  | "40k"
  | "kill-team"
  | "warmachine"
  | "starcraft"
  | "aos"
  | "hobby"
  | "analysis"
  | "warhammer"
  | "opinion"
  | "other";

export type Result = "victory" | "defeat" | "draw";

export type ListEntry = { name: string; loadout?: string };

export type ArmyList = {
  player: string;
  faction: string;
  points: number;
  entries: ListEntry[];
};

export type NewsPost = {
  slug: string;
  kind: "news";
  title: string;
  date: string;
  game: GameId;
  cover?: string;
  shareImage?: string;
  excerpt: string;
  body: string[];
  source?: string;
  sourceUrl?: string;
  sources?: { label: string; url: string }[];
  byline?: string;
  featured?: boolean;
  custom?: boolean;
};

export type BattleReport = {
  slug: string;
  kind: "report";
  title: string;
  date: string;
  game: GameId;
  excerpt: string;
  cover: string;
  photos: string[];
  body: string[];
  result?: Result;
  opponent?: string;
  mission?: string;
  youtube?: string;
  featured?: boolean;
  lists?: ArmyList[];
  custom?: boolean;
};

export const GAMES: { id: GameId; label: string; short: string; family: string }[] = [
  {
    id: "40k-we",
    label: "World Eaters",
    short: "WE",
    family: "Warhammer 40K"
  },
  {
    id: "40k",
    label: "Warhammer 40,000",
    short: "40K",
    family: "Warhammer 40K"
  },
  {
    id: "kill-team",
    label: "Kill Team",
    short: "KT",
    family: "Warhammer 40K"
  },
  {
    id: "warmachine",
    label: "Warmachine",
    short: "WM",
    family: "Privateer Press"
  },
  {
    id: "starcraft",
    label: "StarCraft",
    short: "SC",
    family: "Strategy"
  },
  {
    id: "aos",
    label: "Age of Sigmar",
    short: "AoS",
    family: "Warhammer"
  },
  {
    id: "hobby",
    label: "Hobby",
    short: "HB",
    family: "Warhammer"
  },
  {
    id: "analysis",
    label: "Analysis",
    short: "AN",
    family: "Hot Dust"
  },
  {
    id: "warhammer",
    label: "Warhammer",
    short: "WH",
    family: "Warhammer"
  },
  {
    id: "opinion",
    label: "Opinion",
    short: "OP",
    family: "Hot Dust"
  },
  {
    id: "other",
    label: "Other Tables",
    short: "OT",
    family: "Wargames"
  }
];

const GAME_LABEL = Object.fromEntries(GAMES.map((g) => [g.id, g.label])) as Record<
  GameId,
  string
>;

export function gameLabel(id?: string) {
  if (!id) return "Tabletop";
  return GAME_LABEL[id as GameId] ?? "Tabletop";
}

export const NEWS_CATALOG: NewsPost[] = [
  {
    "slug": "why-the-wizards-of-the-coast-union-vote-matters-to-players",
    "kind": "news",
    "title": "Why the Wizards of the Coast Union Vote Matters to Players",
    "date": "2026-11-11",
    "game": "opinion",
    "featured": true,
    "shareImage": "/og.jpg",
    "excerpt": "Studio X and D&D staff voted in person on Nov. 10, and mail ballots are counted Dec. 4. I'm not picking a side, but I think players should hear both of them.",
    "byline": "David Soto",
    "body": [
      "*Editor's note: This is an opinion piece by Hot Dust founder David Soto. The facts in it are sourced and linked.*",
      "I have been in this hobby since the late '80s. It came with me through my years in the Army, and it is still with me now, squeezed in around a demanding full-time career in tech. This fall I have been thinking less about the games and more about the people who make them.",
      "Two groups at Wizards of the Coast are voting on whether to form a union with the Communications Workers of America. The NLRB dockets show both petitions were filed on Oct. 6 in Region 19: [19-RC-396537](https://www.nlrb.gov/case/19-RC-396537) covers Studio X, with 242 employees, and [19-RC-396538](https://www.nlrb.gov/case/19-RC-396538) covers Dungeons & Dragons, with 83. In-person voting was held on Nov. 10 at the Renton, Washington office, and mail ballots went out that afternoon to staff who live too far from Renton to vote in person.",
      "I am not here to tell anyone how to vote or to guess how it turns out. I am writing because the people who make Magic and D&D have put pay, career paths, and job security on the table, and that matters to players. These are the people who make the games we play.",
      "## What the company has said",
      "Wizards did not recognize the union voluntarily. The union [said on Oct. 14](https://bsky.app/profile/uwotc-official.bsky.social/post/3mxtsvaisww22) that \"Wizards informed us that it doesn't intend to voluntarily recognize the D&D or Studio X units of our union ahead of a vote.\" Wargamer reported that it [received a copy of a staff email](https://www.wargamer.com/dnd/mtg-union-not-recognized-by-wotc), and Vertical Slice reported that it [viewed one](https://www.verticalslice.news/hasbro-accused-of-deploying-union-avoidance-tactics-by-organising-wizards-of-the-coast-workers/), saying \"Wizards is not neutral on the question of unionization.\" Wargamer quoted the same email as saying the company \"will respect the results of the election, no matter what our employees choose.\"",
      "Hasbro CEO Chris Cocks spoke about the effort on stage at [WBUR's Breakfast Club](https://www.youtube.com/watch?v=W1tdcmlycdo) on Oct. 21. Here is what he said, from the video.",
      "\"Well, I think we're in support of a person's right to unionize and the person's right to have the discussion around it and a vote around it,\" he said. He added that \"there's a fair number of people who don't want to be a part of the union.\"",
      "His central concern was this: \"So if 60% of the people on a team want to unionize, 100% of the people have to join the union and have to join collective bargaining.\" He said that would shape how the company pays and rewards people.",
      "He also described what he sees as the teams' current deal. \"The average person on a team like Magic, the average individual contributor on a team like Magic makes about $140,000 a year,\" he said. \"They've been averaging over the last three years about a $40,000 bonus.\" He cited pay increases of \"about 25% over the last three years, versus a national average in the games industry of around 11% and inflation of about 9%,\" and said, \"They get about eight weeks of paid time off per year.\" And he said of the Wizards staff, \"I love that team. I respect that team.\"",
      "## What the union has said",
      "United Wizards of the Coast answered him in a [Nov. 8 thread](https://bsky.app/profile/uwotc-official.bsky.social/post/3mzsyjillch2x). On the $140,000 figure, the union wrote, \"That doesn't match what we are hearing from our coworkers,\" and said \"our members' wages are lower than what Chris Cocks shares, and there's no clear path toward promotions and meaningful raises.\" It said that talking openly about pay had shown \"workers with the same title with wildly different salaries.\"",
      "The union also pointed to the company's lawyers. The NLRB dockets list Fisher & Phillips as employer counsel, as it was in the earlier MTG Arena election. The union calls Fisher Phillips \"a well-known union-avoidance firm.\" That label is the union's, and I am passing it along as theirs.",
      "I can't tell you whose numbers are right, and I haven't seen any published payroll data. Both sides are making their case in public, and it is worth reading in full.",
      "## Why I think players should pay attention",
      "This has happened once already at Wizards. Arena workers voted 79 to 16 for CWA representation, and the NLRB [certified the union on July 1](https://www.nlrb.gov/case/19-RC-385755).",
      "The games I love come from people who spend years on them. When those people say they are worried about pay, promotions, and whether their jobs will be there next year, that is part of the story of the hobby, not something separate from it. When a CEO says he respects those teams and wants to keep rewarding strong work, that is part of the story too. I want to hear both, and I'd ask fellow players to give both a fair hearing.",
      "## What happens next",
      "According to the NLRB notices of election, mail ballots must be received at the Region 19 office by 1:00 PM on Friday, Dec. 4, and all ballots will be counted at the Region 19 office at 1:00 PM that same day. Until then, nothing has been decided.",
      "Nothing I have seen suggests any effect on release schedules or Organized Play, and I am not going to speculate about either. This vote is about the working lives of the people behind our games, and I'll be watching the count like everyone else."
    ]
  },
  {
    "slug": "lexicanum-editors-wiki-shutdown",
    "kind": "news",
    "title": "Former Lexicanum Editors' Warhammer 40,000 Wiki Shuts Down After Dispute With Bell of Lost Souls",
    "date": "2026-11-10",
    "game": "40k",
    "featured": true,
    "shareImage": "/og.jpg",
    "excerpt": "The wiki's staff say their host pulled support after legal threats from Lexicanum owner Bell of Lost Souls. BoLS founder Larry Vela calls the site a scraped copy and says there was no lawsuit.",
    "source": "Warhammer 40k Wiki Shuts Down After Bell of Lost Souls Dispute · Spikey Bits · 10 Nov 2026",
    "sourceUrl": "https://spikeybits.com/warhammer-40k-wiki-shuts-down-after-bell-of-lost-souls-dispute/",
    "sources": [
      {
        "label": "Spikey Bits — Warhammer 40k Wiki Shuts Down After Bell of Lost Souls Dispute (Nov 10, 2026)",
        "url": "https://spikeybits.com/warhammer-40k-wiki-shuts-down-after-bell-of-lost-souls-dispute/"
      },
      {
        "label": "warhammer40k.wiki.gg staff statement on Feddit UK (Nov 6, 2026)",
        "url": "https://feddit.uk/post/58031605"
      },
      {
        "label": "40k Wiki on Bluesky",
        "url": "https://bsky.app/profile/40kwiki.bsky.social"
      },
      {
        "label": "r/40kLore launch announcement (Oct 15, 2026)",
        "url": "https://www.reddit.com/r/40kLore/comments/1x6i5w4/a_new_wiki_for_warhammer_40000_lore_and_media/"
      },
      {
        "label": "Bell of Lost Souls — BoLS Welcomes Lexicanum (Sep 5, 2014)",
        "url": "https://www.belloflostsouls.net/2014/09/bols-welcomes-lexicanum.html"
      },
      {
        "label": "Lexicanum Terms of Service (five-year clause)",
        "url": "https://wh40k.lexicanum.com/wiki/Lexicanum:Terms_of_Service"
      },
      {
        "label": "Lexicanum Terms of Service (August 2014)",
        "url": "https://wh40k.lexicanum.com/wiki/Warhammer_40k_-_Lexicanum:Terms_of_Service"
      },
      {
        "label": "Lexicanum General disclaimer",
        "url": "https://wh40k.lexicanum.com/wiki/Warhammer_40k_-_Lexicanum:General_disclaimer"
      },
      {
        "label": "Lexicanum block log",
        "url": "https://wh40k.lexicanum.com/wiki/Special:Log/block"
      },
      {
        "label": "Creative Commons BY-NC 4.0 deed",
        "url": "https://creativecommons.org/licenses/by-nc/4.0/"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "A Warhammer 40,000 wiki started by editors who left Lexicanum has shut down after a dispute with Bell of Lost Souls (BoLS), the company that owns Lexicanum. The site, warhammer40k.wiki.gg, is no longer publicly available.",
      "The wiki's staff say their host, wiki.gg, withdrew support on November 5 after legal threats from Bell of Lost Souls, and that the site closed on November 6. In a [staff statement posted on Feddit UK](https://feddit.uk/post/58031605) that day, they wrote that \"the website will not come back on this host.\" The project's [Bluesky account](https://bsky.app/profile/40kwiki.bsky.social) gave the same dates and the same reason. We couldn't find a public statement from wiki.gg.",
      "Bell of Lost Souls tells it differently. According to [Spikey Bits](https://spikeybits.com/warhammer-40k-wiki-shuts-down-after-bell-of-lost-souls-dispute/), BoLS founder Larry Vela said on Discord that the new wiki was a complete scraped copy of Lexicanum, that BoLS reported it to the host and pointed out that user pages unrelated to Warhammer had been copied, and that the host then took the wiki down \"of their own accord.\" Spikey Bits quotes him as saying: \"There is no 'wiki.gg lawsuit', and there never was.\" Spikey Bits says the remarks were shared on Reddit on November 7. We haven't found that Reddit post or the original Discord message.",
      "The editors talk about legal threats, and Vela says no lawsuit was filed. No court has ruled on the dispute, and The Hot Dust has not independently confirmed either account.",
      "At the heart of it is a question that touches every fan project: can volunteers take the lore they wrote on one wiki and move it to another?",
      "How it happened\nBell of Lost Souls [announced in September 2014](https://www.belloflostsouls.net/2014/09/bols-welcomes-lexicanum.html) that Lexicanum had joined its network, and Lexicanum's current terms name BoLS Interactive LLC as the operator.\nIn their November 6 statement, the wiki staff say they first contacted wiki.gg on June 9, 2026, got the host's legal approval on August 12, and had a private version running by September 11. They say the site left private mode around October 11. A project Bluesky post says it opened to the public on October 12, and the editors [announced it on Reddit](https://www.reddit.com/r/40kLore/comments/1x6i5w4/a_new_wiki_for_warhammer_40000_lore_and_media/) on October 15.\nThe editors say they copied Lexicanum's public content using MediaWiki's built-in export tools and a public archiving utility. They say they didn't use AI or copy Lexicanum's internal database, and they acknowledge that user pages were included in the export.\nThey say legal threats reached wiki.gg on October 21 and that wiki.gg removed some of the copied user pages after that. They also say they \"can only surmise\" the host weighed the cost of a legal defense and decided to withdraw, which they present as their own guess.\nAs of November 10 the site asks for a password, and the Internet Archive's last live capture of it is from the morning of November 5. The editors say they're looking for another host but haven't named one.",
      "What the editors say about the license\nThe editors argue that Lexicanum released its article text under the Creative Commons Attribution-NonCommercial license (CC-BY-NC), which let them copy and adapt that text with credit and for non-commercial use. \"We just took our own work with us,\" the Feddit statement says.\nLexicanum's [general disclaimer](https://wh40k.lexicanum.com/wiki/Warhammer_40k_-_Lexicanum:General_disclaimer) says that, \"except where otherwise specified in the Terms of Service,\" text on Lexicanum sites is licensed under CC-BY-NC. Creative Commons' own [license deed](https://creativecommons.org/licenses/by-nc/4.0/) says \"the licensor cannot revoke these freedoms as long as you follow the license terms.\" That's how the license works in general. Whether its terms were met in this case hasn't been decided by anyone.\nThe editors say Lexicanum replaced its terms of service on October 18, three days after their Reddit announcement, and that new terms can't apply retroactively to text that was already licensed. A current [Lexicanum Terms of Service page](https://wh40k.lexicanum.com/wiki/Lexicanum:Terms_of_Service) says main article text becomes CC-BY-NC only five years after its most recent edit. It also says user pages, talk pages, templates, help pages, and page histories are \"expressly NOT subject to the CC-BY-NC license,\" and it bans automated bulk copying without written consent. The page doesn't show an effective date. Internet Archive captures show it went up sometime between October 3 and October 27, so the October 18 date is the editors' claim.\nA [second, older Terms of Service page](https://wh40k.lexicanum.com/wiki/Warhammer_40k_-_Lexicanum:Terms_of_Service) is still live on the same wiki, dated August 2014. It has no five-year clause, but it does ban using \"any robot, spider, scraper or other automated means\" to access the site without written permission.\nThe editors also say Lexicanum banned \"12 of the community's most productive editors\" in a matter of days starting October 16, including some who had contributed for about 15 years. Lexicanum's public [block log](https://wh40k.lexicanum.com/wiki/Special:Log/block) shows 10 accounts blocked indefinitely on October 16, one on October 20, and another on November 7. Most of those entries say \"Unacceptable behaviour\" or give no reason, and the log doesn't connect them to the new wiki.",
      "What Bell of Lost Souls says\nAccording to Spikey Bits, Vela said the new wiki was a complete scraped copy of Lexicanum, and that BoLS flagged it to the host, noting that user pages unrelated to Warhammer had been copied too. He said the host then took it down on its own. Spikey Bits also reports Vela saying that anyone is free to start their own wiki, and that Lexicanum has never claimed to own Games Workshop's intellectual property.",
      "Still unclear\nIt's still open whether the copied lore text was allowed under Lexicanum's CC-BY-NC terms, whether later terms can change that, and what passed between BoLS and wiki.gg. wiki.gg hasn't publicly explained its decision. The editors say the wiki had about 25,000 active users and 20,000 edits during its run. Those are their figures, and we haven't verified them.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "starcraft-faq-eldfall-apocrypha-sentigatt",
    "kind": "news",
    "title": "StarCraft FAQ V1.3, Eldfall Apocrypha Goes Live, and Khurasan's 15mm Sentigatt",
    "date": "2026-11-10",
    "game": "other",
    "featured": true,
    "cover": "/images/news-starcraft-faq.jpg",
    "shareImage": "/images/news-starcraft-faq.jpg",
    "imageCredit": "Image: Archon Studio / Blizzard Entertainment",
    "excerpt": "Archon posts a new StarCraft: The Miniatures Game FAQ, Freecompany's Eldfall Chronicles: Apocrypha opens on Gamefound, and Khurasan lists 15mm Sentigatt for Dark Dominion.",
    "source": "StarCraft TMG FAQ V1.3 · Archon Studio · 11 Nov 2026",
    "sourceUrl": "https://starcraft-tmg.com/files/downloads/StarCraft-TMG-FAQ_EN.pdf",
    "sources": [
      {
        "label": "Archon Studio — StarCraft TMG FAQ V1.3 (PDF)",
        "url": "https://starcraft-tmg.com/files/downloads/StarCraft-TMG-FAQ_EN.pdf"
      },
      {
        "label": "Archon Studio — StarCraft downloads hub",
        "url": "https://archon-studio.com/downloads/starcraft-tabletop-miniatures-game"
      },
      {
        "label": "Tabletop Battles — StarCraft: Tabletop Miniatures Game November 2026 FAQ",
        "url": "https://www.tabletopbattles.com/starcraft-tabletop-miniatures-game-november-2026-faq-the-tabletop-battles-hot-take/"
      },
      {
        "label": "Gamefound — Eldfall Chronicles: Apocrypha",
        "url": "https://gamefound.com/en/projects/eldfall-chronicles/eldfall-chronicles-apocrypha"
      },
      {
        "label": "Freecompany — Apocrypha",
        "url": "https://eldfall-chronicles.com/pages/apocrypha"
      },
      {
        "label": "Khurasan Miniatures — 15mm Dark Dominion",
        "url": "https://khurasanminiatures.com/15mm-dark-dominion.html"
      },
      {
        "label": "OnTableTop — 15mm Alien Crocodile Centaurs Coming To Khurasan's Dark Dominion",
        "url": "https://www.ontabletop.com/news/15mm-crocodile-centaurs-khurasans-dark-dominion/"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Three updates from beyond Games Workshop's slate this week, each checked against the publisher's own page or PDF.",
      "StarCraft: The Miniatures Game — FAQ V1.3\nArchon Studio has posted a new English FAQ for StarCraft: The Miniatures Game on its [StarCraft downloads hub](https://archon-studio.com/downloads/starcraft-tabletop-miniatures-game) and the [StarCraft TMG downloads page](https://starcraft-tmg.com/downloads). The eight-page file is labelled FAQ V1.3 and dated 11.11.2026, and, as before, Archon marks every change in magenta. Compared with September's V1.1, the new entries include:",
      "High Ground\n* A model's base may overhang the edge of High Ground in its final position under the Wobbly Model Syndrome rules, as long as the centre of the base stays on the High Ground.\n* No other model may be placed under an overhanging base. Bases may never overlap from a top-down view, even across elevation levels.\n* A defending Unit gets the Evade bonus against ranged attacks from a lower elevation if all its models have at least part of their base on High Ground.",
      "Artefact Hunt\n* Units carrying a claimed Mission Marker may now use teleport abilities such as Psionic Transfer and Deep Tunnel, but must drop the marker first. The previous FAQ answered \"No.\" The new entry still prints a stray \"No.\" after the new ruling, so watch for a correction.",
      "Line of sight, actions and area effects\n* Resolving a Tactical Card doesn't need Line of Sight unless the card says so, and proximity checks for abilities like Burrow Ambush don't count as targeting.\n* Corrosive Bile targets a location, not a unit, so no Line of Sight check is needed when removing casualties.\n* A Hold action counts as resolving an action. Placing an Activation Marker when passing is not an activation or an action.\n* Token-centred effects such as Creep and Corrosive Bile reach across all elevation levels unless a rule says otherwise, and a Creep token may be set on a different level if it's within 6\" of an existing one.",
      "Other rulings\n* Multiple Siege Tanks may use Coordinated Strike on the same friendly Unit, but the later use overwrites the earlier one.\n* IMPACT (X) from Devastating Charge doesn't target an Enemy Unit, and IMPACT hits can be allocated to Structures.\n* A Unit selected by Khassar de Templari can't use Active Abilities.\n* Explosive Shrapnel Shells and Seeker Missile keep working if the Raven is destroyed.\n* Under CONCENTRATED FIRE (X), any Total Damage left after X models are removed is discarded.\n* Dodge (X) can't reduce the dice moved to the Damage Pool below 0, and Surge and Critical Hit can't move more dice than the Armour Pool holds.\n* The Psionic Storm Blast Template is placed centre to centre on the Psionic Storm token.",
      "The full list, including rulings on Griffin Support, the Sabotage Drone, Burrow Ambush entry edges, Might of the Nerazim and Indomitable, is in [Archon's FAQ PDF](https://starcraft-tmg.com/files/downloads/StarCraft-TMG-FAQ_EN.pdf).",
      "Eldfall Chronicles: Apocrypha is live on Gamefound\n![Eldfall Chronicles: Apocrypha](/images/news-eldfall-apocrypha.jpg)\nImage: Freecompany\nFreecompany's [Eldfall Chronicles: Apocrypha](https://gamefound.com/en/projects/eldfall-chronicles/eldfall-chronicles-apocrypha) campaign opened on Gamefound on November 10 and hit its €50,000 goal in under nine minutes. By about 5 p.m. ET it showed €288,427 from 728 backers, with 13 days to go.\nApocrypha is a standalone co-op dungeon crawl for 1 to 4 players, and it also plays solo. It's set three years after the Northern Wind expedition, in the Grand Library of the Sand Kingdoms' capital, and Northern Wind isn't required. Freecompany says it's fully compatible with its other dungeon crawls and with the Eldfall Chronicles skirmish wargame, using the same miniatures. The campaign is tile-based, needs no dungeon master, and has branching storylines with more than 30 endings. Freecompany says quests typically run 60 to 120 minutes, with a full campaign averaging about 12 sessions.\nPledge levels at launch (with Freecompany's listed comparison price):",
      "| Pledge | Price | Compared at | What's in it |\n| --- | --- | --- | --- |\n| Core | €89 | €129 | Full campaign with miniatures and standees, including 4 heroes and the final boss |\n| Deluxe | €209 | €357 | Core plus three Upgrade Packs that swap enemy standees for miniatures |\n| Collector | €259 | €444 | Deluxe plus the Queen of Cinders expansion |\n| Apocrypha All-in | €379 | €595 | The complete campaign, expansions, accessories and exclusive extras |\n| Dungeon-Crawl All-in | €720 | €1,112 | Everything from Apocrypha and Northern Wind |",
      "Gamefound's Stretch Pay lets pledges over €10 be split into nine instalments. The campaign page doesn't show an estimated delivery month yet.",
      "Khurasan Miniatures — 15mm Sentigatt for Dark Dominion\n![Dark Dominion 15mm Sentigatt, with a militiaman for scale](/images/news-sentigatt.jpg)\nImage: Khurasan Miniatures. The militiaman is for scale only and isn't included in the Sentigatt sets.\nKhurasan Miniatures has added the Sentigatt to its [15mm Dark Dominion range](https://khurasanminiatures.com/15mm-dark-dominion.html), and they're on sale now. Khurasan describes them as a \"piratical race of six-limbed reptiloids substantially larger than humans\" that move \"at great speed, seemingly inexhaustibly, at 40kph or so.\"\nMost carry \"a very powerful but short-ranged plasma gun,\" and specialists swap that for a fusion gun, particle accelerator or laser cannon. According to Khurasan, every Sentigatt also carries a powered longsword, \"huge in size to humans.\" They wear no armour and appear to be cyborgs reinforced with titanium. Models come in two or three pieces, with interchangeable, somewhat posable torsos and lower bodies.\nKhurasan's smallest unit is the Torrent (two leaders, twelve warriors and six specialists), and five Torrents make a Rush.",
      "| Pack | Contents | Price |\n| --- | --- | --- |\n| Sentigatt Warriors | 6 models | $14.99 |\n| Sentigatt Heavy Weapon Specialists | 6 models | $14.99 |\n| Sentigatt Leaders | 2 models | $4.99 |\n| Sentigatt Torrent | 2 Warrior packs, 1 Specialist pack, 1 Leader pack | $47.99 |",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "blood-angels-battleforce-price-cut-210",
    "kind": "news",
    "title": "Blood Angels Christmas Battleforce Price Reportedly Cut From $255 to $210",
    "date": "2026-11-10",
    "game": "40k",
    "featured": true,
    "cover": "/images/news-blood-angels-price-cut.jpg",
    "shareImage": "/images/news-blood-angels-price-cut.jpg",
    "imageCredit": "Image: Games Workshop / Warhammer Community",
    "excerpt": "Spikey Bits says a revised Games Workshop retailer sheet drops the Angelus Assault Force by $45 in the US with no models removed. GW hasn't confirmed prices or dates.",
    "source": "GW Caves To Pressure, Lowers Battleforce Price After Complaints · Spikey Bits · 10 Nov 2026",
    "sourceUrl": "https://spikeybits.com/gw-caves-to-pressure-lowers-battleforce-price-after-complaints/",
    "sources": [
      {
        "label": "Spikey Bits — GW Caves To Pressure, Lowers Battleforce Price After Complaints (Nov 10, 2026)",
        "url": "https://spikeybits.com/gw-caves-to-pressure-lowers-battleforce-price-after-complaints/"
      },
      {
        "label": "Auspex Tactics — Looks Like GW Have Dropped the Price for This Battleforce... (Nov 5, 2026)",
        "url": "https://www.youtube.com/watch?v=vRAnKnXjXb4"
      },
      {
        "label": "Warhammer Community — New Battleforce boxes revealed for Warhammer 40,000 (Oct 19, 2026)",
        "url": "https://www.warhammer-community.com/en-gb/articles/17yaxs02/new-battleforce-boxes-revealed-for-warhammer-40000/"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Spikey Bits reported on November 10 that the US price of the Blood Angels Angelus Assault Force, one of Games Workshop's Christmas battleforces, has dropped from $255 to $210 on GW's November 2 retailer pricing sheet, with no models removed. According to Spikey Bits, the Canadian price moved from $310 to $250 in the same revision. Games Workshop has not published prices or dates for the box and has not commented on the change.",
      "Spikey Bits says it compared two copies of the November 2 sheet that went to stores with GW's retailer email that day. The earlier copy listed the box at $255 US and $310 Canadian, matching the other 40K Christmas battleforces. A later copy of the same file showed $210 and $250. Spikey Bits says GW sent no correction or new sheet, so a shop that downloaded the file early may still show $255.",
      "Reported prices\nSpikey Bits says the US and Canadian figures come straight from GW's revised sheet, and that international retailers confirmed the rest:\n* United States: $210\n* Canada: $250\n* United Kingdom: £125\n* European Union: €160\n* Australia: $222\n* New Zealand: $266\n* Japan: ¥19,800\n* South Korea: ₩270,000",
      "Spikey Bits also says the Angelus Assault Force is the only 40K Christmas battleforce whose price moved, and the other 40K boxes remain at $255.",
      "Auspex Tactics reported an unconfirmed $210 North American price in a November 5 video, which our [box-by-box guide to the Christmas 2026 battleforces](/news/christmas-2026-battleforces-box-by-box) noted at the time. Both outlets now put the US price at $210. They differ on Canada: Spikey Bits reports $250, while Auspex Tactics reported CA$255.",
      "What's in the box\nWarhammer Community revealed the Angelus Assault Force on October 19 with these contents:\n* Commander Dante\n* Blood Angels Chaplain with Jump Pack\n* Death Company Brutalis Dreadnought\n* 3 Sanguinary Guard\n* 5 Death Company Marines with Jump Packs\n* Blood Angels Upgrade Frame",
      "Still unclear\nGW said the boxes would be \"available for pre-order soon\" but hasn't given prices or dates. Earlier Spikey Bits reporting, citing the November 2 retailer email, put pre-orders on Saturday, November 14, with release on November 27.\nSpikey Bits frames the cut as a response to hobbyist complaints about the box's value at $255, though it writes that it can't prove the complaints caused it. Games Workshop hasn't said why the price changed.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "christmas-2026-battleforces-box-by-box",
    "kind": "news",
    "title": "Games Workshop's Christmas 2026 Battleforces: Box-by-Box Guide to All 15 Sets",
    "date": "2026-11-08",
    "game": "warhammer",
    "featured": true,
    "cover": "/images/news-christmas-battleforces-2026.jpg",
    "shareImage": "/images/news-christmas-battleforces-2026.jpg",
    "imageCredit": "Image: Games Workshop / Warhammer Community",
    "excerpt": "Sunday's preview lists seven Warhammer 40,000 battleforces, six Age of Sigmar battleforces and two Horus Heresy Battle Groups, all available while stocks last.",
    "source": "Sunday Preview – New Battleforce boxes muster for action · Warhammer Community · 8 Nov 2026",
    "sourceUrl": "https://www.warhammer-community.com/en-gb/articles/rufkxsxw/sunday-preview-new-battleforce-boxes-muster-for-action/",
    "sources": [
      {
        "label": "Warhammer Community — Sunday Preview (November 8)",
        "url": "https://www.warhammer-community.com/en-gb/articles/rufkxsxw/sunday-preview-new-battleforce-boxes-muster-for-action/"
      },
      {
        "label": "Spikey Bits — retailer-email pricing roundup",
        "url": "https://spikeybits.com/khazalite-holds-high-kyng-valankrom-pre-orders-revealed-sunday-preview/"
      },
      {
        "label": "Spikey Bits — six AoS battleforces",
        "url": "https://spikeybits.com/aos-christmas-boxes-jump-from-four-to-six-battleforces-this-year/"
      },
      {
        "label": "Spikey Bits — Blood Angels breakdown",
        "url": "https://spikeybits.com/40k-christmas-battleforce-blood-angels-angelus-assault-force-review-breakdown/"
      },
      {
        "label": "Auspex Tactics — unconfirmed Blood Angels price report",
        "url": "https://www.youtube.com/watch?v=vRAnKnXjXb4"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Games Workshop's November 8 Sunday Preview lists 15 army boxes coming \"next week\": seven Warhammer 40,000 battleforces, six Warhammer Age of Sigmar battleforces and two Warhammer: The Horus Heresy Battle Groups. All are available while stocks last. GW says each saves money compared with buying the kits individually, but the preview gives no prices or dates.",
      "The contents below are exactly as the preview lists them. One difference: the preview lists the Indomitus Task Force's five Assault Intercessors without jump packs, unlike the October reveal.",
      "Warhammer 40,000\n| Box | Contents |\n| --- | --- |\n| Space Marines: Indomitus Task Force | Captain in Terminator Armour; Chaplain; Redemptor Dreadnought; 5 Terminators; 5 Assault Intercessors; 10 Intercessors |\n| Space Wolves: Champions of Fenris | Logan Grimnar; Arjac Rockfist; 15 Wolf Guard Terminators |\n| Blood Angels: Angelus Assault Force | Commander Dante; Blood Angels Chaplain with Jump Pack; Death Company Brutalis Dreadnought; 3 Sanguinary Guard; 5 Death Company Marines with Jump Packs; Blood Angels Upgrade Frame |\n| Chaos Knights: Helhunt Lance | Knight Ruinator (also builds as Knight Abominant, Rampager or Desecrator); 4 War Dog Stalkers (also build as War Dog Brigands or Karnivores) |\n| Chaos Space Marines: Cult of Destruction | Warpsmith; Defiler; Venomcrawler; 2 Obliterators; 5 Havocs; 3 Mutilators |\n| Orks: Armoured Blitzmob | Warboss in Mega Armour; Battlewagon (also builds as a Gunwagon); Deff Dread; 3 Meganobz; 10 Ork Boyz |\n| Necrons: Disciples of the Nekrosor | C'tan Shard of the Nightbringer; Nekrosor Ammentar; 3 Ophydian Destroyers; Canoptek Doomstalker; 10 Necron Warriors; 3 Canoptek Scarab Swarms |",
      "Age of Sigmar\n| Box | Contents |\n| --- | --- |\n| Cities of Sigmar: Knights of Hammerhal | Tahlia Vedra, Lioness of the Parch; Freeguild Cavalier-Marshal; 10 Freeguild Cavaliers |\n| Stormcast Eternals: Annihilation Host | Lord-Commander Bastian Carthalos; Lord-Relictor; Lord-Celestant; 3 Praetors; 9 Annihilators (also build with Meteoric Grandhammers) |\n| Slaves to Darkness: Legion of Damnation | Chaos Lord on Daemonic Mount (also builds as Eternus, Blade of the First Prince); 5 Chaos Chosen; 3 Varanguard; 5 Chaos Knights; 10 Chaos Warriors |\n| Maggotkin of Nurgle: Plaguesworn Host | Harbinger of Decay; Lord of Blights; 3 Sloven Knights; 5 Putrid Blightkings; 10 Rotswords; 14 Pox Wretches; 6 Mire Kelpies (later release in Japan) |\n| Nighthaunt: Court of the Undying King | Nagash, Supreme Lord of the Undead; 2 Dreadblade Harrows; 10 Dreadscythe Harridans; 10 Bladegheist Revenants; 10 Grimghast Reapers (later release in Japan) |\n| Orruk Warclans: Grunta Stampede | Tuskboss on Maw-Grunta; Maw-Grunta Gouger (each also builds as the other or as a Maw-Grunta with Hakkin' Krew); 6 Gore Gruntas |",
      "Horus Heresy\n| Box | Contents |\n| --- | --- |\n| Legiones Astartes: Vanguard Assault Battle Group | 20 Mark VI Tactical Squad Legionaries; 10 Mark VI Assault Squad Legionaries; Legion Praetor with Power Sword; Contemptor Dreadnought; Deimos Pattern Rhino; Deimos Pattern Predator Battle Tank |\n| Legiones Astartes: Heavy Assault Battle Group | 20 Mark III Tactical Squad Legionaries; 10 Mark III Breacher Squad Legionaries; 5 Mark III Legion Command Squad Legionaries; 6 Cataphractii Terminators with Volkite Chargers and Power Mauls; Land Raider Explorator/Carrier |",
      "Prices and dates: reported, not confirmed\nSpikey Bits reports, citing GW's November 2 email to retailers, that the Christmas battleforces cost $255 / £160 / €206 / CA$310 / AU$435, with pre-orders on November 14 and release on November 27. Spikey applies those figures to all seven 40K boxes and all six Age of Sigmar boxes. GW has not published prices or dates, and no report we've seen gives a price for either Horus Heresy Battle Group.\nAuspex Tactics separately reports an unconfirmed North American price of $210 (CA$255) for the Blood Angels box, while Spikey Bits still lists $255. We're treating that as open until pre-orders go live. More in our [Angelus Assault Force analysis](/news/blood-angels-angelus-assault-force-battleforce) and our [earlier retailer-pricing report](/news/warhammer-40000-christmas-battleforces-2026).",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "blood-angels-angelus-assault-force-battleforce",
    "kind": "news",
    "title": "Blood Angels Angelus Assault Force: Smallest Savings of GW's Christmas Battleforces, and a Possible Price Cut",
    "date": "2026-11-05",
    "game": "analysis",
    "featured": true,
    "cover": "/images/news-blood-angels-battleforce.jpg",
    "shareImage": "/images/news-blood-angels-battleforce.jpg",
    "imageCredit": "Image: Games Workshop / Warhammer Community",
    "excerpt": "At the reported $255, the Blood Angels box has the smallest estimated saving of this year's seven 40k battleforces. Auspex Tactics now reports an unconfirmed North American price of $210.",
    "source": "Blood Angels Angelus Assault Force review breakdown · Spikey Bits",
    "sourceUrl": "https://spikeybits.com/40k-christmas-battleforce-blood-angels-angelus-assault-force-review-breakdown/",
    "sources": [
      {
        "label": "Warhammer Community — New Battleforce boxes revealed for Warhammer 40,000 (Oct 19)",
        "url": "https://www.warhammer-community.com/en-gb/articles/17yaxs02/new-battleforce-boxes-revealed-for-warhammer-40000/"
      },
      {
        "label": "Spikey Bits — Blood Angels Angelus Assault Force review breakdown",
        "url": "https://spikeybits.com/40k-christmas-battleforce-blood-angels-angelus-assault-force-review-breakdown/"
      },
      {
        "label": "Wargamer — Warhammer 40k Christmas 2026 Battleforce value breakdown",
        "url": "https://www.wargamer.com/warhammer-40k/battleforces-christmas-2026"
      },
      {
        "label": "ThriftHammer — Warhammer 40K Christmas 2026 Battleforce Boxes Contents & Ranking",
        "url": "https://thrifthammer.com/blog/warhammer-40k-christmas-2026-battleforce-boxes-contents-ranking/"
      },
      {
        "label": "Auspex Tactics — Looks Like GW Have Dropped the Price for This Battleforce...",
        "url": "https://www.youtube.com/watch?v=vRAnKnXjXb4"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Games Workshop revealed seven Warhammer 40,000 Christmas battleforces on Warhammer Community on October 19. Of the seven, the Blood Angels Angelus Assault Force looks like the weakest deal on paper. It is still a reasonable buy for one kind of player.",
      "What's in the box (per Warhammer Community)\n* Commander Dante\n* Blood Angels Chaplain with Jump Pack\n* Death Company Brutalis Dreadnought\n* 3 Sanguinary Guard\n* 5 Death Company Marines with Jump Packs\n* Blood Angels Upgrade Frame",
      "That's 11 miniatures plus an upgrade frame.",
      "Price and dates: reported, not confirmed\nGames Workshop has not published prices or dates. Spikey Bits reports that GW's November 2 email to retailers lists the box at $255 / £160 / €206 / CA$310 / AU$435, with pre-orders on November 14 and release on November 27. Treat those as unconfirmed until GW announces them. Our earlier report has the full picture: [Christmas Battleforces: Retailer Email Points to $255 / £160, Pre-Orders Nov 14](/news/warhammer-40000-christmas-battleforces-2026).",
      "Report: a quiet cut to $210? (unconfirmed)\nAuspex Tactics reports, in a video titled \"Looks Like GW Have Dropped the Price for This Battleforce...\", that GW's retailer price list appears to have been updated in the last day or so. According to Auspex, it now shows the Blood Angels box at $210 in the US and CA$255 in Canada. Auspex says the change appears to affect North America only. Commenters on the video say stores are still quoting $255. Auspex expects things to become clear around Sunday, when GW usually updates retailers. GW has not commented, and we have not seen the price list ourselves.",
      "If the box sells for $210, the saving against Wargamer's $340 separate-kit estimate rises from about $85 (25%) to about $130 (38%). Auspex's own figures at $210 are about 39% including the upgrade frame and about 31% without it. Until GW confirms a price, this article uses $255 as the baseline.",
      "How the seven boxes compare\nThe table uses the reported $255 price and Wargamer's itemized separate-kit totals and points from its October 19 breakdown. Wargamer calls these worked-out estimates, not GW figures. The savings column is our arithmetic against the reported $255 price, which Spikey Bits says applies to every box. We counted the models ourselves from Warhammer Community's contents lists.",
      "| Battleforce | Models | Separate kits (Wargamer est.) | Est. saving at $255 | Points (Wargamer est.) |\n| --- | --- | --- | --- | --- |\n| Chaos Space Marines: Cult of Destruction | 13 | $419.50 | ~$165 (39%) | 945–975 |\n| Chaos Knights: Helhunt Lance | 5 | $408 | ~$153 (37.5%) | 865–930 |\n| Orks: Armoured Blitzmob | 16 | $388.50 | ~$134 (34%) | 605 |\n| Space Marines: Indomitus Task Force | 23 | $380 | ~$125 (33%) | 775 |\n| Necrons: Disciples of the Nekrosor | 19 | $377.50 | ~$123 (32%) | 890 |\n| Space Wolves: Champions of Fenris | 17 | $340.50 | ~$86 (25%) | 850 |\n| Blood Angels: Angelus Assault Force | 11 + frame | $340 | ~$85 (25%) | 645 |",
      "Spikey Bits reaches the same Blood Angels numbers: $340 in separate kits, about $85 (25%) saved, and around 645 points. Wargamer values the Blood Angels Upgrade Frame at $37, so the frame accounts for almost half of that saving. ThriftHammer leaves the frame out of its math and puts the discount against GW pricing at only 13%, with 640 points, the lowest discount of the seven in its ranking.",
      "Why it lands at the bottom\nThere are three reasons. The saving is the smallest of the seven, and much of it is the upgrade frame, which can't go on the table as a unit. The box is also light on bodies. Its 11 models are all elite jump-pack infantry, a character or a Dreadnought, with nothing to hold objectives. And because Commander Dante is a named character, buying a second box gets you a duplicate Dante you can't field twice. That cuts into the usual move of doubling up on a good box.",
      "ThriftHammer calls it \"a straight-up stinker.\" Spikey Bits is milder. Its verdict is \"a decent buy for anyone who needs everything in the box,\" with the warning that \"if there's a single kit you don't need inside, this is a box you pass on.\"",
      "Who it suits\nIf you're starting Blood Angels, or you already want Dante, a jump-pack Chaplain, Sanguinary Guard, Death Company and a Brutalis, you would still pay about 25% less than buying them separately at $255. If the reported $210 price is real, the box's percentage saving would rank near the top of the seven, though it would still have the fewest points apart from the Orks box and only 11 models. All the kits are fast and hit hard in melee. For a newer player, the box is a strong centerpiece for a Blood Angels force, though you'll need line troops to go with it. Players who already own several of these kits get much less from it, and anyone who wants a second box will hit the Dante limit.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "house-of-iron-orlock-road-gangers",
    "kind": "news",
    "title": "House of Iron Takes the Highway: Orlock Road Gangers, Ogryn Minders Lead Next Week's Warhammer Pre-Orders",
    "date": "2026-10-25",
    "game": "40k",
    "featured": true,
    "cover": "/images/news-orlock-header.jpg",
    "shareImage": "/images/news-orlock-header.jpg",
    "imageCredit": "Image: Games Workshop / Warhammer Community",
    "excerpt": "Games Workshop's Sunday Preview has new Orlock Road Warriors, Road Sergeants and Ogryn Minders for Necromunda, along with a Made to Order run of Tzeentch daemons and four Black Library titles.",
    "source": "Sunday Preview – Orlocks rule the roads of Necromunda · Warhammer Community · 25 Oct 2026",
    "sourceUrl": "https://www.warhammer-community.com/en-gb/articles/1bpkd6my/sunday-preview-orlocks-rule-the-roads-of-necromunda/",
    "sources": [
      {
        "label": "Warhammer Community — Sunday Preview: Orlocks rule the roads of Necromunda",
        "url": "https://www.warhammer-community.com/en-gb/articles/1bpkd6my/sunday-preview-orlocks-rule-the-roads-of-necromunda/"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Games Workshop's Sunday Preview on Warhammer Community leads with Necromunda's House Orlock. Next week brings a new ganger kit, a leadership box, a pair of Ogryn bodyguards and a new Underhive Journal. Also coming are a limited-time Made to Order run of classic Tzeentch daemons and four Black Library titles.",
      "Necromunda: House Orlock\n![Orlock Road Sergeants and cyber-mastiffs](/images/news-orlock-sergeants.jpg)\nImage: Games Workshop / Warhammer Community",
      "* **Orlock Road Sergeants & Cyber-mastiffs.** One Road Captain, five Road Sergeants and two cyber-mastiffs, with weapon and cosmetic options for building Champions.\n* **Orlock Road Warriors.** The new ganger kit covers four archetypes: Road Enforcers, Road Shooters, Road Engineers and Road Blasters. Equipment in the kit includes meltaguns, pneumatic hammers, outrider flails and sawn-off shotguns.",
      "![Orlock Road Warriors](/images/news-orlock-warriors.jpg)",
      "Image: Games Workshop / Warhammer Community",
      "* **Orlock Ogryn Minders.** Two Ogryn bodyguards who protect Leaders and Champions, armed with heavy mauls, spud-jackers and ripper guns. GW describes them as stepping in front of shots meant for their bosses.",
      "![Orlock Ogryn Minders](/images/news-orlock-ogryn.jpg)",
      "Image: Games Workshop / Warhammer Community",
      "* **Underhive Journal: Orlock – The House of Iron.** New gang rules and background lore. It covers Road Gangs mounted on customizable outrider quads and Orlock Wrecking Crews, plus new fighter rules, upgrades and legendary names for existing gangs.\n* **Orlock Card Pack and Dice.** The pack has 24 cards covering gang tactics, fighter stats, territories and side jobs. The eight-dice set has three D6, two Injury dice, two Firepower dice and one Scatter die, cast in pearlescent grey with silver pips and the House logo on the six face. Both are available while stocks last.",
      "Warhammer Community says more House Orlock news and rules will follow through the week.",
      "Tzeentch Daemons, Made to Order\nA limited-time Made to Order offer brings back five kits:\n* the resin Exalted Greater Daemon of Tzeentch\n* a Fatemaster on Disc\n* a Fluxmaster on Disc\n* a smaller Greater Daemon of Tzeentch\n* the Blue Scribes",
      "GW notes these miniatures will not be available in Korea. The preview did not give ordering dates.",
      "Black Library\n* **The Flight of the Eisenstein** by James Swallow, the fourth book in the Horus Heresy Saga, gets a Premium Edition with a faux-leather cover, metal emblem, printed page edges and a ribbon page marker. It goes on sale at 3 p.m. UK time on Wednesday, November 4 (10 a.m. Eastern) and is available only while stocks last. GW says it may return to print later. A regular hardback and French- and German-language paperbacks are also planned.\n* **Galaxy in Flames** by Ben Counter is available to pre-order in paperback next weekend.\n* **Whisperblade**, Hal Wilson's first full-length Black Library novel, will be available to pre-order in hardback.\n* **Blood of the Bastion** by Evan Dicken, the first full-length novel about Grand Cathay, will be available to pre-order in hardback.",
      "When\nGW's preview says the Orlock releases are coming next week. It does not give a pre-order date or prices.",
      "Also on Warhammer TV this week\n* the Arkanaut series finale on Friday\n* Loremasters on the new Khazalite Holds\n* an Old World battle report, Grand Cathay vs. Tomb Kings of Khemri\n* Painting Desk Roadshow coverage of Golden Demon at SPIEL",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for your next hobby project."
    ]
  },
  {
    "slug": "necromunda-roleplay-cancelled-2027-plans",
    "kind": "news",
    "title": "Games Workshop cancels Necromunda Roleplay and sets out its 2027 Necromunda plans",
    "date": "2026-10-24",
    "game": "40k",
    "cover": "/images/news-necromunda-2027.jpg",
    "shareImage": "/images/news-necromunda-2027.jpg",
    "imageCredit": "Image: Games Workshop / Warhammer Community",
    "excerpt": "Games Workshop says there won't be a Necromunda Roleplay expansion. The miniatures shown for it are still coming for standard Necromunda, and 2027 brings the Ash Wastes, the Underhells, Cinderak City and new mercenaries and gunslingers.",
    "source": "New for Necromunda in 2027 · Warhammer Community · 23 Oct 2026",
    "sourceUrl": "https://www.warhammer-community.com/en-gb/articles/ntkfvqdt/new-for-necromunda-in-2027/",
    "sources": [
      {
        "label": "Warhammer Community — New for Necromunda in 2027",
        "url": "https://www.warhammer-community.com/en-gb/articles/ntkfvqdt/new-for-necromunda-in-2027/"
      },
      {
        "label": "Wargamer — Games Workshop scraps Necromunda RPG a month after announcing it",
        "url": "https://www.wargamer.com/warhammer-40k-necromunda/roleplay-cancelled"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Games Workshop has cancelled the Necromunda Roleplay expansion. In a [Warhammer Community article](https://www.warhammer-community.com/en-gb/articles/ntkfvqdt/new-for-necromunda-in-2027/) on October 23, it also set out a roadmap for Necromunda in 2027.",
      "What's gone\nGW says there \"won't be a Roleplay expansion.\" Its stated reason: \"After careful consideration we've decided to focus our efforts on providing even more great minis for the core game.\"\n[Wargamer reports](https://www.wargamer.com/warhammer-40k-necromunda/roleplay-cancelled) that Necromunda Roleplay was first announced in a Warhammer Community article published September 18, which has since been deleted.",
      "What's still coming\n* All the miniatures shown in the Big Autumn Preview are still on their way, and GW says they can be used in standard games of Necromunda.\n* Still due this year: a major House of Iron expansion for Orlock gangs, made up of three multipart plastic kits with new cosmetic and wargear options.",
      "![Orlock House of Iron](/images/news-necromunda-orlock.jpg)",
      "Image: Games Workshop / Warhammer Community",
      "Necromunda in 2027\nGW lists the year in this order:\n* **Ash Wastes:** Starting in the spring, a return to the ash wastes with new rules expansions and what GW calls \"the biggest plastic vehicle kit yet released for Necromunda.\"\n* **Underhells:** Next, a return to the Underhells in search of archeotech, including new fighters for the Malstrain Genestealer Cults.\n* **Cinderak City:** Then Cinderak City, with support for some of the original underhive gangs, \"including hulking new brutes.\"\n* **Mercenaries and gunslingers:** New mercenaries and gunslingers round out the year.",
      "GW says 2027 will also bring support for other gangs, scenery and regular rules expansions, and that it will cover all of these in more detail soon.",
      "Wargamer's own write-up puts season labels on the roadmap (spring for the Ash Wastes, summer for the Malstrain Genestealer Cults, autumn for the underhive brutes and winter for bounty hunters). GW's article gives only spring as a timing.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for your next hobby project."
    ]
  },
  {
    "slug": "hot-dust-tabletop-roundup-oct-22-23",
    "kind": "news",
    "title": "Hot Dust Tabletop Roundup: Oct 22–23",
    "date": "2026-10-24",
    "game": "other",
    "featured": true,
    "cover": "/images/news-roundup-tzeentch.jpg",
    "shareImage": "/images/news-roundup-tzeentch.jpg",
    "imageCredit": "Image: Games Workshop / Warhammer Community",
    "excerpt": "Classic Tzeentch daemons are coming back through Made to Order, and GW's paint app has a new name. Also: The River of Bones rules for The Old World, new French units for Bolt Action, a free Pilgrim scenario, Conquest's Codnan and a delayed Secret Lair bundle.",
    "source": "Tzeentch Daemons return via Made to Order · Warhammer Community · 22 Oct 2026",
    "sourceUrl": "https://www.warhammer-community.com/en-gb/articles/tzzxr1jc/tzeentch-daemons-return-via-made-to-order/",
    "sources": [
      {
        "label": "Warhammer Community — Tzeentch Daemons return via Made to Order",
        "url": "https://www.warhammer-community.com/en-gb/articles/tzzxr1jc/tzeentch-daemons-return-via-made-to-order/"
      },
      {
        "label": "Warhammer Community — Paint Warhammer App – Your new painting companion",
        "url": "https://www.warhammer-community.com/en-gb/articles/2kvipmuo/paint-warhammer-app-your-new-painting-companion/"
      },
      {
        "label": "Warhammer Community — Designers' notes: The River of Bones rules",
        "url": "https://www.warhammer-community.com/en-gb/articles/xuhk2izd/designers-notes-the-river-of-bones-rules/"
      },
      {
        "label": "Warlord Games — Intelligence Report – Armies of France: New & Improved Units!",
        "url": "https://warlord-community.warlordgames.com/intelligence-report-armies-of-france-new-improved-units/"
      },
      {
        "label": "Buer Games — The Hollow Shore – Free Scenario for Pilgrim: The Haunted Frontier",
        "url": "https://buergames.com/products/the-hollow-shore-free-scenario-for-pilgrim-the-haunted-frontier"
      },
      {
        "label": "Para Bellum — Fishgnome – Codnan Essen 2026",
        "url": "https://eshop.para-bellum.com/product/fishgnome-codnan-essen-2026/"
      },
      {
        "label": "Wizards of the Coast — Reality Fracture Secret Lair Bundle Delayed",
        "url": "https://magic.wizards.com/en/news/announcements/reality-fracture-secret-lair-bundle-delayed"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Here's what tabletop publishers announced on October 22 and 23, all from their own sites.",
      "Tzeentch daemons return via Made to Order\nGames Workshop says [five classic Tzeentch Daemon kits](https://www.warhammer-community.com/en-gb/articles/tzzxr1jc/tzeentch-daemons-return-via-made-to-order/) are coming back through Made to Order:\n* Exalted Greater Daemon of Tzeentch (resin, supplied with a 130mm round base)\n* Greater Daemon of Tzeentch, the 1989 metal Lord of Change (supplied with a 50mm round base)\n* Fatemaster on Disc of Tzeentch (metal)\n* Fluxmaster – Herald of Tzeentch on Disc (metal)\n* The Blue Scribes (metal)",
      "In Age of Sigmar, the Fluxmaster, Fatemaster and Blue Scribes have free Legends rules, and both Greater Daemons can use the Lord of Change profile from Battletome: Disciples of Tzeentch. In Warhammer 40,000, the Lord of Change, Fluxmaster and Blue Scribes have free rules, and the Exalted Greater Daemon (Aetaos'Rau'Keres) has free Legends rules. GW notes that the two Greater Daemons' bases differ from the current Lord of Change kit, so they won't match the Warhammer 40,000 Event Companion. GW says they'll be available \"soon\" and hasn't announced dates or prices.",
      "Paint Warhammer app\nTo mark the release of Warhammer Tone Pro, [Warhammer Colour: The App is now Paint Warhammer](https://www.warhammer-community.com/en-gb/articles/2kvipmuo/paint-warhammer-app-your-new-painting-companion/).\n* **Hobby Desk:** track projects, paint inventory, recipes and guides, and build a wishlist of paints you need.\n* **Comparison tool:** enter a Warhammer Colour paint and get up to three Tone Pro matches: a lighter tone, a close tone and a darker tone.\n* The app is now available in English, French, German, Italian, Spanish, Chinese, Japanese and Korean.\n* It's still free and needs a MyWarhammer login. Existing users get the update automatically.",
      "![Paint Warhammer app](/images/news-roundup-paintapp.jpg)",
      "Image: Games Workshop / Warhammer Community",
      "Warhammer: The Old World: The River of Bones rules\nGW's [designers' notes](https://www.warhammer-community.com/en-gb/articles/xuhk2izd/designers-notes-the-river-of-bones-rules/) go through Arcane Journal – The River of Bones:\n* Two scenarios: a four-player Battle March scenario and a battle on the banks of the Crystal Mere in Athel Loren.\n* An Enchanted Terrain table with good and bad results, from Clawing Mud to the Waters of Rejuvenation.\n* Champions of Nehekhara: Battle March rules for the Tomb Kings of Khemri, including the Arch Hierophant.\n* Two Armies of Infamy: the Barrow Kingdoms (Tomb Kings) and the Spirits of the Forest (Wood Elf Realms).\n* Wood Elf Kindreds rules, such as the Kinbands of Cavaroc and the Kinbands of Torgovann.\n* A new set of common magic items, many of them cursed, including the Armour of Dust and Barrow-dirt.",
      "You don't need the book to use the new Tomb Kings models, because their profiles are in Ravening Hordes. GW said the Arcane Journal and the Host of Nehekhara Army Reinforcement Set go up for pre-order on October 24. The new Skeleton Chariots use a different base size from the old kits, and GW has published an errata PDF for it.",
      "![The River of Bones](/images/news-roundup-river.jpg)",
      "Image: Games Workshop / Warhammer Community",
      "Bolt Action: Armies of France units\nWarlord Games has [previewed more units](https://warlord-community.warlordgames.com/intelligence-report-armies-of-france-new-improved-units/) from Armies of France, which is on pre-order. It's the first standalone France book for Bolt Action.\n* **Dragons Portés VB Group:** up to four VB Launchers in one unit. It can ride motorcycles or a transport using the Motorised rule.\n* **Moroccan Goumier Section:** now has Fieldcraft and Tough Fighters. It can be Regular or Veteran, with up to 12 men, armed with rifles and an optional LMG.\n* **British cruiser tanks in French service:** a low-cost early-war option with light AT guns, made cheaper by the Unreliable rule.",
      "Warlord's post doesn't give a price or release date.",
      "Pilgrim: The Haunted Frontier\nBuer Games has a [free introductory scenario, The Hollow Shore](https://buergames.com/products/the-hollow-shore-free-scenario-for-pilgrim-the-haunted-frontier), for its upcoming game Pilgrim: The Haunted Frontier. The download includes a 40-page PDF that teaches the rules and the first scenario, STL files for a Pilgrim and a Shade, and a track from the game's soundtrack. Buer Games says pre-supported STLs are coming soon.\n![The Hollow Shore](/images/news-roundup-hollow.jpg)\nImage: Buer Games",
      "Conquest: Codnan the Fishgnome\nPara Bellum's [Fishgnome – Codnan Essen 2026](https://eshop.para-bellum.com/product/fishgnome-codnan-essen-2026/) is listed on its eshop at $24.99. It's a 38mm resin miniature with a command card, a scenario card, an infantry base and a license card.\n![Fishgnome – Codnan](/images/news-roundup-codnan.jpg)\nImage: Para Bellum Games",
      "Other Tables: Magic\nWizards of the Coast says the [Reality Fracture Secret Lair Bundle is delayed](https://magic.wizards.com/en/news/announcements/reality-fracture-secret-lair-bundle-delayed) worldwide because of production and shipping issues. It may arrive shortly after the October 23 release date, and the exact timing will vary by region. Secret Lair Bundles bought as part of Secret Lair Chaos Vault bundles will be fulfilled as usual for Secret Lair, depending on drop availability and production timing. Wizards says it will post an update if anything else changes.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "hot-dust-tabletop-roundup-oct-20",
    "kind": "news",
    "title": "Hot Dust Tabletop Roundup: Week of Oct 20",
    "date": "2026-10-22",
    "game": "other",
    "featured": true,
    "cover": "/images/news-roundup-necro.jpg",
    "shareImage": "/images/news-roundup-necro.jpg",
    "imageCredit": "Image: Steamforged Games / Warmachine",
    "excerpt": "Cryx Necrofactorium is reboxed and Menoth returns next week. Also this week: new X-Men villains for Crisis Protocol, Terran Wave 3 rules for StarCraft, French army lists for Bolt Action, a Conquest Founder's Exclusive, Tomb Kings for The Old World, and the Star Trek Commander decks.",
    "source": "Tuesday Launches – October 20, 2026 · warmachine.gg",
    "sourceUrl": "https://warmachine.gg/blogs/news/tuesday-launches-october-20-2026",
    "sources": [
      {
        "label": "warmachine.gg — Tuesday Launches – October 20, 2026",
        "url": "https://warmachine.gg/blogs/news/tuesday-launches-october-20-2026"
      },
      {
        "label": "warmachine.gg — Warmachine Wednesday – October 21, 2026",
        "url": "https://warmachine.gg/blogs/news/warmachine-wednesday-october-21-2026"
      },
      {
        "label": "Asmodee — Marvel Crisis Protocol – X-Fiends & Foes Character Pack",
        "url": "https://store.asmodee.com/products/marvel-crisis-protocol-x-fiends-foes-character-pack"
      },
      {
        "label": "Archon — New Terran Wave: Raven & Nova Terra Take the Battlefield!",
        "url": "https://starcraft-tmg.com/news/rules/starcraft-miniatures-game-raven-nova-terra-wave-3"
      },
      {
        "label": "Warlord Games — Intelligence Report – Armies of France: Free France & Vichy",
        "url": "https://warlord-community.warlordgames.com/intelligence-report-armies-of-france-free-france-vichy/"
      },
      {
        "label": "Para Bellum — Founder's Exclusive \"Bound to the Elements: Water\"",
        "url": "https://eshop.para-bellum.com/product/founders-exclusive-bound-to-the-elements-water/"
      },
      {
        "label": "Warhammer Community — Sunday Preview – Tomb Kings rise again",
        "url": "https://www.warhammer-community.com/en-gb/articles/q39hsvbj/sunday-preview-tomb-kings-rise-again/"
      },
      {
        "label": "Wizards of the Coast — Magic: The Gathering | Star Trek Commander Decklists",
        "url": "https://magic.wizards.com/en/news/announcements/star-trek-commander-decklists"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Here's what tabletop publishers announced this week, all from their own sites.",
      "Warmachine: Cryx Necrofactorium refresh is out\nThe refreshed [Cryx Necrofactorium range](https://warmachine.gg/blogs/news/tuesday-launches-october-20-2026) went on sale October 20. It has three Army Boxes of about 50 points each: Legions of the Dead, Lord of Damnation and Wraithbinder's Host.\n* The Boneyard Keeper 30-point Command Set replaces the old Command Starter.\n* New Malefactor heavy and Raptor light warjack boxes replace the Battlegroup Box. Both include every loadout option.\n* The Mechanithrall Swarm Warden is now in the Legions of the Dead and Lord of Damnation boxes. Legions of the Dead also has new variant-sculpt Mechanithralls, which will be sold separately as well.\n* This is a rebox. Existing models stay fully playable. The old Command Starter, Battlegroup Box, Core Expansion and Auxiliary Expansion are discontinued once stock runs out.",
      "Warmachine: Menoth returns October 27\nSteamforged's [Warmachine Wednesday](https://warmachine.gg/blogs/news/warmachine-wednesday-october-21-2026) confirms the first Protectorate of Menoth release next Tuesday, October 27. It's the Defenders of the Flame Command Set plus the Revenger and Crusader warjacks. Customers who bought the army bundle from warmachine.gg also get the exclusive Four Gifts cards in the Classic edition colourway.\n* A new app version is waiting for iOS and Android store approval. It fixes the \"Startup Failed\" bug, adds one-tap damage tracking and adds an in-app bug report form. It's a full version release, so you'll need to update the app.\n* The Cryx Dread Armada FronTier and its bundle end October 29.",
      "Marvel: Crisis Protocol: X-Fiends & Foes\nAtomic Mass Games has listed the [X-Fiends & Foes Character Pack (MCP14)](https://store.asmodee.com/products/marvel-crisis-protocol-x-fiends-foes-character-pack) on the Asmodee store at $69.99. It adds Juggernaut, Mister Sinister, Omega Red and Shadow King. The box has 4 miniatures, 3 bases, 4 character stat cards, 8 team tactic cards, a punch sheet and an insert.\n![X-Fiends & Foes Character Pack](/images/news-roundup-mcp.jpg)\nImage: Atomic Mass Games / Asmodee",
      "StarCraft: Tabletop Miniatures Game: Raven and Nova Terra\nArchon has previewed the [Terran Wave 3 additions](https://starcraft-tmg.com/news/rules/starcraft-miniatures-game-raven-nova-terra-wave-3), the Raven and Nova Terra.\n* The Raven is the game's first flying unit on a dedicated flight stand. Its Advanced Sensor Array reveals cloaked and burrowed enemies nearby. It can also deploy Auto-Turrets and fire Anti-Armour and Seeker Missiles.\n* Nova Terra comes with two separate Hero profiles. Stealth Mode has Active Camouflage, a Canister Rifle with a Head Shot reaction, and Holo Decoy. Assault Mode has Phase-Reactor Blink, a Hellfire Shotgun and a Monomolecular Blade.",
      "Bolt Action: Armies of France, Free France and Vichy\nWarlord Games has [previewed the Free French and Vichy lists](https://warlord-community.warlordgames.com/intelligence-report-armies-of-france-free-france-vichy/) in the upcoming Armies of France book, which is on pre-order.\n* Free French forces get Massed Stubborn, Sacred Ground for outflanking, La Resistance for French Resistance units, and an option to field some units as Armée d'Afrique with Fieldcraft.\n* The Vichy Armistice Army has no modern tanks or heavy artillery. It keeps Colmater and Lack of Radios, can take Foreign Legion troops, and makes unpredictable Morale tests.\n* The new Vichy GMR section has Counter-Partisan Tactics, which gives it a 24\" bubble against Infiltrators.",
      "Conquest: Bound to the Elements: Water\nPara Bellum has put the [Founder's Exclusive Bound to the Elements: Water](https://eshop.para-bellum.com/product/founders-exclusive-bound-to-the-elements-water/) for the Sorcerer Kings on pre-order at $99.99, releasing November 25. Michael Kontraros sculpted the 38mm resin miniature. It's numbered to 1,111 and can stand in for a Raj, Sorcerer or Maharaja. It comes with 3 command cards and 12 ritual cards.\n![Bound to the Elements: Water](/images/news-roundup-water.jpg)\nImage: Para Bellum Games",
      "Warhammer: The Old World: Tomb Kings\nGames Workshop's [Sunday Preview](https://www.warhammer-community.com/en-gb/articles/q39hsvbj/sunday-preview-tomb-kings-rise-again/) puts the Tomb Kings of Khemri up for pre-order this week. The Host of Nehekhara Army Reinforcement Set has 36 Skeleton Warriors, 36 Skeleton Archers and 6 Skeleton Chariots. It comes with Arcane Journal: The River of Bones and Tomb Kings dice and reference cards. This year's Da Red Gobbo, riding a squigmobile, also goes up for pre-order.",
      "Other Tables: Magic\nWizards of the Coast has posted the [Star Trek Commander decks](https://magic.wizards.com/en/news/announcements/star-trek-commander-decklists). There are four: Federation Fleet (Picard), Landing Party (Spock), Klingon Fury (Worf) and We Are the Borg (the Borg Queen). Each 100-card deck has 32 new-to-Magic cards, and there are surge foil Collector's Edition versions. Wizards will reveal the full decklists later. The decks release November 13, 2026, and are on pre-order now.\n![Worf, Defiant Commander](/images/news-roundup-worf.jpg)\nImage: Wizards of the Coast",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "warhammer-40000-christmas-battleforces-2026",
    "kind": "news",
    "title": "Games Workshop reveals seven Warhammer 40,000 Battleforce boxes for Christmas",
    "date": "2026-10-20",
    "game": "40k",
    "featured": true,
    "cover": "/images/news-battleforces.jpg",
    "shareImage": "/images/news-battleforces.jpg",
    "imageCredit": "Image: Games Workshop",
    "excerpt": "Warhammer Community has revealed the contents of seven Warhammer 40,000 Battleforce boxes for the holiday season. Pre-orders open soon, and Games Workshop hasn't announced prices or dates yet.",
    "source": "New Battleforce boxes revealed for Warhammer 40,000 · Warhammer Community · 19 Oct 2026",
    "sourceUrl": "https://www.warhammer-community.com/en-gb/articles/17yaxs02/new-battleforce-boxes-revealed-for-warhammer-40000/",
    "sources": [
      {
        "label": "Warhammer Community — New Battleforce boxes revealed for Warhammer 40,000",
        "url": "https://www.warhammer-community.com/en-gb/articles/17yaxs02/new-battleforce-boxes-revealed-for-warhammer-40000/"
      },
      {
        "label": "Wargamer — Warhammer 40k Christmas 2026 Battleforce value breakdown",
        "url": "https://www.wargamer.com/warhammer-40k/battleforces-christmas-2026"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Games Workshop revealed this year's Warhammer 40,000 Battleforce boxes on Warhammer Community on October 19. There are seven, and the contents of each are listed below.",
      "Space Marines: Indomitus Task Force\n* Captain in Terminator Armour\n* Chaplain\n* Redemptor Dreadnought\n* 5 Terminators\n* 5 Assault Intercessors with Jump Packs\n* 10 Intercessors",
      "Chaos Knights: Helhunt Lance\n* Knight Ruinator (can also be built as a Knight Abominant, Knight Rampager or Knight Desecrator)\n* 4 War Dog Stalkers (can also be built as War Dog Brigands or War Dog Karnivores)",
      "Orks: Armoured Blitzmob\n* Warboss in Mega Armour\n* Battlewagon (can also be built as a Gunwagon)\n* Deff Dread\n* 3 Meganobz\n* 10 Ork Boyz",
      "Space Wolves: Champions of Fenris\n* Logan Grimnar\n* Arjac Rockfist\n* 15 Wolf Guard Terminators",
      "Blood Angels: Angelus Assault Force\n* Commander Dante\n* Blood Angels Chaplain with Jump Pack\n* Death Company Brutalis Dreadnought\n* 3 Sanguinary Guard\n* 5 Death Company Marines with Jump Packs\n* Blood Angels upgrade frame",
      "Chaos Space Marines: Cult of Destruction\n* Warpsmith\n* Defiler\n* Venomcrawler\n* 2 Obliterators\n* 5 Havocs\n* 3 Mutilators",
      "Necrons: Disciples of the Nekrosor\n* C'tan Shard of the Nightbringer\n* Nekrosor Ammentar\n* 3 Ophydian Destroyers\n* Canoptek Doomstalker\n* 10 Necron Warriors\n* 3 Canoptek Scarab Swarms",
      "Prices and dates\nGames Workshop says the boxes will be available to pre-order soon. It has not announced prices or a pre-order date.\nWargamer has added up what the contents would cost bought separately at current prices. It puts the boxes at between $340 and $419.50 each. Those are Wargamer's estimates, not Games Workshop prices.",
      "Age of Sigmar and Horus Heresy\nGames Workshop says Battleforce boxes for Warhammer Age of Sigmar and Warhammer: The Horus Heresy will be revealed later.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "cryx-dread-armada-dreadtides-swarm",
    "kind": "news",
    "title": "How Warmachine's Cryx Dread Armada will play: dreadtides and swarm attacks",
    "date": "2026-10-11",
    "game": "warmachine",
    "featured": true,
    "cover": "/images/news-dread-armada.jpg",
    "shareImage": "/images/news-dread-armada.jpg",
    "imageCredit": "Image: Steamforged Games / Warmachine",
    "excerpt": "Steamforged's first gameplay preview for the Cryx Dread Armada describes a cheap swarm army that uses moving dreadtides for ranged protection and stacks debuffs on its targets. The army launches October 15 on MyMiniFactory.",
    "source": "How do Cryx Dread Armada play? · Warmachine · 8 Oct 2026",
    "sourceUrl": "https://warmachine.gg/blogs/news/cryx-dread-armada-playstyle",
    "sources": [
      {
        "label": "Warmachine — How do Cryx Dread Armada play? (8 Oct 2026)",
        "url": "https://warmachine.gg/blogs/news/cryx-dread-armada-playstyle"
      },
      {
        "label": "Frontline Gaming — Cryx Dread Armada tactics, dreadtides and swarm warfare",
        "url": "https://frontlinegaming.org/2026/10/11/cryx-dread-armada-tactics-dreadtides-and-swarm-warfare/"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Steamforged has published its first look at how the Cryx Dread Armada will play. The new army launches on October 15 as a FronTier on MyMiniFactory, with free rules in the Warmachine app. Warmachine developer Fraser walks through the army's two main gameplay themes. Steamforged stresses that the Dread Armada is not a re-release of Cryx's existing Black Fleet army.",
      "Dreadtides\nThe army's unique faction rule is dreadtides. These are physical markers on the table, summoned by certain Dread Armada models. Dread Armada models close to a dreadtide gain benefits against enemy ranged attacks. Dreadtides also move across the battlefield, and when they crash into enemy forces they strip their defences and leave them vulnerable. The army also has several ways to create and use shallow water terrain.",
      "A swarm that stacks debuffs\nSteamforged calls the Dread Armada a classic swarm army built from many low-cost units. That includes its warjacks, which cost less than other armies' warjacks but have lower stats. No single model hits especially hard. Instead, the army makes many weaker attacks and relies on stacking negative effects on a target, combining dreadtide debuffs with other individual effects to make each attack more dangerous.",
      "Steamforged describes the result as an army that attacks in waves. It sets up an attack with dreadtides for protection and support, then surges forward together against a weakened target.",
      "What's next\nSteamforged hasn't published unit stats or full rules yet. It says more Cryx Dread Armada rules previews are coming before the October 15 launch.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "sunday-preview-khazalite-holds-armageddon-terrain",
    "kind": "news",
    "title": "Sunday Preview: Khazalite Holds arrive, and 40K gets ready-painted terrain",
    "date": "2026-10-11",
    "game": "aos",
    "cover": "/images/news-khazalite.jpg",
    "shareImage": "/images/news-khazalite.jpg",
    "imageCredit": "Images: Games Workshop / Warhammer Community",
    "figures": [
      {
        "heading": "Khazalite Holds Army Set",
        "src": "/images/news-khazalite-army.jpg",
        "alt": "Khazalite Holds Army Set"
      },
      {
        "heading": "Battlefields: Armageddon",
        "src": "/images/news-khazalite-terrain.jpg",
        "alt": "Battlefields: Armageddon"
      }
    ],
    "excerpt": "Age of Sigmar gets a new duardin faction that takes in the Fyreslayers, and Warhammer 40,000 gets its first ready-painted plastic terrain set. Games Workshop says both go up for pre-order next week.",
    "source": "Sunday Preview – Open the Khazalite Holds · Warhammer Community · 11 Oct 2026",
    "sourceUrl": "https://www.warhammer-community.com/en-gb/articles/k4cm0fox/sunday-preview-open-the-khazalite-holds/",
    "sources": [
      {
        "label": "Warhammer Community — Sunday Preview: Open the Khazalite Holds",
        "url": "https://www.warhammer-community.com/en-gb/articles/k4cm0fox/sunday-preview-open-the-khazalite-holds/"
      },
      {
        "label": "Warhammer Community — Fyreslayers in Battletome: Khazalite Holds, what you need to know",
        "url": "https://www.warhammer-community.com/en-gb/articles/rv6irmgo/fyreslayers-in-battletome-khazalite-holds-what-you-need-to-know/"
      },
      {
        "label": "Wargamer — Dwarfen throngs and pre-painted 40K battlefields",
        "url": "https://www.wargamer.com/warhammer-age-of-sigmar/dwarfen-throngs-pre-painted-40k-battlefields-latest-warhammer-preview"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Warhammer Community's Sunday Preview has two big items this week: a brand-new duardin faction for Age of Sigmar, and the first ready-painted plastic terrain set for Warhammer 40,000. Games Workshop says both go up for pre-order next week.",
      "Khazalite Holds Army Set\nThe hero Hjulda Drakkblud leads 10 Clanshields, three Gholems of Gazul, and an Oathkeeper Cannon. The box also includes Battletome: Khazalite Holds with a cover found only in this Army Set, plus 53 warscroll cards. The models make up the full Drakkblud's Clanguard Spearhead. The set is available only while stocks last.",
      "The Khazalite Holds take in the Fyreslayers. Most Fyreslayers units, along with the new Ormyr and Ashtongue, move into the new battletome.",
      "Moving to Warhammer Legends\n* Vulkite Berzerkers\n* Auric Runemaster\n* Battlesmith\n* Doomseeker\n* Grimwrath Berzerker\n* Magmic Battleforge and Invocations",
      "Oath Fulfilled\nThis year's Warhammer Day commemorative miniature is a Warqueen that can be used as a regular Warqueen in Slaves to Darkness armies. It's available only while stocks last.",
      "Battlefields: Armageddon\nThis is Games Workshop's first ready-painted plastic terrain set for Warhammer 40,000. The pieces push-fit together with no glue or paint needed. The set also comes with game boards and terrain footprints to play any mission and board layout in the Chapter Approved 2026-27 Mission Deck.\n* Eight Large and eight Small Manufactorum Ruins\n* Two Shock Arrays\n* Two Capacitor Stacks\n* Four Rockcrete Barricades\n* Two Generator Shrines\n* Four Galvanic Pylons",
      "Also this week\nBlack Library has Shadow of the Silver Wolf by Gary Kloster, a Neave Blacktalon novel, up for pre-order in hardback. On Warhammer TV, episode one of the new animated series Arkanaut arrives on Friday.",
      "Timing and prices\nGames Workshop hasn't given a pre-order date or prices. Wargamer reports that pre-orders will most likely open on Saturday, October 17, but Games Workshop hasn't confirmed that.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "wizards-reprints-warhammer-40k-commander-decks",
    "kind": "news",
    "title": "Wizards confirms a reprint of the Warhammer 40,000 Commander decks",
    "date": "2026-10-09",
    "game": "other",
    "cover": "/images/news-commander-reprint.jpg",
    "excerpt": "Wizards of the Coast says a small reprint of its 2022 Magic: The Gathering Warhammer 40,000 Commander decks is headed to distributors and stores. It hasn't announced a price or a date.",
    "source": "Wizards of the Coast confirms reprints of the Warhammer 40K Commander decks · IGN · 9 Oct 2026",
    "sourceUrl": "https://in.ign.com/magic-the-gathering-trading-card-game/273821/wizards-of-the-coast-confirms-reprints-for-popular-mtg-warhammer-40k-commander-decks",
    "sources": [
      {
        "label": "IGN — Wizards of the Coast confirms reprints of the Warhammer 40K Commander decks",
        "url": "https://in.ign.com/magic-the-gathering-trading-card-game/273821/wizards-of-the-coast-confirms-reprints-for-popular-mtg-warhammer-40k-commander-decks"
      },
      {
        "label": "Wizards of the Coast — Warhammer 40,000 Commander decklists",
        "url": "https://magic.wizards.com/en/news/announcements/warhammer-40000-commander-decklists"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Wizards of the Coast has confirmed a reprint of the Warhammer 40,000 Commander decks for Magic: The Gathering. The preconstructed decks came out in 2022 and have been out of print since.",
      "“Yes, we can confirm that we did a small reprint of the Commander decks that will be available to distributors and stores soon,” a Wizards spokesperson told IGN. “Fans and WPN retailers should check with their distributors for availability, as it may vary by region.”",
      "The original four decks\n* Tyranid Swarm\n* The Ruinous Powers (Chaos)\n* Necron Dynasties\n* Forces of the Imperium",
      "What isn’t confirmed yet\nWizards hasn’t said whether all four decks are part of the reprint, or whether the all-foil Collector’s Editions are coming back. It also hasn’t given a price or a release date. It called the run small, so if you want one, ask your local game store.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. [Shop The Sotoverse](https://sotoverse.com) for this and all your hobby needs."
    ]
  },
  {
    "slug": "gw-contrast-paints-what-we-know",
    "kind": "news",
    "title": "GW Contrast paints: what we actually know",
    "date": "2026-10-07",
    "game": "hobby",
    "cover": "/images/news-contrast.jpg",
    "excerpt": "A report says 25 Contrast paints and Contrast Medium are coming off GW’s webstore. GW hasn’t said why, and a relabel is as likely as a cut.",
    "source": "Games Workshop Axes Contrast Paints with Tone Pro on the Horizon · Spikey Bits · 7 Oct 2026",
    "sourceUrl": "https://spikeybits.com/games-workshop-axes-contrast-paints-with-tone-pro-on-the-horizon/",
    "sources": [
      {
        "label": "Spikey Bits — Games Workshop Axes Contrast Paints with Tone Pro on the Horizon (7 Oct 2026)",
        "url": "https://spikeybits.com/games-workshop-axes-contrast-paints-with-tone-pro-on-the-horizon/"
      },
      {
        "label": "Warhammer Community — Citadel Colour is becoming Warhammer Colour (6 Mar 2026)",
        "url": "https://www.warhammer-community.com/en-gb/articles/okgv4njl/citadel-colour-is-becoming-warhammer-colour/"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "Spikey Bits reported on October 7 that Games Workshop’s webstore has flagged 25 Contrast paints and Contrast Medium for removal from its online range. Games Workshop has not commented. Until it does, this is unconfirmed, and there are two quite different explanations.",
      "What’s reported\nThe pots on Spikey Bits’ list include Space Wolves Grey, Apothecary White, Blood Angels Red, Iyanden Yellow, Black Templar, Guilliman Flesh, Snakebite Leather, Wyldwood, and Magos Purple, along with Contrast Medium. Spikey Bits notes that many of the 25 came from the 2022 Contrast expansion.",
      "The relabel explanation\nIn March, Games Workshop announced that Citadel Colour is becoming Warhammer Colour. It said the paints themselves are “the exact same,” Contrast included, and that the new labels would appear in stores “over the next few weeks and months.” Retiring old-label listings and bringing the same colours back under new Warhammer Colour labels would look exactly like this from the outside. If that’s what’s happening, nothing changes on your paint table.",
      "The cut explanation\nThe other reading is that GW is trimming slower sellers to make room as Tone Pro arrives. Tone Pro adds 150 paints, with pre-orders opening Saturday, October 10 and shelves on October 24. Spikey Bits notes that GW has said Tone Pro sits on top of the existing range rather than replacing Contrast, but a new line can still squeeze older pots off the rack.",
      "What to do now\nNothing has been confirmed. If your army scheme depends on one Contrast colour from the list, a backup pot is reasonable. Clearing shelves isn’t, because panic buying is how old paints end up on resale sites at silly prices. We’ll update this story when Games Workshop says which pots, if any, are actually going away.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. Shop The Sotoverse for this and all your hobby needs."
    ]
  },
  {
    "slug": "try-something-new-october-in-store",
    "kind": "news",
    "title": "Warhammer stores’ October offer is “Try Something New,” a staff-led build-and-paint session from Oct 10",
    "date": "2026-09-29",
    "game": "hobby",
    "cover": "/images/news-try-something-new.jpg",
    "excerpt": "Games Workshop details the October in-store offer it promised when it ended the traditional Miniature of the Month: pick one of eight faction miniatures to build or paint with store staff, plus Tone Pro on shelves Oct 24.",
    "source": "All-new in-store offer this October · Warhammer Community · 28 Sep 2026",
    "sourceUrl": "https://www.warhammer-community.com/en-gb/articles/jvquigqz/all-new-in-store-offer-this-october/",
    "sources": [
      {
        "label": "All-new in-store offer this October",
        "url": "https://www.warhammer-community.com/en-gb/articles/jvquigqz/all-new-in-store-offer-this-october/"
      },
      {
        "label": "September’s Miniature of the Month and collectible coin",
        "url": "https://www.warhammer-community.com/en-gb/articles/qgmvkomp/septembers-miniature-of-the-month-and-collectible-coin-revealed/"
      },
      {
        "label": "Erik Swinson on Warhammer Tone Pro",
        "url": "https://www.warhammer-community.com/en-gb/articles/yux7ox7h/warhammer-open-tutor-and-golden-demon-guest-judge-erik-swinson-on-warhammer-tone-pro/"
      }
    ],
    "body": [
      "Games Workshop has published the October in-store offer for Warhammer stores. Hot Dust reported on September 16 that September’s Miniature of the Month was, in Games Workshop’s words, “the last of the traditional free miniatures you can get for stopping by your local Warhammer store,” and that an October replacement had not yet been detailed. A Warhammer Community post dated September 28 now describes it, under the name “Try Something New.”",
      "From Saturday, October 10, according to the post, visitors “can go into your local store to take part in a staff led activity to build and/or paint one of EIGHT miniatures and find out more about those factions.” The new post doesn’t mention Miniature of the Month by name. The link between the two comes from Games Workshop’s August 31 post, which said a new offer would launch in October.",
      "The eight miniatures\nWarhammer 40,000:\n* Necron Warrior\n* Cadian Shock Trooper\n* Adepta Sororitas Battle Sister\n* Chaos Space Marine Legionary",
      "Warhammer Age of Sigmar:\n* Chaos Warrior\n* Deathrattle Skeleton\n* Orruk Gutripper\n* Cities of Sigmar Steelhelm",
      "The post pitches the session as a chance to try a new colour scheme, start an army, or get staff help with a technique. Its examples are fur on the Chaos Warrior and weathered metal or decaying cloth on the Deathrattle Skeleton. “These eight miniatures will be restocked in stores, so you don’t need to worry about missing out on day one,” it says. To take part, visitors are told to “drop in and speak to a friendly staff member.”",
      "October dates\n* Saturday, October 3: A collectable coin featuring the symbol of Ulgu, the Realm of Shadow.\n* Saturday, October 10: Try Something New begins.\n* Saturday, October 24: Warhammer Tone Pro, described as “150 new paints,” goes on shelves, with a Tone Pro-themed collectable coin from the same day.",
      "“Both coins are only available while stocks last,” the post says, adding: “Ask your store manager how you can get hold of them.” Tone Pro can already be tried in store ahead of the shelf date.",
      "Other store offers\n* Pick ’n’ Mix paints: “Choose any 10 Warhammer Colour paints and you’ll get the most expensive one free.”\n* Bring a friend: A friend who comes along “can also pick up a miniature, get a painting tutorial, and play an introductory game of Warhammer 40,000 or Warhammer Age of Sigmar,” and can join the Battle Honours programme.",
      "Still unclear\nThe post doesn’t say:\n* What Tone Pro costs.\n* Whether the Try Something New miniature is free or whether participants keep it.\n* Session times, booking, or limits, or whether every store offers all eight miniatures.\n* Whether the offer or coin dates vary by country or store.\n* How long Try Something New runs after October.",
      "Hot Dust will update this story if Games Workshop publishes more detail.",
      "Sidebar: Erik Swinson on Tone Pro\nAlso on September 28, Warhammer Community published a video interview with Erik Swinson, a painting tutor at the recent Warhammer Open in Newport, Wales, and a Golden Demon guest judge, after Games Workshop invited him to Nottingham to try Tone Pro. The article says the range can be tried “right now in thousands of Warhammer Stores and independent hobby stores around the world,” and notes that painting demos in Japan begin Saturday, October 3."
    ]
  },
  {
    "slug": "sunday-preview-warhammer-tone-pro",
    "kind": "news",
    "title": "Sunday Preview: Warhammer Tone Pro paints take the whole week",
    "date": "2026-10-04",
    "game": "hobby",
    "cover": "/images/news-tone-pro.jpg",
    "excerpt": "There are no new kits this week. Games Workshop’s Sunday Preview is all about Tone Pro, the 150-paint range from the Big Autumn Preview, along with two mediums and new drybrushes.",
    "source": "Sunday Preview – Warhammer Tone Pro · Warhammer Community · 4 Oct 2026",
    "sourceUrl": "https://www.warhammer-community.com/en-gb/articles/13drg5hr/sunday-preview-warhammer-tone-pro/",
    "sources": [
      {
        "label": "Sunday Preview — Warhammer Tone Pro",
        "url": "https://www.warhammer-community.com/en-gb/articles/13drg5hr/sunday-preview-warhammer-tone-pro/"
      },
      {
        "label": "The Big Autumn Preview — Paint better",
        "url": "https://www.warhammer-community.com/en-gb/articles/mewx9x8r/the-big-autumn-preview-paint-better/"
      },
      {
        "label": "All-new in-store offer this October",
        "url": "https://www.warhammer-community.com/en-gb/articles/jvquigqz/all-new-in-store-offer-this-october/"
      },
      {
        "label": "Shop The Sotoverse",
        "url": "https://sotoverse.com"
      }
    ],
    "body": [
      "There are no new kits, codexes, or boxed games in this week’s Warhammer Community Sunday Preview. The whole spotlight goes to Warhammer Tone Pro, the paint range Games Workshop unveiled in its Big Autumn Preview last month, and the gear built around it.",
      "What Tone Pro is\nTone Pro is 30 new colours, each made in five numbered tones, for 150 paints in all. Tone 1 is the darkest and Tone 5 the lightest. An Ultramarines painter, for example, works up from Ultramar Blue 1 to Ultramar Blue 5.",
      "Games Workshop says a single paint can basecoat, shade, glaze, highlight, and drybrush. It also claims strong first-coat coverage even on yellows and whites, and a smooth, self-levelling finish straight from the pot. Those are the maker’s claims, and we’ll test them at the table.",
      "The mediums and brushes\nTwo mediums come with the paints. Shading Medium lowers pigment density without changing flow or finish, so any Tone Pro colour can be used as a shade or a glaze. Blending Medium slows drying time to make wet blending easier. There’s also a new set of four drybrushes, sized XS to L, with curved tips and tight bristles, meant to put paint where you want it and keep it off the rest of the model.",
      "When and where\nDemo paints have been available in Warhammer stores and independent hobby shops since Saturday, September 26 (October 3 in Japan), so you can try Tone Pro on a model before you buy. Games Workshop says the range goes on shelves on Saturday, October 24, when Warhammer stores will also hand out a Tone Pro collectable coin while stocks last.",
      "Games Workshop’s preview does not give a pre-order date or prices. We’ll update this story when it does.",
      "Also this week\nOn Warhammer TV, Loremasters takes a big-picture look at Age of Sigmar’s Forces of Destruction, How We Roll covers the Adeptus Custodes, and Tale of Four Gamers builds toward its next 1,000-point game on Thursday. Final-cut versions of the animated series Sigmar’s Toll and Pariah Nexus arrive on Friday, each as one unbroken episode. Warhammer Community is also teasing a miniatures reveal for Monday and more Tone Pro videos from community painters.",
      "From the Sotoverse shop: painted armies, gaming terrain, and games for your table. Shop The Sotoverse for this and all your hobby needs."
    ]
  },
  {
    "slug": "skarre-ravenmane-cryx-dread-armada-oct-15",
    "kind": "news",
    "title": "Skarre Ravenmane fronts Cryx Dread Armada as Steamforged sets Oct 15 STL launch",
    "date": "2026-09-28",
    "game": "warmachine",
    "cover": "/images/news-skarre.jpg",
    "excerpt": "Steamforged dates the new Cryx Prime army’s print files for October 15 and tells the story of the pirate queen who commands it.",
    "source": "Loremachine — Skarre, Queen of the Dread Armada · Warmachine.gg · 28 Sep 2026",
    "sourceUrl": "https://warmachine.gg/blogs/news/loremachine-skarre-queen-of-the-dread-armada",
    "sources": [
      {
        "label": "Loremachine — Skarre, Queen of the Dread Armada",
        "url": "https://warmachine.gg/blogs/news/loremachine-skarre-queen-of-the-dread-armada"
      },
      {
        "label": "Hot Dust — Warmachine Autumn Preview: Menoth and Cryx return to MKIV",
        "url": "https://thehotdust.sotoverse.com/news/warmachine-autumn-preview-menoth-cryx"
      }
    ],
    "body": [
      "Steamforged Games has put a date on Cryx’s next army. In its September 28 Loremachine post, the company says Cryx Dread Armada, a new Prime army for Warmachine, launches October 15 in STL form for players to print, paint, and play. The same post says Skarre Ravenmane, Queen of the Dread Armada, is available on FronTiers in STL form from October 15.",
      "Hot Dust covered the Dread Armada reveal in our Warmachine Autumn Preview. That report had no launch date. This post supplies one.",
      "Who Skarre is\nAccording to Steamforged, Skarre rules the Satyxis, a people blighted by ancient dragon blood. Her bloodline is famous among them, but the Satyxis prove leadership in battle rather than inherit it, and Skarre took hers through strength, cunning, and magic.",
      "Her power runs on sacrifice. Steamforged describes her reading portents in every kill and claiming that Lord Toruk speaks to her through her victims’ entrails. She carries a ritual dagger thousands of years old that drains the energies binding her comrades together, living or dead, willing or captive, and turns them into a curse against her enemies.",
      "Why Terminus backed her\nThe post ties Skarre’s rise to a conflict between Cryx’s lich lords. It began with the destruction of Lich Lord Daeamortus and the rise of Asphyxious to that rank, and it ended with a clash between Asphyxious and Terminus.",
      "Skarre sided with Terminus when he marched on the Temple Garrodh. Steamforged says the battle was won at great cost. In defeat, Asphyxious banished Terminus from Caen and brought the temple down around Skarre. In the ruins, the post says, her vision awakened. She could trace the strands of destiny linking the living and the dead, and she saw how to restore Terminus.",
      "Once Terminus returned, he accepted Skarre as his vassal and gave her command of the entire Cryxian fleet.",
      "The war front\nSteamforged says Skarre commands with all the resources of a lich lord, leading Satyxis, revenants, ogrun, thralls, and helljacks. Her orders are to open a war front more than two thousand miles long across four nations: Khador, Ord, Cygnar, and the Protectorate of Menoth. The post says no coastal city or village in any of them is safe.",
      "What’s confirmed\n* Cryx Dread Armada launches October 15 as a new Prime army, in STL form.\n* Skarre is available on FronTiers in STL form from October 15.\n* Steamforged tells readers to follow the campaign for updates.",
      "Still unclear\n* Which models or units are included at launch beyond Skarre.\n* Pricing, tiers, or subscription terms.\n* Rules, points, or army lists for Skarre or the Dread Armada.\n* Any timing for physical, pre-printed models.",
      "Hot Dust will update this story when Steamforged publishes contents, pricing, or rules."
    ]
  },
  {
    "slug": "sunday-preview-custodes-40k-heresy",
    "kind": "news",
    "title": "Sunday Preview: Custodes Hit 40k and Heresy Next Week",
    "date": "2026-09-27",
    "game": "40k",
    "cover": "/images/news-custodes.jpg",
    "excerpt": "Games Workshop’s Sunday Preview lines up Adeptus Custodes kits, Codex, and Combat Patrol for next week’s pre-orders — playable in 40k and the Horus Heresy.",
    "source": "Sunday Preview – Might of the Ten Thousand · Warhammer Community · 27 Sep 2026",
    "sourceUrl": "https://www.warhammer-community.com/en-gb/articles/zuwukdba/sunday-preview-might-of-the-ten-thousand/",
    "sources": [
      {
        "label": "Sunday Preview — Might of the Ten Thousand",
        "url": "https://www.warhammer-community.com/en-gb/articles/zuwukdba/sunday-preview-might-of-the-ten-thousand/"
      }
    ],
    "body": [
      "Warhammer Community’s Sunday Preview for 27 September 2026 puts the Adeptus Custodes front and center. Next week’s pre-order slate brings new (and reissued) Ten Thousand kits for both Warhammer 40,000 and Warhammer: The Horus Heresy, plus Codex: Adeptus Custodes, a Combat Patrol, and a Custodes-focused Horus Heresy Journal Tactica.",
      "What’s confirmed\nNew dual-system kits. The Aquilon Terminator Sodality builds six Aquilon Terminators with Lastrum storm bolter, infernus firepike, or adrathic combi-destructor options, and solarite power gauntlet or solarite power talon in melee. The Gyrfalcon Jetbike Sodality is two jetbike Custodians with solarite power lances and a choice of Lastrum bolt cannon, adrathic devastator, arachnus volley cannon, or twin Corvae las-pulser on the mounts. The Telemon Heavy Dreadnought and Pallas Grav-Attack round out the heavy and fast firepower — Telemon with caestus fists (one swappable for adrathic desolator, arachnus storm cannon, or Iliastus accelerator culverin); Pallas with twin arachnus blaze cannon or twin Iliastus accelerator fusil.",
      "Horus Heresy kits, 40k packaging. A block of recent Age of Darkness Custodes kits returns in new packaging that spells out official Warhammer 40,000 use alongside the new Codex: Shield-Captain, Custodian Guard Sodality, Sentinel Guard Sodality, Venatari Sodality, Custodian Dreadnought, Caladius Grav-Tank, Caladius Annihilator Grav-Tank, and Coronus Grav-Carrier.",
      "Codex: Adeptus Custodes. Warhammer Community lists 13 new detachments and 27 datasheets, including the new Telemon, Pallas, and Aquilon units. Formats: standard softback in a rigid slipcase; hardback Collector’s Edition; and a Limited Edition with faux-leather hardback, miniature metal Custodian vexilla, lapel pin, 10 dice in a wooden vault, six art prints, an A2 cloth map of the Imperial Palace, and the full Adeptus Custodes Command Pack. Collector’s and Limited editions are while stocks last.",
      "Accessories and Combat Patrol. The Adeptus Custodes Command Pack (84 reference cards plus token sheets) and a 16-dice black-and-gold set are while stocks last. Combat Patrol: Adeptus Custodes packs a Shield-Captain, six Sentinel Guard, three Venatari, and a Custodian Dreadnought buildable as Contemptor-Achillus or Contemptor-Galatus.",
      "Horus Heresy Journal Tactica. The Battle for the Signus Cluster: Assault on Kol covers a Legio Custodes war on the cursed world of Kol, adds new rules for Slaanesh daemon legions, a Legendary Mission, two new Custodian Proconsul units, and updated Gyrfalcon Jetbike sodality rules.",
      "Also on the preview. White Dwarf 529 is the Halloween special (later in Japan). Black Library brings Peter Fehervari’s Cold Covenant in hardback and Special Edition — Special Edition pre-orders open 3pm UK time on 7 October 2026, while stocks last — plus paperbacks of Auxilia by Russell Zimmerman, Dropsite Massacre by John French, and Apostle by David Annandale, with French and German editions of Krakenblood and the Vaults of Terra omnibus.",
      "Still unclear\nExact pre-order open times and regional prices are not listed in this Sunday Preview. Expect the usual Saturday Pre-orders article from Warhammer Community for those details. Community also teases more Codex: Adeptus Custodes coverage and Space Marines rules updates later in the week ahead of a Saturday Codex: Space Marines release — treat that as follow-up, not part of this Custodes wave’s confirmed kit list."
    ]
  },
  {
    "slug": "warmachine-autumn-preview-menoth-cryx",
    "kind": "news",
    "title": "Warmachine Autumn Preview: Menoth and Cryx return to MKIV",
    "date": "2026-09-14",
    "game": "warmachine",
    "cover": "/images/news-warmachine-autumn.jpg",
    "excerpt": "Steamforged’s Autumn Preview puts Protectorate of Menoth (Covenant of the Flame) and Cryx (Dread Armada) back on the MKIV board — Menoth on retail bundles, Cryx via 3D FronTier first.",
    "source": "Big Autumn Preview 2026 · Warmachine.gg · Sep 2026",
    "sourceUrl": "https://warmachine.gg/blogs/news/big-autumn-preview-2026-new-menoth-army-unveiled",
    "sources": [
      {
        "label": "Big Autumn Preview 2026 — new Menoth army unveiled",
        "url": "https://warmachine.gg/blogs/news/big-autumn-preview-2026-new-menoth-army-unveiled"
      },
      {
        "label": "Warmachine Wednesday — 2 September 2026",
        "url": "https://warmachine.gg/blogs/news/warmachine-wednesday-september-02-2026"
      },
      {
        "label": "Warmachine Wednesday — 9 September 2026",
        "url": "https://warmachine.gg/blogs/news/warmachine-wednesday-september-09-2026"
      }
    ],
    "body": [
      "Steamforged Games’ Autumn Preview (around 1 September 2026) put two of Warmachine’s longest-missing classic factions back on the MKIV board at once: the Protectorate of Menoth as Covenant of the Flame, and Cryx as Dread Armada.",
      "That’s confirmed on warmachine.gg. The 2 September and 9 September Warmachine Wednesday posts keep both armies in the product pipeline.",
      "What’s confirmed — Menoth (Covenant of the Flame)\nThe Protectorate returns as a Prime army led by Feora, mixing classic Menite warjacks with new MKIV-era forces. Steamforged has published:\n* Defenders of the Flame Command Set (command-level / about 30-point play)\n* Army boxes: Scourge of the Unbeliever, Bastions of Faith, and Heralds of Perdition\n* Separate Revenger (light) and Crusader (heavy) warjack boxes\n* A full Protectorate of Menoth Army Bundle that includes exclusive Four Gifts cards (Wall, Sheaf, Fire, and Law)\nA 100-point Covenant list is already in the Warmachine app, and the relevant models are playable on Wartable. As of the 9 September Wednesday post, the Army Bundle and its Four Gifts exclusives remain available through 29 September. Check individual product pages for ship timing.",
      "What’s confirmed — Cryx (Dread Armada)\nCryx’s return is also official. Steamforged presented Dread Armada in the same Autumn Preview and is routing the first playable path through Warmachine 3D FronTier (STL / Tribe), with a signup for when that collection goes live. Physical retail timing beyond that path is not spelled out in the Wednesday posts used for this piece.\nThe same 9 September post also notes a Necrofactorium reboxing wave — Command Set, army boxes, and warjack breakouts on pre-order. That is a packaging refresh, separate from the new Dread Armada army.",
      "Still unclear\nWritten Steamforged posts are thinner on deep Cryx unit and box lists than they are for Menoth; the company points players to the Autumn Preview stream for the full Dread Armada pass. Treat crowdfunding timing and secondary “busiest week” framing as color, not the core of the story.",
      "Why it matters\nTwo iconic Privateer-era factions finally get MKIV Prime identities under Steamforged — Menoth on a conventional bundle path, Cryx leading with the 3D FronTier route. This is a faction-return story from outside Games Workshop’s calendar."
    ]
  },
  {
    "slug": "sunday-preview-space-marines-drop-in",
    "kind": "news",
    "title": "Sunday Preview: Space Marines Drop In — Codex, Kits, and Armageddon Standalones",
    "date": "2026-09-13",
    "game": "40k",
    "cover": "/images/news-marines-drop.jpg",
    "excerpt": "Games Workshop’s 13 Sep Sunday Preview puts Codex: Space Marines, refreshed core kits, Kaius Konorius, and Armageddon standalones on the board — plus Black Library and a heavy Marine week on Warhammer TV / Community.",
    "source": "Sunday Preview – Space Marines drop in from orbit · Warhammer Community · 13 Sep 2026",
    "sourceUrl": "https://www.warhammer-community.com/en-gb/articles/c4icjvyy/sunday-preview-space-marines-drop-in-from-orbit/",
    "body": [
      "Warhammer Community’s Sunday Preview for 13 September 2026 is a Space Marines drop: the new Codex in three editions, a wave of refreshed and new kits, standalone Armageddon plastic, and a Black Library slate beside it.",
      "Codex: Space Marines (232 pages)\nCollecting guides, updated datasheets, and fortress-monastery background, in three SKUs:\n* Regular — softback in a slipcase\n* Collector’s Edition — wraparound hardback, gold foil, printed page edges, ribbon marker · while stocks last\n* Limited Edition — six swappable metal First Founding cover badges, six art prints, metal Crux Terminatus, and the full Command Pack · while stocks last",
      "Command Pack & dice (while stocks last)\n* Command Pack: 94 reference cards (every detachment — rules, enhancements, stratagems) + 24 double-sided tokens (Combat Doctrines, special rules, objectives)\n* Dice: 16 silver with black pips; stylised Crux Terminatus on the six",
      "Kit wave\n* Captain on Bike — master-crafted power weapon, thunder hammer, or plasma pistol; bike in motion or foot-down; five heads (2 helmeted / 3 bare) · delayed Japan & South Korea\n* Outrider Squad (3) — sergeant power sword or thunder hammer; 7 bare + 3 helmeted heads; pouches/accessories\n* Vanguard Veterans with Jump Packs (5) — combat shields for the full squad; power swords/axes; sergeant relic blade, or power fist / thunder hammer\n* Intercessor Squad (remixed) — 13 helmets across three marks; sergeant power sword, power fist, and classic back banner\n* Kaius Konorius — Ultramarines Chapter champion / blademaster; protects the Leader of his unit from Precision attacks · delayed Japan",
      "Armageddon standalones (original push-fit forms)\n* Champions of Armageddon — Jump Pack Chaplain, Ancient, three Eradicators with heavy bolters\n* Eradicators — separate box if you only want more of the unit\n* Land Speeder — onslaught gatling cannon or pyrecannon · Champions of Armageddon and Land Speeder delayed Japan",
      "Black Library\n* Helbrecht: Sin of Hope (Mike Vincent) — hardback + Special Edition (while stocks last). SE pre-order: Wednesday 23 September, 3pm UK\n* Master of Rites (Rob Young) — new paperback\n* Dawn of Fire: Crusade of Vengeance — omnibus (Avenging Son, The Gate of Bones, The Wolftime)\n* The Sundering — omnibus (Malerion / Shadow King / Caledor + The Bloody-Handed + The Dark Path)",
      "This week to watch (per WC)\n* Warhammer TV: Space Marines vs Tyranids battle report using new Codex rules (first showcase)\n* Painting Desk with Darren Latham\n* Community: rules previews and detachment reveals (no miniature Monday — “something even cooler” instead)",
      "Warhammer Community has not posted the pre-order Saturday or street date in this Preview. Spikey Bits reports Saturday 19 September ~1pm ET pre-order and Saturday 3 October street — treat that as provisional until GW confirms."
    ]
  },
  {
    "slug": "sunday-preview-sons-of-behemat",
    "kind": "news",
    "title": "Sunday Preview: Sons of Behemat shake the board",
    "date": "2026-09-06",
    "game": "aos",
    "cover": "/images/news-behemat.jpg",
    "excerpt": "Warhammer Community’s Sunday Preview put Sons of Behemat front and center — new character, troops, limited boxes, battletome, plus Middle-earth Battlehosts.",
    "source": "Sunday Preview – Shake the earth with the Sons of Behemat · Warhammer Community · 6 Sep 2026",
    "body": [
      "Warhammer Community’s Sunday Preview put the Sons of Behemat front and center. New character Ma Maegran (Chooser of the Mighty) with her Ancient Ghyrochs, Boss-stompers that alt-build as Rock-hurlers for the new Spearhead, a limited Stomper Tribe box (Warstomper Mega-Gargant plus three Mancrushers), the Brawlers of Behemat duel set with two Mega-Gargants and Embergard ruins, a full Battletome pass (hardback plus Gamer’s Edition with warscroll cards), and faction dice that put a foot on the six.",
      "Same article drops three Middle-earth Strategy Battle Game Battlehosts — Rohan (Théoden), Mirkwood (Legolas), and Dol Guldur (Bolg) — with downloadable paired rules on Warhammer Community so two boxes can fight without buying the library.",
      "This is the week’s wargaming board for Hot Dust. Pre-order timing: confirm on the official Warhammer store before you set a timer (hobby press has pointed at Saturday 12 Sep 2026)."
    ]
  },
  {
    "slug": "eaters-season-pulse",
    "kind": "news",
    "title": "World Eaters season pulse: what I am actually putting on the table",
    "date": "2026-09-06",
    "game": "40k-we",
    "cover": "/images/eaters-close.jpg",
    "excerpt": "A practical roundup of the current World Eaters tools — not a rumor pile, just what survived contact with my garage table.",
    "body": [
      "Every season somebody writes a thousand-word “state of the legion” that reads like a tournament packet. This is not that. This is what I am gluing, magnetizing, and throwing at friends on a Sunday.",
      "Eightbound still do the thing. The Forgefiend is the shooting I allow myself because I refuse to pretend World Eaters have a gunline. Jakhals are cheaper than they feel when you need a screen. Angron is a coin flip that I will keep flipping because the model slaps and the charge is a religious experience.",
      "What I am not chasing: the third detachment that requires a new box I do not have hours to build. Box to tabletop means I play the models I already own. If a dataslate makes Berzerkers worse, I will still run Berzerkers. They are the point.",
      "If you want the video version, it will land on The Hot Dust when I have a quiet evening and a working mic. No schedule promises. The baby does not run on FAQs."
    ]
  },
  {
    "slug": "warmachine-mkiv-tables",
    "kind": "news",
    "title": "Warmachine MKIV is still alive, and the jacks still hit like trucks",
    "date": "2026-08-30",
    "game": "warmachine",
    "cover": "/images/report-warmachine.jpg",
    "excerpt": "A field note from the other side of the hobby desk: organized play is quieter, the rules are cleaner, and Khador still wants to walk forward.",
    "body": [
      "Warmachine does not get the oxygen 40K gets, which is exactly why I keep a jack cadre primed. MKIV trimmed a lot of the old exception-tax. You can teach it in an evening. You can play it in an evening. That is rare.",
      "Local tables are small but loyal. If you have a steamjack on a shelf, this is the season to blow the dust off. The Hot Dust will keep posting lists and after-action notes because a wargaming hub that only speaks one game is just a faction blog in a trench coat.",
      "Dark Forge Miniatures has been printing a few jack-adjacent proxies for terrain and objective markers. More on that in the shop links. Support the people making the tools you actually use."
    ]
  },
  {
    "slug": "starcraft-dust-bowl-notes",
    "kind": "news",
    "title": "StarCraft notes from a time-poor Terran",
    "date": "2026-08-18",
    "game": "starcraft",
    "cover": "/images/report-starcraft.jpg",
    "excerpt": "Map pool thoughts, a build I can finish before pickup, and why RTS fundamentals keep leaking into my 40K play.",
    "body": [
      "I play Terran because the race matches my hobby brain: walls, schedules, and a quiet panic when the plan slips. Dust Bowl-type maps punish greedy thirds. So do wide-open 40K tables. Same lesson, different models.",
      "The build I can actually execute with kids in the house: Reaper expand, react to the scout, 2-1-1 if they are greedy, marine-tank if they are not. No eight-minute cheese I will forget under pressure.",
      "Strategy coverage belongs here. The Hot Dust is a wargaming and strategy desk, not a single-codex shrine. If you came for chainaxes and stayed for a replay, good. That is the point of the Sotoverse — the games talk to each other."
    ]
  },
  {
    "slug": "dark-forge-desk",
    "kind": "news",
    "title": "Dark Forge Miniatures: the paint and print desk next door",
    "date": "2026-08-05",
    "game": "other",
    "cover": "/images/about-desk.jpg",
    "source": "Dark Forge Miniatures",
    "excerpt": "A sister brand in the Sotoverse orbit — painting, 3D print work, and the bits that get an army from grey plastic to table-ready.",
    "body": [
      "Dark Forge Miniatures is the paint-and-print arm I point people at when they ask how a time-poor army gets terrain, proxies, and a standard that does not look like a board-game punch-out.",
      "The channel lives at youtube.com/@darkforgeminiatures. Watch the process, steal the shortcuts, then buy from people who actually make the stuff. I will keep cross-posting when a recipe or a print run is worth your evening.",
      "The Hot Dust is battle reports and news. Dark Forge is the bench. Sotoverse Games is the storefront. Three doors, one house."
    ]
  },
  {
    "slug": "sotoverse-shop-floor",
    "kind": "news",
    "title": "On the Sotoverse shop floor: games, kits, and the next restock",
    "date": "2026-07-25",
    "game": "other",
    "cover": "/images/news-dust.jpg",
    "source": "Sotoverse Games",
    "excerpt": "Sotoverse.com is the retail desk — vintage and modern games, kits, and the odd treasure that should not live in a closet.",
    "body": [
      "Sotoverse Entertainment is the umbrella. The Hot Dust is the wargaming voice. Sotoverse Games at sotoverse.com is where the physical things live: games, kits, and collectibles that I actually want in the house.",
      "If you are here for a battle report and you need a starter box, a deck, or something off the wall, start at the shop. I will not pretend this site is a monastery. The hobby is a supply chain. Support it.",
      "Restocks are irregular, same as uploads. When something lands, it lands. Check the Links page, then check the store."
    ]
  }
];

export const REPORTS_CATALOG: BattleReport[] = [
  {
    "slug": "blood-tide-hive-sorrow",
    "kind": "report",
    "title": "Blood Tide at Hive Sorrow",
    "date": "2026-09-04",
    "game": "40k-we",
    "featured": true,
    "excerpt": "Two thousand points of World Eaters into a Guard gunline on a dust-bowl table. I had ninety minutes, a half-painted Forgefiend, and a plan that lasted until turn two.",
    "cover": "/images/report-eaters.jpg",
    "photos": [
      "/images/report-eaters.jpg",
      "/images/eaters-close.jpg",
      "/images/hero-ash.jpg"
    ],
    "mission": "Take and Hold — Sweeping Fire",
    "result": "victory",
    "opponent": "Astra Militarum, 2,000 pts",
    "youtube": "https://www.youtube.com/@thehotdust",
    "lists": [
      {
        "player": "Dave — World Eaters",
        "faction": "World Eaters",
        "points": 2000,
        "entries": [
          {
            "name": "Angron",
            "loadout": "Warlord"
          },
          {
            "name": "Khârn the Betrayer"
          },
          {
            "name": "Master of Executions"
          },
          {
            "name": "10 Khorne Berzerkers",
            "loadout": "eviscerator, icon"
          },
          {
            "name": "10 Khorne Berzerkers",
            "loadout": "plasma pistol, icon"
          },
          {
            "name": "Rhino ×2"
          },
          {
            "name": "Exalted Eightbound ×3"
          },
          {
            "name": "Eightbound ×3"
          },
          {
            "name": "Jakhals ×20"
          },
          {
            "name": "Forgefiend",
            "loadout": "ectoplasma cannons"
          },
          {
            "name": "Helbrute",
            "loadout": "hammer and fist"
          }
        ]
      },
      {
        "player": "Mike — Astra Militarum",
        "faction": "Astra Militarum",
        "points": 2000,
        "entries": [
          {
            "name": "Cadian Castellan",
            "loadout": "Warlord"
          },
          {
            "name": "Tank Commander",
            "loadout": "Battle Cannon"
          },
          {
            "name": "Leman Russ ×2"
          },
          {
            "name": "Rogal Dorn"
          },
          {
            "name": "Cadian Shock Troops ×20"
          },
          {
            "name": "Kasrkin ×10"
          },
          {
            "name": "Heavy Weapons Squad ×2"
          },
          {
            "name": "Scout Sentinels ×3"
          }
        ]
      }
    ],
    "body": [
      "Hive Sorrow is a name I gave a 6x4 of cork and baking soda because I refuse to keep calling it “the brown table.” Mike brought Guard. I brought the red tide. We both had kids’ bedtimes in the back of our heads, so the clocks were real.",
      "I deployed Angron behind a ruin spine and shoved both Rhinos up the center with Berzerkers packed like sardines. Jakhals screened the left. The Forgefiend sat on a hill I promised myself I would finish painting “this weekend.” It is still primer and a slapchop of Khorne Red. From three feet it reads. That is the whole hobby philosophy of this site.",
      "Turn one was artillery weather. The Dorn clipped a Rhino, the Forgefiend ate two lascannon wounds and lived on a feel-no-pain that made Mike swear. I Blessing-rolled into extra AP and sent the Exalted Eightbound through a gap that should not have existed. They tagged the Kasrkin and deleted the unit. Blood Tithe ticked. The table started to smell like it always does when World Eaters are working: like you are about to do something unwise.",
      "Turn two I charged Angron at the Tank Commander because I am not a patient man. He made it. The Russ died in one activation. Khârn’s Berzerkers spilled from the second Rhino into Shock Troops and overran an objective. Mike’s return fire deleted the Helbrute and put Angron on three wounds. Fair. The Blood God does not do tidy.",
      "The game ended 78–61 on primary and a pile of secondary that I only remembered because I wrote them on painter’s tape. Victory, but the kind you feel in your knees. After pack-up I still had forty minutes to glue magnets into a Land Raider conversion before the house went quiet. Box to tabletop. That is the job."
    ]
  },
  {
    "slug": "the-chapel-burns",
    "kind": "report",
    "title": "The Chapel Burns",
    "date": "2026-08-22",
    "game": "40k-we",
    "excerpt": "World Eaters into Adepta Sororitas on a cathedral board. I brought chainaxes. She brought faith, flamers, and a math problem I could not outrun.",
    "cover": "/images/report-sisters.jpg",
    "photos": [
      "/images/report-sisters.jpg",
      "/images/eaters-close.jpg"
    ],
    "mission": "Incursion — Sacred Ground",
    "result": "defeat",
    "opponent": "Adepta Sororitas, 2,000 pts",
    "lists": [
      {
        "player": "Dave — World Eaters",
        "faction": "World Eaters",
        "points": 2000,
        "entries": [
          {
            "name": "Daemon Prince of Khorne",
            "loadout": "wings, Warlord"
          },
          {
            "name": "Lord Invocatus"
          },
          {
            "name": "10 Khorne Berzerkers"
          },
          {
            "name": "10 Khorne Berzerkers"
          },
          {
            "name": "Eightbound ×6"
          },
          {
            "name": "Jakhals ×10"
          },
          {
            "name": "Chaos Spawn ×2"
          },
          {
            "name": "Forgefiend"
          }
        ]
      },
      {
        "player": "Len — Adepta Sororitas",
        "faction": "Adepta Sororitas",
        "points": 2000,
        "entries": [
          {
            "name": "Morvenn Vahl",
            "loadout": "Warlord"
          },
          {
            "name": "Canoness"
          },
          {
            "name": "Celestian Sacresants"
          },
          {
            "name": "Retributors",
            "loadout": "multi-meltas"
          },
          {
            "name": "Battle Sisters ×20"
          },
          {
            "name": "Seraphim"
          },
          {
            "name": "Castigator"
          },
          {
            "name": "Exorcist"
          }
        ]
      }
    ],
    "body": [
      "I paint Sisters too, which is how I know exactly how much this list hurts. Len’s board was all broken nave and candle-wax craters. Beautiful. Mean.",
      "I tried to play the mission. That was the first mistake. World Eaters do not “play the mission” so much as they set the mission on fire and stand in the smoke. Lord Invocatus tagged a flank, Berzerkers made a charge they had no right making, and then the Exorcist started doing hymns with missiles.",
      "Morvenn Vahl walked onto the center objective like she paid rent. The Daemon Prince tagged her, bounced, and died to the clap-back. Blood Tithe never got over the hump. I conceded with twenty minutes on the clock because the math was done and the baby monitor was chirping.",
      "Losses are the reports I actually need. If you only post the blowouts, you are running a highlight reel, not a hobby log. Next time I screen the Prince, I respect the Exorcist lanes, and I stop treating Miracle Dice like a rumor."
    ]
  },
  {
    "slug": "brass-lords-on-the-ice",
    "kind": "report",
    "title": "Brass Lords on the Ice",
    "date": "2026-08-09",
    "game": "40k-we",
    "excerpt": "A snow-dusted 40K into Space Wolves. Chainaxes versus thunderwolves, and a reminder that terrain height still matters when you are angry.",
    "cover": "/images/report-wolves.jpg",
    "photos": [
      "/images/report-wolves.jpg",
      "/images/eaters-close.jpg",
      "/images/hero-ash.jpg"
    ],
    "mission": "Supply Drop",
    "result": "draw",
    "opponent": "Space Wolves, 2,000 pts",
    "lists": [
      {
        "player": "Dave — World Eaters",
        "faction": "World Eaters",
        "points": 2000,
        "entries": [
          {
            "name": "Angron"
          },
          {
            "name": "Khârn the Betrayer"
          },
          {
            "name": "10 Khorne Berzerkers ×2"
          },
          {
            "name": "Exalted Eightbound ×3"
          },
          {
            "name": "Jakhals ×10"
          },
          {
            "name": "Forgefiend"
          },
          {
            "name": "Heldrake"
          }
        ]
      }
    ],
    "body": [
      "We used baking soda for snow and regretted it immediately. It migrates. By turn three the Berzerkers looked like they had been fighting in powdered sugar. Cinematic, if you squint.",
      "Space Wolves want the same fight World Eaters want, which makes the game a knife fight in a phone booth. Angron and a Thunderwolf brick traded in the center. Both died. Khârn did Khârn things, including clipping his own unit on a bad pile-in. I laughed. My opponent laughed. The Blood God, I assume, also laughed.",
      "Final score tied on primary. We called it a draw, swept the baking soda into a bin, and I still had time to slap contrast on a Terminator before bed. That is a good Sunday."
    ]
  },
  {
    "slug": "iron-and-steam-khador",
    "kind": "report",
    "title": "Iron and Steam on the Black River",
    "date": "2026-07-28",
    "game": "warmachine",
    "excerpt": "Khador jacks into Cygnar guns. Warmachine still scratches an itch 40K cannot: every activation is a sentence, and you feel each one.",
    "cover": "/images/report-warmachine.jpg",
    "photos": [
      "/images/report-warmachine.jpg",
      "/images/news-dust.jpg"
    ],
    "mission": "King of the Hill — MKIV",
    "result": "victory",
    "opponent": "Cygnar, 100 pts",
    "lists": [
      {
        "player": "Dave — Khador",
        "faction": "Khador",
        "points": 100,
        "entries": [
          {
            "name": "Kommander Sorscha"
          },
          {
            "name": "Juggernaut"
          },
          {
            "name": "Destroyer"
          },
          {
            "name": "Marauder"
          },
          {
            "name": "Winter Guard Infantry"
          },
          {
            "name": "Widowmakers"
          }
        ]
      },
      {
        "player": "Chris — Cygnar",
        "faction": "Cygnar",
        "points": 100,
        "entries": [
          {
            "name": "Major Victoria Haley"
          },
          {
            "name": "Defender"
          },
          {
            "name": "Cyclone"
          },
          {
            "name": "Stormblade Infantry"
          },
          {
            "name": "Arcane Tempest Rifleman"
          }
        ]
      }
    ],
    "body": [
      "Warmachine is the other table in the garage. Privateer Press still makes a game that feels like a chess clock strapped to a steam engine, and I will die on that hill.",
      "Sorscha’s feat turn is the whole report. I froze the Defender, walked the Juggernaut in, and bought attacks until the jack was scrap. Chris’s Haley feat tried to steal the clock back. Widowmakers on a hill earned their points. Winter Guard did what Winter Guard do: die in a useful direction.",
      "If 40K is a riot, Warmachine is a duel. I need both. This site will keep logging both. The Khador jacks are still the most satisfying metal-on-metal kit I own, even when half of them are three-d printed stand-ins from the Dark Forge desk."
    ]
  },
  {
    "slug": "red-planet-drop",
    "kind": "report",
    "title": "Red Planet Drop",
    "date": "2026-07-12",
    "game": "starcraft",
    "excerpt": "A StarCraft session that started as “one ladder game” and turned into a two-hour Terran vs Zerg clinic on when to stop greed-macroing.",
    "cover": "/images/report-starcraft.jpg",
    "photos": [
      "/images/report-starcraft.jpg",
      "/images/news-dust.jpg"
    ],
    "mission": "Ladder — Dust Bowl LE",
    "result": "defeat",
    "opponent": "Zerg, Diamond",
    "lists": [
      {
        "player": "Dave — Terran",
        "faction": "Terran",
        "points": 0,
        "entries": [
          {
            "name": "Opening",
            "loadout": "Reaper expand into 2-1-1"
          },
          {
            "name": "Mid",
            "loadout": "Marine-Medivac, three tanks"
          },
          {
            "name": "Gas",
            "loadout": "late Vikings, too late"
          }
        ]
      }
    ],
    "body": [
      "The Hot Dust is a tabletop house, but strategy is strategy. StarCraft is the game I play when the miniatures are drying and I have forty-five minutes before pickup. This one got away from me.",
      "I greed-expanded. The Zerg ling-bane flood arrived while my third was still a command center in the air. I held with tanks on the high ground, which felt clever for ninety seconds, then the creep spread under the tanks and the game was over.",
      "Notes for next time, same as painting notes: stop adding. Two bases, react, then take the third. The ladder does not care that you “usually” have more time. Neither does a 40K round timer. Same muscle."
    ]
  },
  {
    "slug": "night-fight-in-the-nave",
    "kind": "report",
    "title": "Night Fight in the Nave",
    "date": "2026-06-20",
    "game": "kill-team",
    "excerpt": "Kill Team in a ruined chapel. Eight operatives, a lot of corners, and a reminder that World Eaters still work when the board is two feet across.",
    "cover": "/images/report-killteam.jpg",
    "photos": [
      "/images/report-killteam.jpg",
      "/images/eaters-close.jpg"
    ],
    "mission": "Loot and Salvage",
    "result": "victory",
    "opponent": "Veteran Guardsmen",
    "lists": [
      {
        "player": "Dave — World Eaters",
        "faction": "World Eaters (Kill Team)",
        "points": 0,
        "entries": [
          {
            "name": "Berzerker Champion",
            "loadout": "plasma pistol, eviscerator"
          },
          {
            "name": "Berzerker Warrior ×4"
          },
          {
            "name": "Jakhal Icon Bearer"
          },
          {
            "name": "Jakhal with mauler chainblade"
          },
          {
            "name": "Eightbound (proxy brute)"
          }
        ]
      }
    ],
    "body": [
      "Kill Team is how I get a game in on a weeknight. Setup is twenty minutes. The board is a slice of the same gothic terrain I use for 40K. The vibe is the same: red armor, bad decisions, glory.",
      "The Guardsmen had the angles. I had the charge lanes. Turn two the Champion cleared a fire team in one activation and I spent the rest of the game trying not to get greedy on salvage tokens. I got greedy anyway. Still won on operatives remaining.",
      "If you are time-poor, Kill Team is the gateway back to the big game. Paint five Berzerkers well instead of fifty badly. That is the sermon. The rest is chainaxes."
    ]
  }
];

const STORAGE_KEY = "hot-dust-journal-v1";

type Stored = { reports: BattleReport[]; news: NewsPost[] };

const EMPTY: Stored = { reports: [], news: [] };

function readStored(): Stored {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Stored>;
    return {
      reports: Array.isArray(parsed.reports) ? parsed.reports : [],
      news: Array.isArray(parsed.news) ? parsed.news : [],
    };
  } catch {
    return EMPTY;
  }
}

function writeStored(value: Stored) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

function byDateDesc<T extends { date: string }>(a: T, b: T) {
  return b.date.localeCompare(a.date);
}

export function useJournal() {
  const [stored, setStored] = useState<Stored>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setStored(readStored());
    setHydrated(true);
  }, []);

  const reports = [...stored.reports, ...REPORTS_CATALOG].sort(byDateDesc);
  const news = [...stored.news, ...NEWS_CATALOG].sort(byDateDesc);

  function addReport(report: BattleReport) {
    setStored((prev) => {
      const next = { ...prev, reports: [report, ...prev.reports] };
      writeStored(next);
      return next;
    });
  }

  function addNews(post: NewsPost) {
    setStored((prev) => {
      const next = { ...prev, news: [post, ...prev.news] };
      writeStored(next);
      return next;
    });
  }

  return { reports, news, addReport, addNews, hydrated };
}
