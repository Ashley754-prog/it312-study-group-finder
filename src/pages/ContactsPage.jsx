import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactsPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col text-white"
      style={{ backgroundImage: "url('/wmsu-bg-img.jpg')" }}
    >
      <Navbar />

      <main className="flex-1 flex justify-center items-start px-4 pt-32 pb-20">
        <div className="max-w-2xl bg-white text-maroon p-10 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

          <p className="text-gray-700 mb-6">
            Have questions? Need support? We’re here to help!
          </p>

          <ul className="text-gray-700 space-y-3">
            <li><strong>Email:</strong> studysquad@wmsu.edu.ph</li>
            <li><strong>Location:</strong> Western Mindanao State University</li>
            <li><strong>Office Hours:</strong> Mon–Fri • 8:00 AM – 5:00 PM</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Send a Message</h2>
          <textarea
            className="w-full p-3 rounded bg-gray-200 text-maroon resize-none h-32 focus:ring-2 focus:ring-gold"
            placeholder="Write your message here..."
          ></textarea>

          <button className="mt-4 bg-maroon text-white px-4 py-2 rounded hover:brightness-110">
            Send
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
