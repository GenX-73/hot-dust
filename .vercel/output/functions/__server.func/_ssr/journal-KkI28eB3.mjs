import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-KkI28eB3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var GAMES = [
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
		id: "other",
		label: "Other Tables",
		short: "OT",
		family: "Wargames"
	}
];
var GAME_LABEL = Object.fromEntries(GAMES.map((g) => [g.id, g.label]));
function gameLabel(id) {
	if (!id) return "Tabletop";
	return GAME_LABEL[id] ?? "Tabletop";
}
var NEWS_CATALOG = [
	{
		slug: "sunday-preview-sons-of-behemat",
		kind: "news",
		title: "Sunday Preview: Sons of Behemat shake the board",
		date: "2026-09-06",
		game: "aos",
		cover: "/images/news-behemat.jpg",
		excerpt: "Warhammer Community’s Sunday Preview put Sons of Behemat front and center — new character, troops, limited boxes, battletome, plus Middle-earth Battlehosts.",
		source: "Sunday Preview – Shake the earth with the Sons of Behemat · Warhammer Community · 6 Sep 2026",
		body: [
			"Warhammer Community’s Sunday Preview put the Sons of Behemat front and center. New character Ma Maegran (Chooser of the Mighty) with her Ancient Ghyrochs, Boss-stompers that alt-build as Rock-hurlers for the new Spearhead, a limited Stomper Tribe box (Warstomper Mega-Gargant plus three Mancrushers), the Brawlers of Behemat duel set with two Mega-Gargants and Embergard ruins, a full Battletome pass (hardback plus Gamer’s Edition with warscroll cards), and faction dice that put a foot on the six.",
			"Same article drops three Middle-earth Strategy Battle Game Battlehosts — Rohan (Théoden), Mirkwood (Legolas), and Dol Guldur (Bolg) — with downloadable paired rules on Warhammer Community so two boxes can fight without buying the library.",
			"This is the week’s wargaming board for Hot Dust. Pre-order timing: confirm on the official Warhammer store before you set a timer (hobby press has pointed at Saturday 12 Sep 2026)."
		]
	},
	{
		slug: "eaters-season-pulse",
		kind: "news",
		title: "World Eaters season pulse: what I am actually putting on the table",
		date: "2026-09-06",
		game: "40k-we",
		cover: "/images/eaters-close.jpg",
		excerpt: "A practical roundup of the current World Eaters tools — not a rumor pile, just what survived contact with my garage table.",
		body: [
			"Every season somebody writes a thousand-word “state of the legion” that reads like a tournament packet. This is not that. This is what I am gluing, magnetizing, and throwing at friends on a Sunday.",
			"Eightbound still do the thing. The Forgefiend is the shooting I allow myself because I refuse to pretend World Eaters have a gunline. Jakhals are cheaper than they feel when you need a screen. Angron is a coin flip that I will keep flipping because the model slaps and the charge is a religious experience.",
			"What I am not chasing: the third detachment that requires a new box I do not have hours to build. Box to tabletop means I play the models I already own. If a dataslate makes Berzerkers worse, I will still run Berzerkers. They are the point.",
			"If you want the video version, it will land on The Hot Dust when I have a quiet evening and a working mic. No schedule promises. The baby does not run on FAQs."
		]
	},
	{
		slug: "warmachine-mkiv-tables",
		kind: "news",
		title: "Warmachine MKIV is still alive, and the jacks still hit like trucks",
		date: "2026-08-30",
		game: "warmachine",
		cover: "/images/report-warmachine.jpg",
		excerpt: "A field note from the other side of the hobby desk: organized play is quieter, the rules are cleaner, and Khador still wants to walk forward.",
		body: [
			"Warmachine does not get the oxygen 40K gets, which is exactly why I keep a jack cadre primed. MKIV trimmed a lot of the old exception-tax. You can teach it in an evening. You can play it in an evening. That is rare.",
			"Local tables are small but loyal. If you have a steamjack on a shelf, this is the season to blow the dust off. The Hot Dust will keep posting lists and after-action notes because a wargaming hub that only speaks one game is just a faction blog in a trench coat.",
			"Dark Forge Miniatures has been printing a few jack-adjacent proxies for terrain and objective markers. More on that in the shop links. Support the people making the tools you actually use."
		]
	},
	{
		slug: "starcraft-dust-bowl-notes",
		kind: "news",
		title: "StarCraft notes from a time-poor Terran",
		date: "2026-08-18",
		game: "starcraft",
		cover: "/images/report-starcraft.jpg",
		excerpt: "Map pool thoughts, a build I can finish before pickup, and why RTS fundamentals keep leaking into my 40K play.",
		body: [
			"I play Terran because the race matches my hobby brain: walls, schedules, and a quiet panic when the plan slips. Dust Bowl-type maps punish greedy thirds. So do wide-open 40K tables. Same lesson, different models.",
			"The build I can actually execute with kids in the house: Reaper expand, react to the scout, 2-1-1 if they are greedy, marine-tank if they are not. No eight-minute cheese I will forget under pressure.",
			"Strategy coverage belongs here. The Hot Dust is a wargaming and strategy desk, not a single-codex shrine. If you came for chainaxes and stayed for a replay, good. That is the point of the Sotoverse — the games talk to each other."
		]
	},
	{
		slug: "dark-forge-desk",
		kind: "news",
		title: "Dark Forge Miniatures: the paint and print desk next door",
		date: "2026-08-05",
		game: "other",
		cover: "/images/about-desk.jpg",
		source: "Dark Forge Miniatures",
		excerpt: "A sister brand in the Sotoverse orbit — painting, 3D print work, and the bits that get an army from grey plastic to table-ready.",
		body: [
			"Dark Forge Miniatures is the paint-and-print arm I point people at when they ask how a time-poor army gets terrain, proxies, and a standard that does not look like a board-game punch-out.",
			"The channel lives at youtube.com/@darkforgeminiatures. Watch the process, steal the shortcuts, then buy from people who actually make the stuff. I will keep cross-posting when a recipe or a print run is worth your evening.",
			"The Hot Dust is battle reports and news. Dark Forge is the bench. Sotoverse Games is the storefront. Three doors, one house."
		]
	},
	{
		slug: "sotoverse-shop-floor",
		kind: "news",
		title: "On the Sotoverse shop floor: games, kits, and the next restock",
		date: "2026-07-25",
		game: "other",
		cover: "/images/news-dust.jpg",
		source: "Sotoverse Games",
		excerpt: "Sotoverse.com is the retail desk — vintage and modern games, kits, and the odd treasure that should not live in a closet.",
		body: [
			"Sotoverse Entertainment is the umbrella. The Hot Dust is the wargaming voice. Sotoverse Games at sotoverse.com is where the physical things live: games, kits, and collectibles that I actually want in the house.",
			"If you are here for a battle report and you need a starter box, a deck, or something off the wall, start at the shop. I will not pretend this site is a monastery. The hobby is a supply chain. Support it.",
			"Restocks are irregular, same as uploads. When something lands, it lands. Check the Links page, then check the store."
		]
	}
];
var REPORTS_CATALOG = [
	{
		slug: "blood-tide-hive-sorrow",
		kind: "report",
		title: "Blood Tide at Hive Sorrow",
		date: "2026-09-04",
		game: "40k-we",
		featured: true,
		excerpt: "Two thousand points of World Eaters into a Guard gunline on a dust-bowl table. I had ninety minutes, a half-painted Forgefiend, and a plan that lasted until turn two.",
		cover: "/images/report-eaters.jpg",
		photos: [
			"/images/report-eaters.jpg",
			"/images/eaters-close.jpg",
			"/images/hero-ash.jpg"
		],
		mission: "Take and Hold — Sweeping Fire",
		result: "victory",
		opponent: "Astra Militarum, 2,000 pts",
		youtube: "https://www.youtube.com/@thehotdust",
		lists: [{
			player: "Dave — World Eaters",
			faction: "World Eaters",
			points: 2e3,
			entries: [
				{
					name: "Angron",
					loadout: "Warlord"
				},
				{ name: "Khârn the Betrayer" },
				{ name: "Master of Executions" },
				{
					name: "10 Khorne Berzerkers",
					loadout: "eviscerator, icon"
				},
				{
					name: "10 Khorne Berzerkers",
					loadout: "plasma pistol, icon"
				},
				{ name: "Rhino ×2" },
				{ name: "Exalted Eightbound ×3" },
				{ name: "Eightbound ×3" },
				{ name: "Jakhals ×20" },
				{
					name: "Forgefiend",
					loadout: "ectoplasma cannons"
				},
				{
					name: "Helbrute",
					loadout: "hammer and fist"
				}
			]
		}, {
			player: "Mike — Astra Militarum",
			faction: "Astra Militarum",
			points: 2e3,
			entries: [
				{
					name: "Cadian Castellan",
					loadout: "Warlord"
				},
				{
					name: "Tank Commander",
					loadout: "Battle Cannon"
				},
				{ name: "Leman Russ ×2" },
				{ name: "Rogal Dorn" },
				{ name: "Cadian Shock Troops ×20" },
				{ name: "Kasrkin ×10" },
				{ name: "Heavy Weapons Squad ×2" },
				{ name: "Scout Sentinels ×3" }
			]
		}],
		body: [
			"Hive Sorrow is a name I gave a 6x4 of cork and baking soda because I refuse to keep calling it “the brown table.” Mike brought Guard. I brought the red tide. We both had kids’ bedtimes in the back of our heads, so the clocks were real.",
			"I deployed Angron behind a ruin spine and shoved both Rhinos up the center with Berzerkers packed like sardines. Jakhals screened the left. The Forgefiend sat on a hill I promised myself I would finish painting “this weekend.” It is still primer and a slapchop of Khorne Red. From three feet it reads. That is the whole hobby philosophy of this site.",
			"Turn one was artillery weather. The Dorn clipped a Rhino, the Forgefiend ate two lascannon wounds and lived on a feel-no-pain that made Mike swear. I Blessing-rolled into extra AP and sent the Exalted Eightbound through a gap that should not have existed. They tagged the Kasrkin and deleted the unit. Blood Tithe ticked. The table started to smell like it always does when World Eaters are working: like you are about to do something unwise.",
			"Turn two I charged Angron at the Tank Commander because I am not a patient man. He made it. The Russ died in one activation. Khârn’s Berzerkers spilled from the second Rhino into Shock Troops and overran an objective. Mike’s return fire deleted the Helbrute and put Angron on three wounds. Fair. The Blood God does not do tidy.",
			"The game ended 78–61 on primary and a pile of secondary that I only remembered because I wrote them on painter’s tape. Victory, but the kind you feel in your knees. After pack-up I still had forty minutes to glue magnets into a Land Raider conversion before the house went quiet. Box to tabletop. That is the job."
		]
	},
	{
		slug: "the-chapel-burns",
		kind: "report",
		title: "The Chapel Burns",
		date: "2026-08-22",
		game: "40k-we",
		excerpt: "World Eaters into Adepta Sororitas on a cathedral board. I brought chainaxes. She brought faith, flamers, and a math problem I could not outrun.",
		cover: "/images/report-sisters.jpg",
		photos: ["/images/report-sisters.jpg", "/images/eaters-close.jpg"],
		mission: "Incursion — Sacred Ground",
		result: "defeat",
		opponent: "Adepta Sororitas, 2,000 pts",
		lists: [{
			player: "Dave — World Eaters",
			faction: "World Eaters",
			points: 2e3,
			entries: [
				{
					name: "Daemon Prince of Khorne",
					loadout: "wings, Warlord"
				},
				{ name: "Lord Invocatus" },
				{ name: "10 Khorne Berzerkers" },
				{ name: "10 Khorne Berzerkers" },
				{ name: "Eightbound ×6" },
				{ name: "Jakhals ×10" },
				{ name: "Chaos Spawn ×2" },
				{ name: "Forgefiend" }
			]
		}, {
			player: "Len — Adepta Sororitas",
			faction: "Adepta Sororitas",
			points: 2e3,
			entries: [
				{
					name: "Morvenn Vahl",
					loadout: "Warlord"
				},
				{ name: "Canoness" },
				{ name: "Celestian Sacresants" },
				{
					name: "Retributors",
					loadout: "multi-meltas"
				},
				{ name: "Battle Sisters ×20" },
				{ name: "Seraphim" },
				{ name: "Castigator" },
				{ name: "Exorcist" }
			]
		}],
		body: [
			"I paint Sisters too, which is how I know exactly how much this list hurts. Len’s board was all broken nave and candle-wax craters. Beautiful. Mean.",
			"I tried to play the mission. That was the first mistake. World Eaters do not “play the mission” so much as they set the mission on fire and stand in the smoke. Lord Invocatus tagged a flank, Berzerkers made a charge they had no right making, and then the Exorcist started doing hymns with missiles.",
			"Morvenn Vahl walked onto the center objective like she paid rent. The Daemon Prince tagged her, bounced, and died to the clap-back. Blood Tithe never got over the hump. I conceded with twenty minutes on the clock because the math was done and the baby monitor was chirping.",
			"Losses are the reports I actually need. If you only post the blowouts, you are running a highlight reel, not a hobby log. Next time I screen the Prince, I respect the Exorcist lanes, and I stop treating Miracle Dice like a rumor."
		]
	},
	{
		slug: "brass-lords-on-the-ice",
		kind: "report",
		title: "Brass Lords on the Ice",
		date: "2026-08-09",
		game: "40k-we",
		excerpt: "A snow-dusted 40K into Space Wolves. Chainaxes versus thunderwolves, and a reminder that terrain height still matters when you are angry.",
		cover: "/images/report-wolves.jpg",
		photos: [
			"/images/report-wolves.jpg",
			"/images/eaters-close.jpg",
			"/images/hero-ash.jpg"
		],
		mission: "Supply Drop",
		result: "draw",
		opponent: "Space Wolves, 2,000 pts",
		lists: [{
			player: "Dave — World Eaters",
			faction: "World Eaters",
			points: 2e3,
			entries: [
				{ name: "Angron" },
				{ name: "Khârn the Betrayer" },
				{ name: "10 Khorne Berzerkers ×2" },
				{ name: "Exalted Eightbound ×3" },
				{ name: "Jakhals ×10" },
				{ name: "Forgefiend" },
				{ name: "Heldrake" }
			]
		}],
		body: [
			"We used baking soda for snow and regretted it immediately. It migrates. By turn three the Berzerkers looked like they had been fighting in powdered sugar. Cinematic, if you squint.",
			"Space Wolves want the same fight World Eaters want, which makes the game a knife fight in a phone booth. Angron and a Thunderwolf brick traded in the center. Both died. Khârn did Khârn things, including clipping his own unit on a bad pile-in. I laughed. My opponent laughed. The Blood God, I assume, also laughed.",
			"Final score tied on primary. We called it a draw, swept the baking soda into a bin, and I still had time to slap contrast on a Terminator before bed. That is a good Sunday."
		]
	},
	{
		slug: "iron-and-steam-khador",
		kind: "report",
		title: "Iron and Steam on the Black River",
		date: "2026-07-28",
		game: "warmachine",
		excerpt: "Khador jacks into Cygnar guns. Warmachine still scratches an itch 40K cannot: every activation is a sentence, and you feel each one.",
		cover: "/images/report-warmachine.jpg",
		photos: ["/images/report-warmachine.jpg", "/images/news-dust.jpg"],
		mission: "King of the Hill — MKIV",
		result: "victory",
		opponent: "Cygnar, 100 pts",
		lists: [{
			player: "Dave — Khador",
			faction: "Khador",
			points: 100,
			entries: [
				{ name: "Kommander Sorscha" },
				{ name: "Juggernaut" },
				{ name: "Destroyer" },
				{ name: "Marauder" },
				{ name: "Winter Guard Infantry" },
				{ name: "Widowmakers" }
			]
		}, {
			player: "Chris — Cygnar",
			faction: "Cygnar",
			points: 100,
			entries: [
				{ name: "Major Victoria Haley" },
				{ name: "Defender" },
				{ name: "Cyclone" },
				{ name: "Stormblade Infantry" },
				{ name: "Arcane Tempest Rifleman" }
			]
		}],
		body: [
			"Warmachine is the other table in the garage. Privateer Press still makes a game that feels like a chess clock strapped to a steam engine, and I will die on that hill.",
			"Sorscha’s feat turn is the whole report. I froze the Defender, walked the Juggernaut in, and bought attacks until the jack was scrap. Chris’s Haley feat tried to steal the clock back. Widowmakers on a hill earned their points. Winter Guard did what Winter Guard do: die in a useful direction.",
			"If 40K is a riot, Warmachine is a duel. I need both. This site will keep logging both. The Khador jacks are still the most satisfying metal-on-metal kit I own, even when half of them are three-d printed stand-ins from the Dark Forge desk."
		]
	},
	{
		slug: "red-planet-drop",
		kind: "report",
		title: "Red Planet Drop",
		date: "2026-07-12",
		game: "starcraft",
		excerpt: "A StarCraft session that started as “one ladder game” and turned into a two-hour Terran vs Zerg clinic on when to stop greed-macroing.",
		cover: "/images/report-starcraft.jpg",
		photos: ["/images/report-starcraft.jpg", "/images/news-dust.jpg"],
		mission: "Ladder — Dust Bowl LE",
		result: "defeat",
		opponent: "Zerg, Diamond",
		lists: [{
			player: "Dave — Terran",
			faction: "Terran",
			points: 0,
			entries: [
				{
					name: "Opening",
					loadout: "Reaper expand into 2-1-1"
				},
				{
					name: "Mid",
					loadout: "Marine-Medivac, three tanks"
				},
				{
					name: "Gas",
					loadout: "late Vikings, too late"
				}
			]
		}],
		body: [
			"The Hot Dust is a tabletop house, but strategy is strategy. StarCraft is the game I play when the miniatures are drying and I have forty-five minutes before pickup. This one got away from me.",
			"I greed-expanded. The Zerg ling-bane flood arrived while my third was still a command center in the air. I held with tanks on the high ground, which felt clever for ninety seconds, then the creep spread under the tanks and the game was over.",
			"Notes for next time, same as painting notes: stop adding. Two bases, react, then take the third. The ladder does not care that you “usually” have more time. Neither does a 40K round timer. Same muscle."
		]
	},
	{
		slug: "night-fight-in-the-nave",
		kind: "report",
		title: "Night Fight in the Nave",
		date: "2026-06-20",
		game: "kill-team",
		excerpt: "Kill Team in a ruined chapel. Eight operatives, a lot of corners, and a reminder that World Eaters still work when the board is two feet across.",
		cover: "/images/report-killteam.jpg",
		photos: ["/images/report-killteam.jpg", "/images/eaters-close.jpg"],
		mission: "Loot and Salvage",
		result: "victory",
		opponent: "Veteran Guardsmen",
		lists: [{
			player: "Dave — World Eaters",
			faction: "World Eaters (Kill Team)",
			points: 0,
			entries: [
				{
					name: "Berzerker Champion",
					loadout: "plasma pistol, eviscerator"
				},
				{ name: "Berzerker Warrior ×4" },
				{ name: "Jakhal Icon Bearer" },
				{ name: "Jakhal with mauler chainblade" },
				{ name: "Eightbound (proxy brute)" }
			]
		}],
		body: [
			"Kill Team is how I get a game in on a weeknight. Setup is twenty minutes. The board is a slice of the same gothic terrain I use for 40K. The vibe is the same: red armor, bad decisions, glory.",
			"The Guardsmen had the angles. I had the charge lanes. Turn two the Champion cleared a fire team in one activation and I spent the rest of the game trying not to get greedy on salvage tokens. I got greedy anyway. Still won on operatives remaining.",
			"If you are time-poor, Kill Team is the gateway back to the big game. Paint five Berzerkers well instead of fifty badly. That is the sermon. The rest is chainaxes."
		]
	}
];
var STORAGE_KEY = "hot-dust-journal-v1";
var EMPTY = {
	reports: [],
	news: []
};
function readStored() {
	if (typeof window === "undefined") return EMPTY;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return EMPTY;
		const parsed = JSON.parse(raw);
		return {
			reports: Array.isArray(parsed.reports) ? parsed.reports : [],
			news: Array.isArray(parsed.news) ? parsed.news : []
		};
	} catch {
		return EMPTY;
	}
}
function writeStored(value) {
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}
function byDateDesc(a, b) {
	return b.date.localeCompare(a.date);
}
function useJournal() {
	const [stored, setStored] = (0, import_react.useState)(EMPTY);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setStored(readStored());
		setHydrated(true);
	}, []);
	const reports = [...stored.reports, ...REPORTS_CATALOG].sort(byDateDesc);
	const news = [...stored.news, ...NEWS_CATALOG].sort(byDateDesc);
	function addReport(report) {
		setStored((prev) => {
			const next = {
				...prev,
				reports: [report, ...prev.reports]
			};
			writeStored(next);
			return next;
		});
	}
	function addNews(post) {
		setStored((prev) => {
			const next = {
				...prev,
				news: [post, ...prev.news]
			};
			writeStored(next);
			return next;
		});
	}
	return {
		reports,
		news,
		addReport,
		addNews,
		hydrated
	};
}
//#endregion
export { gameLabel as n, useJournal as r, GAMES as t };
