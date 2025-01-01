// src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

// Replace these with your own Supabase project URL and public anon key
const SUPABASE_URL = 'https://wolbsiyitvzmdkpatlvo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvbGJzaXlpdHZ6bWRrcGF0bHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTExOTksImV4cCI6MjA1MTEyNzE5OX0.uQm3PT49JLW2c_iTxoC3mBHTcNW1AEEMdPkVTUGRnkA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export default supabase
