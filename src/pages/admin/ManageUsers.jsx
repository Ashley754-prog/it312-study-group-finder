import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";

export default function ManageUsers() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold text-maroon mb-4">Manage Users</h2>
          <p className="text-gray-700 mb-6">
            View, edit, or remove registered users from the system.
          </p>

          <table className="w-full border-collapse bg-white shadow rounded-lg">
            <thead className="bg-maroon text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">Juan Dela Cruz</td>
                <td className="p-3">juan@wmsu.edu.ph</td>
                <td className="p-3">Student</td>
                <td className="p-3">
                  <button className="bg-gold text-maroon px-3 py-1 rounded hover:brightness-110 mr-2">
                    Edit
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:brightness-110">
                    Remove
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
