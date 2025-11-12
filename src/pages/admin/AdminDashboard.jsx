import {
  UsersIcon,
  ChatBubbleLeftRightIcon,
  FlagIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-maroon mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <UsersIcon className="w-8 h-8 text-maroon/70" />
          </div>
          <p className="text-3xl font-bold text-maroon">152</p>
          <p className="text-sm text-gray-500 mt-1">+12 this week</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-700">Active Groups</h3>
            <ChatBubbleLeftRightIcon className="w-8 h-8 text-maroon/70" />
          </div>
          <p className="text-3xl font-bold text-maroon">27</p>
          <p className="text-sm text-gray-500 mt-1">4 new today</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-700">Pending Reports</h3>
            <FlagIcon className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-3xl font-bold text-red-600">4</p>
          <p className="text-sm text-gray-500 mt-1">Requires attention</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-700">System Status</h3>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-3xl font-bold text-green-600">OK</p>
          <p className="text-sm text-gray-500 mt-1">All systems normal</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold text-maroon mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-maroon text-white px-4 py-3 rounded-lg hover:brightness-110 transition font-medium flex items-center justify-center gap-2">
            <UsersIcon className="w-5 h-5" />
            Manage Users
          </button>
          <button className="bg-gold text-maroon px-4 py-3 rounded-lg hover:brightness-110 transition font-medium flex items-center justify-center gap-2">
            <ChatBubbleLeftRightIcon className="w-5 h-5" />
            View Groups
          </button>
          <button className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition font-medium flex items-center justify-center gap-2">
            <FlagIcon className="w-5 h-5" />
            Review Reports
          </button>
          <button className="bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition font-medium flex items-center justify-center gap-2">
            <Cog6ToothIcon className="w-5 h-5" />
            System Settings
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-maroon mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { user: "Maria Santos", action: "created group", target: "Math 146 Study", time: "2 mins ago" },
            { user: "John Reyes", action: "reported user", target: "spam account", time: "15 mins ago" },
            { user: "Admin", action: "approved group", target: "Biol 41 Review", time: "1 hour ago" },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-maroon text-xs font-bold">
                  {activity.user[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    <span className="text-maroon">{activity.user}</span> {activity.action}{" "}
                    <span className="font-semibold">"{activity.target}"</span>
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
