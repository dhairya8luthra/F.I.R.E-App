// index.js
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config(); // Load environment variables from .env

const app = express();
const port = 3000;
app.use(cors({ origin: ['http://localhost:5173', 'https://fiesta-del-roll-rsvp.vercel.app'] }));
// Middleware to parse JSON bodies for the /verify endpoint.
// Use middleware to parse JSON bodies
app.use(express.json());

// Create a Supabase client using your service role key
// This key should remain secret and only be used on your backend
const supabaseServiceUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAdmin = createClient(supabaseServiceUrl, supabaseServiceKey);

// API endpoint to upsert user data from the client
app.post('/api/upsert-user', async (req, res) => {
  try {
    const { id, email } = req.body;

    // Validate input
    if (!id || !email) {
      return res.status(400).json({ error: 'Missing user id or email' });
    }

    // Upsert user data into the "users" table
    const { data, error } = await supabaseAdmin
      .from('users')
      .upsert({ id, email });
    
    if (error) {
      console.error('Error upserting user data:', error.message);
      return res.status(500).json({ error: error.message });
    }
    
    console.log('User data upserted successfully:', data);
    res.status(200).json({ message: 'User upserted successfully', data });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// A simple route for testing
app.get('/', (req, res) => {
  res.send('Hello to fire!');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
