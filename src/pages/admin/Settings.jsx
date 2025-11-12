import { useState } from "react";
import {
  Cog6ToothIcon,
  BellIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import AdminLayout from "../../layouts/AdminLayout";

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-maroon mb-5 flex items-center gap-2">
              <Cog6ToothIcon className="w-6 h-6" />
              Account Settings
            </h2>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-maroon text-2xl font-bold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Admin User</p>
                  <p className="text-sm text-gray-600">admin@wmsu.edu.ph</p>
                  <button className="text-sm text-maroon hover:underline mt-1">
                    Change Avatar
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Admin User"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-maroon transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="admin@wmsu.edu.ph"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-maroon transition"
                  />
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-bold text-maroon mb-5 flex items-center gap-2">
              <LockClosedIcon className="w-6 h-6" />
              Security
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    defaultValue="password123"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-maroon transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Two-Factor Authentication
                    </p>
                    <p className="text-sm text-gray-600">
                      Add an extra layer of security to your account.
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={twoFactor}
                    onChange={() => setTwoFactor(!twoFactor)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-bold text-maroon mb-5 flex items-center gap-2">
              <BellIcon className="w-6 h-6" />
              Notifications
            </h2>
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <p className="font-medium text-gray-900">
                  Enable Notifications
                </p>
                <p className="text-sm text-gray-600">
                  Get updates about reports, users, and system alerts.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-gold after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-bold text-maroon mb-5 flex items-center gap-2">
              <GlobeAltIcon className="w-6 h-6" />
              Preferences
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-maroon transition">
                  <option>English</option>
                  <option>Filipino</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Zone
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-maroon transition">
                  <option>Asia/Manila (GMT+8)</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>
          </section>

          <div className="flex justify-end pt-4">
            <button className="bg-maroon text-white px-6 py-2.5 rounded-lg font-medium hover:bg-maroon/90 transition">
              Save Changes
            </button>
          </div>
        </div>
      </div>
  );
}
