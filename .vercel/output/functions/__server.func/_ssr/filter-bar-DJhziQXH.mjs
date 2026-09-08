import { t as cn } from "./utils-BSv3A2_c.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as GAMES } from "./journal-KkI28eB3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/filter-bar-DJhziQXH.js
var import_jsx_runtime = require_jsx_runtime();
function FilterBar({ value, onChange, counts }) {
	const options = [{
		id: "all",
		label: "All tables"
	}, ...GAMES.map((g) => ({
		id: g.id,
		label: g.label
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0",
		children: options.map((opt) => {
			const count = counts[opt.id] ?? 0;
			if (opt.id !== "all" && count === 0) return null;
			const active = value === opt.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onChange(opt.id),
				className: cn("stamp inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md border px-3 text-xs transition-colors duration-150", active ? "border-ember bg-ember/15 text-ember-hot" : "border-line bg-surface text-muted hover:text-fg"),
				children: [opt.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums text-faint",
					children: count
				})]
			}, opt.id);
		})
	});
}
//#endregion
export { FilterBar as t };
