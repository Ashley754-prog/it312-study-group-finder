import PageLayout from "../components/PageLayout";

export default function SchedulesPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl w-full bg-white text-maroon p-10 rounded-2xl shadow-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Study Schedule</h1>

        {[1, 2].map((i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-semibold">Group Study — Math 101</h2>
            <p className="text-gray-700 text-sm">📍 Library A — ⏰ 2:00 PM, Nov 10</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
