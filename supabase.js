import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm'

const supabaseUrl = 'https://szbrivqzojiekypiszac.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6YnJpdnF6b2ppZWt5cGlzemFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxMjc4MDgsImV4cCI6MjA3MjcwMzgwOH0.o_ki0E7qXTgSMBQBShhhjUcL2N6aM2dVjlJqknra-bA'

export const supabase = createClient(supabaseUrl, supabaseKey) 