import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useJournal } from "./journal-KkI28eB3.mjs";
import { t as NewsCard } from "./post-card-fxrfuRC0.mjs";
import { t as FilterBar } from "./filter-bar-DJhziQXH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news.index-Dfdfv0nD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsIndex() {
	const { news } = useJournal();
	const [game, setGame] = (0, import_react.useState)("all");
	const counts = (0, import_react.useMemo)(() => {
		const next = { all: news.length };
		for (const post of news) if (post.game) next[post.game] = (next[post.game] ?? 0) + 1;
		return next;
	}, [news]);
	const visible = game === "all" ? news : news.filter((post) => post.game === game);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "stamp text-xs text-ember-hot",
				children: "Dispatches"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl tracking-wide sm:text-6xl",
				children: "News"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Roundups from the hobby: dataslate notes, other systems, shop-floor finds, and the paint desk. Filter when you only want one table."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
					value: game,
					onChange: setGame,
					counts
				})
			}),
			visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-muted",
				children: "No dispatches on this table yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4",
				children: visible.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, { post }, post.slug))
			})
		]
	});
}
//#endregion
export { NewsIndex as component };
