import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserCircleIcon, HomeIcon, InboxIcon, CalendarIcon, PlusCircleIcon, UsersIcon } from "@heroicons/react/24/solid";
import { getUser, logoutUser } from "../utils/auth";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = getUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const profilePic = null; 

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const navItem = (path, label, Icon) => (
    <Link
      to={path}
      className={`flex items-center gap-1 ${location.pathname === path ? "text-gold font-semibold" : "text-white hover:text-gold"}`}
    >
      <Icon className="w-5 h-5" />
      <span className="hidden sm:block">{label}</span>
    </Link>
  );

  return (
    <header className="w-full bg-maroon text-white py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img src="/study-squad-logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-lg font-bold">Crimsons Study Squad</h1>
        </div>

        <nav className="flex gap-6 text-sm font-medium">
          {navItem("/dashboard", "Home", HomeIcon)}
          {navItem("/inbox", "Inbox", InboxIcon)}
          {navItem("/create-group", "Create Group", PlusCircleIcon)}
          {navItem("/schedules", "Schedules", CalendarIcon)}
          {navItem("/my-study-groups", "My Study Groups", UsersIcon)}
        </nav>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2"
          >
            <span className="font-semibold">Hi, {username}!</span>

            {profilePic ? (
              <img src={profilePic} className="w-10 h-10 rounded-full border-2 border-white" alt="Profile" />
            ) : (
              <UserCircleIcon className="w-10 h-10 text-white" />
            )}
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-maroon rounded-lg shadow-lg text-sm p-2 z-50">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/profile?tab=settings");
                }}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
              >
                Account Customization
              </button>

              <button
                onClick={() => navigate("/admin/login")}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-red-700"
              >
                Admin Dashboard
              </button>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-red-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
