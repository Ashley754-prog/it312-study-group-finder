import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Reports() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />

        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold text-maroon mb-4">Reports & Activity Logs</h2>
          <p className="text-gray-700 mb-6">
            Manage user-submitted reports, flagged messages, and other moderation tasks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-maroon">Total Reports</h3>
              <p className="text-3xl font-bold mt-2">12</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-maroon">Resolved</h3>
              <p className="text-3xl font-bold mt-2 text-green-600">9</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-maroon">Pending</h3>
              <p className="text-3xl font-bold mt-2 text-red-600">3</p>
            </div>
          </div>

          <table className="w-full border-collapse bg-white shadow rounded-lg">
            <thead className="bg-maroon text-white">
              <tr>
                <th className="p-3 text-left">Reporter</th>
                <th className="p-3 text-left">Reported User</th>
                <th className="p-3 text-left">Reason</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">Maria Santos</td>
                <td className="p-3">Juan Dela Cruz</td>
                <td className="p-3 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />
                  Spam messages
                </td>
                <td className="p-3">Oct 29, 2024</td>
                <td className="p-3 text-yellow-600 font-semibold">Pending</td>
                <td className="p-3">
                  <button className="bg-gold text-maroon px-3 py-1 rounded hover:brightness-110 mr-2">
                    Review
                  </button>
                  <button className="bg-green-600 text-white px-3 py-1 rounded hover:brightness-110">
                    Resolve
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
