import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="flex flex-col min-h-screen bg-white text-maroon">
        <Navbar />

        <div className="flex h-[calc(100vh-200px)] max-w-7xl mx-auto bg-white shadow-xl rounded-xl border border-gray-300 overflow-hidden">

          <main className="flex-1 flex flex-col overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-maroon">Groups Available</h1>
              <button
                onClick={() => navigate("/create-group")}
                className="bg-maroon text-white px-4 py-2 rounded-lg hover:brightness-110"
              >
                + Create Group
              </button>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <input
                type="text"
                placeholder="Search by subject, course, or place"
                className="flex-1 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-gold"
              />
              <select className="p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-gold">
                <option>Locations</option>
                <option>Campus A</option>
                <option>Campus B</option>
                <option>Library</option>
                <option>Engineering Building</option>
                <option>CLA Building</option>
              </select>
            </div>

            <div className="flex flex-1 overflow-y-auto gap-6">
              <div className="flex-1 space-y-6 pr-2">
                {["Biol 41", "Math 143", "Math 146"].map((subject) => (
                  <div key={subject}>
                    <h2 className="text-lg font-bold text-maroon mb-2 border-b border-gray-300 pb-1">
                      {subject}
                    </h2>

                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between bg-gray-100 p-4 rounded-lg border border-gray-300 mb-2"
                      >
                        <div>
                          <p className="font-semibold text-maroon">
                            Group Name: {subject} Study Group {i}
                          </p>
                          <p className="text-sm text-gray-700">
                            Group Size: {5 + i} • Space Available: {`${3 + i}/8`}
                          </p>
                        </div>
                        <button className="bg-gold text-maroon px-4 py-2 rounded hover:brightness-110">
                          Join Group
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <aside className="w-full lg:w-80 flex flex-col gap-6 flex-shrink-0 overflow-y-auto">
                <div className="bg-gray-100 p-5 rounded-lg border border-gray-300 shadow-sm">
                  <h3 className="font-semibold text-maroon text-lg mb-3">Your Courses</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Biol 41</li>
                    <li>Math 143</li>
                    <li>Math 146</li>
                    <li>Math 158</li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-5 rounded-lg border border-gray-300 shadow-sm">
                  <h3 className="font-semibold text-maroon text-lg mb-3">Your Created Groups</h3>

                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">
                          Math 146 <br /> Mathematicians
                        </span>
                        <span className="ml-2 text-gray-500">(3/8)</span>
                      </div>
                      <div className="flex gap-1">
                        <button
                          title="Edit Group"
                          className="bg-gold text-maroon p-2 rounded-lg hover:brightness-110"
                        >
                          <PencilSquareIcon className="w-4 h-4" />
                        </button>

                        <button
                          title="Delete Group"
                          className="bg-red-600 text-white p-2 rounded-lg hover:brightness-110"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </PageLayout>
  );
}
