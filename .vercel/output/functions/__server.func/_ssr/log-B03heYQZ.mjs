import { i as __toESM } from "../_runtime.mjs";
import { r as slugify, t as cn } from "./utils-BSv3A2_c.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Button } from "./router-DWa7r3oD.mjs";
import { n as gameLabel, r as useJournal, t as GAMES } from "./journal-KkI28eB3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/log-B03heYQZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FieldInput({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-md border border-line bg-elevated px-3 text-base text-fg placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70", className),
		...props
	});
}
function FieldLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("stamp text-xs text-muted", className),
		...props
	});
}
function FieldArea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-md border border-line bg-elevated px-3 py-2.5 text-base text-fg placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70", className),
		...props
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: label }), children]
	});
}
function coverForGame(id) {
	if (id === "warmachine") return "/images/report-warmachine.jpg";
	if (id === "starcraft") return "/images/report-starcraft.jpg";
	if (id === "kill-team") return "/images/report-killteam.jpg";
	return "/images/report-eaters.jpg";
}
function FieldLog() {
	const { addReport, addNews } = useJournal();
	const navigate = useNavigate();
	const [kind, setKind] = (0, import_react.useState)("report");
	const [title, setTitle] = (0, import_react.useState)("");
	const [game, setGame] = (0, import_react.useState)("40k-we");
	const [excerpt, setExcerpt] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [mission, setMission] = (0, import_react.useState)("");
	const [opponent, setOpponent] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)("victory");
	const [listText, setListText] = (0, import_react.useState)("");
	function onSubmit(event) {
		event.preventDefault();
		const slug = `${slugify(title) || "field-note"}-${Date.now().toString(36)}`;
		const paragraphs = body.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
		const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
		if (!title.trim() || paragraphs.length === 0) {
			toast("Need a title and at least one paragraph.");
			return;
		}
		if (kind === "news") {
			addNews({
				slug,
				kind: "news",
				title: title.trim(),
				date,
				game,
				excerpt: excerpt.trim() || paragraphs[0].slice(0, 180),
				body: paragraphs,
				cover: "/images/news-dust.jpg",
				custom: true
			});
			toast("Dispatch filed.");
			navigate({
				to: "/news/$slug",
				params: { slug }
			});
			return;
		}
		const entries = listText.split("\n").map((line) => line.trim()).filter(Boolean).map((line) => {
			const [name, loadout] = line.split("—").map((part) => part.trim());
			return {
				name: name || line,
				loadout
			};
		});
		addReport({
			slug,
			kind: "report",
			title: title.trim(),
			date,
			game,
			excerpt: excerpt.trim() || paragraphs[0].slice(0, 180),
			body: paragraphs,
			cover: coverForGame(game),
			photos: [coverForGame(game)],
			mission: mission.trim() || void 0,
			opponent: opponent.trim() || void 0,
			result,
			custom: true,
			lists: entries.length ? [{
				player: "Filed list",
				faction: gameLabel(game),
				points: 0,
				entries
			}] : void 0
		});
		toast("Battle report filed.");
		navigate({
			to: "/reports/$slug",
			params: { slug }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "stamp text-xs text-ember-hot",
				children: "Field log"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl tracking-wide",
				children: "File a report"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "Add a battle report or news dispatch. Posts stay on this device so you can keep the desk current between games."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-2 rounded-lg border border-line bg-surface p-1",
				children: ["report", "news"].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setKind(value),
					className: cn("stamp min-h-11 rounded-md text-xs", kind === value ? "bg-ember text-ember-fg" : "text-muted hover:text-fg"),
					children: value === "report" ? "Battle report" : "News dispatch"
				}, value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-8 grid gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInput, {
							value: title,
							onChange: (e) => setTitle(e.target.value),
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Game system",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: game,
							onChange: (e) => setGame(e.target.value),
							className: "flex h-11 w-full rounded-md border border-line bg-elevated px-3 text-base text-fg",
							children: GAMES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: g.id,
								children: g.label
							}, g.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Excerpt",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInput, {
							value: excerpt,
							onChange: (e) => setExcerpt(e.target.value),
							placeholder: "One-line hook"
						})
					}),
					kind === "report" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Mission",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInput, {
									value: mission,
									onChange: (e) => setMission(e.target.value)
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Opponent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInput, {
									value: opponent,
									onChange: (e) => setOpponent(e.target.value)
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Result",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: result,
								onChange: (e) => setResult(e.target.value),
								className: "flex h-11 w-full rounded-md border border-line bg-elevated px-3 text-base text-fg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "victory",
										children: "Victory"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "defeat",
										children: "Defeat"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "draw",
										children: "Draw"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Army list (one unit per line, optional loadout after —)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldArea, {
								value: listText,
								onChange: (e) => setListText(e.target.value),
								placeholder: "10 Khorne Berzerkers — eviscerator\nForgefiend"
							})
						})
					] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Writeup (blank line between paragraphs)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldArea, {
							value: body,
							onChange: (e) => setBody(e.target.value),
							className: "min-h-48",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: kind === "report" ? "File report" : "File dispatch"
					})
				]
			})
		]
	});
}
//#endregion
export { FieldLog as component };
