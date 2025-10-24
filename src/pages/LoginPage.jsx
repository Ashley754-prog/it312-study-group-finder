import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../utils/auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email.endsWith("@wmsu.edu.ph")) {
      alert("Please use your WMSU email (@wmsu.edu.ph).");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const username = email.split("@")[0];
      loginUser(username);
      navigate("/dashboard");
    }, 1200);
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

        <div className="w-1/2 flex flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-semibold mb-6 text-maroon">
            Log in to your account
          </h2>

          <div className="w-72">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full mb-3 p-2 rounded bg-gray-200 focus:ring-1 focus:ring-maroon"
            />

            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 pr-10 rounded bg-gray-200 focus:ring-1 focus:ring-maroon"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-maroon"
              >
                {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </div>

            <p className="text-sm text-gray-600 text-right mb-3">
              <Link to="/forgot-password" className="text-maroon hover:underline">
                Forgot password?
              </Link>
            </p>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-maroon text-white font-medium py-2 rounded hover:brightness-90"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/create-account" className="text-maroon font-semibold hover:underline">
              Create account here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
