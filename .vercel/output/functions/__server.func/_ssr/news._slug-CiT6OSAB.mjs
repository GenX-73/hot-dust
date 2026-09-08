import { n as formatDate } from "./utils-BSv3A2_c.mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ArrowLeft } from "../_libs/lucide-react.mjs";
import { r as Route$2 } from "./router-DWa7r3oD.mjs";
import { n as gameLabel, r as useJournal } from "./journal-KkI28eB3.mjs";
import { t as Badge } from "./badge-DgEXSZaL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news._slug-CiT6OSAB.js
var import_jsx_runtime = require_jsx_runtime();
function NewsArticle() {
	const { slug } = Route$2.useParams();
	const { news } = useJournal();
	const post = news.find((item) => item.slug === slug);
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Dispatch not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/news",
			className: "mt-6 inline-flex stamp text-sm text-ember-hot",
			children: "Back to news"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative min-h-[40vh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.cover,
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[40vh] max-w-3xl flex-col justify-end px-4 pb-10 pt-20 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/news",
						className: "mb-6 inline-flex min-h-11 w-fit items-center gap-2 stamp text-xs text-ash hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "All news"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "ember",
							children: gameLabel(post.game)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stamp text-[11px] text-ash",
							children: formatDate(post.date)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl tracking-wide sm:text-5xl",
						children: post.title
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [post.source ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "stamp text-xs text-muted",
			children: ["Source · ", post.source]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "prose-dust mt-6 text-[1.05rem] leading-relaxed text-ash",
			children: post.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 24)))
		})]
	})] });
}
//#endregion
export { NewsArticle as component };
