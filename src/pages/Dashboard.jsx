import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";

export default function Dashboard() {
  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col bg-white text-maroon">
        <Navbar />

        <main className="flex justify-center items-start px-4 pt-24 pb-16 overflow-y-auto">
          <div className="max-w-6xl w-full bg-white p-8 rounded-xl shadow-lg border border-gray-300">

            <div className="flex items-center gap-3 mb-8">
              <input
                type="text"
                placeholder="Search by subject, course, or place"
                className="flex-1 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-gold"
              />
              <select className="p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-gold">
                <option>Locations</option>
                <option>Library</option>
                <option>Engineering Building</option>
                <option>Online</option>
              </select>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-sm mb-4">
                    <h2 className="text-lg font-semibold text-maroon">Math 101 Review Group</h2>
                    <p className="text-sm text-gray-700">5 members • Library • Time & Date</p>
                    <p className="text-sm mt-2 text-gray-600">
                      Short description about this study group and what topics will be discussed.
                    </p>
                    <button className="mt-3 bg-gold text-maroon px-4 py-2 rounded hover:brightness-110">
                      Join Group
                    </button>
                  </div>
                ))}
              </div>

              <aside className="w-full lg:w-80 flex flex-col gap-6">
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-sm">
                  <h3 className="font-semibold text-maroon text-lg mb-3">Your Subjects</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Subject 1</li>
                    <li>Subject 2</li>
                    <li>Subject 3</li>
                  </ul>
                  <button className="mt-4 bg-gold text-maroon px-3 py-2 rounded hover:brightness-110 w-full">
                    Add Subject
                  </button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-sm">
                  <h3 className="font-semibold text-maroon text-lg mb-3">Created Groups</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Group Name (3/8)</li>
                    <li>Database Study Circle (6/10)</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageLayout>
  );
}
