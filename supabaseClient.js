import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gknbnvjxexyjpzelqbfl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrbmJudmp4ZXh5anB6ZWxxYmZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MDkxNDEsImV4cCI6MjA3NTE4NTE0MX0.kC1zz29usJVZUaOYhuJ0NW-MYp70p7YYegxeXqw-sFU"
);

export default supabase;
