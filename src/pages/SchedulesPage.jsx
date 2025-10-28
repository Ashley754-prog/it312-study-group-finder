import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SchedulesPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col text-white"
      style={{ backgroundImage: "url('/wmsu-bg-img.jpg')" }}
    >
        <Navbar />
      <main className="flex-1 flex justify-center items-start px-4 pt-32 pb-20">
        <div className="max-w-4xl w-full bg-white text-maroon p-10 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6">Your Study Schedule</h1>

          {[1, 2].map((i) => (
            <div key={i} className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-lg font-semibold">Group Study — Math 101</h2>
              <p className="text-gray-700 text-sm">📍 Library A — ⏰ 2:00 PM, Nov 10</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
