import { n as formatDate } from "./utils-BSv3A2_c.mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-DWa7r3oD.mjs";
import { n as gameLabel, r as useJournal } from "./journal-KkI28eB3.mjs";
import { t as Badge } from "./badge-DgEXSZaL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports._slug-lHeEjj06.js
var import_jsx_runtime = require_jsx_runtime();
function ArmyLists({ lists }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "stamp text-xs text-faint",
			children: "Army lists"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-4 md:grid-cols-2",
			children: lists.map((list) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg border border-line bg-elevated p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "border-b border-line pb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stamp text-xs text-ember-hot",
							children: list.faction
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-2xl tracking-wide",
							children: list.player
						}),
						list.points > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 stamp text-[11px] tabular-nums text-muted",
							children: [list.points, " pts"]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: list.entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between gap-3 border-b border-line/60 py-1.5 text-sm last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: entry.name }), entry.loadout ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-right text-xs text-muted",
							children: entry.loadout
						}) : null]
					}, `${list.player}-${entry.name}-${entry.loadout ?? ""}`))
				})]
			}, list.player))
		})]
	});
}
function ReportArticle() {
	const { slug } = Route.useParams();
	const { reports } = useJournal();
	const report = reports.find((item) => item.slug === slug);
	if (!report) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Report not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/reports",
			className: "mt-6 inline-flex stamp text-sm text-ember-hot",
			children: "Back to reports"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative min-h-[48vh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: report.cover,
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[48vh] max-w-3xl flex-col justify-end px-4 pb-10 pt-20 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/reports",
						className: "mb-6 inline-flex min-h-11 w-fit items-center gap-2 stamp text-xs text-ash hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "All reports"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "ember",
								children: gameLabel(report.game)
							}),
							report.result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: report.result === "victory" ? "ember" : "muted",
								children: report.result
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "stamp text-[11px] text-ash",
								children: formatDate(report.date)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl tracking-wide sm:text-6xl",
						children: report.title
					}),
					report.mission ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 stamp text-xs text-muted",
						children: ["Mission · ", report.mission]
					}) : null
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			report.opponent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "stamp text-xs text-ember-hot",
				children: ["Versus ", report.opponent]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prose-dust mt-6 text-[1.05rem] leading-relaxed text-ash",
				children: report.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 24)))
			}),
			report.lists?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArmyLists, { lists: report.lists }) : null,
			report.photos.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stamp text-xs text-faint",
					children: "Table photos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: report.photos.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						className: "aspect-[16/10] w-full rounded-lg object-cover"
					}, src))
				})]
			}) : null,
			report.youtube ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: report.youtube,
					target: "_blank",
					rel: "noreferrer",
					className: "stamp text-sm text-ember-hot hover:text-ember",
					children: "Watch on The Hot Dust YouTube"
				})
			}) : null
		]
	})] });
}
//#endregion
export { ReportArticle as component };
