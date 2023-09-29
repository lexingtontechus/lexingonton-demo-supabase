"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
//import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_SUPABASE_URL = "https://nmfsjcgshtndcdghkuck.supabase.co";
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZnNqY2dzaHRuZGNkZ2hrdWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4NDQ4NzIsImV4cCI6MjAwODQyMDg3Mn0.ETztDwDxK36m8dlwJrFDGvsaQH_9aTbUnnBPHgnYnFM";

export default function AuthForm() {
  //  const supabase = createClientComponentClient()
  const supabase = createClient(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={false}
      providers={["google", "linkedin"]}
      //redirectTo="https://hxcqnw-3000.csb.app/auth/callback"
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
