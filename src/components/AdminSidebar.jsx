import { Link, useLocation } from "react-router-dom";
import {
  UsersIcon,
  UserGroupIcon,
  ChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export default function AdminSidebar() {
  const location = useLocation();

  const navItem = (path, label, Icon) => (
    <Link
      to={path}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
        location.pathname === path
          ? "bg-gold text-maroon font-semibold"
          : "hover:bg-maroon/20 text-maroon"
      }`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </Link>
  );

  return (
    <aside className="w-64 bg-white border-r h-screen p-4 space-y-4">
      <h2 className="text-lg font-bold text-maroon mb-4">Admin Menu</h2>

      {navItem("/admin/dashboard", "Overview", HomeIcon)}
      {navItem("/admin/manage-users", "Manage Users", UsersIcon)}
      {navItem("/admin/manage-groups", "Manage Groups", UserGroupIcon)}
      {navItem("/admin/reports", "Reports", ChartBarIcon)}
    </aside>
  );
}
