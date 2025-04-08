// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./pages/LangingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Dashboard } from "./pages/Dashboard";
import { supabaseClient } from "./auth"; // adjust the path as needed

function App() {
  useEffect(() => {
    // Subscribe to auth state changes
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          const user = session.user;
          try {
            // Send user data to backend for upserting
            const response = await fetch("http://localhost:3000/api/upsert-user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                id: user.id,
                email: user.email
              
              })
            });
            
            if (!response.ok) {
              const errorData = await response.json();
              console.error("Error upserting user data on backend:", errorData.error);
            } else {
              const result = await response.json();
              console.log("User data upserted on backend:", result.data);
            }
          } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            console.error("Error sending user data to backend:", errorMessage);
          }
        }
      }
    );
    // Clean up the subscription when the component unmounts
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
