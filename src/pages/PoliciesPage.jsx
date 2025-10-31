import PageLayout from "../components/PageLayout";

export default function PoliciesPage() {
  return (
    <PageLayout>
      <div className="max-w-3xl bg-white text-maroon p-10 rounded-2xl shadow-xl leading-relaxed mx-auto">
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
    </PageLayout>
  );
}
