import { o as __toESM } from "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as authClient } from "./client-OxHyUm2e.mjs";
import { t as APP_NAME } from "./constants-CxX0vXmq.mjs";
import { n as Route$1 } from "./router-DHUMWNW2.mjs";
import { C as requestPasswordReset, t as Button } from "./local-api-B-gnfdua.mjs";
import { a as Input, i as CardTitle, n as CardDescription, o as Label, r as CardHeader, t as Card } from "./label-BHlUoey5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recuperar-senha-DDCryZFa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RecoverPassword() {
	const navigate = useNavigate();
	const { token } = Route$1.useSearch();
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [info, setInfo] = (0, import_react.useState)(null);
	const [previewUrl, setPreviewUrl] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSend(event) {
		event.preventDefault();
		setError(null);
		setInfo(null);
		setPreviewUrl(null);
		setBusy(true);
		try {
			const result = await requestPasswordReset(email);
			setInfo("Se existir uma conta com este email, geramos um link de recuperação válido por 1 hora.");
			if (result.previewUrl) setPreviewUrl(result.previewUrl);
		} catch {
			setError("Não foi possível pedir a recuperação agora. Tente de novo.");
		} finally {
			setBusy(false);
		}
	}
	async function onNewPassword(event) {
		event.preventDefault();
		setError(null);
		if (!token) {
			setError("Link inválido. Peça um novo.");
			return;
		}
		const form = new FormData(event.currentTarget);
		const password = String(form.get("password") ?? "");
		const confirm = String(form.get("confirm") ?? "");
		if (password.length < 8) {
			setError("A nova senha precisa ter ao menos 8 caracteres.");
			return;
		}
		if (password !== confirm) {
			setError("As senhas não são iguais.");
			return;
		}
		setBusy(true);
		const { error: err } = await authClient.resetPassword({
			newPassword: password,
			token
		});
		setBusy(false);
		if (err) {
			setError("Este link é inválido, já foi usado ou expirou. Peça um novo.");
			return;
		}
		navigate({
			to: "/login",
			search: {}
		});
	}
	const resetStep = Boolean(token);
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
							children: resetStep ? "Defina a nova senha" : "Esqueci minha senha"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: resetStep ? "Escolha uma nova senha. A senha antiga deixa de funcionar." : "Informe o email da conta. O link de redefinição vale por uma hora e só pode ser usado uma vez." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: resetStep ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "grid gap-3",
						onSubmit: onNewPassword,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									children: "Nova senha"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "password",
									name: "password",
									type: "password",
									required: true,
									minLength: 8,
									autoComplete: "new-password"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "confirm",
									children: "Repita a nova senha"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "confirm",
									name: "confirm",
									type: "password",
									required: true,
									minLength: 8,
									autoComplete: "new-password"
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-hp-bright",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: busy,
								children: busy ? "Salvando..." : "Salvar nova senha"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "grid gap-3",
						onSubmit: onSend,
						children: [
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
									value: email,
									onChange: (e) => setEmail(e.target.value)
								})]
							}),
							info ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-stamina-bright",
								children: info
							}) : null,
							previewUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "rounded-lg bg-elevated px-3 py-2 text-sm text-muted shadow-border",
								children: [
									"Neste ambiente o email não é enviado. Use o",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/recuperar-senha",
										search: { token: previewUrl.split("token=")[1] },
										className: "text-fg underline-offset-4 hover:underline",
										children: "link de redefinição"
									}),
									". Quando um serviço de email estiver configurado, o mesmo link chegará na caixa de entrada."
								]
							}) : null,
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-hp-bright",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: busy,
								children: busy ? "Enviando..." : "Enviar link"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-sm text-subtle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "underline-offset-4 hover:text-fg hover:underline",
						children: "Voltar para o login"
					})
				})
			]
		})
	});
}
//#endregion
export { RecoverPassword as component };
