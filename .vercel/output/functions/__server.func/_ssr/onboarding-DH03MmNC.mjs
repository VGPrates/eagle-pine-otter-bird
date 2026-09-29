import { o as __toESM } from "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { b as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as Route$3 } from "./router-DHUMWNW2.mjs";
import { o as chooseRole, s as cn, t as Button } from "./local-api-B-gnfdua.mjs";
import { C as useSession, S as useRpgState, d as LoadingScreen } from "./app-chrome-CQ8EX2nT.mjs";
import { a as Input, i as CardTitle, n as CardDescription, o as Label, r as CardHeader, t as Card } from "./label-BHlUoey5.mjs";
import { t as CharacterForm } from "./character-form-DPBkRr8E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding-DH03MmNC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Onboarding() {
	const { intent } = Route$3.useSearch();
	const { user, isPending: authPending } = useSession();
	const { data, isPending } = useRpgState(!!user);
	const [role, setRole] = (0, import_react.useState)(intent ?? null);
	const [inviteCode, setInviteCode] = (0, import_react.useState)("");
	const queryClient = useQueryClient();
	const createMut = useMutation({
		mutationFn: (payload) => chooseRole(payload.role, payload.displayName ?? "", payload.character, payload.inviteCode),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["rpg-state"] });
			window.location.href = "/";
		},
		onError: (err) => toast.error(err.message)
	});
	if (authPending || user && isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/login" });
	if (data?.profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: data.profile.role === "gm" ? "/mestre" : "/painel" });
	const displayName = user.user_metadata?.name || user.email || "Aventureiro";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto grid min-h-dvh max-w-2xl place-items-center px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.24em] text-muted uppercase",
						children: "Primeiro passo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-2xl",
						children: "Quem é você nesta mesa?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "O cargo fica gravado no servidor. Um jogador não consegue se promover a Mestre depois — só o botão Assumir Manto, nesta tela, registra o manto." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleCard, {
						title: "Mestre da Mesa",
						body: "Conduz a campanha, altera vida e mana, entrega itens e concede pontos.",
						selected: role === "gm",
						onSelect: () => setRole("gm")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleCard, {
						title: "Jogador",
						body: "Preenche a ficha, gira o D20, cuida do inventário e gasta os pontos recebidos.",
						selected: role === "player",
						onSelect: () => setRole("player")
					})]
				}),
				role === "gm" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Ao assumir o manto, esta conta passa a ser Mestre desta mesa. O cargo não pode ser alterado depois pelo painel nem por requisição inventada."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						disabled: createMut.isPending,
						onClick: () => createMut.mutate({
							role: "gm",
							displayName
						}),
						children: createMut.isPending ? "Abrindo a mesa..." : "Assumir Manto"
					})]
				}) : null,
				role === "player" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "invite",
								children: "Código da mesa (se o Mestre tiver um)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "invite",
								value: inviteCode,
								onChange: (e) => setInviteCode(e.target.value.toUpperCase()),
								placeholder: "Opcional — a mesa única é encontrada sozinha",
								maxLength: 12,
								autoCapitalize: "characters"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Sua ficha"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterForm, {
							submitLabel: "Entrar no painel",
							pending: createMut.isPending,
							onSubmit: (draft) => createMut.mutate({
								role: "player",
								displayName,
								character: draft,
								inviteCode: inviteCode.trim() || void 0
							})
						})
					]
				}) : null
			]
		})
	});
}
function RoleCard({ title, body, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("rounded-xl bg-elevated p-4 text-left shadow-border transition-[box-shadow,background-color] duration-150", selected ? "shadow-border-hover ring-1 ring-ring/40" : "hover:shadow-border-hover"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: body
		})]
	});
}
//#endregion
export { Onboarding as component };
