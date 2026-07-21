import { useState, useEffect, useRef } from "react";
import { useAuth } from "../lib/AuthProvider";
import { subscribeRooms, createRoom as createRoomOnServer, subscribeMessages, sendMessage } from "../lib/firebase";

interface ChatRoom {
  id: string;
  name: string;
  password?: string;
  createdAt: number;
  createdBy: string;
}

interface ChatMessage {
  id: string;
  roomId: string;
  username: string;
  emoji: string;
  text: string;
  images: string[];
  videos: string[];
  audios: string[];
  date: string;
  time: string;
  ts: number;
}

const USER_NAME_KEY = "imf_user";
const readUserName = (): string | null => {
  try {
    return localStorage.getItem(USER_NAME_KEY);
  } catch {
    return null;
  }
};
const saveUserName = (name: string) => {
  try {
    localStorage.setItem(USER_NAME_KEY, name);
  } catch {
    // ignore
  }
};

const fmtDate = (d: Date) => `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, "0")}. ${String(d.getDate()).padStart(2, "0")}.`;
const fmtTime = (d: Date) => `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;

export default function App() {
  const { user: firebaseUser } = useAuth();
  const [username, setUsername] = useState<string>(readUserName() || "");
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [currentRoom, setCurrentRoom] = useState<ChatRoom | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newRoomName, setNewRoomName] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const messageListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!firebaseUser) return;
    const unsubscribe = subscribeRooms((data) => {
      setRooms(data as ChatRoom[]);
    });
    return unsubscribe;
  }, [firebaseUser]);

  useEffect(() => {
    if (!firebaseUser || !currentRoom) {
      setMessages([]);
      return;
    }
    const unsubscribe = subscribeMessages(currentRoom.id, (data) => {
      setMessages(data as ChatMessage[]);
      setTimeout(() => {
        messageListRef.current?.scrollTo({ top: messageListRef.current.scrollHeight, behavior: "smooth" });
      }, 50);
    });
    return unsubscribe;
  }, [firebaseUser, currentRoom]);

  const handleSaveName = () => {
    if (!username.trim()) {
      setError("별명을 입력해 주세요.");
      return;
    }
    saveUserName(username.trim());
    setError(null);
    setInfo("별명이 저장되었습니다.");
  };

  const handleCreateRoom = async () => {
    if (!newRoomName.trim()) {
      setError("채팅방 이름을 입력해 주세요.");
      return;
    }
    try {
      await createRoomOnServer({
        id: crypto.randomUUID(),
        name: newRoomName.trim(),
        createdAt: Date.now(),
        createdBy: username || "Anonymous",
      });
      setNewRoomName("");
      setError(null);
      setInfo("채팅방이 생성되었습니다.");
    } catch (err) {
      setError("채팅방 생성에 실패했습니다.");
    }
  };

  const handleSendMessage = async () => {
    if (!currentRoom) return;
    if (!newMessage.trim()) {
      setError("메시지를 입력해 주세요.");
      return;
    }
    if (!username.trim()) {
      setError("별명을 설정해 주세요.");
      return;
    }
    try {
      const now = new Date();
      await sendMessage(currentRoom.id, {
        username: username.trim(),
        emoji: "🙂",
        text: newMessage.trim(),
        images: [],
        videos: [],
        audios: [],
        date: fmtDate(now),
        time: fmtTime(now),
      } as any);
      setNewMessage("");
      setError(null);
    } catch (err) {
      setError("메시지 전송에 실패했습니다.");
    }
  };

  const isReady = firebaseUser !== null;

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#1A1A1A] p-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-6 rounded-[20px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <h1 className="text-[24px] font-bold mb-3">I'm Fineder</h1>
          <p className="text-[14px] text-[#555] mb-4">실시간 Firebase 채팅. 채팅방과 메시지는 모두 서버에 저장됩니다.</p>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-[12px] font-[600] mb-2">별명</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full rounded-[12px] border border-[#d0d0d0] px-4 py-3" placeholder="별명을 입력하세요" />
            </div>
            <button onClick={handleSaveName} className="rounded-[12px] bg-[#0076ff] text-white px-5 py-3 hover:bg-[#0165e0] transition">저장</button>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-[12px] font-[600] mb-2">새 채팅방 이름</label>
              <input value={newRoomName} onChange={(e) => setNewRoomName(e.target.value)} className="w-full rounded-[12px] border border-[#d0d0d0] px-4 py-3" placeholder="방 이름" />
            </div>
            <button onClick={handleCreateRoom} className="rounded-[12px] bg-[#35c75a] text-white px-5 py-3 hover:bg-[#2fab55] transition">채팅방 생성</button>
          </div>
          {error && <div className="mt-4 text-[#d92a2a]">{error}</div>}
          {info && <div className="mt-4 text-[#0076ff]">{info}</div>}
        </div>

        <div className="grid gap-4 xl:grid-cols-[320px_1fr]">
          <div className="rounded-[20px] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h2 className="text-[18px] font-bold mb-4">채팅방 목록</h2>
            <div className="flex flex-col gap-2">
              {rooms.length === 0 && <div className="text-[#777]">생성된 채팅방이 없습니다.</div>}
              {rooms.map((room) => (
                <button key={room.id} className={`w-full text-left rounded-[14px] border px-4 py-3 transition ${currentRoom?.id === room.id ? "border-[#0076ff] bg-[#eef4ff]" : "border-[#e0e0e0] bg-[#fafafa] hover:border-[#0076ff]"}`} onClick={() => setCurrentRoom(room)}>
                  <div className="flex items-center justify-between">
                    <span className="font-[600]">{room.name}</span>
                    <span className="text-[12px] text-[#888]">{room.createdBy}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] min-h-[520px]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[18px] font-bold">{currentRoom ? currentRoom.name : "채팅방을 선택하세요"}</h2>
              <span className="text-[12px] text-[#888]">실시간 서버 저장</span>
            </div>
            <div ref={messageListRef} className="mb-4 h-[420px] overflow-y-auto rounded-[16px] border border-[#e5e5e5] bg-[#fafafa] p-4 space-y-3">
              {currentRoom ? (
                messages.length === 0 ? <div className="text-[#777]">첫 메시지를 보내보세요.</div> : messages.map((msg) => (
                  <div key={msg.id} className="rounded-[16px] border border-[#e0e0e0] bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <div className="font-[600]">{msg.emoji} {msg.username}</div>
                      <div className="text-[11px] text-[#888]">{msg.date} {msg.time}</div>
                    </div>
                    <div className="text-[14px] text-[#222] whitespace-pre-wrap">{msg.text}</div>
                  </div>
                ))
              ) : (
                <div className="text-[#777]">왼쪽에서 채팅방을 선택해주세요.</div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} disabled={!currentRoom} className="min-h-[100px] w-full resize-none rounded-[16px] border border-[#d0d0d0] p-4" placeholder={currentRoom ? "메시지를 입력하세요" : "먼저 채팅방을 선택해주세요."} />
              <button onClick={handleSendMessage} disabled={!currentRoom} className="rounded-[16px] bg-[#0076ff] text-white px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-[#0165e0]">전송</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
