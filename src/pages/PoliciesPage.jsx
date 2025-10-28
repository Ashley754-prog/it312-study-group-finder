import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PoliciesPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col text-white"
      style={{ backgroundImage: "url('/wmsu-bg-img.jpg')" }}
    >
      <Navbar />

      <main className="flex-1 flex justify-center items-start px-4 pt-32 pb-20">
        <div className="max-w-3xl bg-white text-maroon p-10 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-4">Privacy & Data Policies</h1>

          <ul className="text-gray-700 space-y-3">
            <li>User data stays within WMSU.</li>
            <li>Email and username stored securely.</li>
            <li>Used only for academic collaboration features.</li>
            <li>You may request account/data removal later.</li>
          </ul>

          <p className="text-gray-700 mt-6">
            By using the platform, you consent to these policies.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
