import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUser, logoutUser } from "../utils/auth";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const [profilePic, setProfilePic] = useState(null);
  const username = getUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/wmsu-bg-img.jpg')" }}
    >
      <header className="w-full bg-maroon text-white py-4 shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img src="/study-squad-logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
            <h1 className="text-lg font-bold">Crimsons Study Squad</h1>
          </div>

          <nav className="flex gap-6 text-sm font-medium">
            <Link to="/dashboard" className="hover:text-gold">Home</Link>
            <Link to="/create-group" className="hover:text-gold">Create Group</Link>
            <Link to="/schedules" className="hover:text-gold">Schedules</Link>
          </nav>

          <div className="relative">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="flex items-center gap-2 cursor-pointer focus:outline-none"
              aria-expanded={menuOpen}
            >
              <span className="font-semibold">Hi, {username}!</span>

              {profilePic ? (
                <img
                  src={profilePic}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  alt="Profile"
                />
              ) : (
                <UserCircleIcon className="w-10 h-10 text-white" />
              )}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-maroon rounded-lg shadow-lg text-sm p-2 z-50">
                <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                  Edit Profile
                </button>
                <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                  Account Settings
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
                <p className="text-sm mt-2 text-gray-600">Short description about this study group.</p>
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

      <footer className="w-full bg-maroon text-white py-4 fixed bottom-0 left-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-center gap-10 text-sm">
          <Link className="hover:text-gold" to="#">
            About
          </Link>
          <Link className="hover:text-gold" to="#">
            Contacts
          </Link>
          <Link className="hover:text-gold" to="#">
            Terms of Service
          </Link>
          <Link className="hover:text-gold" to="#">
            Policies
          </Link>
        </div>
      </footer>
    </div>
  );
}
