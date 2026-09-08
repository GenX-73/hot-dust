import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Play, c as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as Button } from "./router-DWa7r3oD.mjs";
import { r as useJournal } from "./journal-KkI28eB3.mjs";
import { n as ReportCard, t as NewsCard } from "./post-card-fxrfuRC0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BELKc3jH.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { reports, news } = useJournal();
	const featured = reports.find((r) => r.featured) ?? reports[0];
	const rest = reports.filter((r) => r.slug !== featured?.slug).slice(0, 3);
	const latestNews = news.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[78vh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-ash.jpg",
					alt: "",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg via-bg/78 to-bg/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stamp text-xs text-ember-hot",
							children: "Sotoverse Entertainment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl font-display text-6xl tracking-[0.08em] text-fg sm:text-7xl md:text-8xl",
							children: "The Hot Dust"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-lg text-ash sm:text-xl",
							children: "Battle reports from the garage table, plus news across 40K, Warmachine, StarCraft, and whatever else hits the felt this week. From box to tabletop."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/reports",
									children: ["Latest reports", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.youtube.com/@thehotdust",
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), "Watch the channel"]
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stamp text-xs text-ember-hot",
					children: "After-action"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl tracking-wide sm:text-5xl",
					children: "Latest battle reports"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/reports",
					className: "stamp hidden min-h-11 items-center text-xs text-muted hover:text-ember-hot sm:inline-flex",
					children: "All reports"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6",
				children: [featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
					report: featured,
					featured: true
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: rest.map((report) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, { report }, report.slug))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ember-rule mx-auto max-w-6xl" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stamp text-xs text-ember-hot",
					children: "Dispatches"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl tracking-wide sm:text-5xl",
					children: "Tabletop news"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/news",
					className: "stamp hidden min-h-11 items-center text-xs text-muted hover:text-ember-hot sm:inline-flex",
					children: "All news"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4",
				children: latestNews.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, { post }, post.slug))
			})]
		})
	] });
}
//#endregion
export { Home as component };
