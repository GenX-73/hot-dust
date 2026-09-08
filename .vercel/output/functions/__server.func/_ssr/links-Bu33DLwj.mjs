import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ShoppingBag, s as ExternalLink, t as Youtube } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/links-Bu33DLwj.js
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		href: "https://www.youtube.com/@thehotdust",
		title: "The Hot Dust on YouTube",
		hint: "Box-to-tabletop videos, World Eaters, terrain, and the games as they happen.",
		icon: Youtube,
		cta: "Open channel"
	},
	{
		href: "https://sotoverse.com",
		title: "Sotoverse Games",
		hint: "The Sotoverse Entertainment retail storefront — games, kits, and collectibles.",
		icon: ShoppingBag,
		cta: "Shop sotoverse.com"
	},
	{
		href: "https://www.youtube.com/@darkforgeminiatures",
		title: "Dark Forge Miniatures",
		hint: "Painting and 3D printing — the bench that gets models off the sprue and onto the table.",
		icon: Youtube,
		cta: "Open Dark Forge"
	}
];
function Links() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "stamp text-xs text-ember-hot",
				children: "Sotoverse network"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl tracking-wide sm:text-6xl",
				children: "Links / Shop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "Three doors, one house. Watch the games, buy the kits, steal the paint recipes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4",
				children: LINKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: item.href,
					target: "_blank",
					rel: "noreferrer",
					className: "group flex gap-4 rounded-xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-ember/45",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-12 shrink-0 items-center justify-center rounded-md bg-elevated text-ember-hot",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 font-display text-2xl tracking-wide text-fg group-hover:text-ember-hot",
								children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-muted" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: item.hint
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "stamp mt-3 inline-block text-xs text-ember-hot",
								children: item.cta
							})
						]
					})]
				}, item.href))
			})
		]
	});
}
//#endregion
export { Links as component };
