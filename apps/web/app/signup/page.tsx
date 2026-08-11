"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">Thanks, {name || "carrier"}.</h1>
          <p className="text-neutral-400 mb-8">Your info is in. Next step is signing the dispatch agreement before you can start accepting loads.</p>
          <Link href="/agreement" className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-full transition">Sign the Agreement</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 py-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2">Become a Carrier</h1>
        <p className="text-neutral-400 mb-8">Tell us about your truck and your business. This is a demo form, nothing is stored yet.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder="Full name" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required placeholder="Company name" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required type="tel" placeholder="Phone number" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required type="email" placeholder="Email" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required placeholder="Truck type (e.g. 26ft box truck)" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required placeholder="USDOT number" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input placeholder="MC number (if applicable)" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-full transition">Submit</button>
        </form>
      </div>
    </main>
  );
}
