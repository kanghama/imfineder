import { useState, useEffect, useRef, useCallback, useMemo, createContext, useContext, forwardRef, useImperativeHandle } from "react";
import svgPaths from "@/imports/Chat-1/svg-f36f8wc365";
import mediaSvg from "@/imports/MediaModal/svg-spfkt905l3";
import bottomSvgPaths from "@/imports/Bottom/svg-sfapvvb8dk";
import recBtnSvgPaths from "@/imports/RecordPlayerBtn/svg-38nqu05apu";
import imgFolder from "@/imports/ChatList-1/82ff771782600773cae572e462871cbc0ce6f000.png";

// ── Developer icon SVG paths ───────────────────────────────────
const GEAR_PATH = "M19.9 12.66C19.7397 12.4775 19.6513 12.2429 19.6513 12C19.6513 11.7571 19.7397 11.5225 19.9 11.34L21.18 9.9C21.321 9.74267 21.4086 9.5447 21.4302 9.33451C21.4518 9.12431 21.4062 8.91269 21.3 8.73L19.3 5.27C19.1949 5.08752 19.0349 4.94288 18.8427 4.85669C18.6506 4.7705 18.4362 4.74716 18.23 4.79L16.35 5.17C16.1108 5.21943 15.8617 5.17959 15.6499 5.058C15.438 4.93641 15.278 4.74148 15.2 4.51L14.59 2.68C14.5229 2.48138 14.3951 2.30886 14.2246 2.18684C14.0542 2.06482 13.8496 1.99946 13.64 2H9.64C9.42193 1.98862 9.20614 2.04893 9.02557 2.17171C8.84499 2.2945 8.70958 2.47302 8.64 2.68L8.08 4.51C8.002 4.74148 7.84197 4.93641 7.63011 5.058C7.41825 5.17959 7.16922 5.21943 6.93 5.17L5 4.79C4.80455 4.76238 4.6053 4.79322 4.42735 4.87864C4.24939 4.96406 4.1007 5.10023 4 5.27L2 8.73C1.89116 8.91065 1.84222 9.12109 1.86018 9.33122C1.87814 9.54136 1.96208 9.74044 2.1 9.9L3.37 11.34C3.53032 11.5225 3.61873 11.7571 3.61873 12C3.61873 12.2429 3.53032 12.4775 3.37 12.66L2.1 14.1C1.96208 14.2596 1.87814 14.4586 1.86018 14.6688C1.84222 14.8789 1.89116 15.0894 2 15.27L4 18.73C4.1051 18.9125 4.26512 19.0571 4.45725 19.1433C4.64939 19.2295 4.86382 19.2528 5.07 19.21L6.95 18.83C7.18922 18.7806 7.43825 18.8204 7.65011 18.942C7.86197 19.0636 8.022 19.2585 8.1 19.49L8.71 21.32C8.77958 21.527 8.915 21.7055 9.09557 21.8283C9.27614 21.9511 9.49193 22.0114 9.71 22H13.71C13.9196 22.0005 14.1242 21.9352 14.2946 21.8132C14.4651 21.6911 14.5929 21.5186 14.66 21.32L15.27 19.49C15.348 19.2585 15.508 19.0636 15.7199 18.942C15.9317 18.8204 16.1808 18.7806 16.42 18.83L18.3 19.21C18.5062 19.2528 18.7206 19.2295 18.9127 19.1433C19.1049 19.0571 19.2649 18.9125 19.37 18.73L21.37 15.27C21.4762 15.0873 21.5218 14.8757 21.5002 14.6655C21.4786 14.4553 21.391 14.2573 21.25 14.1L19.9 12.66Z";
const CLOSE_SMALL_PATH = "M5.65685 6.86135L1.4411 11.0771C1.28337 11.2348 1.08262 11.3137 0.838849 11.3137C0.595081 11.3137 0.39433 11.2348 0.236598 11.0771C0.0788658 10.9194 0 10.7186 0 10.4749C0 10.2311 0.0788658 10.0303 0.236598 9.87261L4.45235 5.65685L0.236598 1.4411C0.0788658 1.28337 0 1.08262 0 0.838849C0 0.595081 0.0788658 0.39433 0.236598 0.236598C0.39433 0.0788658 0.595081 0 0.838849 0C1.08262 0 1.28337 0.0788658 1.4411 0.236598L5.65685 4.45235L9.87261 0.236598C10.0303 0.0788658 10.2311 0 10.4749 0C10.7186 0 10.9194 0.0788658 11.0771 0.236598C11.2348 0.39433 11.3137 0.595081 11.3137 0.838849C11.3137 1.08262 11.2348 1.28337 11.0771 1.4411L6.86135 5.65685L11.0771 9.87261C11.2348 10.0303 11.3137 10.2311 11.3137 10.4749C11.3137 10.7186 11.2348 10.9194 11.0771 11.0771C10.9194 11.2348 10.7186 11.3137 10.4749 11.3137C10.2311 11.3137 10.0303 11.2348 9.87261 11.0771L5.65685 6.86135Z";
const DEV_PW = "kanghama123";

// ── Types ──────────────────────────────────────────────────────
interface User { emoji: string; username: string; }
interface Account { username: string; password: string; emoji: string; createdAt: number; }
interface ChatRoom {
  id: string; name: string; password?: string;
  createdAt: number; createdBy: string;
}
interface ChatMessage {
  id: string; roomId: string; emoji: string; username: string;
  text: string; images: string[]; videos: string[]; audios: string[];
  date: string; time: string; ts: number;
}
type View = "chatlist" | "chat" | "recent" | "photos" | "photoRoom" | "videos" | "videoRoom" | "music" | "musicRoom" | "desktop";
interface MediaInfo { src: string; senderEmoji: string; senderName: string; }
interface CtxMenu { room: ChatRoom; x: number; y: number; }
type PresenceMap = Record<string, { emoji: string; username: string; ts: number }>;

interface ChatInputHandle { addFiles: (files: FileList) => void; }

// ── Constants ──────────────────────────────────────────────────
const PEOPLE_EMOJIS = ["😀","😃","😄","😁","😆","😅","🤣","😂","🙂","🙃","🫠","😉","😊","😇","🥰","😍","🤩","😘","😗","☺️","😚","😙","🥲","😋","😛","😜","🤪","😝","🤑","🤗","🤭","🫢","🫣","🤫","🤔","🤐","🤨","😐","😑","😶","🫥","😏","😒","🙄","😬","🤥","😌","😔","😪","🤤","😴","😷","🤒","🤕","🤢","🤮","🤧","🥵","🥶","🥴","😵","🤯","🤠","🥳","🥸","😎","🤓","🧐","😕","🫤","😟","🙁","☹️","😮","😯","😲","😳","🥺","🥹","😦","😧","😨","😰","😥","😢","😭","😱","😖","😣","😞","😓","😩","😫","🥱","😤","😡","😠","🤬","😈","👿","💀","☠️","👻","👾","🤖"];
const ANIMAL_EMOJIS = ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🙈","🙉","🙊","🐔","🐧","🐦","🐤","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐞","🐜","🦟","🦗","🕷","🦂","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦞","🦀","🐡","🐠","🐟","🐬","🐳","🐋","🦈","🦭","🐊","🐅","🐆","🦓","🦍","🦧","🦣","🐘","🦛","🦏","🐪","🐫","🦒","🦘","🦬","🐃","🐂","🐄","🐎","🐖","🐏","🐑","🦙","🐐","🦌","🐕","🐩","🦮","🐈","🐓","🦃","🦤","🦚","🦜","🦢","🦩","🕊","🐇","🦝","🦨","🦡","🦫","🦦","🦥","🐁","🐀","🐿","🦔","🐉","🐲"];
const ALL_EMOJIS = [...PEOPLE_EMOJIS, ...ANIMAL_EMOJIS];
const RANDOM_EMOJI = () => ALL_EMOJIS[Math.floor(Math.random() * ALL_EMOJIS.length)];

// ── Storage ────────────────────────────────────────────────────
const K = {
  USER: "imf_user", ROOMS: "imf_rooms",
  MSGS: (id: string) => `imf_msgs_${id}`,
  PRESENCE: "imf_presence",
  ROOM_PRESENCE: (id: string) => `imf_rp_${id}`,
  ACCOUNTS: "imf_accounts",
  SESSION: "imf_session",
};

const loadUser = (): User | null => { try { const v = localStorage.getItem(K.USER); return v ? JSON.parse(v) : null; } catch { return null; } };
const saveUser = (u: User) => localStorage.setItem(K.USER, JSON.stringify(u));
const loadRooms = (): ChatRoom[] => { try { const v = localStorage.getItem(K.ROOMS); return v ? JSON.parse(v) : []; } catch { return []; } };
const saveRooms = (r: ChatRoom[]) => localStorage.setItem(K.ROOMS, JSON.stringify(r));
const loadMsgs = (id: string): ChatMessage[] => { try { const v = localStorage.getItem(K.MSGS(id)); return v ? JSON.parse(v) : []; } catch { return []; } };
const saveMsgs = (id: string, m: ChatMessage[]) => localStorage.setItem(K.MSGS(id), JSON.stringify(m));
const loadPresence = (): PresenceMap => { try { const v = localStorage.getItem(K.PRESENCE); return v ? JSON.parse(v) : {}; } catch { return {}; } };
const savePresence = (p: PresenceMap) => localStorage.setItem(K.PRESENCE, JSON.stringify(p));
const updateMyPresence = (u: User) => {
  const p = loadPresence(); p[u.username] = { emoji: u.emoji, username: u.username, ts: Date.now() }; savePresence(p);
};
const updateRoomPresence = (roomId: string, u: User) => {
  try { const raw = localStorage.getItem(K.ROOM_PRESENCE(roomId)); const p: PresenceMap = raw ? JSON.parse(raw) : {}; p[u.username] = { emoji: u.emoji, username: u.username, ts: Date.now() }; localStorage.setItem(K.ROOM_PRESENCE(roomId), JSON.stringify(p)); } catch { /* ignore */ }
};
const removeRoomPresence = (roomId: string, username: string) => {
  try { const raw = localStorage.getItem(K.ROOM_PRESENCE(roomId)); const p: PresenceMap = raw ? JSON.parse(raw) : {}; delete p[username]; localStorage.setItem(K.ROOM_PRESENCE(roomId), JSON.stringify(p)); } catch { /* ignore */ }
};
const getRoomOnlineUsers = (roomId: string): Array<{ emoji: string; username: string }> => {
  try { const raw = localStorage.getItem(K.ROOM_PRESENCE(roomId)); const p: PresenceMap = raw ? JSON.parse(raw) : {}; const cutoff = Date.now() - 90_000; return Object.values(p).filter(u => u.ts > cutoff).sort((a, b) => b.ts - a.ts); } catch { return []; }
};
const getOnlineUsers = (): Array<{ emoji: string; username: string }> => {
  const p = loadPresence(); const cutoff = Date.now() - 90_000;
  return Object.values(p).filter(u => u.ts > cutoff).sort((a, b) => b.ts - a.ts);
};
const loadAccounts = (): Record<string, Account> => { try { const v = localStorage.getItem(K.ACCOUNTS); return v ? JSON.parse(v) : {}; } catch { return {}; } };
const saveAccounts = (a: Record<string, Account>) => localStorage.setItem(K.ACCOUNTS, JSON.stringify(a));

const fmtDate = (d: Date) => `${d.getFullYear()}. ${String(d.getMonth()+1).padStart(2,"0")}. ${String(d.getDate()).padStart(2,"0")}.`;
const fmtTime = (d: Date) => `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
const fmtSec = (s: number) => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(Math.floor(s%60)).padStart(2,"0")}`;

const blobToDataUrl = (blob: Blob): Promise<string> =>
  new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result as string); r.onerror = rej; r.readAsDataURL(blob); });

// ── Dark Mode Context ──────────────────────────────────────────
const DMCtx = createContext(false);
const useDM = () => useContext(DMCtx);
const SF = "font-[system-ui,sans-serif]";
const NS = "select-none";

// ── Scroll fade hook + overlays ────────────────────────────────
function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      setAtTop(el.scrollTop <= 2);
      setAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight <= 2);
    };
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    el.addEventListener("scroll", check, { passive: true });
    return () => { ro.disconnect(); el.removeEventListener("scroll", check); };
  }, []);
  return { ref, atTop, atBottom };
}
function ScrollFadeEdge({ pos, visible, color, size = 40 }: { pos: "top" | "bottom"; visible: boolean; color: string; size?: number }) {
  return (
    <div className="absolute inset-x-0 pointer-events-none z-[1] transition-opacity duration-300"
      style={{
        [pos]: 0, height: size,
        background: `linear-gradient(to ${pos === "top" ? "bottom" : "top"}, ${color}, transparent)`,
        opacity: visible ? 1 : 0,
      }} />
  );
}

// ── Traffic Lights ─────────────────────────────────────────────
function TrafficLights({ onClose, allGray }: { onClose?: () => void; allGray?: boolean }) {
  return (
    <div className={`h-[14px] relative shrink-0 w-[58px] ${NS}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 14">
        <circle cx="7" cy="7" fill={allGray ? "#D0D0D0" : "#FF0000"} r="7"
          onClick={allGray ? undefined : onClose} style={{ cursor: allGray ? "default" : "pointer" }} />
        <circle cx="29" cy="7" fill="#D0D0D0" r="7" />
        <circle cx="51" cy="7" fill="#D0D0D0" r="7" />
      </svg>
    </div>
  );
}

// ── Icon Button ────────────────────────────────────────────────
function IconBtn({ children, onClick, size = 40 }: { children: React.ReactNode; onClick?: () => void; size?: number }) {
  const dm = useDM();
  const [hov, setHov] = useState(false);
  const [press, setPress] = useState(false);
  const hover = dm ? (press ? "#444" : hov ? "#333" : "") : (press ? "#dfdfdf" : hov ? "#e0e0e0" : "");
  return (
    <div className={`relative flex items-center justify-center rounded-full cursor-pointer transition-colors ${NS}`}
      style={{ width: size, height: size, background: hover || undefined }}
      onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => { setHov(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>
      {children}
    </div>
  );
}

// ── Pill Container ─────────────────────────────────────────────
function PillContainer({ children }: { children: React.ReactNode }) {
  const dm = useDM();
  return (
    <div className={`relative rounded-[1000px] shrink-0 flex items-center ${dm ? "bg-[#2a2a2a]" : "bg-[#fafafa]"} ${NS}`}>
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">{children}</div>
      <div aria-hidden className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────
function IcClock({ active }: { active?: boolean }) {
  const dm = useDM(); const c = active ? "#0076FF" : (dm ? "#c0c0c0" : "#404040");
  return <div className="overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[12.5%]"><div className="absolute inset-[-5.56%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p157b3400} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d={svgPaths.p2f4cfcc0} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg></div></div></div>;
}
function IcShare({ active }: { active?: boolean }) {
  const dm = useDM(); const c = active ? "#0076FF" : (dm ? "#c0c0c0" : "#404040");
  return <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgPaths.p37dd8680} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg></div>;
}
function IcDownload({ active }: { active?: boolean }) {
  const dm = useDM(); const c = active ? "#0076FF" : (dm ? "#c0c0c0" : "#404040");
  return <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgPaths.p38c15580} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg></div>;
}
function IcDesktop({ active }: { active?: boolean }) {
  const dm = useDM(); const c = active ? "#0076FF" : (dm ? "#c0c0c0" : "#404040");
  return <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgPaths.pba86e80} fill={c}/></svg></div>;
}
function IcFinder({ active }: { active?: boolean }) {
  const dm = useDM(); const c = active ? "#0076FF" : (dm ? "#c0c0c0" : "#404040");
  return <div className="overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[6.25%]"><div className="absolute inset-[-4.76%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23.0005"><path d={svgPaths.p315389a0} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d={svgPaths.p18de900} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d={svgPaths.p20621e80} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d={svgPaths.pc410200} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg></div></div></div>;
}
function IcVideo({ active }: { active?: boolean }) {
  const dm = useDM(); const c = active ? "#0076FF" : (dm ? "#c0c0c0" : "#404040");
  return <div className="overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[16.67%_8.33%]"><div className="absolute inset-[-6.25%_-5%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18"><path d={svgPaths.pb9f0e80} stroke={c} strokeLinejoin="round" strokeWidth="2"/><path d={svgPaths.p2c569200} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d={svgPaths.p2bd57900} fill={c} stroke={c} strokeLinejoin="round" strokeWidth="2"/></svg></div></div></div>;
}
function IcMusic({ active }: { active?: boolean }) {
  const dm = useDM(); const c = active ? "#0076FF" : (dm ? "#c0c0c0" : "#404040");
  return <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path clipRule="evenodd" d={svgPaths.p1c485700} fill={c} fillRule="evenodd"/></svg></div>;
}
function IcPhoto({ active }: { active?: boolean }) {
  const dm = useDM(); const c = active ? "#0076FF" : (dm ? "#c0c0c0" : "#404040");
  return <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgPaths.p15551280} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429"/><path d={svgPaths.p23a5a700} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429"/></svg></div>;
}
function IcApp() {
  const dm = useDM(); const c = dm ? "#c0c0c0" : "#404040";
  return <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path clipRule="evenodd" d={svgPaths.p1bd9ce40} fill={c} fillRule="evenodd"/></svg></div>;
}
function IcBack({ dim }: { dim?: boolean }) {
  const dm = useDM();
  const c = dim ? (dm ? "#3a3a3a" : "#D0D0D0") : (dm ? "#c0c0c0" : "#404040");
  return <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path clipRule="evenodd" d={svgPaths.p15f49900} fill={c} fillRule="evenodd"/></svg></div>;
}
function IcSearch() {
  const dm = useDM();
  return <div className="relative shrink-0 size-[40px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40"><path d={svgPaths.p1dc30a80} fill={dm ? "#c0c0c0" : "#404040"}/></svg></div>;
}
function IcDarkMode() {
  const dm = useDM();
  return <div className="relative shrink-0 size-[16px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16"><path d={svgPaths.p2f333800} fill={dm ? "#c0c0c0" : "#404040"}/><path clipRule="evenodd" d={svgPaths.p25a73100} fill={dm ? "#c0c0c0" : "#404040"} fillRule="evenodd"/></svg></div>;
}
function IcPlus() {
  const dm = useDM();
  return <div className="relative shrink-0 size-[16px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16"><path d={svgPaths.p37668200} fill={dm ? "#c0c0c0" : "#404040"}/></svg></div>;
}
function IcSend() {
  const dm = useDM();
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p18002200} stroke={dm ? "#c0c0c0" : "#404040"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
      </svg>
    </div>
  );
}

// ── Play Triangle ──────────────────────────────────────────────
function IcPlayTriangle({ color = "#404040" }: { color?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 1.5C2.5 1.1 2.9 0.85 3.25 1.05L11.0 5.55C11.35 5.73 11.35 6.27 11.0 6.45L3.25 10.95C2.9 11.15 2.5 10.9 2.5 10.5V1.5Z" fill={color}/>
    </svg>
  );
}

// ── Audio Slider ───────────────────────────────────────────────
function AudioSlider({ progress, onSeek }: { progress: number; onSeek: (p: number) => void }) {
  const handleX = 17.25 + Math.max(0, Math.min(1, progress)) * 70.5;
  const fillW = Math.max(0, handleX - 10.25);
  return (
    <div className="h-[8px] relative shrink-0 w-[105px] cursor-pointer"
      onClick={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const svgX = (e.clientX - rect.left) / rect.width * 105;
        onSeek(Math.max(0, Math.min(1, (svgX - 17.25) / 70.5)));
      }}>
      <div className="absolute" style={{ top: "-162.5%", left: 0, right: 0, bottom: "-162.5%" }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 34">
          <rect fill="#F0F0F0" height="7.5" rx="3.75" stroke="#B0B0B0" strokeWidth="0.5" width="84.5" x="10.25" y="13.25"/>
          {fillW > 0.5 && <rect fill="#404040" height="7.5" rx="3.75" width={fillW} x="10.25" y="13.25"/>}
          <circle cx={handleX} cy="17" fill="white" r="7" stroke="#808080" strokeWidth="0.5"/>
        </svg>
      </div>
    </div>
  );
}

// ── Record Player Inline (for chat messages + music view) ──────
function RecordPlayerInline({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;
    audio.onloadedmetadata = () => setDuration(audio.duration || 0);
    audio.ontimeupdate = () => setCurrentTime(audio.currentTime);
    audio.onended = () => { setIsPlaying(false); };
    return () => { audio.pause(); audio.src = ""; audioRef.current = null; };
  }, [src]);

  const toggle = () => {
    const a = audioRef.current; if (!a) return;
    if (isPlaying) { a.pause(); setIsPlaying(false); }
    else { if (a.ended) a.currentTime = 0; a.play().then(() => setIsPlaying(true)).catch(() => {}); }
  };
  const seek = (p: number) => {
    const a = audioRef.current; if (!a || !duration) return; a.currentTime = p * duration;
  };
  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div className="bg-[#fafafa] relative rounded-[1000px] shrink-0" style={{ height: 40, minWidth: 220 }}>
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] h-full">
        <div className="flex items-center justify-center gap-[4px] px-[12px] mr-[-4px] shrink-0">
          <span className={`${SF} font-[510] text-[12px] text-black whitespace-nowrap`}>{fmtSec(currentTime)}</span>
          <span className={`${SF} font-[510] text-[12px] text-black`}>/</span>
          <span className={`${SF} font-[510] text-[12px] text-black whitespace-nowrap`}>{fmtSec(duration)}</span>
        </div>
        <AudioSlider progress={progress} onSeek={seek} />
        <div className="flex items-center justify-center overflow-clip p-[20px] relative shrink-0 size-[40px] mr-[-4px] cursor-pointer" onClick={toggle}>
          {isPlaying
            ? <div className="bg-[#404040] relative rounded-[2px] shrink-0 size-[12px]"/>
            : <IcPlayTriangle />}
        </div>
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]"/>
    </div>
  );
}

// ── Divider ────────────────────────────────────────────────────
function Divider14() {
  return (
    <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
      <div className="flex-none rotate-90"><div className="h-0 relative w-[14px]"><div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
          <line stroke="#808080" strokeLinecap="round" strokeOpacity="0.2" x1="0.5" x2="13.5" y1="0.5" y2="0.5"/>
        </svg>
      </div></div></div>
    </div>
  );
}

// ── Sidebar ────────────────────────────────────────────────────
function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) {
  const dm = useDM();
  const [hov, setHov] = useState(false);
  const [press, setPress] = useState(false);
  const baseBg = active ? (dm ? "bg-[#3a3a3a]" : "bg-[#eaeaea]") : press ? (dm ? "bg-[#444]" : "bg-[#dfdfdf]") : hov ? (dm ? "bg-[#333]" : "bg-[#e0e0e0]") : "";
  return (
    <div className={`${baseBg} relative rounded-[10px] shrink-0 w-full cursor-pointer transition-colors ${NS}`} onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => { setHov(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit]">
        <div className="flex gap-[10px] items-center px-[12px] py-[8px] w-full">
          {icon}
          <p className={`${SF} font-[510] leading-[normal] shrink-0 text-[14px] whitespace-nowrap ${active ? "text-[#0076ff]" : dm ? "text-[#c0c0c0]" : "text-[#404040]"}`}>{label}</p>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ view, onNavigate, onShare, showDev, onCloseDev }: {
  view: View; onNavigate: (v: View) => void; onShare: () => void;
  showDev: boolean; onCloseDev: () => void;
}) {
  const dm = useDM();
  const isChatActive = !showDev && (view === "chatlist" || view === "chat");
  const isPhotoActive = !showDev && (view === "photos" || view === "photoRoom");
  const isVideoActive = !showDev && (view === "videos" || view === "videoRoom");
  const isMusicActive = !showDev && (view === "music" || view === "musicRoom");
  const sbFade = useScrollFade();
  const sbBg = dm ? "#252525" : "#fafafa";
  return (
    <div className={`h-full relative rounded-[18px] shrink-0 w-[200px] flex flex-col`} style={{ minWidth: 200, background: sbBg }}>
      <div className="overflow-clip rounded-[inherit] flex-1 flex flex-col min-h-0">
        <div className="relative flex-1 min-h-0">
          <div ref={sbFade.ref} className="absolute inset-0 flex flex-col gap-[24px] items-start p-[14px] overflow-y-auto custom-scroll">

          <div className="flex flex-col items-start shrink-0 w-full">
            <SidebarItem icon={<IcClock active={view === "recent"} />} label="최근 항목" active={view === "recent"} onClick={() => onNavigate("recent")} />
            <SidebarItem icon={<IcShare />} label="공유" onClick={onShare} />
          </div>
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
            <div className="flex items-center px-[12px] py-[4px] shrink-0 w-full">
              <p className={`${SF} font-bold leading-[normal] shrink-0 ${dm ? "text-[#666]" : "text-[#808080]"} text-[12px] whitespace-nowrap`}>즐겨찾기</p>
            </div>
            <SidebarItem icon={<IcDownload />} label="다운로드" />
            <SidebarItem icon={<IcDesktop active={!showDev && view === "desktop"} />} label="데스크탑" active={!showDev && view === "desktop"} onClick={() => onNavigate("desktop")} />
            <SidebarItem icon={<IcFinder active={isChatActive} />} label="I'm Fineder" active={isChatActive} onClick={() => onNavigate("chatlist")} />
            <SidebarItem icon={<IcVideo active={isVideoActive} />} label="동영상" active={isVideoActive} onClick={() => onNavigate("videos")} />
            <SidebarItem icon={<IcMusic active={isMusicActive} />} label="음악" active={isMusicActive} onClick={() => onNavigate("music")} />
            <SidebarItem icon={<IcPhoto active={isPhotoActive} />} label="그림" active={isPhotoActive} onClick={() => onNavigate("photos")} />
            <SidebarItem icon={<IcApp />} label="응용 프로그램" />
            {showDev && (
              <div className={`bg-[#eaeaea] relative rounded-[10px] shrink-0 w-full cursor-pointer ${NS}`} onClick={onCloseDev}>
                <div className="flex gap-[10px] items-center px-[12px] py-[8px] w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={GEAR_PATH} fill="#0076FF"/>
                    </svg>
                  </div>
                  <p className={`${SF} font-[510] leading-[normal] flex-1 min-w-0 text-[14px] text-[#0076ff]`}>개발자 설정</p>
                  <div className="relative shrink-0" style={{ width: 11.31, height: 11.31 }}>
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3137 11.3137">
                      <path d={CLOSE_SMALL_PATH} fill="#0076FF"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
            <div className="flex items-center px-[12px] py-[4px] shrink-0 w-full">
              <p className={`${SF} font-bold leading-[normal] shrink-0 ${dm ? "text-[#666]" : "text-[#808080]"} text-[12px] whitespace-nowrap`}>태그</p>
            </div>
            <SidebarItem icon={<div className="size-[24px] flex items-center justify-center"><div className="size-[14px] rounded-full bg-[#FF0000]"/></div>} label="빨간색" />
            <SidebarItem icon={<div className="size-[24px] flex items-center justify-center"><div className="size-[14px] rounded-full bg-[#FF8800]"/></div>} label="주황색" />
          </div>
          </div>
          <ScrollFadeEdge pos="top" visible={!sbFade.atTop} color={sbBg} size={28} />
          <ScrollFadeEdge pos="bottom" visible={!sbFade.atBottom} color={sbBg} size={28} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-[18px] shadow-[10px_0px_40px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

// ── TopBar ─────────────────────────────────────────────────────
function TopBar({ msgCount, onBack, onForward, canBack, canForward, onNewRoom, onDarkMode, onUserCount, onConnectClick, view, title }: {
  msgCount: number; onBack: () => void; onForward: () => void;
  canBack: boolean; canForward: boolean; onNewRoom: () => void;
  onDarkMode: () => void; onUserCount: () => void;
  onConnectClick: (e: React.MouseEvent) => void; view: View; title?: string;
}) {
  const dm = useDM();
  const sep = <div className="flex h-[24px] items-center justify-center shrink-0 w-[1px]"><div className="h-full w-[1px] bg-[#808080]/20 rounded-full" /></div>;
  const isDesktop = view === "desktop";
  const pillBg = dm ? "bg-[#2a2a2a]" : "bg-[#fafafa]";
  const iconColor = dm ? "#c0c0c0" : "#404040";
  return (
    <div className={`drop-shadow-[0px_0px_10px_rgba(0,0,0,0.06)] flex items-center justify-between shrink-0 w-full ${NS}`}>
      <div className="flex items-center gap-[14px]">
        <PillContainer>
          <IconBtn onClick={onBack} size={40}><IcBack dim={!canBack} /></IconBtn>
          {sep}
          <div style={{ transform: "scaleX(-1)" }}><IconBtn onClick={onForward} size={40}><IcBack dim={!canForward} /></IconBtn></div>
        </PillContainer>
        {title && (
          <p className={`${SF} font-bold text-[16px] ${dm ? "text-[#e0e0e0]" : "text-black"} whitespace-nowrap`}>{title}</p>
        )}
      </div>
      {isDesktop ? (
        <div className="flex gap-[12px] items-center shrink-0">
          <div className={`${pillBg} relative rounded-[1000px] shrink-0`}>
            <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
              <div className="flex items-center justify-center overflow-clip p-[8px] relative shrink-0 size-[40px]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke={iconColor} strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke={iconColor} strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke={iconColor} strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke={iconColor} strokeWidth="2"/>
                </svg>
              </div>
              {sep}
              <div className="flex items-center justify-center overflow-clip p-[8px] relative shrink-0 size-[40px]">
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                  <rect x="1" y="1" width="20" height="3" rx="1.5" fill={iconColor}/>
                  <rect x="1" y="6" width="20" height="3" rx="1.5" fill={iconColor}/>
                  <rect x="1" y="11" width="20" height="3" rx="1.5" fill={iconColor}/>
                </svg>
              </div>
            </div>
            <div aria-hidden className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-[1000px]"/>
          </div>
          <div className={`${pillBg} relative rounded-[1000px] shrink-0`}>
            <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
              <div className="flex items-center justify-center overflow-clip p-[8px] relative shrink-0 size-[40px]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12H20M12 4L20 12L12 20" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {sep}
              <div className="flex items-center justify-center overflow-clip p-[8px] relative shrink-0 size-[40px]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="7" r="1" fill={iconColor}/>
                </svg>
              </div>
              {sep}
              <div className="flex items-center justify-center overflow-clip p-[8px] relative shrink-0 size-[40px]">
                <svg width="4" height="18" viewBox="0 0 4 18" fill="none">
                  <circle cx="2" cy="2" r="2" fill={iconColor}/>
                  <circle cx="2" cy="9" r="2" fill={iconColor}/>
                  <circle cx="2" cy="16" r="2" fill={iconColor}/>
                </svg>
              </div>
            </div>
            <div aria-hidden className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-[1000px]"/>
          </div>
          <PillContainer>
            <div className="flex items-center justify-center overflow-clip p-[8px] relative shrink-0 size-[40px]">
              <IcSearch />
            </div>
          </PillContainer>
        </div>
      ) : (
        <div className="flex gap-[28px] items-center shrink-0">
          <div className="flex gap-[14px] items-center shrink-0">
            <button className={`${SF} font-[510] text-[14px] ${dm ? "text-[#c0c0c0]/60" : "text-[rgba(64,64,64,0.6)]"} whitespace-nowrap cursor-pointer hover:underline`} onClick={onUserCount}>{msgCount}명</button>
            <Divider14 />
            <div className="flex gap-[8px] items-center shrink-0 cursor-pointer" onClick={onConnectClick}>
              <div className="bg-[#35c75a] rounded-full shrink-0 size-[8px]" />
              <p className={`${SF} font-[510] text-[14px] ${dm ? "text-[#c0c0c0]/60" : "text-[rgba(64,64,64,0.6)]"} whitespace-nowrap hover:underline`}>연결됨</p>
            </div>
          </div>
          <div className="flex gap-[12px] items-center shrink-0">
            <PillContainer>
              <div className="relative size-[40px] cursor-pointer flex items-center justify-center"><IcSearch /></div>
            </PillContainer>
            <PillContainer>
              <IconBtn size={40} onClick={onDarkMode}><IcDarkMode /></IconBtn>
              {sep}
              <IconBtn size={40} onClick={onNewRoom}><IcPlus /></IconBtn>
            </PillContainer>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Col Headers ────────────────────────────────────────────────
function ColHeaders({ dev }: { dev?: boolean }) {
  const dm = useDM(); const tc = dm ? "text-[#888]" : "text-[#808080]";
  return (
    <div className={`relative shrink-0 w-full ${NS}`}>
      <div aria-hidden className={`absolute inset-0 border-b border-solid pointer-events-none ${dm ? "border-white/10" : "border-[#d0d0d0]"}`} />
      <div className="flex gap-[14px] items-center px-[24px] py-[8px] w-full">
        <div className="flex items-center justify-between shrink-0 w-[200px]">
          <div className="flex items-center">
            <p className={`${SF} font-normal opacity-0 text-[14px] w-[24px]`}>B</p>
            <p className={`${SF} font-bold text-[12px] ${tc} whitespace-nowrap`}>이름</p>
          </div>
          <Divider14 />
        </div>
        <div className="flex flex-1 min-w-0 items-center justify-between">
          <p className={`${SF} font-bold text-[12px] ${tc} whitespace-nowrap`}>{dev ? "비밀번호" : "내용"}</p>
          <Divider14 />
        </div>
        {!dev && (
          <div className="flex items-center justify-between shrink-0 w-[140px]">
            <p className={`${SF} font-bold text-[12px] ${tc} whitespace-nowrap`}>날짜</p>
            <Divider14 />
          </div>
        )}
        <div className={`flex items-center shrink-0 ${dev ? "w-[140px]" : "w-[120px]"}`}>
          <p className={`${SF} font-bold text-[12px] ${tc} whitespace-nowrap`}>{dev ? "생성 날짜" : "시간"}</p>
        </div>
      </div>
    </div>
  );
}

// ── Overlay ────────────────────────────────────────────────────
function Overlay({ onClick }: { onClick?: () => void }) {
  const dm = useDM();
  return <div className={`absolute inset-0 ${dm ? "bg-black/40" : "bg-black/10"}`} onClick={onClick} />;
}

// ── Emoji Picker ───────────────────────────────────────────────
function EmojiPicker({ selected, onSelect }: { selected: string; onSelect: (e: string) => void }) {
  const dm = useDM();
  const fade = useScrollFade();
  const selectedRef = useRef<HTMLButtonElement>(null);
  const pickerBg = dm ? "#252525" : "#ffffff";
  useEffect(() => {
    const container = fade.ref.current; const el = selectedRef.current;
    if (!container || !el) return;
    const top = el.offsetTop - container.clientHeight / 2 + el.offsetHeight / 2;
    container.scrollTop = Math.max(0, top);
  }, []);
  return (
    <div className={`h-[220px] rounded-[4px] w-full border shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] ${dm ? "border-white/10" : "border-[#b0b0b0]/50"}`} style={{ background: pickerBg }}>
      <div className="relative h-full rounded-[4px]">
        <div ref={fade.ref} className="absolute inset-0 overflow-y-auto custom-scroll rounded-[4px]">
          <div className="flex flex-wrap gap-[2px] p-[4px]">
            {ALL_EMOJIS.map(em => (
              <button key={em} ref={em === selected ? selectedRef : null}
                onClick={() => onSelect(em)}
                className={`text-[22px] w-[34px] h-[34px] flex items-center justify-center rounded-[4px] cursor-pointer transition-colors ${selected === em ? "bg-[#0076ff]" : dm ? "hover:bg-[#3a3a3a]" : "hover:bg-[#e0e0e0]"}`}>
                {em}
              </button>
            ))}
          </div>
        </div>
        <ScrollFadeEdge pos="top" visible={!fade.atTop} color={pickerBg} size={24} />
        <ScrollFadeEdge pos="bottom" visible={!fade.atBottom} color={pickerBg} size={24} />
      </div>
    </div>
  );
}

// ── StartModal ─────────────────────────────────────────────────
function StartModal({ mode, currentUser, onLogin, onRegister, onCancel }: {
  mode: "setup" | "edit";
  currentUser?: User;
  onLogin?: (username: string, password: string) => void;
  onRegister: (user: User, password: string) => void;
  onCancel?: () => void;
}) {
  const dm = useDM();
  const [username, setUsername] = useState(currentUser?.username ?? "");
  const [password, setPassword] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(() => currentUser?.emoji ?? RANDOM_EMOJI());
  const isEdit = mode === "edit";

  const handleLogin = () => { if (!username.trim() || !password) return; onLogin?.(username.trim(), password); };
  const handleRegister = () => { if (!username.trim() || !password) return; onRegister({ emoji: selectedEmoji, username: username.trim() }, password); };
  const handleEditDone = () => { if (!username.trim()) return; onRegister({ emoji: selectedEmoji, username: username.trim() }, password); };

  const mBg = dm ? "bg-[#252525]" : "bg-[#f6f6f6]";
  const mBorder = dm ? "border-white/10" : "border-[#b0b0b0]/50";
  const mTitle = dm ? "text-[#c0c0c0]" : "text-[#404040]";
  const mLabel = dm ? "text-[#c0c0c0]" : "text-black";
  const mInput = dm ? "bg-[#1e1e1e] border-white/10" : "bg-white drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)] border-[#b0b0b0]/50";
  const mInputText = dm ? "text-[#e0e0e0] placeholder:text-[#555]" : "text-black placeholder:text-[#b0b0b0]";
  const mCancel = dm ? "bg-[#3a3a3a] border-white/10 hover:bg-[#4a4a4a]" : "bg-white border-[#b0b0b0]/50 hover:bg-[#e0e0e0]";
  const mCancelText = dm ? "text-[#e0e0e0]" : "text-black";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Overlay onClick={isEdit ? onCancel : undefined} />
      <div className={`${mBg} relative rounded-[14px] w-[360px] z-10 shadow-[0px_10px_40px_0px_rgba(0,0,0,0.4)] border ${mBorder}`}>
        <div className="flex flex-row items-center w-full">
          <div className="flex gap-[10px] items-center p-[8px] w-full">
            <TrafficLights allGray={!isEdit} onClose={isEdit ? onCancel : undefined} />
            <p className={`flex-1 ${SF} font-bold ${mTitle} text-[12px] text-center`}>{isEdit ? "내 정보 변경" : "I'm Fineder 시작"}</p>
            <div className="h-[14px] w-[58px] opacity-0" />
          </div>
        </div>
        <div className="flex flex-col gap-[14px] items-start p-[8px] w-full">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
            <p className={`${SF} font-bold text-[12px] ${mLabel} whitespace-nowrap`}>사용자 이름</p>
            <div className={`${mInput} rounded-[4px] w-full border`}>
              <div className="flex items-start p-[4px] w-full">
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && !e.nativeEvent.isComposing) isEdit ? handleEditDone() : handleLogin(); }}
                  placeholder="입력"
                  className={`w-full bg-transparent outline-none border-none ${SF} font-[510] text-[12px] ${mInputText}`} autoFocus />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
            <p className={`${SF} font-bold text-[12px] ${mLabel} whitespace-nowrap`}>{isEdit ? "새 비밀번호 (변경 시 입력)" : "비밀번호"}</p>
            <div className={`${mInput} rounded-[4px] w-full border`}>
              <div className="flex items-start p-[4px] w-full">
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && !e.nativeEvent.isComposing) isEdit ? handleEditDone() : handleLogin(); }}
                  placeholder={isEdit ? "(선택)" : "입력"}
                  className={`w-full bg-transparent outline-none border-none ${SF} font-[510] text-[12px] ${mInputText}`} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
            <p className={`${SF} font-bold text-[12px] ${mLabel} whitespace-nowrap`}>이모티콘</p>
            <EmojiPicker selected={selectedEmoji} onSelect={setSelectedEmoji} />
          </div>
          <div className="flex items-center justify-end gap-[8px] shrink-0 w-full">
            {isEdit ? (
              <>
                <button onClick={onCancel} className={`${mCancel} border flex items-center justify-center px-[8px] py-[4px] rounded-[4px] shrink-0 cursor-pointer transition-colors`}>
                  <p className={`${SF} font-[510] text-[12px] ${mCancelText} whitespace-nowrap`}>취소</p>
                </button>
                <button onClick={handleEditDone} disabled={!username.trim()} className="bg-[#0076ff] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] shrink-0 cursor-pointer hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
                  <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>완료</p>
                </button>
              </>
            ) : (
              <>
                <button onClick={handleRegister} disabled={!username.trim() || !password} className="bg-[#c0c0c0] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] shrink-0 cursor-pointer hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
                  <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>계정 생성</p>
                </button>
                <button onClick={handleLogin} disabled={!username.trim() || !password} className="bg-[#0076ff] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] shrink-0 cursor-pointer hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
                  <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>로그인</p>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── UserInfoModal ──────────────────────────────────────────────
function UserInfoModal({ user, onClose, onEditUser }: { user: User; onClose: () => void; onEditUser: () => void }) {
  const dm = useDM();
  const [onlineUsers, setOnlineUsers] = useState<Array<{ emoji: string; username: string }>>([]);
  const refresh = useCallback(() => setOnlineUsers(getOnlineUsers()), []);
  useEffect(() => { refresh(); const t = setInterval(refresh, 10000); return () => clearInterval(t); }, [refresh]);
  const others = onlineUsers.filter(u => u.username !== user.username);
  const mBg = dm ? "bg-[#252525]" : "bg-[#f6f6f6]";
  const mBorder = dm ? "border-white/10" : "border-[#b0b0b0]/50";
  const mTitle = dm ? "text-[#c0c0c0]" : "text-[#404040]";
  const mText = dm ? "text-[#e0e0e0]" : "text-black";
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Overlay onClick={onClose} />
      <div className={`${mBg} relative rounded-[14px] w-[300px] z-10 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.4)] border ${mBorder}`}>
        <div className="flex gap-[10px] items-center p-[8px] w-full">
          <TrafficLights onClose={onClose} />
          <p className={`flex-1 ${SF} font-bold ${mTitle} text-[12px] text-center ${NS}`}>접속 중인 사용자</p>
          <div className="h-[14px] w-[58px] opacity-0" />
        </div>
        <div className="flex flex-col gap-[14px] items-start p-[8px] w-full">
          <div className="flex flex-col gap-[4px] items-start w-full">
            <p className={`${SF} font-bold text-[#808080] text-[12px] px-[8px] whitespace-nowrap ${NS}`}>나</p>
            <div className="relative rounded-[8px] w-full">
              <div className="flex gap-[14px] items-center p-[8px] w-full">
                <div className={`flex flex-1 items-center ${SF} font-[510] text-[14px] ${mText} min-w-0 ${NS}`}>
                  <span className="w-[24px] shrink-0">{user.emoji}</span>
                  <span className="truncate">{user.username}</span>
                </div>
                <button onClick={onEditUser} className="bg-[#0076ff] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] shrink-0 cursor-pointer hover:opacity-90">
                  <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>변경</p>
                </button>
              </div>
            </div>
          </div>
          {others.length > 0 && (
            <div className="flex flex-col gap-[4px] items-start w-full">
              <p className={`${SF} font-bold text-[#808080] text-[12px] px-[8px] whitespace-nowrap ${NS}`}>기타 사용자</p>
              <div className="flex flex-col items-start w-full">
                {others.map((u, i) => (
                  <div key={u.username} className={`${i % 2 === 1 ? (dm ? "bg-[#2d2d2d]" : "bg-[#eaeaea]") : ""} relative rounded-[8px] w-full`}>
                    <div className={`flex items-center p-[8px] ${SF} font-[510] text-[14px] ${mText} ${NS}`}>
                      <span className="w-[24px] shrink-0">{u.emoji}</span>
                      <span className="truncate">{u.username}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── NewRoomModal ───────────────────────────────────────────────
function NewRoomModal({ onDone, onClose }: { onDone: (name: string, pw?: string) => void; onClose: () => void }) {
  const [name, setName] = useState(""); const [pw, setPw] = useState("");
  const handleDone = () => { if (!name.trim()) return; onDone(name.trim(), pw.trim() || undefined); };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Overlay onClick={onClose} />
      <div className="bg-[#f6f6f6] relative rounded-[14px] w-[340px] z-10 shadow-[0px_10px_40px_0px_rgba(0,0,0,0.4)] border border-[#b0b0b0]/50">
        <div className="flex gap-[10px] items-center p-[8px] w-full">
          <TrafficLights onClose={onClose} />
          <p className={`flex-1 ${SF} font-bold text-[#404040] text-[12px] text-center ${NS}`}>폴더 추가</p>
          <div className="h-[14px] w-[58px] opacity-0" />
        </div>
        <div className="flex flex-col gap-[14px] items-start p-[8px] w-full">
          <div className="flex flex-col gap-[4px] items-start w-full">
            <p className={`${SF} font-bold text-[12px] text-black whitespace-nowrap ${NS}`}>폴더 이름</p>
            <div className="bg-white drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-[4px] w-full border border-[#b0b0b0]/50">
              <div className="flex items-start p-[4px] w-full">
                <input type="text" value={name} onChange={e => setName(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.nativeEvent.isComposing) handleDone(); }} placeholder="입력"
                  className={`w-full bg-transparent outline-none border-none ${SF} font-[510] text-[12px] text-black placeholder:text-[#b0b0b0]`} autoFocus />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[4px] items-start w-full">
            <p className={`${SF} font-bold text-[12px] text-black whitespace-nowrap ${NS}`}>비밀번호 (선택)</p>
            <div className="bg-white drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-[4px] w-full border border-[#b0b0b0]/50">
              <div className="flex items-start p-[4px] w-full">
                <input type="password" value={pw} onChange={e => setPw(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.nativeEvent.isComposing) handleDone(); }} placeholder="입력"
                  className={`w-full bg-transparent outline-none border-none ${SF} font-[510] text-[12px] text-black placeholder:text-[#b0b0b0]`} />
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <button onClick={handleDone} disabled={!name.trim()} className="bg-[#0076ff] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
              <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>완료</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PasswordModal ──────────────────────────────────────────────
function PasswordModal({ title = "비밀번호 확인", onSubmit, onClose }: {
  title?: string;
  onSubmit: (pw: string, onWrong: () => void) => void; onClose: () => void;
}) {
  const [pw, setPw] = useState(""); const [error, setError] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const handleDone = () => onSubmit(pw, () => { setPw(""); setError(true); setTimeout(() => ref.current?.focus(), 0); });
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[55]">
      <Overlay onClick={onClose} />
      <div className="bg-[#f6f6f6] relative rounded-[14px] w-[300px] z-10 shadow-[0px_10px_40px_0px_rgba(0,0,0,0.4)] border border-[#b0b0b0]/50">
        <div className="flex gap-[10px] items-center p-[8px] w-full">
          <TrafficLights onClose={onClose} />
          <p className={`flex-1 ${SF} font-bold text-[#404040] text-[12px] text-center ${NS}`}>{title}</p>
          <div className="h-[14px] w-[58px] opacity-0" />
        </div>
        <div className="flex flex-col gap-[14px] items-start p-[8px] w-full">
          <div className="flex flex-col gap-[4px] items-start w-full">
            <p className={`${SF} font-bold text-[12px] text-black whitespace-nowrap ${NS}`}>비밀번호</p>
            <div className={`bg-white drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-[4px] w-full border ${error ? "border-[#ff0000]" : "border-[#b0b0b0]/50"}`}>
              <div className="flex items-start p-[4px] w-full">
                <input ref={ref} type="password" value={pw} onChange={e => { setPw(e.target.value); setError(false); }}
                  onKeyDown={e => { if (e.key === "Enter" && !e.nativeEvent.isComposing) handleDone(); }} placeholder="입력"
                  className={`w-full bg-transparent outline-none border-none ${SF} font-[510] text-[12px] text-black placeholder:text-[#b0b0b0]`} autoFocus />
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <button onClick={handleDone} className="bg-[#0076ff] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:opacity-90">
              <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>완료</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ShareCopied Modal ──────────────────────────────────────────
function ShareCopiedModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Overlay onClick={onClose} />
      <div className="bg-[#f6f6f6] relative rounded-[14px] w-[300px] z-10 shadow-[0px_10px_40px_0px_rgba(0,0,0,0.4)] border border-[#b0b0b0]/50">
        <div className="flex gap-[10px] items-center p-[8px] w-full">
          <TrafficLights onClose={onClose} />
          <p className={`flex-1 ${SF} font-bold text-[#404040] text-[12px] text-center ${NS}`}>공유</p>
          <div className="h-[14px] w-[58px] opacity-0" />
        </div>
        <div className="flex flex-col gap-[14px] items-start p-[8px] w-full">
          <p className={`${SF} font-[510] text-[14px] text-[#404040] text-center w-full ${NS}`}>링크 복사가 완료되었습니다.</p>
          <div className="flex justify-end w-full">
            <button onClick={onClose} className="bg-[#0076ff] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:opacity-90">
              <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>닫기</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Delete Modal ───────────────────────────────────────────────
function DeleteModal({ message, confirmLabel = "삭제", onConfirm, onClose }: {
  message: string; confirmLabel?: string;
  onConfirm: () => void; onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[60]">
      <Overlay onClick={onClose} />
      <div className="bg-[#f6f6f6] relative rounded-[14px] w-[280px] z-10 shadow-[0px_10px_40px_0px_rgba(0,0,0,0.4)] border border-[#b0b0b0]/50">
        <div className="flex gap-[10px] items-center p-[8px] w-full">
          <TrafficLights onClose={onClose} />
          <div className="flex-1" />
          <div className="h-[14px] w-[58px] opacity-0" />
        </div>
        <div className="flex flex-col gap-[14px] items-start px-[8px] pb-[8px] w-full">
          <p className={`${SF} font-bold text-[14px] text-[#404040] text-center w-full ${NS}`}>{message}</p>
          <div className="flex justify-end gap-[8px] w-full">
            <button onClick={onClose} className="flex items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:opacity-80 transition-opacity bg-[#c0c0c0]">
              <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>취소</p>
            </button>
            <button onClick={onConfirm} className="flex items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:opacity-90 transition-opacity bg-[#FF3B30]">
              <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>{confirmLabel}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Info Modal ─────────────────────────────────────────────────
function InfoModal({ message, onClose, noBackdropClose }: { message: string; onClose: () => void; noBackdropClose?: boolean }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[70]">
      <Overlay onClick={noBackdropClose ? undefined : onClose} />
      <div className="bg-[#f6f6f6] relative rounded-[14px] w-[280px] z-10 shadow-[0px_10px_40px_0px_rgba(0,0,0,0.4)] border border-[#b0b0b0]/50">
        <div className="flex gap-[10px] items-center p-[8px] w-full">
          <TrafficLights onClose={onClose} allGray={noBackdropClose} />
          <div className="flex-1" />
          <div className="h-[14px] w-[58px] opacity-0" />
        </div>
        <div className="flex flex-col gap-[14px] items-start px-[8px] pb-[8px] w-full">
          <p className={`${SF} font-bold text-[14px] text-[#404040] text-center w-full ${NS}`}>{message}</p>
          <div className="flex justify-end w-full">
            <button onClick={onClose} className="bg-[#0076ff] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:opacity-90">
              <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>확인</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Rename Room Modal ──────────────────────────────────────────
function RenameRoomModal({ room, onConfirm, onClose }: { room: ChatRoom; onConfirm: (name: string) => void; onClose: () => void }) {
  const [name, setName] = useState(room.name);
  const handleDone = () => { if (!name.trim()) return; onConfirm(name.trim()); };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[60]">
      <Overlay onClick={onClose} />
      <div className="bg-[#f6f6f6] relative rounded-[14px] w-[300px] z-10 shadow-[0px_10px_40px_0px_rgba(0,0,0,0.4)] border border-[#b0b0b0]/50">
        <div className="flex gap-[10px] items-center p-[8px] w-full">
          <TrafficLights onClose={onClose} />
          <p className={`flex-1 ${SF} font-bold text-[#404040] text-[12px] text-center ${NS}`}>이름 변경</p>
          <div className="h-[14px] w-[58px] opacity-0" />
        </div>
        <div className="flex flex-col gap-[14px] items-start p-[8px] w-full">
          <div className="flex flex-col gap-[4px] items-start w-full">
            <p className={`${SF} font-bold text-[12px] text-black whitespace-nowrap ${NS}`}>폴더 이름</p>
            <div className="bg-white drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-[4px] w-full border border-[#b0b0b0]/50">
              <div className="flex items-start p-[4px] w-full">
                <input type="text" value={name} onChange={e => setName(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.nativeEvent.isComposing) handleDone(); }} placeholder="입력"
                  className={`w-full bg-transparent outline-none border-none ${SF} font-[510] text-[12px] text-black placeholder:text-[#b0b0b0]`} autoFocus />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-[8px] w-full">
            <button onClick={onClose} className="bg-white border border-[#b0b0b0]/50 flex items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:bg-[#e0e0e0] transition-colors">
              <p className={`${SF} font-[510] text-[12px] text-black whitespace-nowrap`}>취소</p>
            </button>
            <button onClick={handleDone} disabled={!name.trim()} className="bg-[#0076ff] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
              <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>변경</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Context Menu ───────────────────────────────────────────────
function CtxMenuItem({ label, onClick, disabled }: { label: string; onClick?: () => void; disabled?: boolean }) {
  const [hov, setHov] = useState(false); const [press, setPress] = useState(false);
  if (disabled) return <div className={`w-full px-[8px] py-[6px] rounded-[8px] ${NS}`}><p className={`${SF} font-[510] text-[14px] text-[#b0b0b0] whitespace-nowrap`}>{label}</p></div>;
  return (
    <div className={`w-full px-[8px] py-[6px] rounded-[8px] cursor-pointer transition-colors ${press ? "bg-[#dfdfdf]" : hov ? "bg-[#e0e0e0]" : ""} ${NS}`}
      onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => { setHov(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>
      <p className={`${SF} font-[510] text-[14px] text-black whitespace-nowrap`}>{label}</p>
    </div>
  );
}

function ContextMenu({ menu, currentUsername, onDelete, onRename, onClose }: {
  menu: CtxMenu; currentUsername: string;
  onDelete: () => void; onRename: () => void; onClose: () => void;
}) {
  const dm = useDM();
  const ref = useRef<HTMLDivElement>(null);
  const isOwner = currentUsername === menu.room.createdBy;
  const roomUsers = getRoomOnlineUsers(menu.room.id);
  const creator = roomUsers.find(u => u.username === menu.room.createdBy);
  const others = roomUsers.filter(u => u.username !== menu.room.createdBy);
  const sortedUsers = creator ? [creator, ...others] : others;
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); };
    setTimeout(() => document.addEventListener("mousedown", handler), 0);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);
  return (
    <div ref={ref} style={{ position: "fixed", left: menu.x, top: menu.y, zIndex: 200 }}
      className="bg-[#f6f6f6] rounded-[14px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.4)] border border-[#b0b0b0]/50 min-w-[160px] overflow-hidden">
      <div className="flex flex-col items-start p-[8px]">
        <CtxMenuItem label="폴더 삭제" disabled={!isOwner} onClick={isOwner ? () => { onDelete(); onClose(); } : undefined} />
        <CtxMenuItem label="이름 변경" disabled={!isOwner} onClick={isOwner ? () => { onRename(); onClose(); } : undefined} />
        {sortedUsers.length > 0 && (
          <>
            <div className={`h-[1px] w-full my-[4px] ${dm ? "bg-white/20" : "bg-[#d0d0d0]"}`} />
            {sortedUsers.map((u, i) => (
              <div key={u.username} className={`w-full px-[8px] py-[6px] rounded-[8px] ${i % 2 === 1 ? "bg-[#eaeaea]" : ""}`}>
                <p className={`${SF} text-[12px] text-[#808080] whitespace-nowrap ${u.username === menu.room.createdBy ? "font-extrabold" : "font-[510]"}`}>
                  {u.emoji} {u.username}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

// ── Connect Menu ───────────────────────────────────────────────
function ConnectMenu({ pos, onResetAccount, onDevMode, onClose }: {
  pos: { x: number; y: number };
  onResetAccount: () => void; onDevMode: () => void; onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); };
    setTimeout(() => document.addEventListener("mousedown", handler), 0);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);
  return (
    <div ref={ref} style={{ position: "fixed", left: pos.x, top: pos.y, zIndex: 200 }}
      className="bg-[#f6f6f6] rounded-[14px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.4)] border border-[#b0b0b0]/50 min-w-[160px] overflow-hidden">
      <div className="flex flex-col items-start p-[8px]">
        <CtxMenuItem label="계정 삭제 및 재설정" onClick={() => { onResetAccount(); onClose(); }} />
        <CtxMenuItem label="개발자 설정" onClick={() => { onDevMode(); onClose(); }} />
      </div>
    </div>
  );
}

// ── Media Modal ────────────────────────────────────────────────
function MediaModal({ media, onClose }: { media: MediaInfo; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [imgNatural, setImgNatural] = useState<{ w: number; h: number } | null>(null);
  const dragRef = useRef<{ sx: number; sy: number; px: number; py: number } | null>(null);
  const isVideo = media.src.startsWith("data:video/") || /\.(mp4|webm|ogg|mov)$/i.test(media.src);
  const CHROME_H = 80; const MARGIN = 80;
  const maxW = Math.max(200, window.innerWidth - MARGIN * 2);
  const maxH = Math.max(200, window.innerHeight - MARGIN * 2 - CHROME_H);
  let dispW = maxW, dispH = maxH;
  if (imgNatural) {
    const ratio = imgNatural.w / imgNatural.h;
    if (ratio > maxW / maxH) { dispW = maxW; dispH = Math.round(maxW / ratio); }
    else { dispH = maxH; dispW = Math.round(maxH * ratio); }
  }
  const clampPan = useCallback((x: number, y: number, z: number) => ({
    x: Math.max(-(dispW * (z - 1)) / 2, Math.min((dispW * (z - 1)) / 2, x)),
    y: Math.max(-(dispH * (z - 1)) / 2, Math.min((dispH * (z - 1)) / 2, y)),
  }), [dispW, dispH]);
  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (!dragRef.current) return; setPan(clampPan(dragRef.current.px + e.clientX - dragRef.current.sx, dragRef.current.py + e.clientY - dragRef.current.sy, zoom)); };
    const onUp = () => { dragRef.current = null; };
    window.addEventListener("mousemove", onMove); window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [zoom, clampPan]);
  useEffect(() => { if (zoom === 1) setPan({ x: 0, y: 0 }); else setPan(p => clampPan(p.x, p.y, zoom)); }, [zoom, clampPan]);
  const handleSave = async () => {
    try {
      const resp = await fetch(media.src); const blob = await resp.blob(); const ext = blob.type.split("/")[1] || "jpg";
      if ("showSaveFilePicker" in window) { try { const fh = await (window as any).showSaveFilePicker({ suggestedName: `image.${ext}`, types: [{ description: "Media", accept: { [blob.type]: [`.${ext}`] } }] }); const w = await fh.createWritable(); await w.write(blob); await w.close(); return; } catch (err) { if ((err as any).name === "AbortError") return; } }
      const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `image.${ext}`; a.click(); URL.revokeObjectURL(url);
    } catch { const a = document.createElement("a"); a.href = media.src; a.download = "image"; a.click(); }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100]">
      <Overlay onClick={onClose} />
      <div className="relative bg-[#f6f6f6] rounded-[14px] z-10 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.4)] border border-[#b0b0b0]/50 flex flex-col overflow-hidden"
        style={{ width: imgNatural ? dispW : undefined, height: imgNatural ? dispH + CHROME_H : undefined, minWidth: 200, minHeight: 200 }}>
        <div className="flex items-center gap-[10px] p-[8px] shrink-0">
          <TrafficLights onClose={onClose} />
          <div className={`flex-1 text-center ${SF} font-bold text-[12px] text-[#404040] ${NS}`}>{media.senderEmoji}{media.senderName}님이 전송한 미디어</div>
          <div className="h-[14px] w-[58px] opacity-0" />
        </div>
        <div className="flex-1 relative overflow-hidden rounded-[4px] mx-[8px]"
          style={{ cursor: zoom > 1 ? "grab" : "default" }}
          onMouseDown={e => { if (zoom <= 1) return; e.preventDefault(); dragRef.current = { sx: e.clientX, sy: e.clientY, px: pan.x, py: pan.y }; }}>
          {isVideo ? (
            <video src={media.src} controls className="absolute inset-0 size-full object-contain" onContextMenu={e => e.preventDefault()} />
          ) : (
            <img src={media.src} alt="" onLoad={e => { const i = e.currentTarget; setImgNatural({ w: i.naturalWidth, h: i.naturalHeight }); }}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ objectFit: "fill", transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`, transformOrigin: "center", userSelect: "none" }}
              draggable={false} onContextMenu={e => e.preventDefault()} />
          )}
        </div>
        <div className="flex items-center justify-between p-[8px] shrink-0 gap-[8px]">
          {!isVideo ? (
            <div className="flex items-center gap-[10px]">
              <button onClick={() => setZoom(z => Math.max(1, +(z - 0.25).toFixed(2)))} className="size-[20px] rounded-full bg-white border border-[#b0b0b0]/50 flex items-center justify-center hover:bg-[#e0e0e0] cursor-pointer">
                <svg viewBox="0 0 20 20" className="size-[12px]"><path d={mediaSvg.p1ab22200} fill="#505050"/></svg>
              </button>
              <input type="range" min="100" max="400" step="25" value={Math.round(zoom * 100)} onChange={e => setZoom(Number(e.target.value) / 100)} className="w-[85px] accent-[#0076ff]" />
              <button onClick={() => setZoom(z => Math.min(4, +(z + 0.25).toFixed(2)))} className="size-[20px] rounded-full bg-white border border-[#b0b0b0]/50 flex items-center justify-center hover:bg-[#e0e0e0] cursor-pointer">
                <svg viewBox="0 0 20 20" className="size-[12px]"><path d={mediaSvg.p39e0a480} fill="#505050"/></svg>
              </button>
            </div>
          ) : <div />}
          <button onClick={handleSave} className="bg-[#0076ff] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:opacity-90">
            <p className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>저장</p>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Room Card ──────────────────────────────────────────────────
function RoomCard({ room, onClick, onContextMenu, isOwner }: {
  room: ChatRoom; onClick: () => void; isOwner?: boolean;
  onContextMenu?: (e: React.MouseEvent) => void;
}) {
  const [hov, setHov] = useState(false); const [press, setPress] = useState(false); const [btnHov, setBtnHov] = useState(false);
  const dm = useDM();
  const bg = press ? (dm ? "bg-[#444]" : "bg-[#dfdfdf]") : hov ? (dm ? "bg-[#333]" : "bg-[#e0e0e0]") : "";
  return (
    <div className={`relative flex flex-col gap-[8px] items-center p-[14px] shrink-0 cursor-pointer rounded-[8px] ${bg} transition-colors ${NS}`}
      onClick={onClick} onContextMenu={e => { e.preventDefault(); onContextMenu?.(e); }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => { setHov(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>
      {(hov || btnHov) && (
        <button className="absolute top-[4px] right-[4px] w-[22px] h-[22px] flex items-center justify-center rounded-full hover:bg-[#c8c8c8] transition-colors z-10"
          onClick={e => { e.stopPropagation(); onContextMenu?.(e); }}
          onMouseEnter={e => { e.stopPropagation(); setBtnHov(true); }} onMouseLeave={() => setBtnHov(false)}
          onMouseDown={e => e.stopPropagation()} onMouseUp={e => e.stopPropagation()}>
          <span className={`text-[12px] leading-none ${dm ? "text-[#c0c0c0]" : "text-[#606060]"}`}>···</span>
        </button>
      )}
      <div className="h-[64px] shrink-0 w-[80px] relative">
        <div className="absolute inset-0 overflow-hidden rounded-[4px]">
          <img alt="" className="absolute inset-0 w-full h-full object-contain" src={imgFolder} draggable={false} onContextMenu={e => e.preventDefault()} />
        </div>
      </div>
      <p className={`${SF} font-[510] text-[12px] ${dm ? "text-[#e0e0e0]" : "text-black"} text-center max-w-[100px] break-all`}>{room.name}</p>
      {isOwner && <p className={`${SF} font-[510] text-[10px] text-[#808080] text-center -mt-[4px]`}>관리자</p>}
    </div>
  );
}

// ── ChatList View ──────────────────────────────────────────────
function ChatListView({ rooms, currentUsername, onEnterRoom, onContextMenu }: {
  rooms: ChatRoom[]; currentUsername: string; onEnterRoom: (r: ChatRoom) => void;
  onContextMenu: (room: ChatRoom, e: React.MouseEvent) => void;
}) {
  if (rooms.length === 0) return <div className="flex items-center justify-center w-full h-full"><p className={`${SF} text-[#808080] text-[14px] ${NS}`}>채팅방이 없습니다</p></div>;
  return (
    <div className="flex flex-wrap content-start p-[14px]">
      {rooms.map(r => <RoomCard key={r.id} room={r} onClick={() => onEnterRoom(r)} isOwner={r.createdBy === currentUsername} onContextMenu={e => onContextMenu(r, e)} />)}
    </div>
  );
}

// ── Developer View ─────────────────────────────────────────────
function DeveloperView({ accounts, onDeleteAccount, onResetAll }: { accounts: Account[]; onDeleteAccount: (username: string) => void; onResetAll: () => void; }) {
  const dm = useDM();
  return (
    <div className="flex flex-col items-start px-[14px] py-[8px] w-full gap-[8px]">
      {accounts.length === 0 && (
        <div className="flex items-center justify-center w-full py-[24px]"><p className={`${SF} text-[#808080] text-[14px] ${NS}`}>등록된 계정이 없습니다</p></div>
      )}
      {accounts.map((account, i) => (
        <div key={account.username}
          className={`flex gap-[14px] items-center px-[24px] py-[8px] w-full rounded-[8px] cursor-pointer hover:bg-[#e0e0e0] transition-colors ${NS} ${i % 2 === 1 ? (dm ? "bg-[#2d2d2d]" : "bg-[#eaeaea]") : ""}`}
          onClick={() => onDeleteAccount(account.username)}>
          <div className="flex items-center shrink-0 w-[200px] gap-[4px] overflow-hidden">
            <span className="text-[16px] shrink-0 w-[20px]">{account.emoji}</span>
            <span className={`${SF} font-[510] text-[14px] ${dm ? "text-[#e0e0e0]" : "text-black"} whitespace-nowrap overflow-hidden text-ellipsis`}>{account.username}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className={`${SF} font-[510] text-[14px] ${dm ? "text-[#e0e0e0]" : "text-black"} truncate`}>{account.password}</p>
          </div>
          <div className="shrink-0 w-[140px]">
            <p className={`${SF} font-[510] text-[14px] text-[#808080] whitespace-nowrap`}>{fmtDate(new Date(account.createdAt))}</p>
          </div>
        </div>
      ))}
      <div className={`h-[1px] w-full mt-[8px] ${dm ? "bg-white/20" : "bg-[#d0d0d0]"}`} />
      <div className="flex items-center justify-between w-full px-[24px] py-[8px]">
        <p className={`${SF} font-bold text-[14px] ${dm ? "text-[#e0e0e0]" : "text-black"} ${NS}`}>I'm Fineder 초기화</p>
        <button
          onClick={onResetAll}
          className="bg-[#FF3B30] flex items-center justify-center px-[12px] py-[6px] rounded-[8px] cursor-pointer hover:opacity-85 transition-opacity">
          <p className={`${SF} font-[510] text-[14px] text-white whitespace-nowrap`}>초기화</p>
        </button>
      </div>
    </div>
  );
}

// ── Message Row ────────────────────────────────────────────────
function MessageRow({ msg, isAlt, onMediaClick }: {
  msg: ChatMessage; isAlt: boolean;
  onMediaClick: (src: string, senderEmoji: string, senderName: string) => void;
}) {
  const dm = useDM();
  const altBg = isAlt ? (dm ? "bg-[#2d2d2d]" : "bg-[#eaeaea]") : "";
  return (
    <div className="relative w-full">
      {isAlt && <div className={`absolute inset-0 rounded-[8px] ${altBg}`} />}
      <div className="relative flex gap-[14px] items-start p-[8px]">
      <div className={`flex items-center shrink-0 w-[200px] gap-[4px] overflow-hidden ${NS}`}>
        <span className="text-[16px] shrink-0 w-[24px]">{msg.emoji}</span>
        <span className={`${SF} font-[510] text-[14px] ${dm ? "text-[#e0e0e0]" : "text-black"} whitespace-nowrap overflow-hidden text-ellipsis`}>{msg.username}</span>
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-[6px]">
        {msg.text ? <p className={`${SF} font-[510] text-[14px] ${dm ? "text-[#e0e0e0]" : "text-black"} break-words select-text`}>{msg.text}</p> : null}
        {msg.images?.length > 0 && (
          <div className="flex flex-wrap gap-[6px]">
            {msg.images.map((src, i) => (
              <img key={i} src={src} alt="" className="rounded-[10px] object-contain cursor-pointer hover:opacity-90"
                style={{ width: 200, height: "auto" }} onClick={() => onMediaClick(src, msg.emoji, msg.username)}
                draggable={false} onContextMenu={e => e.preventDefault()} />
            ))}
          </div>
        )}
        {msg.videos?.length > 0 && (
          <div className="flex flex-wrap gap-[6px]">
            {msg.videos.map((src, i) => (
              <video key={i} src={src} className="rounded-[10px] cursor-pointer hover:opacity-90"
                style={{ width: 200 }} onClick={() => onMediaClick(src, msg.emoji, msg.username)}
                onContextMenu={e => e.preventDefault()} />
            ))}
          </div>
        )}
        {msg.audios?.length > 0 && (
          <div className="flex flex-col gap-[4px]">
            {msg.audios.map((src, i) => <RecordPlayerInline key={i} src={src} />)}
          </div>
        )}
      </div>
      <div className={`${SF} font-[510] text-[14px] text-[#808080] shrink-0 w-[140px] whitespace-nowrap ${NS}`}>{msg.date}</div>
      <div className={`${SF} font-[510] text-[14px] text-[#808080] shrink-0 w-[80px] whitespace-nowrap ${NS}`}>{msg.time}</div>
      </div>
    </div>
  );
}

// ── Chat Input ─────────────────────────────────────────────────
type RecState = "idle" | "recording" | "recorded";

const ChatInput = forwardRef<ChatInputHandle, {
  onSend: (text: string, images: string[], videos: string[], audios: string[]) => void;
  darkMode: boolean;
  onError: (msg: string) => void;
}>(function ChatInput({ onSend, darkMode, onError }, ref) {
  const dm = useDM();
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const [pendingImgs, setPendingImgs] = useState<string[]>([]);
  const [pendingVids, setPendingVids] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Recording state
  const [recState, setRecState] = useState<RecState>("idle");
  const [recTime, setRecTime] = useState(0);
  const [recDuration, setRecDuration] = useState(0);
  const [recIsPlaying, setRecIsPlaying] = useState(false);
  const [recCurrentTime, setRecCurrentTime] = useState(0);
  const [isComposing, setIsComposing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recAudioBlobRef = useRef<Blob | null>(null);
  const recAudioRef = useRef<HTMLAudioElement | null>(null);
  const recTimerRef = useRef<number | null>(null);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files || recState !== "idle") return;
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      if (file.type.startsWith("image/")) { reader.onload = e => { if (e.target?.result) setPendingImgs(p => [...p, e.target!.result as string]); }; reader.readAsDataURL(file); }
      else if (file.type.startsWith("video/")) { reader.onload = e => { if (e.target?.result) setPendingVids(p => [...p, e.target!.result as string]); }; reader.readAsDataURL(file); }
    });
  }, [recState]);

  useImperativeHandle(ref, () => ({ addFiles: (files: FileList) => handleFiles(files) }), [handleFiles]);

  const handleSend = useCallback(() => {
    const t = input.trim();
    if (!t && pendingImgs.length === 0 && pendingVids.length === 0) return;
    onSend(t, pendingImgs, pendingVids, []);
    setInput(""); setPendingImgs([]); setPendingVids([]);
  }, [input, pendingImgs, pendingVids, onSend]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "";
      const mr = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      audioChunksRef.current = [];
      mr.ondataavailable = (e: BlobEvent) => { if (e.data && e.data.size > 0) audioChunksRef.current.push(e.data); };
      mr.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
        const blob = new Blob(audioChunksRef.current, { type: mr.mimeType || "audio/webm" });
        recAudioBlobRef.current = blob;
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        recAudioRef.current = audio;
        audio.onloadedmetadata = () => {
          setRecDuration(audio.duration || 0);
          setRecCurrentTime(0);
        };
        audio.ontimeupdate = () => setRecCurrentTime(audio.currentTime);
        audio.onended = () => setRecIsPlaying(false);
        setRecState("recorded");
      };
      mr.start(100);
      mediaRecorderRef.current = mr;
      setRecState("recording");
      setRecTime(0);
      recTimerRef.current = window.setInterval(() => setRecTime(prev => prev + 1), 1000);
    } catch (err: any) {
      const name = err?.name ?? "";
      if (name === "NotAllowedError" || name === "PermissionDeniedError") {
        onError("마이크 접근 권한이 없습니다.\n브라우저 주소창의 자물쇠 아이콘을 클릭해 마이크 권한을 허용해 주세요.");
      } else if (name === "NotFoundError" || name === "DevicesNotFoundError") {
        onError("마이크를 찾을 수 없습니다.\n마이크가 연결되어 있는지 확인해 주세요.");
      } else if (!navigator.mediaDevices) {
        onError("이 환경에서는 마이크를 사용할 수 없습니다.\n(HTTPS 또는 localhost에서만 지원됩니다.)");
      } else {
        onError("마이크를 시작할 수 없습니다: " + (err?.message ?? String(err)));
      }
    }
  };

  const stopRecording = () => {
    if (recTimerRef.current !== null) { clearInterval(recTimerRef.current); recTimerRef.current = null; }
    mediaRecorderRef.current?.stop();
    mediaRecorderRef.current = null;
  };

  const cancelRecording = useCallback(() => {
    const audio = recAudioRef.current;
    if (audio) { audio.pause(); audio.src = ""; recAudioRef.current = null; }
    recAudioBlobRef.current = null;
    setRecCurrentTime(0); setRecDuration(0); setRecIsPlaying(false); setRecState("idle");
  }, []);

  const togglePlayback = () => {
    const a = recAudioRef.current; if (!a) return;
    if (recIsPlaying) {
      a.pause(); setRecIsPlaying(false);
    } else {
      if (a.ended) a.currentTime = 0;
      a.play().then(() => setRecIsPlaying(true)).catch(() => { setRecIsPlaying(false); });
    }
  };

  const sendAudio = async () => {
    const blob = recAudioBlobRef.current; if (!blob) return;
    try {
      const dataUrl = await blobToDataUrl(blob);
      onSend("", [], [], [dataUrl]);
      cancelRecording();
    } catch (err) {
      onError("오디오 전송에 실패했습니다.");
    }
  };

  useEffect(() => { return () => { if (recTimerRef.current) clearInterval(recTimerRef.current); }; }, []);

  const isActive = focused || input.length > 0;
  const inputBg = isActive ? (dm ? "#3a3a3a" : "#ffffff") : (dm ? "#2a2a2a" : "#fafafa");
  const inputTextColor = dm ? "#e0e0e0" : "#000000";
  const pillBg = dm ? "bg-[#2a2a2a]" : "bg-[#fafafa]";
  const canSendText = (input.trim().length > 0 || pendingImgs.length > 0 || pendingVids.length > 0) && recState === "idle";
  const canSend = canSendText || recState === "recorded";

  return (
    <div className={`relative shrink-0 w-full ${isDragging ? "ring-2 ring-[#0076ff] ring-inset" : ""}`}
      onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={e => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }}>
      <div className="flex flex-col gap-[6px] p-[14px] relative">
        {/* Pending files preview */}
        {(pendingImgs.length > 0 || pendingVids.length > 0) && recState === "idle" && (
          <div className="flex flex-wrap gap-[6px]">
            {pendingImgs.map((src, i) => (
              <div key={`img-${i}`} className="relative">
                <img src={src} alt="" className="rounded-[10px] object-contain" style={{ width: 60, height: "auto" }} draggable={false} onContextMenu={e => e.preventDefault()} />
                <button onClick={() => setPendingImgs(p => p.filter((_, j) => j !== i))} className="absolute -top-1 -right-1 bg-black/60 text-white rounded-full w-[14px] h-[14px] text-[9px] flex items-center justify-center">✕</button>
              </div>
            ))}
            {pendingVids.map((src, i) => (
              <div key={`vid-${i}`} className="relative">
                <video src={src} className="rounded-[10px]" style={{ width: 60 }} onContextMenu={e => e.preventDefault()} />
                <button onClick={() => setPendingVids(p => p.filter((_, j) => j !== i))} className="absolute -top-1 -right-1 bg-black/60 text-white rounded-full w-[14px] h-[14px] text-[9px] flex items-center justify-center">✕</button>
              </div>
            ))}
          </div>
        )}
        {/* Bottom row */}
        <div className="drop-shadow-[0px_0px_10px_rgba(0,0,0,0.06)] flex gap-[12px] items-start">
          {/* Idle: text input */}
          {recState === "idle" && (
            <div className="flex-[1_0_0] min-w-px relative rounded-[30px] min-h-[40px] transition-colors duration-150" style={{ background: inputBg }}>
              <div aria-hidden className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-[30px]" />
              <div className="flex items-start px-[20px] py-[13px] w-full">
                <input type="text" value={input} onChange={e => setInput(e.target.value)}
                  onCompositionStart={() => setIsComposing(true)}
                  onCompositionEnd={() => setIsComposing(false)}
                  onKeyDown={e => { if (e.key === "Enter" && !isComposing && !e.nativeEvent.isComposing) handleSend(); }}
                  onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                  placeholder="작성.."
                  className={`flex-[1_0_0] w-full bg-transparent outline-none border-none ${SF} font-[510] text-[12px] leading-[normal] placeholder:text-[#b0b0b0] [word-break:break-word]`}
                  style={{ color: inputTextColor }} />
              </div>
            </div>
          )}
          {/* Recording: RecordingBTN */}
          {recState === "recording" && (
            <div className="flex-[1_0_0] min-w-px relative rounded-[1000px] rec-pulse" style={{ border: "1px solid #ff2626", minHeight: 40 }}>
              <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] min-h-[40px]">
                <div className="flex items-center justify-center px-[12px] mr-[-4px] shrink-0">
                  <span className={`${SF} font-[510] text-[12px] text-white whitespace-nowrap`}>{fmtSec(recTime)}</span>
                </div>
                <div className="flex items-center justify-center overflow-clip p-[20px] relative shrink-0 size-[40px] cursor-pointer" onClick={stopRecording}>
                  <div className="bg-white relative rounded-[2px] shrink-0 size-[12px]" />
                </div>
              </div>
            </div>
          )}
          {/* Recorded: RecordPlayerBTN */}
          {recState === "recorded" && (
            <div className={`flex-[1_0_0] min-w-px relative rounded-[1000px] ${pillBg}`} style={{ minHeight: 40 }}>
              <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] min-h-[40px]">
                <div className="flex items-center justify-center px-[12px] mr-[-4px] shrink-0">
                  <span className={`${SF} font-[510] text-[12px] whitespace-nowrap ${dm ? "text-[#e0e0e0]" : "text-black"}`}>{fmtSec(recCurrentTime)}</span>
                </div>
                <div className="flex items-center justify-center overflow-clip p-[20px] relative shrink-0 size-[40px] mr-[-4px] cursor-pointer" onClick={togglePlayback}>
                  {recIsPlaying
                    ? <div className="bg-[#404040] relative rounded-[2px] shrink-0 size-[12px]"/>
                    : <IcPlayTriangle color={dm ? "#c0c0c0" : "#404040"} />}
                </div>
                <div className="relative shrink-0 size-[40px] cursor-pointer flex items-center justify-center" onClick={cancelRecording}>
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <path d={recBtnSvgPaths.pc85d980} fill={dm ? "#c0c0c0" : "#404040"}/>
                  </svg>
                </div>
              </div>
              <div aria-hidden className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-[1000px]"/>
            </div>
          )}
          {/* Idle: mic pill */}
          {recState === "idle" && (
            <div className={`${pillBg} relative rounded-[1000px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity`} onClick={startRecording}>
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
                <div className="flex items-center justify-center overflow-clip p-[20px] relative shrink-0 size-[40px]">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={bottomSvgPaths.p234e1180} fill={dm ? "#c0c0c0" : "#404040"}/>
                    </svg>
                  </div>
                </div>
              </div>
              <div aria-hidden className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-[1000px]"/>
            </div>
          )}
          {/* Send pill */}
          <div
            className={`${pillBg} relative rounded-[1000px] shrink-0 ${canSend ? "cursor-pointer hover:opacity-80" : "cursor-not-allowed"}`}
            onClick={canSend ? (recState === "recorded" ? sendAudio : handleSend) : undefined}>
            <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
              <div className="relative shrink-0 size-[40px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <path d={svgPaths.p18002200} stroke={canSend ? (dm ? "#c0c0c0" : "#404040") : (dm ? "#555" : "#c0c0c0")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div aria-hidden className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-[1000px]"/>
          </div>
        </div>
      </div>
    </div>
  );
});

// ── Media Room View ────────────────────────────────────────────
function MediaRoomView({ messages, mediaType, onMediaClick }: {
  messages: ChatMessage[]; mediaType: "images" | "videos";
  onMediaClick: (src: string, senderEmoji: string, senderName: string) => void;
}) {
  const allMedia = messages.flatMap(m => (mediaType === "images" ? m.images : m.videos).map(src => ({ src, emoji: m.emoji, username: m.username })));
  if (allMedia.length === 0) return <div className="flex items-center justify-center w-full h-full"><p className={`${SF} text-[#808080] text-[14px] ${NS}`}>미디어가 없습니다</p></div>;
  return (
    <div className="flex flex-wrap content-start p-[8px]">
      {allMedia.map((m, i) => (
        <div key={i} className="p-[6px] cursor-pointer" onClick={() => onMediaClick(m.src, m.emoji, m.username)}>
          {mediaType === "images" ? (
            <img src={m.src} alt="" className="rounded-[8px] object-cover hover:opacity-90 transition-opacity" style={{ width: 80, height: 64 }} draggable={false} onContextMenu={e => e.preventDefault()} />
          ) : (
            <video src={m.src} className="rounded-[8px] object-cover hover:opacity-90 transition-opacity" style={{ width: 80, height: 64 }} onContextMenu={e => e.preventDefault()} />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Audio Room View ────────────────────────────────────────────
function AudioRoomView({ messages }: { messages: ChatMessage[] }) {
  const dm = useDM();
  const allAudios = messages.flatMap(m => (m.audios || []).map(src => ({ src, emoji: m.emoji, username: m.username, date: m.date, time: m.time })));
  if (allAudios.length === 0) return <div className="flex items-center justify-center w-full h-full"><p className={`${SF} text-[#808080] text-[14px] ${NS}`}>음성 파일이 없습니다</p></div>;
  return (
    <div className="flex flex-col items-start gap-[4px] px-[14px] py-[8px]">
      {allAudios.map((a, i) => (
        <div key={i} className={`flex items-center gap-[14px] w-full rounded-[8px] px-[10px] py-[6px] ${i % 2 === 1 ? (dm ? "bg-[#2d2d2d]" : "bg-[#eaeaea]") : ""}`}>
          <div className={`flex items-center shrink-0 w-[180px] gap-[4px] overflow-hidden ${NS}`}>
            <span className="text-[16px] shrink-0 w-[20px]">{a.emoji}</span>
            <span className={`${SF} font-[510] text-[14px] ${dm ? "text-[#e0e0e0]" : "text-black"} whitespace-nowrap overflow-hidden text-ellipsis`}>{a.username}</span>
          </div>
          <RecordPlayerInline src={a.src} />
          <div className={`${SF} font-[510] text-[14px] text-[#808080] shrink-0 w-[140px] whitespace-nowrap ${NS}`}>{a.date}</div>
          <div className={`${SF} font-[510] text-[14px] text-[#808080] shrink-0 w-[80px] whitespace-nowrap ${NS}`}>{a.time}</div>
        </div>
      ))}
    </div>
  );
}

// ── Recent View ────────────────────────────────────────────────
function RecentView({ rooms, onEnterRoom, onContextMenu }: {
  rooms: ChatRoom[];
  onEnterRoom: (r: ChatRoom) => void;
  onContextMenu: (r: ChatRoom, e: React.MouseEvent) => void;
}) {
  const dm = useDM();

  const allRoomData = useMemo(() =>
    rooms.map(r => ({ room: r, msgs: loadMsgs(r.id) })),
    [rooms]
  );

  const recentRooms = useMemo(() =>
    allRoomData
      .map(({ room, msgs }) => ({
        room,
        lastTs: msgs.length > 0 ? Math.max(...msgs.map(m => m.ts)) : room.createdAt,
      }))
      .sort((a, b) => b.lastTs - a.lastTs),
    [allRoomData]
  );

  type MediaItem = { src: string; room: ChatRoom; ts: number; key: string };

  const recentVideos = useMemo<MediaItem[]>(() =>
    allRoomData
      .flatMap(({ room, msgs }) => msgs.flatMap(msg => msg.videos.map((src, i) => ({ src, room, ts: msg.ts, key: `${msg.id}-v${i}` }))))
      .sort((a, b) => b.ts - a.ts),
    [allRoomData]
  );

  const recentAudios = useMemo<MediaItem[]>(() =>
    allRoomData
      .flatMap(({ room, msgs }) => msgs.flatMap(msg => msg.audios.map((src, i) => ({ src, room, ts: msg.ts, key: `${msg.id}-a${i}` }))))
      .sort((a, b) => b.ts - a.ts),
    [allRoomData]
  );

  const recentImages = useMemo<MediaItem[]>(() =>
    allRoomData
      .flatMap(({ room, msgs }) => msgs.flatMap(msg => msg.images.map((src, i) => ({ src, room, ts: msg.ts, key: `${msg.id}-i${i}` }))))
      .sort((a, b) => b.ts - a.ts),
    [allRoomData]
  );

  const hasAny = recentRooms.length > 0 || recentVideos.length > 0 || recentAudios.length > 0 || recentImages.length > 0;
  if (!hasAny) return (
    <div className="flex items-center justify-center w-full h-[200px]">
      <p className={`${SF} text-[14px] ${dm ? "text-[#555]" : "text-[#b0b0b0]"} ${NS}`}>최근 항목이 없습니다</p>
    </div>
  );

  const CategoryHeader = ({ label }: { label: string }) => (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className={`absolute inset-0 border-b border-solid pointer-events-none ${dm ? "border-white/10" : "border-[#d0d0d0]"}`} />
      <div className="flex items-center px-[24px] py-[8px]">
        <p className={`${SF} font-bold text-[12px] ${dm ? "text-[#888]" : "text-[#808080]"} whitespace-nowrap`}>{label}</p>
      </div>
    </div>
  );

  const thumbBg = dm ? "bg-[#3a3a3a]" : "bg-[#d9d9d9]";
  const nameColor = dm ? "text-[#e0e0e0]" : "text-black";

  return (
    <div className="flex flex-col w-full">
      {/* 문서 */}
      {recentRooms.length > 0 && (
        <>
          <CategoryHeader label="문서" />
          <div className="flex flex-wrap content-start p-[14px]">
            {recentRooms.map(({ room }) => (
              <div key={room.id} className="relative group cursor-pointer" onClick={() => onEnterRoom(room)}>
                <div className="flex flex-col gap-[8px] items-center p-[14px]">
                  <div className="h-[64px] relative shrink-0 w-[80px] overflow-hidden">
                    <img alt="" className="absolute inset-0 w-full h-full object-contain" src={imgFolder} />
                  </div>
                  <p className={`${SF} font-[510] text-[12px] ${nameColor} whitespace-nowrap max-w-[80px] overflow-hidden text-ellipsis text-center ${NS}`}>{room.name}</p>
                </div>
                <div className="absolute bg-white left-[87px] top-[8px] rounded-full size-[24px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] border border-[0.5px] border-[#b0b0b0]"
                  onClick={e => { e.stopPropagation(); onContextMenu(room, e); }}>
                  <svg width="14" height="4" viewBox="0 0 14 4" fill="none">
                    <circle cx="2" cy="2" r="1.5" fill="#404040"/><circle cx="7" cy="2" r="1.5" fill="#404040"/><circle cx="12" cy="2" r="1.5" fill="#404040"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 동영상 */}
      {recentVideos.length > 0 && (
        <>
          <CategoryHeader label="동영상" />
          <div className="flex flex-wrap content-start p-[14px]">
            {recentVideos.map(item => (
              <div key={item.key} className="flex flex-col gap-[8px] items-center p-[14px]">
                <div className={`h-[80px] w-[100px] rounded-[8px] overflow-hidden ${thumbBg}`}>
                  <video src={item.src} className="w-full h-full object-cover" muted preload="metadata" />
                </div>
                <p className={`${SF} font-[510] text-[12px] ${nameColor} whitespace-nowrap max-w-[100px] overflow-hidden text-ellipsis text-center ${NS}`}>{item.room.name}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 음악 */}
      {recentAudios.length > 0 && (
        <>
          <CategoryHeader label="음악" />
          <div className="flex flex-wrap content-start p-[14px]">
            {recentAudios.map(item => (
              <div key={item.key} className="flex flex-col items-start p-[14px] w-[255px]">
                <RecordPlayerInline src={item.src} />
              </div>
            ))}
          </div>
        </>
      )}

      {/* 그림 */}
      {recentImages.length > 0 && (
        <>
          <CategoryHeader label="그림" />
          <div className="flex flex-wrap content-start p-[14px]">
            {recentImages.map(item => (
              <div key={item.key} className="flex flex-col gap-[8px] items-center p-[14px]">
                <div className={`h-[80px] w-[100px] rounded-[8px] overflow-hidden ${thumbBg}`}>
                  <img src={item.src} alt="" className="w-full h-full object-cover" />
                </div>
                <p className={`${SF} font-[510] text-[12px] ${nameColor} whitespace-nowrap max-w-[100px] overflow-hidden text-ellipsis text-center ${NS}`}>{item.room.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Room Grid View ─────────────────────────────────────────────
function RoomGridView({ rooms, currentUsername, onClick }: { rooms: ChatRoom[]; currentUsername: string; onClick: (r: ChatRoom) => void }) {
  if (rooms.length === 0) return <div className="flex items-center justify-center w-full h-full"><p className={`${SF} text-[#808080] text-[14px] ${NS}`}>채팅방이 없습니다</p></div>;
  return (
    <div className="flex flex-wrap content-start p-[14px]">
      {rooms.map(r => <RoomCard key={r.id} room={r} onClick={() => onClick(r)} isOwner={r.createdBy === currentUsername} />)}
    </div>
  );
}

// ── Main App ───────────────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState<User | null>(() => loadUser());
  const [rooms, setRooms] = useState<ChatRoom[]>(() => loadRooms());
  const [view, setView] = useState<View>("chatlist");
  const [viewHistory, setViewHistory] = useState<View[]>(["chatlist"]);
  const [histIdx, setHistIdx] = useState(0);
  const [currentRoom, setCurrentRoom] = useState<ChatRoom | null>(null);
  const [subRoom, setSubRoom] = useState<ChatRoom | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  // Modal state
  const [showStart, setShowStart] = useState<"setup" | "edit" | null>(!loadUser() ? "setup" : null);
  const [showNewRoom, setShowNewRoom] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [editVerifyPw, setEditVerifyPw] = useState(false);
  const [showShareCopied, setShowShareCopied] = useState(false);
  const [pendingRoom, setPendingRoom] = useState<ChatRoom | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [pendingDeleteRoom, setPendingDeleteRoom] = useState<ChatRoom | null>(null);
  const [deletePwRoom, setDeletePwRoom] = useState<ChatRoom | null>(null);
  const [renameRoom, setRenameRoom] = useState<ChatRoom | null>(null);
  const [mediaModal, setMediaModal] = useState<MediaInfo | null>(null);
  const [ctxMenu, setCtxMenu] = useState<CtxMenu | null>(null);
  const [connectMenu, setConnectMenu] = useState<{ x: number; y: number } | null>(null);

  // Account reset flow
  const [resetStep, setResetStep] = useState<null | "confirm" | "password" | "done">(null);
  // Developer mode flow
  const [devStep, setDevStep] = useState<null | "password" | "view">(null);
  const [devDeleteUser, setDevDeleteUser] = useState<string | null>(null);
  const [devDeleteDone, setDevDeleteDone] = useState(false);
  const [devResetAll, setDevResetAll] = useState(false);
  const [devResetDone, setDevResetDone] = useState(false);
  // Generic info modal
  const [infoMsg, setInfoMsg] = useState<string | null>(null);

  // Scroll + chat area drag
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [scrollEdge, setScrollEdge] = useState({ top: true, bottom: true });
  const [hasNewMsg, setHasNewMsg] = useState(false);
  const prevMsgLenRef = useRef(0);
  const [chatAreaDragging, setChatAreaDragging] = useState(false);

  const msgListRef = useRef<HTMLDivElement>(null);
  const lastSendRef = useRef(0);
  const chatInputRef = useRef<ChatInputHandle>(null);

  useEffect(() => {
    if (!user) return;
    updateMyPresence(user);
    const t = setInterval(() => { if (user) updateMyPresence(user); }, 30_000);
    return () => clearInterval(t);
  }, [user]);

  useEffect(() => {
    if (!user || !currentRoom) return;
    updateRoomPresence(currentRoom.id, user);
    const t = setInterval(() => { if (user && currentRoom) updateRoomPresence(currentRoom.id, user); }, 30_000);
    return () => { clearInterval(t); if (user && currentRoom) removeRoomPresence(currentRoom.id, user.username); };
  }, [user, currentRoom]);

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === K.ROOMS) setRooms(loadRooms());
      if (currentRoom && e.key === K.MSGS(currentRoom.id)) setMessages(loadMsgs(currentRoom.id));
    };
    window.addEventListener("storage", handler);
    const poll = setInterval(() => {
      setRooms(loadRooms());
      if (currentRoom && Date.now() - lastSendRef.current > 1500) setMessages(loadMsgs(currentRoom.id));
      if (user) {
        const accounts = loadAccounts();
        if (!accounts[user.username]) {
          localStorage.removeItem(K.USER); localStorage.removeItem(K.SESSION);
          setUser(null); setCurrentRoom(null); setView("chatlist"); setMessages([]);
          setShowStart("setup");
        }
      }
    }, 1000);
    return () => { window.removeEventListener("storage", handler); clearInterval(poll); };
  }, [currentRoom, user]);

  // Track scroll edge state via ResizeObserver (handles content changes, not just scroll events)
  useEffect(() => {
    const el = msgListRef.current;
    if (!el) return;
    const check = () => {
      setScrollEdge({ top: el.scrollTop <= 2, bottom: el.scrollHeight - el.scrollTop - el.clientHeight <= 2 });
    };
    const ro = new ResizeObserver(check);
    ro.observe(el);
    check();
    return () => ro.disconnect();
  }, []);

  // New message notification when user is not at bottom
  useEffect(() => {
    if (messages.length > prevMsgLenRef.current && !scrollEdge.bottom) {
      setHasNewMsg(true);
    }
    prevMsgLenRef.current = messages.length;
  }, [messages.length, scrollEdge.bottom]);

  useEffect(() => {
    if (!ctxMenu) return;
    const close = () => setCtxMenu(null);
    window.addEventListener("scroll", close, true); window.addEventListener("resize", close);
    return () => { window.removeEventListener("scroll", close, true); window.removeEventListener("resize", close); };
  }, [ctxMenu]);

  const pushNav = (v: View) => {
    const next = viewHistory.slice(0, histIdx + 1).concat(v);
    setViewHistory(next); setHistIdx(next.length - 1); setView(v);
  };
  const navigate = (v: View) => {
    setDevStep(null);
    if (v === "chatlist") setCurrentRoom(null);
    if (v === "photos" || v === "videos" || v === "music" || v === "desktop") setSubRoom(null);
    pushNav(v);
  };
  const goBack = () => {
    if (histIdx <= 0) return;
    const ni = histIdx - 1; const v = viewHistory[ni];
    setHistIdx(ni); setView(v);
    if (v === "chatlist") setCurrentRoom(null);
    if (v === "photos" || v === "videos" || v === "music") setSubRoom(null);
  };
  const goForward = () => {
    if (histIdx >= viewHistory.length - 1) return;
    const ni = histIdx + 1; setHistIdx(ni); setView(viewHistory[ni]);
  };

  const handleShare = () => { navigator.clipboard.writeText(window.location.href).catch(() => {}); setShowShareCopied(true); };

  const handleLogin = (username: string, password: string) => {
    const accounts = loadAccounts();
    const account = accounts[username];
    if (!account || account.password !== password) { setInfoMsg("사용자 이름 또는 비밀번호가 올바르지 않습니다."); return; }
    const online = getOnlineUsers();
    if (online.some(u => u.username === username)) { setInfoMsg("같은 이름의 접속자가 있습니다."); return; }
    const u: User = { emoji: account.emoji, username: account.username };
    saveUser(u); localStorage.setItem(K.SESSION, username); setUser(u); updateMyPresence(u); setShowStart(null);
  };

  const handleRegister = (u: User, password: string) => {
    const accounts = loadAccounts();
    if (accounts[u.username]) { setInfoMsg("이미 존재하는 사용자 이름입니다."); return; }
    const online = getOnlineUsers();
    if (online.some(ou => ou.username === u.username)) { setInfoMsg("같은 이름의 접속자가 있습니다."); return; }
    const account: Account = { username: u.username, password, emoji: u.emoji, createdAt: Date.now() };
    accounts[u.username] = account; saveAccounts(accounts);
    saveUser(u); localStorage.setItem(K.SESSION, u.username); setUser(u); updateMyPresence(u); setShowStart(null);
  };

  const handleEditUser = (u: User, newPassword: string) => {
    if (!user) return;
    const oldUsername = user.username;
    const accounts = loadAccounts();
    const oldAccount = accounts[oldUsername];
    if (!oldAccount) return;
    if (u.username !== oldUsername && accounts[u.username]) { setInfoMsg("이미 존재하는 사용자 이름입니다."); return; }
    const updatedAccount: Account = { ...oldAccount, username: u.username, emoji: u.emoji, password: newPassword || oldAccount.password };
    if (u.username !== oldUsername) delete accounts[oldUsername];
    accounts[u.username] = updatedAccount; saveAccounts(accounts);
    const p = loadPresence();
    if (u.username !== oldUsername && p[oldUsername]) delete p[oldUsername];
    p[u.username] = { emoji: u.emoji, username: u.username, ts: Date.now() }; savePresence(p);
    const allRooms = loadRooms();
    const updatedRooms = allRooms.map(r => r.createdBy === oldUsername ? { ...r, createdBy: u.username } : r);
    saveRooms(updatedRooms); setRooms(updatedRooms);
    allRooms.forEach(r => {
      const msgs = loadMsgs(r.id);
      if (msgs.some(m => m.username === oldUsername)) {
        const updated = msgs.map(m => m.username === oldUsername ? { ...m, username: u.username, emoji: u.emoji } : m);
        saveMsgs(r.id, updated);
        if (currentRoom?.id === r.id) setMessages(updated);
      }
    });
    localStorage.setItem(K.SESSION, u.username);
    saveUser(u); setUser(u); updateMyPresence(u);
    if (currentRoom?.createdBy === oldUsername) setCurrentRoom(prev => prev ? { ...prev, createdBy: u.username } : prev);
    setShowStart(null);
  };

  const handleCreateRoom = (name: string, pw?: string) => {
    const room: ChatRoom = { id: crypto.randomUUID(), name, password: pw, createdAt: Date.now(), createdBy: user?.username ?? "" };
    const updated = [...rooms, room]; setRooms(updated); saveRooms(updated); setShowNewRoom(false);
  };

  const handleEnterRoom = (r: ChatRoom) => {
    if (r.password) { setPendingRoom(r); setShowPassword(true); } else openRoom(r);
  };
  const openRoom = (r: ChatRoom) => { setCurrentRoom(r); setMessages(loadMsgs(r.id)); pushNav("chat"); };
  const handlePasswordSubmit = (pw: string, onWrong: () => void) => {
    if (!pendingRoom) return;
    if (pw === pendingRoom.password) { setShowPassword(false); setPendingRoom(null); openRoom(pendingRoom); } else onWrong();
  };

  const handleDeleteRequest = (r: ChatRoom) => {
    if (r.password) { setDeletePwRoom(r); } else { setPendingDeleteRoom(r); }
    setCtxMenu(null);
  };
  const handleDeletePwSubmit = (pw: string, onWrong: () => void) => {
    if (!deletePwRoom) return;
    if (pw === deletePwRoom.password) { setDeletePwRoom(null); setPendingDeleteRoom(deletePwRoom); } else { onWrong(); }
  };
  const handleDeleteRoom = (r: ChatRoom) => {
    const updated = rooms.filter(x => x.id !== r.id); setRooms(updated); saveRooms(updated);
    localStorage.removeItem(K.MSGS(r.id)); localStorage.removeItem(K.ROOM_PRESENCE(r.id));
    if (currentRoom?.id === r.id) { setCurrentRoom(null); pushNav("chatlist"); }
    if (subRoom?.id === r.id) setSubRoom(null);
    setPendingDeleteRoom(null);
  };
  const handleRenameRoom = (r: ChatRoom, name: string) => {
    const updated = rooms.map(x => x.id === r.id ? { ...x, name } : x);
    setRooms(updated); saveRooms(updated); setRenameRoom(null);
    if (currentRoom?.id === r.id) setCurrentRoom({ ...r, name });
  };

  const handleSendMessage = (text: string, images: string[], videos: string[], audios: string[] = []) => {
    if (!currentRoom || !user) return;
    lastSendRef.current = Date.now();
    const now = new Date();
    const msg: ChatMessage = { id: crypto.randomUUID(), roomId: currentRoom.id, emoji: user.emoji, username: user.username, text, images, videos, audios, date: fmtDate(now), time: fmtTime(now), ts: Date.now() };
    setMessages(prev => { const updated = [...prev, msg]; saveMsgs(currentRoom.id, updated); return updated; });
    setTimeout(() => { if (msgListRef.current) msgListRef.current.scrollTo({ top: msgListRef.current.scrollHeight, behavior: "smooth" }); setShowScrollBtn(false); }, 50);
  };

  const handleMediaClick = (src: string, senderEmoji: string, senderName: string) => { setMediaModal({ src, senderEmoji, senderName }); };
  const openSubRoom = (r: ChatRoom, targetView: "photoRoom" | "videoRoom" | "musicRoom") => { setSubRoom(r); setMessages(loadMsgs(r.id)); pushNav(targetView); };

  const handleResetPasswordSubmit = (pw: string, onWrong: () => void) => {
    if (!user) return;
    const accounts = loadAccounts();
    const account = accounts[user.username];
    if (!account || account.password !== pw) { onWrong(); return; }
    delete accounts[user.username]; saveAccounts(accounts);
    localStorage.removeItem(K.USER); localStorage.removeItem(K.SESSION);
    const p = loadPresence(); delete p[user.username]; savePresence(p);
    setUser(null); setCurrentRoom(null); setView("chatlist"); setMessages([]);
    setResetStep("done");
  };

  const handleDevPasswordSubmit = (pw: string, onWrong: () => void) => {
    if (pw.trim() === DEV_PW) { setDevStep("view"); } else { onWrong(); }
  };
  const handleDevDeleteConfirm = () => {
    if (!devDeleteUser) return;
    const accounts = loadAccounts(); delete accounts[devDeleteUser]; saveAccounts(accounts);
    const p = loadPresence(); delete p[devDeleteUser]; savePresence(p);
    setDevDeleteUser(null); setDevDeleteDone(true);
  };
  const handleResetAll = () => {
    const allRooms = loadRooms();
    allRooms.forEach(r => { localStorage.removeItem(K.MSGS(r.id)); localStorage.removeItem(K.ROOM_PRESENCE(r.id)); });
    localStorage.removeItem(K.ROOMS); localStorage.removeItem(K.ACCOUNTS);
    localStorage.removeItem(K.PRESENCE); localStorage.removeItem(K.USER); localStorage.removeItem(K.SESSION);
    saveRooms([]); saveAccounts({}); savePresence({});
    setRooms([]); setUser(null); setCurrentRoom(null); setSubRoom(null);
    setMessages([]); setView("chatlist"); setViewHistory(["chatlist"]); setHistIdx(0);
    setDevStep(null); setDevResetAll(false); setDevResetDone(true);
  };

  const onlineUsers = getOnlineUsers();
  const msgCount = Math.max(1, onlineUsers.length);
  const appBg = darkMode ? "#1a1a1a" : "#f6f6f6";
  const isChatView = view === "chat";
  const isDevView = devStep === "view";
  const accounts = Object.values(loadAccounts()).sort((a, b) => a.createdAt - b.createdAt);
  const noUser = !user;

  const viewTitle = isDevView ? "개발자 설정"
    : view === "chatlist" ? "I'm Fineder"
    : view === "recent" ? "최근 항목"
    : view === "chat" ? (currentRoom?.name ?? "")
    : view === "photos" || view === "photoRoom" ? "그림"
    : view === "videos" || view === "videoRoom" ? "동영상"
    : view === "music" || view === "musicRoom" ? "음악"
    : view === "desktop" ? "데스크탑"
    : "";


  return (
    <DMCtx.Provider value={darkMode}>
      <div className={`flex items-start size-full overflow-hidden ${NS}`} style={{ background: appBg }}>

        {noUser && !showStart && (
          <div className="fixed inset-0 z-[40] bg-transparent" onClick={e => e.stopPropagation()} />
        )}

        {showStart && (
          <StartModal
            mode={showStart}
            currentUser={user ?? undefined}
            onLogin={showStart === "setup" ? handleLogin : undefined}
            onRegister={showStart === "setup" ? handleRegister : handleEditUser}
            onCancel={showStart === "edit" ? () => setShowStart(null) : undefined}
          />
        )}

        {/* Sidebar */}
        <div className="relative z-[10] h-full mr-[-14px] shrink-0">
          <div className="flex flex-row items-center size-full">
            <div className="flex items-center p-[14px] size-full">
              <Sidebar view={view} onNavigate={navigate} onShare={handleShare}
                showDev={isDevView} onCloseDev={() => setDevStep(null)} />
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex flex-col flex-1 h-full min-w-0 gap-[14px]">

          {/* Toparea */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-start p-[14px]">
              <TopBar msgCount={msgCount} onBack={goBack} onForward={goForward} canBack={histIdx > 0} canForward={histIdx < viewHistory.length - 1}
                onNewRoom={() => setShowNewRoom(true)} onDarkMode={() => setDarkMode(d => !d)} onUserCount={() => setShowUserInfo(true)}
                onConnectClick={e => setConnectMenu({ x: e.clientX, y: e.clientY + 8 })} view={view} title={viewTitle} />
            </div>
          </div>

          {/* Mainarea */}
          <div className="flex flex-col flex-1 min-h-0 items-start w-full">

            {/* Category headers */}
            {(isChatView || isDevView) && <ColHeaders dev={isDevView} />}

            {/* Scrollable content + scroll-to-bottom */}
            <div className="flex-1 min-h-0 relative w-full">
              <div ref={msgListRef}
                className={`absolute inset-0 overflow-y-auto custom-scroll ${isChatView && chatAreaDragging ? "ring-2 ring-[#0076ff] ring-inset" : ""}`}
                onDragOver={isChatView ? e => { e.preventDefault(); setChatAreaDragging(true); } : undefined}
                onDragLeave={isChatView ? e => { if (!msgListRef.current?.contains(e.relatedTarget as Node)) setChatAreaDragging(false); } : undefined}
                onDrop={isChatView ? e => { e.preventDefault(); setChatAreaDragging(false); chatInputRef.current?.addFiles(e.dataTransfer.files); } : undefined}
                onScroll={() => {
                  const el = msgListRef.current;
                  if (!el) return;
                  const atTop = el.scrollTop <= 2;
                  const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
                  const atBottom = distFromBottom <= 2;
                  setScrollEdge({ top: atTop, bottom: atBottom });
                  setShowScrollBtn(distFromBottom > 100);
                  if (atBottom) setHasNewMsg(false);
                }}>
                {isDevView ? (
                  <DeveloperView accounts={accounts} onDeleteAccount={un => setDevDeleteUser(un)} onResetAll={() => setDevResetAll(true)} />
                ) : view === "chatlist" && user ? (
                  <ChatListView rooms={rooms} currentUsername={user.username} onEnterRoom={handleEnterRoom}
                    onContextMenu={(room, e) => setCtxMenu({ room, x: e.clientX, y: e.clientY })} />
                ) : view === "recent" && user ? (
                  <RecentView rooms={rooms} onEnterRoom={handleEnterRoom}
                    onContextMenu={(room, e) => setCtxMenu({ room, x: e.clientX, y: e.clientY })} />
                ) : view === "chat" && currentRoom ? (
                  <div className="flex flex-col px-[14px] py-[8px]">
                    {messages.map((msg, i) => <MessageRow key={msg.id} msg={msg} isAlt={i % 2 === 1} onMediaClick={handleMediaClick} />)}
                  </div>
                ) : view === "photos" && user ? (
                  <RoomGridView rooms={rooms} currentUsername={user.username} onClick={r => openSubRoom(r, "photoRoom")} />
                ) : view === "photoRoom" && subRoom ? (
                  <MediaRoomView messages={loadMsgs(subRoom.id)} mediaType="images" onMediaClick={handleMediaClick} />
                ) : view === "videos" && user ? (
                  <RoomGridView rooms={rooms} currentUsername={user.username} onClick={r => openSubRoom(r, "videoRoom")} />
                ) : view === "videoRoom" && subRoom ? (
                  <MediaRoomView messages={loadMsgs(subRoom.id)} mediaType="videos" onMediaClick={handleMediaClick} />
                ) : view === "music" && user ? (
                  <RoomGridView rooms={rooms} currentUsername={user.username} onClick={r => openSubRoom(r, "musicRoom")} />
                ) : view === "musicRoom" && subRoom ? (
                  <AudioRoomView messages={loadMsgs(subRoom.id)} />
                ) : view === "desktop" ? (
                  null
                ) : null}
              </div>

              <ScrollFadeEdge pos="top" visible={!scrollEdge.top} color={appBg} />
              <ScrollFadeEdge pos="bottom" visible={!scrollEdge.bottom} color={appBg} />

              {/* Scroll to bottom button */}
              {isChatView && (hasNewMsg || showScrollBtn) && (
                <button className={`absolute z-[10] rounded-full size-[40px] flex items-center justify-center shadow-[0px_4px_12px_rgba(0,0,0,0.2)] transition-colors border border-[#d0d0d0]/50 ${darkMode ? "bg-[#2a2a2a] hover:bg-[#3a3a3a]" : "bg-[#fafafa] hover:bg-[#e0e0e0]"}`}
                  style={{ bottom: 12, left: "50%", transform: "translateX(-50%)" }}
                  onClick={() => { msgListRef.current?.scrollTo({ top: msgListRef.current.scrollHeight, behavior: "smooth" }); setHasNewMsg(false); }}>
                  <div style={{ transform: "rotate(-90deg)" }}><IcBack /></div>
                </button>
              )}
            </div>

            {/* Chat input */}
            {isChatView && currentRoom && user && (
              <ChatInput ref={chatInputRef} onSend={handleSendMessage} darkMode={darkMode} onError={msg => setInfoMsg(msg)} />
            )}

          </div>

        </div>

        {/* ── Modals ── */}
        {showNewRoom && <NewRoomModal onDone={handleCreateRoom} onClose={() => setShowNewRoom(false)} />}
        {showPassword && <PasswordModal onSubmit={handlePasswordSubmit} onClose={() => { setShowPassword(false); setPendingRoom(null); }} />}
        {deletePwRoom && <PasswordModal onSubmit={handleDeletePwSubmit} onClose={() => setDeletePwRoom(null)} />}
        {showUserInfo && user && (
          <UserInfoModal user={user} onClose={() => setShowUserInfo(false)}
            onEditUser={() => { setShowUserInfo(false); setEditVerifyPw(true); }} />
        )}
        {editVerifyPw && user && (
          <PasswordModal title="현재 비밀번호 확인"
            onSubmit={(pw, onWrong) => {
              const accounts = loadAccounts();
              const account = accounts[user.username];
              if (account && account.password === pw) { setEditVerifyPw(false); setShowStart("edit"); }
              else { onWrong(); }
            }}
            onClose={() => setEditVerifyPw(false)} />
        )}
        {showShareCopied && <ShareCopiedModal onClose={() => setShowShareCopied(false)} />}
        {pendingDeleteRoom && (
          <DeleteModal message="폴더를 삭제하시겠습니까?" onConfirm={() => handleDeleteRoom(pendingDeleteRoom)} onClose={() => setPendingDeleteRoom(null)} />
        )}
        {renameRoom && (
          <RenameRoomModal room={renameRoom} onConfirm={name => handleRenameRoom(renameRoom, name)} onClose={() => setRenameRoom(null)} />
        )}
        {mediaModal && <MediaModal media={mediaModal} onClose={() => setMediaModal(null)} />}
        {ctxMenu && user && (
          <ContextMenu menu={ctxMenu} currentUsername={user.username}
            onDelete={() => handleDeleteRequest(ctxMenu.room)}
            onRename={() => { setRenameRoom(ctxMenu.room); setCtxMenu(null); }}
            onClose={() => setCtxMenu(null)} />
        )}
        {connectMenu && (
          <ConnectMenu pos={connectMenu} onResetAccount={() => setResetStep("confirm")} onDevMode={() => setDevStep("password")} onClose={() => setConnectMenu(null)} />
        )}

        {/* Account reset flow */}
        {resetStep === "confirm" && (
          <DeleteModal message="계정을 삭제한 뒤 I'm Fineder를 재설정하시겠습니까?" confirmLabel="삭제 및 재설정"
            onConfirm={() => setResetStep("password")} onClose={() => setResetStep(null)} />
        )}
        {resetStep === "password" && (
          <PasswordModal title="계정 비밀번호 확인" onSubmit={handleResetPasswordSubmit} onClose={() => setResetStep(null)} />
        )}
        {resetStep === "done" && (
          <InfoModal message="계정이 삭제되었습니다." noBackdropClose onClose={() => { setResetStep(null); setShowStart("setup"); }} />
        )}

        {/* Developer mode flow */}
        {devStep === "password" && (
          <PasswordModal title="개발자 설정" onSubmit={handleDevPasswordSubmit} onClose={() => setDevStep(null)} />
        )}
        {devDeleteUser && (
          <DeleteModal message="해당 계정을 삭제하시겠습니까?" onConfirm={handleDevDeleteConfirm} onClose={() => setDevDeleteUser(null)} />
        )}
        {devDeleteDone && (
          <InfoModal message="계정이 삭제되었습니다." onClose={() => setDevDeleteDone(false)} />
        )}
        {devResetAll && (
          <DeleteModal message="I'm Fineder를 초기화하시겠습니까? 모든 채팅방, 메시지, 사용자 정보가 삭제됩니다." confirmLabel="초기화"
            onConfirm={handleResetAll} onClose={() => setDevResetAll(false)} />
        )}
        {devResetDone && (
          <InfoModal message="초기화가 완료되었습니다." noBackdropClose onClose={() => { setDevResetDone(false); setShowStart("setup"); }} />
        )}

        {infoMsg && (
          <InfoModal message={infoMsg} onClose={() => setInfoMsg(null)} />
        )}
      </div>
    </DMCtx.Provider>
  );
}
