import { Link, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleAdminLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login"); 
  };

  return (
    <header className="bg-maroon text-white py-4 shadow-md flex justify-between items-center px-6">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>

      <div className="flex items-center">
        <button
          onClick={handleAdminLogout}
          className="bg-gold text-maroon px-3 py-1 rounded hover:brightness-110 font-semibold"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
