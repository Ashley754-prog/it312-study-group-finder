import PageLayout from "../components/PageLayout";

export default function CreateGroupPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl w-full bg-white text-maroon p-10 rounded-2xl shadow-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create a Study Group</h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Group Name"
            className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
          />
          <textarea
            placeholder="Description"
            className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold h-24 resize-none"
          ></textarea>
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
          />
          <button className="w-full bg-maroon text-white py-3 rounded-lg hover:brightness-110">
            Create Group
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
