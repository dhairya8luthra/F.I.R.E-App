// Import the Supabase client
import { createClient } from '@supabase/supabase-js'


// Replace these with your project credentials from Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;// Your Supabase URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY 

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key in environment variables");
}

// Create the Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Function to initiate Google OAuth sign-in
export const signInWithGoogle = async (): Promise<void> => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })

  if (error) {
    console.error('Error during sign in:', error.message)
  } else {
    console.log('Redirecting for Google sign in...', data.url)
    // After successful redirection and authentication
  }
}

// Example: Attach signInWithGoogle to a button click event
const googleSignInBtn = document.getElementById('google-signin-btn');
if (googleSignInBtn) {
  googleSignInBtn.addEventListener('click', signInWithGoogle);
} else {
  console.error("Google Sign-In button not found");
}
