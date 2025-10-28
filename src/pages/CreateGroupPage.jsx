import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CreateGroupPage() {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [schedule, setSchedule] = useState("");

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col text-white"
      style={{ backgroundImage: "url('/wmsu-bg-img.jpg')" }}
    >
        <Navbar />
      <main className="flex-1 flex justify-center items-start px-4 pt-32 pb-20">
        <div className="max-w-3xl bg-white text-maroon p-10 rounded-2xl shadow-xl w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">Create Study Group</h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <textarea
              placeholder="Group Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded bg-gray-200 h-28 resize-none focus:ring-2 focus:ring-gold"
            ></textarea>

            <input
              type="text"
              placeholder="Location (ex: Library A)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <input
              type="datetime-local"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <button
              type="submit"
              className="w-full bg-maroon text-white py-2 text-lg font-semibold rounded-lg hover:brightness-110"
            >
              Create Group
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
