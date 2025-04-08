// SignUpPage.js

import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../src/auth'; // adjust path as needed

export default function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.1),transparent_50%)]" />
      </div>

      {/* Sign Up Card */}
      <div className="relative z-10 w-full max-w-md p-8 mx-4">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-orange-500/20 p-8 shadow-[0_0_40px_rgba(249,115,22,0.2)]">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
              Join F.I.R.E
            </h1>
            <p className="text-orange-200/60">
              Start your journey to financial independence
            </p>
          </div>

          {/* Google Sign Up Button */}
          <button
            className="w-full bg-white hover:bg-gray-50 text-gray-800 rounded-lg py-3 px-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            onClick={signInWithGoogle}
          >
            <img 
              src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
              alt="Google Logo" 
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>

          <div className="mt-6 text-center">
            <p className="text-orange-200/40 text-sm">
              Already have an account?{' '}
              <button 
                onClick={() => navigate('/login')}
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
