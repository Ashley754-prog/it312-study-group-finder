import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold text-maroon mb-4">Dashboard Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-maroon">Total Users</h3>
              <p className="text-3xl font-bold mt-2">152</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-maroon">Active Groups</h3>
              <p className="text-3xl font-bold mt-2">27</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-maroon">Reports</h3>
              <p className="text-3xl font-bold mt-2">4</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
