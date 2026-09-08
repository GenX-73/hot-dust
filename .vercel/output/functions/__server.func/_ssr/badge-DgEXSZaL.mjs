import { t as cn } from "./utils-BSv3A2_c.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-DgEXSZaL.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "muted", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-sm border px-2 py-0.5 stamp text-[11px] leading-none", tone === "ember" && "border-ember/50 bg-ember/15 text-ember-hot", tone === "ash" && "border-ash/30 bg-ash/10 text-ash", tone === "muted" && "border-line bg-elevated text-muted", className),
		...props
	});
}
//#endregion
export { Badge as t };
