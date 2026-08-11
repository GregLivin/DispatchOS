"use client";
import { useState, FormEvent, ChangeEvent } from "react";

export default function ShipperSignUp() {
  const [submitted, setSubmitted] = useState(false);
  const [company, setCompany] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">Thanks, {company || "there"}.</h1>
          <p className="text-neutral-400 mb-8">We will reach out to match you with an available carrier for your freight.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 py-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2">Need Trucks?</h1>
        <p className="text-neutral-400 mb-8">Tell us about your freight and we will match you with an available carrier in our network. This is a demo form, nothing is stored yet.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required onChange={(e: ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)} placeholder="Company name" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required placeholder="Contact name" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required type="tel" placeholder="Phone number" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required type="email" placeholder="Email" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required placeholder="Pickup location" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required placeholder="Delivery location" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <input required placeholder="Freight type and typical volume" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <select required className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-300">
            <option value="">How often do you need this?</option>
            <option value="onetime">One time</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="ongoing">Ongoing / recurring</option>
          </select>
          <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-full transition">Submit Request</button>
        </form>
      </div>
    </main>
  );
}
