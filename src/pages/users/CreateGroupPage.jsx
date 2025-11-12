export default function CreateGroupPage() {
  return (
      <div className="flex h-[calc(100vh-200px)] max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden text-maroon">
        <div className="flex-1 p-10 flex flex-col overflow-y-auto">
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
              placeholder="Course (e.g., Math 143)"
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <input
              type="text"
              placeholder="Topic (e.g., Chapter 5: Algebraic Expressions)"
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <input
              type="text"
              placeholder="Location (e.g., Library Room 2)"
              className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Group Size (e.g., 8)"
                className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
              />
              <input
                type="text"
                placeholder="Space Available (e.g., 3/8)"
                className="w-full p-3 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
              />
            </div>

            <button className="w-full bg-maroon text-white py-3 rounded-lg hover:brightness-110 font-semibold">
              Create Group
            </button>
          </form>
        </div>
      </div>
  );
}
