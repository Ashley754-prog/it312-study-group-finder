import AdminLayout from "../../layouts/AdminLayout";
import {
  FlagIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

export default function Reports() {
  const reports = [
    { id: 1, reporter: "Maria Santos", reported: "Juan Dela Cruz", reason: "Spam messages", date: "Oct 29, 2024", status: "pending", type: "spam" },
    { id: 2, reporter: "Pedro Reyes", reported: "Anna Lim", reason: "Harassment", date: "Nov 5, 2024", status: "resolved", type: "harassment" },
    { id: 3, reporter: "Liza Tan", reported: "System Integration Group", reason: "Inappropriate content", date: "Nov 8, 2024", status: "pending", type: "content" },
  ];

  const stats = {
    total: reports.length,
    resolved: reports.filter((r) => r.status === "resolved").length,
    pending: reports.filter((r) => r.status === "pending").length,
  };

  return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-maroon mb-2">Moderation Overview</h2>
            <p className="text-sm text-gray-600">Manage user-submitted reports, flagged messages, and other moderation tasks.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-maroon/5 to-maroon/10 p-6 rounded-xl border border-maroon/20 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-700">Total Reports</h3>
                <FlagIcon className="w-8 h-8 text-maroon/70" />
              </div>
              <p className="text-4xl font-bold text-maroon">{stats.total}</p>
              <p className="text-sm text-gray-500 mt-1">All time</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-700">Resolved</h3>
                <CheckCircleIcon className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-4xl font-bold text-green-600">{stats.resolved}</p>
              <p className="text-sm text-gray-600 mt-1">Closed cases</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-700">Pending</h3>
                <ClockIcon className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-4xl font-bold text-red-600">{stats.pending}</p>
              <p className="text-sm text-gray-600 mt-1">Requires action</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-maroon text-white text-left">
                  <th className="px-5 py-4 font-semibold rounded-tl-lg">Reporter</th>
                  <th className="px-5 py-4 font-semibold">Reported</th>
                  <th className="px-5 py-4 font-semibold">Reason</th>
                  <th className="px-5 py-4 font-semibold">Date</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold text-center rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50 transition">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-maroon text-xs font-bold">
                          {report.reporter[0]}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{report.reporter}</p>
                          <p className="text-xs text-gray-500">ID: {report.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-700">{report.reported}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <ExclamationTriangleIcon
                          className={`w-5 h-5 ${
                            report.type === "spam"
                              ? "text-orange-500"
                              : report.type === "harassment"
                              ? "text-red-600"
                              : "text-purple-600"
                          }`}
                        />
                        <span className="text-gray-700">{report.reason}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{report.date}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                          report.status === "resolved"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {report.status === "resolved" ? (
                          <CheckCircleIcon className="w-3 h-3" />
                        ) : (
                          <ClockIcon className="w-3 h-3" />
                        )}
                        {report.status === "pending" ? "Pending" : "Resolved"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 rounded-lg bg-gold/10 text-gold hover:bg-gold/20 transition">
                          <EyeIcon className="w-4 h-4" />
                        </button>
                        {report.status === "pending" && (
                          <>
                            <button className="p-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition">
                              <CheckCircleIcon className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition">
                              <XCircleIcon className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}
