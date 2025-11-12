import { useState, useRef, useEffect } from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  UserGroupIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  ClockIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import { gapi } from "gapi-script";

const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";
const API_KEY = "YOUR_GOOGLE_API_KEY";
const SCOPES = "https://www.googleapis.com/auth/drive.file";

export default function GroupChatPage() {
  const [selectedChat, setSelectedChat] = useState("Group 1");
  const [messages, setMessages] = useState([
    { id: 1, sender: "Juan", text: "Hi guys! Ready to study?", time: "10:30 AM" },
    { id: 2, sender: "Maria", text: "Yes! Let's begin", time: "10:31 AM" },
  ]);
  const [inputText, setInputText] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [pendingFileLink, setPendingFileLink] = useState(null);
  const [showAttachOptions, setShowAttachOptions] = useState(false);

  const fileInputRef = useRef(null);

  const channels = [
    { name: "Group 1", unread: 0 },
    { name: "Group 2", unread: 3 },
    { name: "Group 3", unread: 1 },
  ];

  const info = {
    description: "Math 101 exam reviewer group to strengthen fundamentals.",
    meeting: "Oct 30 • 2:00 PM - 4:00 PM",
    members: ["Juan (You)", "Maria", "Pedro", "Anna"],
  };

  useEffect(() => {
    gapi.load("client:auth2", async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        ],
      });

      const auth = gapi.auth2.getAuthInstance();
      setIsSignedIn(auth.isSignedIn.get());
      auth.isSignedIn.listen(setIsSignedIn);
    });
  }, []);

  const signIn = async () => {
    const auth = gapi.auth2.getAuthInstance();
    await auth.signIn();
  };
  const signOut = async () => {
    const auth = gapi.auth2.getAuthInstance();
    await auth.signOut();
  };

  const openFilePicker = () => {
    if (!isSignedIn) {
      alert("Please sign-in to Google first.");
      return;
    }
    fileInputRef.current.click();
  };

  const uploadToDrive = async (file) => {
    setUploading(true);
    try {
      const metadata = { name: file.name, mimeType: file.type };
      const form = new FormData();
      form.append(
        "metadata",
        new Blob([JSON.stringify(metadata)], { type: "application/json" })
      );
      form.append("file", file);

      const token = gapi.auth.getToken().access_token;

      const res = await fetch(
        "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
        {
          method: "POST",
          headers: new Headers({ Authorization: `Bearer ${token}` }),
          body: form,
        }
      );

      const data = await res.json();
      if (!res.ok) throw data;

      await fetch(
        `https://www.googleapis.com/drive/v3/files/${data.id}/permissions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role: "reader", type: "anyone" }),
        }
      );

      const link = `https://drive.google.com/file/d/${data.id}/view`;
      setPendingFileLink(link);
      return link;
    } catch (e) {
      console.error(e);
      alert("Upload failed – check console.");
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) uploadToDrive(file);
    e.target.value = ""; 
  };

  const sendMessage = () => {
    if (!inputText.trim() && !pendingFileLink) return;

    const newMsg = {
      id: messages.length + 1,
      sender: "Juan (You)",
      text: inputText.trim() || "File attached",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
      fileLink: pendingFileLink,
    };

    setMessages((m) => [...m, newMsg]);
    setInputText("");
    setPendingFileLink(null);
  };

  return (
    <>
      {/* Google Sign-in Button */}
      <div className="fixed top-4 right-4 z-10">
        {isSignedIn ? (
          <button
            onClick={signOut}
            className="text-xs text-red-600 underline"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={signIn}
            className="px-3 py-1 bg-blue-600 text-white text-xs rounded"
          >
            Sign-in (Drive)
          </button>
        )}
      </div>

      {/* Main Group Chat Container */}
      <div className="flex h-[calc(100vh-200px)] max-w-7xl mx-auto bg-white border border-gray-300 shadow-xl rounded-xl overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-maroon text-white p-4 flex flex-col">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <UserGroupIcon className="w-6 h-6" /> Study Groups
          </h2>

          <ul className="flex-1 space-y-2">
            {channels.map((group) => (
              <li
                key={group.name}
                onClick={() => setSelectedChat(group.name)}
                className={`cursor-pointer p-2 rounded-lg flex justify-between items-center ${
                  selectedChat === group.name
                    ? "bg-gold text-maroon font-semibold"
                    : "hover:bg-white hover:text-maroon"
                }`}
              >
                <span>{group.name}</span>
                {group.unread > 0 && selectedChat !== group.name && (
                  <span className="ml-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {group.unread}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat Main */}
        <main className="flex-1 flex flex-col">
          <div className="p-4 border-b flex items-center gap-2">
            <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-maroon" />
            <h2 className="font-semibold text-maroon">{selectedChat}</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="text-sm">
                <p className="font-semibold text-maroon">{msg.sender}</p>
                <div className="bg-gray-200 p-3 rounded-lg inline-block text-gray-800 max-w-xs">
                  {msg.text}
                  {msg.fileLink && (
                    <a
                      href={msg.fileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-1 text-blue-600 underline text-xs"
                    >
                      View file on Drive
                    </a>
                  )}
                </div>
                <p className="text-[10px] text-gray-500 mt-1">{msg.time}</p>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t flex items-center gap-2">
            <button
              onClick={() => setShowAttachOptions(!showAttachOptions)}
              disabled={uploading}
              className="relative p-2 rounded hover:bg-gray-200 disabled:opacity-50 group"
              title="Attach files here"
            >
              <PaperClipIcon className="h-5 w-5 text-gray-600" />
              {showAttachOptions && (
                <div className="absolute bottom-full mb-2 left-0 bg-white border rounded-lg shadow-md w-48 text-sm z-20">
                  <button
                    onClick={() => {
                      setShowAttachOptions(false);
                      fileInputRef.current.click();
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:rounded-lg"
                  >
                    Upload a file
                  </button>
                  <span className="border-b border-gray-800 w-full block"></span>
                  <button
                    onClick={() => {
                      setShowAttachOptions(false);
                      if (!isSignedIn) signIn();
                      else alert('Connected to Google Drive');
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200 hover:cursor-pointer hover:rounded-lg"
                  >
                    Connect to Google Drive
                  </button>
                </div>
              )}
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="
                application/pdf,
                application/vnd.openxmlformats-officedocument.wordprocessingml.document,
                application/msword,
                image/png,image/jpeg,image/gif,image/webp
              "
              onChange={handleFileChange}
              className="hidden"
            />

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 p-2 rounded-lg bg-gray-200 focus:ring-2 focus:ring-gold outline-none"
            />

            <button
              onClick={sendMessage}
              disabled={uploading}
              className="bg-maroon text-white px-4 py-2 rounded-lg hover:brightness-110 disabled:opacity-70"
            >
              {uploading ? "Uploading…" : "Send"}
            </button>
          </div>

          {uploading && (
            <div className="px-4 pb-2 text-xs text-gray-600">
              Uploading file…
            </div>
          )}
          {pendingFileLink && !uploading && (
            <div className="px-4 pb-2 text-xs text-green-600">
              File ready – press Send to share.
            </div>
          )}
        </main>

        {/* Right Info Panel */}
        <aside className="w-80 bg-gray-100 p-4 border-l flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-maroon text-lg mb-3">Group Info</h3>
            <p className="text-gray-700 text-sm mb-4">{info.description}</p>

            <div className="bg-white p-3 rounded-lg shadow-sm space-y-2 text-sm mb-4">
              <div className="flex items-center gap-2 text-maroon font-medium">
                <CalendarDaysIcon className="w-5 h-5" />
                <span>Next Meeting</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <ClockIcon className="w-5 h-5 text-maroon" />
                <span>{info.meeting}</span>
              </div>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    "https://meet.google.com/example"
                  )
                }
                className="mt-2 w-full bg-maroon text-white px-3 py-2 rounded-lg hover:brightness-110 text-sm"
              >
                Copy Meeting Link
              </button>
            </div>

            <h4 className="font-semibold text-maroon mb-2 text-sm">Members</h4>
            <ul className="space-y-2 text-gray-700">
              {info.members.map((member, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <UserCircleIcon className="w-6 h-6 text-maroon" />
                  {member}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 mt-4">
            <button
              onClick={async () => {
                const p = await Notification.requestPermission();
                alert(
                  p === "granted"
                    ? "Notifications enabled!"
                    : "Notifications blocked!"
                );
              }}
              className="bg-gray-300 text-maroon px-4 py-2 rounded-lg hover:brightness-110 w-full font-semibold"
            >
              Enable Notifications
            </button>

            <button className="bg-gold text-maroon px-4 py-2 rounded-lg hover:brightness-110 w-full font-semibold">
              Leave Group
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
