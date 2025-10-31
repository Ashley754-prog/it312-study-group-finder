import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";

export default function ManageGroups() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />

        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold text-maroon mb-4">Manage Study Groups</h2>
          <p className="text-gray-700 mb-6">
            View, edit, or remove existing study groups within the platform.
          </p>

          <div className="flex mb-4 gap-2">
            <input
              type="text"
              placeholder="Search group by name..."
              className="flex-1 p-2 rounded bg-gray-200 focus:ring-2 focus:ring-maroon"
            />
            <button className="bg-maroon text-white px-4 py-2 rounded hover:brightness-110">
              Search
            </button>
          </div>

          <table className="w-full border-collapse bg-white shadow rounded-lg">
            <thead className="bg-maroon text-white">
              <tr>
                <th className="p-3 text-left">Group Name</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Members</th>
                <th className="p-3 text-left">Created On</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">Math 101 Reviewers</td>
                <td className="p-3">BSIT 3A</td>
                <td className="p-3">12</td>
                <td className="p-3">Oct 18, 2024</td>
                <td className="p-3">
                  <button className="bg-gold text-maroon px-3 py-1 rounded hover:brightness-110 mr-2">
                    View
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:brightness-110">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">System Integration Project Group</td>
                <td className="p-3">BSIT 4B</td>
                <td className="p-3">8</td>
                <td className="p-3">Oct 25, 2024</td>
                <td className="p-3">
                  <button className="bg-gold text-maroon px-3 py-1 rounded hover:brightness-110 mr-2">
                    View
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:brightness-110">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
