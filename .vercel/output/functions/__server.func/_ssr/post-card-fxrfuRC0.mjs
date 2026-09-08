import { n as formatDate, t as cn } from "./utils-BSv3A2_c.mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gameLabel } from "./journal-KkI28eB3.mjs";
import { t as Badge } from "./badge-DgEXSZaL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/post-card-fxrfuRC0.js
var import_jsx_runtime = require_jsx_runtime();
function ResultBadge({ result }) {
	if (!result) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: result === "victory" ? "ember" : result === "draw" ? "ash" : "muted",
		children: result
	});
}
function ReportCard({ report, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/reports/$slug",
		params: { slug: report.slug },
		className: cn("group flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-panel)] transition-colors duration-200 hover:border-ember/40", featured && "md:flex-row"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative overflow-hidden bg-elevated", featured ? "aspect-[16/10] md:aspect-auto md:min-h-[280px] md:w-[54%]" : "aspect-[16/10]"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: report.cover,
				alt: "",
				className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-1 flex-col gap-3 p-5", featured && "md:justify-center md:p-8"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "ember",
							children: gameLabel(report.game)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultBadge, { result: report.result }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stamp text-[11px] text-faint",
							children: formatDate(report.date)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: cn("font-display tracking-wide text-fg group-hover:text-ember-hot", featured ? "text-3xl sm:text-4xl" : "text-2xl"),
					children: report.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted sm:text-base",
					children: report.excerpt
				}),
				report.opponent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "stamp text-[11px] text-faint",
					children: ["vs ", report.opponent]
				}) : null
			]
		})]
	});
}
function NewsCard({ post }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/news/$slug",
		params: { slug: post.slug },
		className: "group grid grid-cols-[96px_1fr] gap-4 rounded-lg border border-line bg-surface p-3 transition-colors duration-200 hover:border-ember/40 sm:grid-cols-[140px_1fr] sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-[4/3] overflow-hidden rounded-md bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.cover,
				alt: "",
				className: "size-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: gameLabel(post.game) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "stamp text-[11px] text-faint",
						children: formatDate(post.date)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-xl tracking-wide text-fg group-hover:text-ember-hot",
					children: post.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 line-clamp-2 text-sm text-muted",
					children: post.excerpt
				})
			]
		})]
	});
}
//#endregion
export { ReportCard as n, NewsCard as t };
