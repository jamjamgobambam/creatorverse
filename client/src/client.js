import { createClient } from '@supabase/supabase-js';

const URL = 'https://kvfmhdalziozcdcpheor.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2Zm1oZGFsemlvemNkY3BoZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxNzIyMDksImV4cCI6MTk5MTc0ODIwOX0.yyHmQbUaOhuUXsJCU6DgaBNhTIiOmd7DcSIqHecBXWc';

export const supabase = createClient(URL, API_KEY);