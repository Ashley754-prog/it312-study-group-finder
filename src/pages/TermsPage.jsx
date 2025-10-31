import PageLayout from "../components/PageLayout";

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="max-w-3xl bg-white text-maroon p-10 rounded-2xl shadow-xl leading-relaxed mx-auto">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

        <ul className="text-gray-700 space-y-3">
          <li>Use only your official WMSU email.</li>
          <li>Conversations and group posts must remain respectful.</li>
          <li>Platform is for educational purposes only.</li>
          <li>Admin may remove harmful posts and groups.</li>
        </ul>

        <p className="text-gray-700 mt-6">
          By continuing, you agree to follow these guidelines.
        </p>
      </div>
    </PageLayout>
  );
}
