import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/wmsu-bg-img.jpg')" }}
    >
      <Navbar />

      <main className="flex-1 mt-24 mb-24 px-4 flex justify-center">
        <div className="max-w-6xl w-full bg-white bg-opacity-95 shadow-xl rounded-xl p-6 flex gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <input
                type="text"
                placeholder="Search by subject, course, or place"
                className="flex-1 p-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-gold"
              />
              <select className="p-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-gold">
                <option>Locations</option>
              </select>
            </div>

            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
                <h2 className="text-lg font-semibold text-maroon">Math 101 Review Group</h2>
                <p className="text-sm text-gray-700">5 members • Library • Time & Date</p>
                <p className="text-sm mt-2 text-gray-600">
                  Short description about this study group.
                </p>
                <button className="mt-3 bg-gold text-maroon px-4 py-2 rounded hover:brightness-110">
                  Join Group
                </button>
              </div>
            ))}
          </div>

          <aside className="w-72 flex flex-col gap-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-maroon text-lg mb-2">Your Subjects</h3>
              <ul className="text-sm text-gray-700">
                <li>Subject 1</li>
                <li>Subject 2</li>
                <li>Subject 3</li>
              </ul>
              <button className="mt-3 bg-gold text-maroon px-3 py-1 rounded hover:brightness-110">
                Add Subject
              </button>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-maroon text-lg mb-2">Created Groups</h3>
              <ul className="text-sm text-gray-700">
                <li>Group Name (3/8)</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
