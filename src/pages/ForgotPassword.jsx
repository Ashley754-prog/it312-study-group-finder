import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email.endsWith("@wmsu.edu.ph")) {
      alert("Enter a valid WMSU email (@wmsu.edu.ph)");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => navigate("/"), 3000);
    }, 1500);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/wmsu-bg-img.jpg')" }}
    >
      <div className="flex w-[900px] h-[550px] bg-white bg-opacity-95 shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-1/2 bg-maroon flex flex-col justify-center items-center text-white">
          <div className="flex gap-6 mb-4 relative -top-4">
            <img
              src="/wmsu-logo.jpg"
              alt="WMSU Logo"
              className="w-40 h-40 rounded-full object-cover"
            />
            <img
              src="/study-squad-logo.png"
              alt="Study Squad Logo"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold text-white">Crimsons Study Squad</h1>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center px-8">
          <h2 className="text-2xl font-bold text-maroon mb-3">Forgot your password?</h2>

          {!success ? (
            <>
              <p className="text-center text-gray-700 mb-6">
                Enter your registered <span className="font-semibold">WMSU email</span> and we’ll send
                a reset link.
              </p>

              <form onSubmit={handleReset} className="w-72 flex flex-col">
                <input
                  type="email"
                  placeholder="WMSU Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4 p-2 rounded bg-gray-200 focus:ring-2 focus:ring-gold"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-maroon text-white py-2 rounded hover:brightness-90"
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>

                <p className="text-sm mt-4 text-gray-600 text-center">
                  Back to{" "}
                  <Link to="/" className="text-maroon font-medium hover:underline">
                    Login
                  </Link>
                </p>
              </form>
            </>
          ) : (
            <p className="text-green-700 font-semibold text-center mt-6">
              Password reset link sent!<br />Check your WMSU email<br />
              Redirecting to login...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
