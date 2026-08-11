"use client";

import { useState, FormEvent, ChangeEvent } from "react";

export default function OwnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = "/DispatchOS/owner";
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4 text-center">DispatchOS</p>
        <h1 className="text-2xl font-bold mb-2 text-center">Dispatcher login</h1>
        <p className="text-neutral-400 text-sm mb-8 text-center">Demo login, no real account exists yet. Any details will get you into the sample owner dashboard.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" required placeholder="Email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input type="password" required placeholder="Password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-lg transition">Log in</button>
        </form>
        <p className="text-center text-neutral-600 text-xs mt-6">Carrier or shipper? Go back to the <a href="/DispatchOS/" className="text-indigo-400">home page</a>.</p>
      </div>
    </main>
  );
}
