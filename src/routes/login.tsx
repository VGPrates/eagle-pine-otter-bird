import { useState, type FormEvent } from "react";
import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { authClient, authEnabled, signIn } from "@/lib/auth/client";
import { useSession } from "@/lib/rpg/hooks";
import { APP_NAME } from "@/lib/rpg/constants";
import { LoadingScreen } from "@/components/app-chrome";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>): { mode?: "signup"; intent?: "gm" | "player" } => {
    const mode = search["mode"] === "signup" ? "signup" : undefined;
    const intent = search["intent"] === "gm" || search["intent"] === "player" ? search["intent"] : undefined;
    return { ...(mode ? { mode } : {}), ...(intent ? { intent } : {}) };
  },
  head: () => ({
    meta: [
      { title: "Entrar — RPG Fallen Gods" },
      { name: "description", content: "Entre com email e senha, ou continue com Google." },
    ],
  }),
  component: Login,
});

function Login() {
  const { mode, intent } = Route.useSearch();
  const signup = mode === "signup";
  const { user, isPending } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [googleBusy, setGoogleBusy] = useState(false);
  const [remember, setRemember] = useState(true);
  const [chosenIntent, setChosenIntent] = useState<"gm" | "player">(intent ?? "player");

  if (isPending) return <LoadingScreen />;
  if (user) return <Navigate to="/" />;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
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
          callbackURL: chosenIntent === "gm" ? "/onboarding?intent=gm" : "/onboarding",
        });
        if (err) throw new Error(err.message || "Não foi possível criar a conta.");
        window.location.href = chosenIntent === "gm" ? "/onboarding?intent=gm" : "/onboarding";
        return;
      }
      const { error: err } = await authClient.signIn.email({
        email,
        password,
        rememberMe: remember,
        callbackURL: "/",
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

  return (
    <main className="grid min-h-dvh place-items-center px-4 py-10">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <CardHeader className="mb-6">
          <p className="text-xs tracking-[0.24em] text-muted uppercase">{APP_NAME}</p>
          <CardTitle className="text-2xl">{signup ? "Criar conta" : "Entrar na mesa"}</CardTitle>
          <CardDescription>
            {signup
              ? "Depois do cadastro você escolhe o manto de Mestre ou cria a ficha de jogador."
              : "Email e senha, ou continue com a conta Google."}
          </CardDescription>
        </CardHeader>

        <form className="grid gap-4" onSubmit={onSubmit}>
          {signup ? (
            <div className="grid gap-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" required autoComplete="name" placeholder="Como quer ser chamado" maxLength={80} />
            </div>
          ) : null}

          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" placeholder="voce@email.com" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              minLength={signup ? 8 : undefined}
              autoComplete={signup ? "new-password" : "current-password"}
            />
          </div>
          {signup ? (
            <div className="grid gap-1.5">
              <Label htmlFor="confirm">Repita a senha</Label>
              <Input id="confirm" name="confirm" type="password" required minLength={8} autoComplete="new-password" />
            </div>
          ) : null}

          {signup ? (
            <div className="grid gap-2">
              <p className="text-sm font-medium">Quero entrar como</p>
              <div className="grid grid-cols-2 gap-2">
                <IntentPick
                  title="Jogador"
                  body="Cria a ficha e vive por ela."
                  selected={chosenIntent === "player"}
                  onSelect={() => setChosenIntent("player")}
                />
                <IntentPick
                  title="Mestre da Mesa"
                  body="Depois, assume o manto."
                  selected={chosenIntent === "gm"}
                  onSelect={() => setChosenIntent("gm")}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="flex min-h-11 cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="size-4 accent-primary"
                />
                Lembrar de mim
              </label>
              <Link to="/recuperar-senha" className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline">
                Esqueci minha senha
              </Link>
            </div>
          )}

          {error ? <p className="text-sm text-hp-bright">{error}</p> : null}

          <Button type="submit" disabled={busy || googleBusy}>
            {busy ? "Abrindo..." : signup ? "Criar conta" : "Entrar"}
          </Button>
        </form>

        {authEnabled ? (
          <>
            <div className="my-5 flex items-center gap-3 text-xs tracking-[0.18em] text-subtle uppercase">
              <span className="h-px flex-1 bg-border" />
              ou
              <span className="h-px flex-1 bg-border" />
            </div>
            <Button type="button" variant="secondary" disabled={busy || googleBusy} onClick={() => void onGoogle()}>
              {googleBusy ? "Abrindo o Google..." : "Continuar com Google"}
            </Button>
          </>
        ) : null}

        <p className="mt-6 text-center text-sm text-subtle">
          {signup ? (
            <>
              Já tem conta?{" "}
              <Link to="/login" className="text-fg underline-offset-4 hover:underline">
                Entrar
              </Link>
            </>
          ) : (
            <>
              Novo na mesa?{" "}
              <Link to="/login" search={{ mode: "signup" }} className="text-fg underline-offset-4 hover:underline">
                Criar conta
              </Link>
            </>
          )}
          <span className="mx-2 text-border">·</span>
          <Link to="/" className="underline-offset-4 hover:text-fg hover:underline">
            Voltar
          </Link>
        </p>
      </Card>
    </main>
  );
}

function IntentPick({
  title,
  body,
  selected,
  onSelect,
}: {
  title: string;
  body: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "rounded-xl bg-elevated p-3 text-left shadow-border transition-[box-shadow] duration-150",
        selected ? "ring-1 ring-ring/50 shadow-border-hover" : "hover:shadow-border-hover",
      )}
    >
      <p className="font-display text-base">{title}</p>
      <p className="mt-1 text-xs text-muted">{body}</p>
    </button>
  );
}
