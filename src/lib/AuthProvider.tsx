import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "./firebase";

interface User { uid: string; isAnonymous?: boolean; displayName?: string | null; }

const AuthCtx = createContext<{ user: User | null } | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    firebase.initFirebase();
    const unsub = firebase.onAuthStateChanged((u: any) => {
      if (!u) {
        firebase.signInAnonymously().catch(() => {});
        return;
      }
      setUser({ uid: u.uid, isAnonymous: u.isAnonymous, displayName: u.displayName || null });
    });
    return () => unsub();
  }, []);

  return <AuthCtx.Provider value={{ user }}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

export default AuthProvider;
