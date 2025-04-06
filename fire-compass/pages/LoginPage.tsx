
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.1),transparent_50%)]" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 mx-4">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-orange-500/20 p-8 shadow-[0_0_40px_rgba(249,115,22,0.2)]">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-orange-200/60">
              Sign in to continue your F.I.R.E journey
            </p>
          </div>

          {/* Google Sign In Button */}
          <button
            className="w-full bg-white hover:bg-gray-50 text-gray-800 rounded-lg py-3 px-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            onClick={() => console.log('Google sign in clicked')}
          >
            <img 
              src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
              alt="Google Logo" 
              className="w-5 h-5"
            />
            <span>Sign in with Google</span>
          </button>

          <div className="mt-6 text-center">
            <p className="text-orange-200/40 text-sm">
              Don't have an account?{' '}
              <button 
                onClick={() => navigate('/signup')}
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}