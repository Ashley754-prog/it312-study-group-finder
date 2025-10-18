export default function LoginPage() {
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
              className="w-40 h-40 rounded-full bg-gray-300 object-cover"
            />
            <img
              src="/study-squad-logo.png"
              alt="Study Squad Logo"
              className="w-40 h-40 rounded-full bg-gray-300 object-cover"
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
              placeholder="Email"
              className="w-full mb-3 p-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-2 p-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gold"
            />

            <p className="text-sm text-gray-600 text-right mb-3">
              <a href="/forgot-password" className="text-maroon hover:underline">
                Forgot password?
              </a>
            </p>

            <button className="w-full bg-maroon text-white font-medium py-2 rounded hover:brightness-80 hover:text-white transition-colors">
              Login
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/create-account" className="text-maroon font-semibold hover:underline">
              Create account here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
