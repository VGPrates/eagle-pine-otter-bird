import { o as __toESM } from "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { b as Navigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as signIn, t as authClient } from "./client-OxHyUm2e.mjs";
import { t as APP_NAME } from "./constants-CxX0vXmq.mjs";
import { i as Route$5 } from "./router-DHUMWNW2.mjs";
import { s as cn, t as Button } from "./local-api-B-gnfdua.mjs";
import { C as useSession, d as LoadingScreen } from "./app-chrome-CQ8EX2nT.mjs";
import { a as Input, i as CardTitle, n as CardDescription, o as Label, r as CardHeader, t as Card } from "./label-BHlUoey5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CT2XaN83.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { mode, intent } = Route$5.useSearch();
	const signup = mode === "signup";
	const { user, isPending } = useSession();
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [googleBusy, setGoogleBusy] = (0, import_react.useState)(false);
	const [remember, setRemember] = (0, import_react.useState)(true);
	const [chosenIntent, setChosenIntent] = (0, import_react.useState)(intent ?? "player");
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	async function onSubmit(event) {
		event.preventDefault();
		setError(null);
		const form = new FormData(event.currentTarget);
		const email = String(form.get("email") ?? "").trim().toLowerCase();
		const password = String(form.get("password") ?? "");
		const name = String(form.get("name") ?? "").trim();
		if (!email || !password) {
			setError("Informe email e senha.");
			return;
		}
		if (signup) {
			const confirm = String(form.get("confirm") ?? "");
			if (name.length < 2) {
				setError("Escolha um nome com pelo menos 2 letras.");
				return;
			}
			if (password.length < 8) {
				setError("A senha precisa ter ao menos 8 caracteres.");
				return;
			}
			if (password !== confirm) {
				setError("As senhas não são iguais.");
				return;
			}
		}
		setBusy(true);
		try {
			if (signup) {
				const { error: err } = await authClient.signUp.email({
					email,
					password,
					name,
					callbackURL: chosenIntent === "gm" ? "/onboarding?intent=gm" : "/onboarding"
				});
				if (err) throw new Error(err.message || "Não foi possível criar a conta.");
				window.location.href = chosenIntent === "gm" ? "/onboarding?intent=gm" : "/onboarding";
				return;
			}
			const { error: err } = await authClient.signIn.email({
				email,
				password,
				rememberMe: remember,
				callbackURL: "/"
			});
			if (err) throw new Error("Email ou senha inválidos.");
			window.location.href = "/";
		} catch (e) {
			setBusy(false);
			setError(e instanceof Error ? e.message : "Não foi possível entrar.");
		}
	}
	async function onGoogle() {
		setError(null);
		setGoogleBusy(true);
		try {
			await signIn("grok-google", { callbackURL: "/" });
		} catch (e) {
			setGoogleBusy(false);
			setError(e instanceof Error ? e.message : "Não foi possível continuar com o Google.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.24em] text-muted uppercase",
							children: APP_NAME
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-2xl",
							children: signup ? "Criar conta" : "Entrar na mesa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: signup ? "Depois do cadastro você escolhe o manto de Mestre ou cria a ficha de jogador." : "Email e senha, ou continue com a conta Google." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit,
					children: [
						signup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Nome"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								required: true,
								autoComplete: "name",
								placeholder: "Como quer ser chamado",
								maxLength: 80
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								required: true,
								autoComplete: "email",
								placeholder: "voce@email.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "password",
								children: "Senha"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "password",
								name: "password",
								type: "password",
								required: true,
								minLength: signup ? 8 : void 0,
								autoComplete: signup ? "new-password" : "current-password"
							})]
						}),
						signup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "confirm",
								children: "Repita a senha"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "confirm",
								name: "confirm",
								type: "password",
								required: true,
								minLength: 8,
								autoComplete: "new-password"
							})]
						}) : null,
						signup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "Quero entrar como"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentPick, {
									title: "Jogador",
									body: "Cria a ficha e vive por ela.",
									selected: chosenIntent === "player",
									onSelect: () => setChosenIntent("player")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentPick, {
									title: "Mestre da Mesa",
									body: "Depois, assume o manto.",
									selected: chosenIntent === "gm",
									onSelect: () => setChosenIntent("gm")
								})]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 cursor-pointer items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: remember,
									onChange: (e) => setRemember(e.target.checked),
									className: "size-4 accent-primary"
								}), "Lembrar de mim"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/recuperar-senha",
								className: "text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
								children: "Esqueci minha senha"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-hp-bright",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy || googleBusy,
							children: busy ? "Abrindo..." : signup ? "Criar conta" : "Entrar"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-5 flex items-center gap-3 text-xs tracking-[0.18em] text-subtle uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
						"ou",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "secondary",
					disabled: busy || googleBusy,
					onClick: () => void onGoogle(),
					children: googleBusy ? "Abrindo o Google..." : "Continuar com Google"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-subtle",
					children: [
						signup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Já tem conta?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "text-fg underline-offset-4 hover:underline",
								children: "Entrar"
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Novo na mesa?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								search: { mode: "signup" },
								className: "text-fg underline-offset-4 hover:underline",
								children: "Criar conta"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-border",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "underline-offset-4 hover:text-fg hover:underline",
							children: "Voltar"
						})
					]
				})
			]
		})
	});
}
function IntentPick({ title, body, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("rounded-xl bg-elevated p-3 text-left shadow-border transition-[box-shadow] duration-150", selected ? "ring-1 ring-ring/50 shadow-border-hover" : "hover:shadow-border-hover"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-base",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted",
			children: body
		})]
	});
}
//#endregion
export { Login as component };
