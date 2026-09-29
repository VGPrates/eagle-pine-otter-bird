import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { getLibrary, getMyState } from "./api";
import { fetchCustomIcons } from "./icons";

export type SessionUser = {
  id: string;
  email: string;
  user_metadata: { name: string };
};

export function useSession() {
  const { user, isPending } = useCurrentUserState();
  const sessionUser: SessionUser | null = user
    ? {
        id: user.id,
        email: user.primaryEmail ?? "",
        user_metadata: { name: user.displayName ?? "" },
      }
    : null;
  return { user: sessionUser, isPending };
}

export function useRpgState(enabled = true) {
  return useQuery({
    queryKey: ["rpg-state"],
    queryFn: getMyState,
    enabled,
    refetchInterval: 4000,
  });
}

export function useLibrary() {
  return useQuery({ queryKey: ["rpg-library"], queryFn: getLibrary });
}

export function useCustomIcons() {
  return useQuery({ queryKey: ["custom-icons"], queryFn: fetchCustomIcons });
}

export function useTableSync() {
  const qc = useQueryClient();
  useEffect(() => {
    const id = window.setInterval(() => {
      void qc.invalidateQueries({ queryKey: ["rpg-state"] });
    }, 8000);
    return () => window.clearInterval(id);
  }, [qc]);
}
