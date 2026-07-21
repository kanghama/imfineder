import React, { createContext, useContext, useEffect, useState } from "react";
import firebase, { isFirebaseConfigured } from "./firebase";

interface User { uid: string; isAnonymous?: boolean; displayName?: string | null; }

const AuthCtx = createContext<{ user: User | null } | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const configured = isFirebaseConfigured();

  useEffect(() => {
    if (!configured) {
      // If Firebase config is missing, short-circuit and don't attempt SDK calls
      setUser(null);
      return () => {
        /* no-op */
      };
    }

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

  if (!configured) {
    return (
      <AuthCtx.Provider value={{ user }}>
        <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24}}>
          <div style={{maxWidth: 680, textAlign: 'center'}}>
            <h2 style={{marginBottom: 12}}>Firebase 구성이 누락되었습니다</h2>
            <p style={{color: '#444', marginBottom: 12}}>환경변수 VITE_FIREBASE_* 값들이 빌드 시 주입되지 않았습니다. 로컬 테스트나 배포 빌드 시 .env 파일 또는 CI 환경변수에 Firebase 설정을 추가해주세요.</p>
            <p style={{color: '#666', fontSize: 13}}>예: VITE_FIREBASE_API_KEY, VITE_FIREBASE_PROJECT_ID, VITE_FIREBASE_APP_ID</p>
          </div>
        </div>
      </AuthCtx.Provider>
    );
  }

  return <AuthCtx.Provider value={{ user }}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

export default AuthProvider;
