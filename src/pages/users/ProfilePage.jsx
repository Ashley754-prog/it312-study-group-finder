import { useState } from "react";
import { UserCircleIcon, CameraIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
      <div className="flex h-[calc(100vh-200px)] w-full max-w-[90rem] mx-auto">
        <div className="flex-1 bg-white shadow-xl rounded-xl border border-gray-300 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="p-8 lg:p-10">
              <div className="max-w-4xl mx-auto">
                <div className="flex border-b border-gray-300 mb-8">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-8 py-4 font-semibold text-lg transition-colors ${
                      activeTab === "profile"
                        ? "text-maroon border-b-4 border-gold"
                        : "text-gray-500 hover:text-maroon"
                    }`}
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`px-8 py-4 font-semibold text-lg transition-colors ${
                      activeTab === "settings"
                        ? "text-maroon border-b-4 border-gold"
                        : "text-gray-500 hover:text-maroon"
                    }`}
                  >
                    Account Settings
                  </button>
                </div>

                {activeTab === "profile" && (
                  <div className="space-y-7">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="relative">
                        <UserCircleIcon className="w-28 h-28 text-maroon border-4 border-maroon rounded-full p-2 bg-white shadow-lg" />
                        <button className="absolute bottom-0 right-0 bg-gold text-maroon p-2 rounded-full shadow-md hover:brightness-110 transition">
                          <CameraIcon className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold text-maroon">Juan Dela Cruz</h3>
                        <p className="text-sm text-gray-600">BSIT 3A • Class of 2026</p>
                        <p className="text-xs text-gray-500 mt-1">Member since March 2025</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          defaultValue="Juan Dela Cruz"
                          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                        <input
                          type="text"
                          defaultValue="2023-00123"
                          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Course & Year</label>
                      <input
                        type="text"
                        defaultValue="BSIT 3A"
                        className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio (Optional)</label>
                      <textarea
                        defaultValue="Passionate about web development and systems integration. Always looking for study buddies in IT 312!"
                        className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 resize-none h-28 focus:outline-none focus:ring-2 focus:ring-gold transition"
                      />
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-gold text-maroon py-3.5 font-semibold rounded-lg hover:brightness-110 transition flex items-center justify-center gap-2">
                        <CheckCircleIcon className="w-5 h-5" />
                        Save Changes
                      </button>
                      <button className="px-6 py-3.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div className="space-y-7">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                      <p className="text-sm text-amber-800">
                        <strong>Note:</strong> Email changes require verification. You’ll receive a confirmation link to your new email.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Email</label>
                      <input
                        type="email"
                        defaultValue="juan.delacruz@wmsu.edu.ph"
                        disabled
                        className="w-full p-3 rounded-lg bg-gray-200 border border-gray-300 text-gray-500 cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Email</label>
                      <input
                        type="email"
                        placeholder="Enter new WMSU email"
                        className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition"
                        />
                      </div>
                    </div>

                    <button className="w-full bg-maroon text-white py-3.5 rounded-lg hover:brightness-110 transition font-medium">
                      Update Account Settings
                    </button>

                    <hr className="border-gray-300" />

                    <div className="bg-red-50 border border-red-200 rounded-xl p-5 space-y-3">
                      <h3 className="font-semibold text-red-800">Danger Zone</h3>
                      <p className="text-sm text-red-700">
                        Deleting your account will permanently remove all your groups, messages, and data. This action cannot be undone.
                      </p>
                      <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-medium">
                        Delete My Account
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}