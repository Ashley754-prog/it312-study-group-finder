import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col text-white"
      style={{ backgroundImage: "url('/wmsu-bg-img.jpg')" }}
    >
      <Navbar />

      <main className="flex-1 flex justify-center items-start px-4 pt-32 pb-20">
        <div className="max-w-3xl bg-white text-maroon p-10 rounded-2xl shadow-xl leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">About Crimsons Study Squad</h1>

          <p className="text-gray-700 mb-4">
            Crimsons Study Squad is a platform designed for WMSU students to build,
            find, and collaborate in study groups. It aims to promote teamwork,
            academic growth, and a helpful student community.
          </p>

          <p className="text-gray-700 mb-4">
            This project is developed for IT 312 – Systems Integration & Architecture,
            showcasing modern web technologies and real-world system integration concepts.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Our Goal</h2>
          <p className="text-gray-700">
            To help Crimsons achieve academic success through cooperative and smart studying.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
