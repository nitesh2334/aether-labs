"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {

  const [email, setEmail] = useState("");


async function handleLogin() {

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "http://localhost:3000",
    },
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Check your email for login link.");
  }
}

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md border border-white/10 bg-white/[0.03] rounded-3xl p-8">

        <h1 className="text-4xl font-bold mb-3">
          Welcome back
        </h1>

        <p className="text-zinc-500 mb-8">
          Sign in to continue into AETHER LABS.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-white/10 rounded-2xl px-4 py-4 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-violet-600 hover:bg-violet-500 transition rounded-2xl py-4 font-medium"
        >
          Continue with Email
        </button>

      </div>

    </main>
  );
}
