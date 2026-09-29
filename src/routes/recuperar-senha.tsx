import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { authClient } from "@/lib/auth/client";
import { requestPasswordReset } from "@/lib/rpg/api";
import { APP_NAME } from "@/lib/rpg/constants";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/recuperar-senha")({
  validateSearch: (search: Record<string, unknown>): { token?: string } =>
    typeof search["token"] === "string" && search["token"] ? { token: search["token"] } : {},
  head: () => ({
    meta: [
      { title: "Recuperar senha — RPG Fallen Gods" },
      { name: "description", content: "Recupere o acesso à sua conta e defina uma nova senha." },
    ],
  }),
  component: RecoverPassword,
});

function RecoverPassword() {
  const navigate = useNavigate();
  const { token } = Route.useSearch();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSend(event: FormEvent<HTMLFormElement>) {
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

  async function onNewPassword(event: FormEvent<HTMLFormElement>) {
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
    const { error: err } = await authClient.resetPassword({ newPassword: password, token });
    setBusy(false);
    if (err) {
      setError("Este link é inválido, já foi usado ou expirou. Peça um novo.");
      return;
    }
    void navigate({ to: "/login", search: {} });
  }

  const resetStep = Boolean(token);

  return (
    <main className="grid min-h-dvh place-items-center px-4 py-10">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <CardHeader className="mb-6">
          <p className="text-xs tracking-[0.24em] text-muted uppercase">{APP_NAME}</p>
          <CardTitle className="text-2xl">{resetStep ? "Defina a nova senha" : "Esqueci minha senha"}</CardTitle>
          <CardDescription>
            {resetStep
              ? "Escolha uma nova senha. A senha antiga deixa de funcionar."
              : "Informe o email da conta. O link de redefinição vale por uma hora e só pode ser usado uma vez."}
          </CardDescription>
        </CardHeader>

        <div className="grid gap-4">
          {resetStep ? (
            <form className="grid gap-3" onSubmit={onNewPassword}>
              <div className="grid gap-1.5">
                <Label htmlFor="password">Nova senha</Label>
                <Input id="password" name="password" type="password" required minLength={8} autoComplete="new-password" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="confirm">Repita a nova senha</Label>
                <Input id="confirm" name="confirm" type="password" required minLength={8} autoComplete="new-password" />
              </div>
              {error ? <p className="text-sm text-hp-bright">{error}</p> : null}
              <Button type="submit" disabled={busy}>
                {busy ? "Salvando..." : "Salvar nova senha"}
              </Button>
            </form>
          ) : (
            <form className="grid gap-3" onSubmit={onSend}>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {info ? <p className="text-sm text-stamina-bright">{info}</p> : null}
              {previewUrl ? (
                <p className="rounded-lg bg-elevated px-3 py-2 text-sm text-muted shadow-border">
                  Neste ambiente o email não é enviado. Use o{" "}
                  <Link to="/recuperar-senha" search={{ token: previewUrl.split("token=")[1] }} className="text-fg underline-offset-4 hover:underline">
                    link de redefinição
                  </Link>
                  . Quando um serviço de email estiver configurado, o mesmo link chegará na caixa de entrada.
                </p>
              ) : null}
              {error ? <p className="text-sm text-hp-bright">{error}</p> : null}
              <Button type="submit" disabled={busy}>
                {busy ? "Enviando..." : "Enviar link"}
              </Button>
            </form>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-subtle">
          <Link to="/login" className="underline-offset-4 hover:text-fg hover:underline">
            Voltar para o login
          </Link>
        </p>
      </Card>
    </main>
  );
}
