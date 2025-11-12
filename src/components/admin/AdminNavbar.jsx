import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleAdminLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-maroon">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-700">Admin User</p>
          <p className="text-xs text-gray-500">admin@wmsu.edu.ph</p>
        </div>
        <div
          onClick={handleAdminLogout}
          className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-bold text-maroon cursor-pointer"
        >
          A
        </div>
      </div>
    </header>
  );
}
