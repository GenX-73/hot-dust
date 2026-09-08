import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useJournal } from "./journal-KkI28eB3.mjs";
import { n as ReportCard } from "./post-card-fxrfuRC0.mjs";
import { t as FilterBar } from "./filter-bar-DJhziQXH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports.index-CYw6i_fR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReportsIndex() {
	const { reports } = useJournal();
	const [game, setGame] = (0, import_react.useState)("all");
	const counts = (0, import_react.useMemo)(() => {
		const next = { all: reports.length };
		for (const report of reports) next[report.game] = (next[report.game] ?? 0) + 1;
		return next;
	}, [reports]);
	const visible = game === "all" ? reports : reports.filter((report) => report.game === game);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "stamp text-xs text-ember-hot",
				children: "After-action logs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl tracking-wide sm:text-6xl",
				children: "Battle Reports"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Filter by system. World Eaters lead the shelf, but Warmachine, StarCraft, Kill Team, and the rest of the table live here too. Army lists, photos, and the honest write-up."
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
				children: "No reports on this table yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-2",
				children: visible.map((report) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, { report }, report.slug))
			})
		]
	});
}
//#endregion
export { ReportsIndex as component };
