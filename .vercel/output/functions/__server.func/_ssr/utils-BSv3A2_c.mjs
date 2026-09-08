import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as format, t as parseISO } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-BSv3A2_c.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatDate(iso) {
	try {
		return format(parseISO(iso), "d MMM yyyy");
	} catch {
		return iso;
	}
}
function slugify(value) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 72);
}
//#endregion
export { formatDate as n, slugify as r, cn as t };
