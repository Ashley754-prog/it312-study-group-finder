import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import PageLayout from "../components/PageLayout";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <PageLayout>
      <div className="max-w-3xl w-full bg-white text-maroon p-8 rounded-2xl shadow-xl mx-auto">
        <div className="flex border-b border-gray-300 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-6 py-3 font-semibold ${
              activeTab === "profile"
                ? "text-maroon border-b-4 border-gold"
                : "text-gray-500 hover:text-maroon"
            }`}
          >
            Edit Profile
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-6 py-3 font-semibold ${
              activeTab === "settings"
                ? "text-maroon border-b-4 border-gold"
                : "text-gray-500 hover:text-maroon"
            }`}
          >
            Account Settings
          </button>
        </div>

        {activeTab === "profile" && (
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <UserCircleIcon className="w-20 h-20 text-maroon border-2 border-maroon rounded-full p-1 bg-white" />
              <button className="bg-maroon text-white px-4 py-2 rounded hover:brightness-110">
                Change Picture
              </button>
            </div>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <input
              type="text"
              placeholder="Course (Ex: BSIT 3A)"
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <textarea
              placeholder="Bio (Optional)"
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold h-24 resize-none"
            ></textarea>

            <button className="w-full bg-gold text-maroon py-3 font-semibold rounded-lg hover:brightness-110">
              Save Changes
            </button>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-5">
            <input
              type="email"
              placeholder="Change Email"
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <button className="w-full bg-maroon text-white py-3 rounded-lg hover:brightness-110">
              Update Account
            </button>

            <hr className="my-4" />

            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:brightness-110">
              Delete Account
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
