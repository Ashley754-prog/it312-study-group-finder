import { useState } from "react";
import { MagnifyingGlassIcon, EyeIcon, TrashIcon, PencilIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import AdminLayout from "../../layouts/AdminLayout";

export default function ManageUsers() {
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    { id: 1, name: "Maria Santos", email: "maria@wmsu.edu.ph", course: "BSIT 3A", joined: "Oct 10, 2024", status: "active" },
    { id: 2, name: "Juan Dela Cruz", email: "juan@wmsu.edu.ph", course: "BSIT 4B", joined: "Oct 25, 2024", status: "banned" },
    { id: 3, name: "Anna Lim", email: "anna@wmsu.edu.ph", course: "BS Biology 2A", joined: "Nov 2, 2024", status: "active" },
    { id: 4, name: "Pedro Reyes", email: "pedro@wmsu.edu.ph", course: "BA English 1B", joined: "Nov 6, 2024", status: "active" },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-maroon">User Accounts</h2>
              <p className="text-sm text-gray-600 mt-1">View, edit, or remove registered users.</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-80 pl-10 pr-4 py-2.5 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-maroon transition"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-maroon text-white text-left">
                  <th className="px-5 py-4 font-semibold rounded-tl-lg">Name</th>
                  <th className="px-5 py-4 font-semibold">Email</th>
                  <th className="px-5 py-4 font-semibold">Course</th>
                  <th className="px-5 py-4 font-semibold">Joined</th>
                  <th className="px-5 py-4 font-semibold text-center">Status</th>
                  <th className="px-5 py-4 font-semibold text-center rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-maroon text-xs font-bold">
                          {user.name[0]}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">ID: {user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-700">{user.email}</td>
                    <td className="px-5 py-4 text-gray-700">{user.course}</td>
                    <td className="px-5 py-4 text-gray-600">{user.joined}</td>
                    <td className="px-5 py-4 text-center">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                          user.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status === "active" ? (
                          <CheckCircleIcon className="w-3 h-3" />
                        ) : (
                          <XCircleIcon className="w-3 h-3" />
                        )}
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 rounded-lg bg-gold/10 text-gold hover:bg-gold/20 transition">
                          <EyeIcon className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition">
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No users found matching your search.</p>
            </div>
          )}
        </div>
      </div>
  );
}
