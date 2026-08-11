"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

export default function Agreement() {
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [signed, setSigned] = useState(false);

  function handleSign(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.trim() && agreed) {
      setSigned(true);
    }
  }

  if (signed) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">Signed.</h1>
          <p className="text-neutral-400 mb-8">Thanks {name}, your agreement is on file. This is a demo confirmation, a real version needs a backend to actually store and timestamp this.</p>
          <Link href="/dashboard" className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-full transition">View Available Loads</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dispatch Services Agreement</h1>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 space-y-4 text-sm text-neutral-300 max-h-96 overflow-y-auto">
          <p>This Independent Dispatch Services Agreement is between DispatchOS ("Dispatcher") and the undersigned carrier ("Carrier").</p>
          <p><strong className="text-neutral-100">Services.</strong> Dispatcher will identify available loads, negotiate rates, prepare rate confirmations, and coordinate pickup and delivery details on Carrier's behalf.</p>
          <p><strong className="text-neutral-100">Carrier Responsibilities.</strong> Carrier will maintain a valid USDOT number, required insurance, and safe operating equipment at all times.</p>
          <p><strong className="text-neutral-100">Compensation.</strong> Carrier agrees to pay Dispatcher a percentage of gross linehaul revenue for each load booked through Dispatcher, as agreed separately in writing.</p>
          <p><strong className="text-neutral-100">Independent Contractor.</strong> Dispatcher and Carrier are independent contractors. Dispatcher is not a motor carrier and does not take possession of freight.</p>
          <p><strong className="text-neutral-100">Term.</strong> Either party may terminate this agreement with thirty days written notice.</p>
          <p className="text-neutral-500">This is a summary for demo purposes. The full agreement with all terms will be provided before any real signature is collected.</p>
        </div>
        <form onSubmit={handleSign} className="space-y-4">
          <input required value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder="Type your full legal name to sign" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm" />
          <label className="flex items-start gap-3 text-sm text-neutral-400">
            <input required type="checkbox" checked={agreed} onChange={(e: ChangeEvent<HTMLInputElement>) => setAgreed(e.target.checked)} className="mt-1" />
            <span>I have read and agree to the terms above, and I understand that typing my name here serves as my electronic signature.</span>
          </label>
          <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-full transition">Sign Agreement</button>
        </form>
      </div>
    </main>
  );
}
