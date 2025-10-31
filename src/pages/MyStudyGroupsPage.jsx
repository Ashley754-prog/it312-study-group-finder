import PageLayout from "../components/PageLayout";

export default function MyStudyGroupsPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl w-full bg-white text-maroon p-10 rounded-2xl shadow-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Study Groups</h1>

        {[1, 2].map((i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-semibold text-maroon">Programming Group</h2>
            <p className="text-sm text-gray-700">6 members • Ongoing</p>
            <button className="mt-3 bg-gold text-maroon px-4 py-2 rounded hover:brightness-110">
              View Group
            </button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
