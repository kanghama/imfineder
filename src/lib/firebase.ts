/* Firebase client scaffold for I'm Fineder
   - Uses modular Firebase Web SDK
   - Reads config from Vite env variables (VITE_FIREBASE_*)
   - Exposes: initFirebase(), auth helpers, db, storage, uploadFile(), sendMessage(), subscribeMessages()
*/
import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInAnonymously as fbSignInAnonymously, onAuthStateChanged as fbOnAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let app: ReturnType<typeof initializeApp> | null = null;
let auth: ReturnType<typeof getAuth> | null = null;
let db: ReturnType<typeof getFirestore> | null = null;
let storage: ReturnType<typeof getStorage> | null = null;

export function initFirebase() {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig as any);
  }
  // lazy init
  auth = auth || getAuth(app!);
  db = db || getFirestore(app!);
  storage = storage || getStorage(app!);
  return { app, auth, db, storage };
}

export async function signInAnonymously() {
  initFirebase();
  if (!auth) throw new Error("Firebase Auth not initialized");
  return fbSignInAnonymously(auth);
}

export function onAuthStateChanged(cb: (user: any) => void) {
  initFirebase();
  if (!auth) throw new Error("Firebase Auth not initialized");
  return fbOnAuthStateChanged(auth, cb);
}

export async function uploadFile(file: File, destPath: string, onProgress?: (percent: number) => void) {
  initFirebase();
  if (!storage) throw new Error("Firebase Storage not initialized");
  const r = storageRef(storage, destPath);
  const task = uploadBytesResumable(r, file as any);
  return new Promise<string>((resolve, reject) => {
    task.on(
      "state_changed",
      (snapshot: any) => {
        if (onProgress && snapshot.totalBytes) {
          const pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress(Math.round(pct));
        }
      },
      (err: any) => reject(err),
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve(url);
      }
    );
  });
}

export async function sendMessage(roomId: string, payload: { username: string; emoji: string; text?: string; media?: string[] }) {
  initFirebase();
  if (!db) throw new Error("Firestore not initialized");
  const col = collection(db, "rooms", roomId, "messages");
  const doc = await addDoc(col, {
    ...payload,
    ts: serverTimestamp(),
  });
  return doc.id;
}

export function subscribeMessages(roomId: string, cb: (msgs: any[]) => void) {
  initFirebase();
  if (!db) throw new Error("Firestore not initialized");
  const col = collection(db, "rooms", roomId, "messages");
  const q = query(col, orderBy("ts", "asc" as const));
  return onSnapshot(q, (snap) => {
    const out: any[] = [];
    snap.forEach((d) => out.push({ id: d.id, ...(d.data() as any) }));
    cb(out);
  });
}

export default {
  initFirebase,
  signInAnonymously,
  onAuthStateChanged,
  uploadFile,
  sendMessage,
  subscribeMessages,
};
