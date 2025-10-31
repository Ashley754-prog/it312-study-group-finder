import { useState } from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  UserGroupIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import PageLayout from "../components/PageLayout";

export default function InboxPage() {
  const [selectedChat, setSelectedChat] = useState("Group 1");

  const channels = [
    { name: "Group 1", unread: 0 },
    { name: "Group 2", unread: 3 },
    { name: "Group 3", unread: 1 },
  ];

  const messages = [
    { id: 1, sender: "Juan", text: "Hi guys! Ready to study?", time: "10:30 AM" },
    { id: 2, sender: "Maria", text: "Yes! Let's begin 🤓", time: "10:31 AM" },
  ];

  const info = {
    description: "Math 101 exam reviewer group to strengthen fundamentals.",
    meeting: "Oct 30 • 2:00 PM - 4:00 PM",
    members: ["Juan (You)", "Maria", "Pedro", "Anna"],
  };

  return (
    <PageLayout>
      <div className="flex h-[calc(100vh-200px)] max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
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
                </div>
                <p className="text-[10px] text-gray-500 mt-1">{msg.time}</p>
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 rounded-lg bg-gray-200 focus:ring-2 focus:ring-gold"
            />
            <button className="bg-maroon text-white px-4 py-2 rounded-lg hover:brightness-110">
              Send
            </button>
          </div>
        </main>

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
                  navigator.clipboard.writeText("https://meet.google.com/example")
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
                const permission = await Notification.requestPermission();
                if (permission === "granted") {
                  alert("✅ Notifications enabled!");
                } else {
                  alert("❌ Notifications blocked!");
                }
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
    </PageLayout>
  );
}
