import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { loginUser } from "../../utils/auth";
import { GoogleLogin } from "@react-oauth/google";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !middleName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill out all fields!");
      return;
    }

    if (!email.endsWith("@wmsu.edu.ph")) {
      alert("Only WMSU student email (@wmsu.edu.ph) is allowed.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          middleName,
          lastName,
          username,
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to register");

      loginUser(
        { username: data.user.username, email: data.user.email, id: data.user._id },
        data.token
      );

      alert("Account created successfully!");
      navigate("/user-dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async (credentialResponse) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: credentialResponse.credential }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Google Sign-Up failed");

      loginUser(
        { username: data.user.username, email: data.user.email, id: data.user._id },
        data.token
      );

      navigate("/dashboard");
    } catch (err) {
      console.error("Google Sign-Up Error:", err);
      alert("Google Sign-Up failed. Please try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/wmsu-bg-img.jpg')" }}
    >
      <div className="flex w-[900px] h-[660px] bg-white bg-opacity-95 shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-1/2 bg-maroon flex flex-col justify-center items-center text-white">
          <div className="flex gap-6 mb-4 relative -top-4">
            <img src="/wmsu-logo.jpg" alt="WMSU Logo" className="w-40 h-40 rounded-full object-cover" />
            <img src="/study-squad-logo.png" alt="Study Squad Logo" className="w-40 h-40 rounded-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold text-white">Crimsons Study Squad</h1>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center p-8">
          <h2 className="text-2xl font-semibold mb-6 text-maroon text-center leading-snug">
            Make your own account now!
          </h2>

          <form onSubmit={handleCreate} className="w-72 flex flex-col gap-3">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2 rounded bg-gray-200 focus:ring-1 focus:ring-maroon"
              required
            />

            <input
              type="text"
              placeholder="Middle Name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className="p-2 rounded bg-gray-200 focus:ring-1 focus:ring-maroon"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 rounded bg-gray-200 focus:ring-1 focus:ring-maroon"
              required
            />

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 rounded bg-gray-200 focus:ring-1 focus:ring-maroon"
              required
            />

            <input
              type="email"
              placeholder="Email (WMSU only)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded bg-gray-200 focus:ring-1 focus:ring-maroon"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 pr-10 rounded bg-gray-200 focus:ring-1 focus:ring-maroon"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-maroon"
              >
                {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 pr-10 rounded bg-gray-200 focus:ring-1 focus:ring-maroon"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-maroon"
              >
                {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-maroon text-white font-medium py-2 rounded hover:brightness-90"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

            <p className="text-gray-900 text-sm font-normal text-center">or</p>

            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSignUp}
                onError={() => alert("Google Sign-Up Failed")}
              />
            </div>

            <p className="text-sm mt-4 text-gray-600 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-maroon font-semibold hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
