"use client";
import { useState } from "react";

const sampleLoads = [
  { id: 1, route: "Charlotte, NC to Atlanta, GA", miles: 245, rate: 650, pickup: "Tomorrow" },
  { id: 2, route: "Atlanta, GA to Nashville, TN", miles: 250, rate: 700, pickup: "In 2 days" },
  { id: 3, route: "Charlotte, NC to Richmond, VA", miles: 290, rate: 780, pickup: "Today" },
];

export default function Dashboard() {
  const [accepted, setAccepted] = useState<number[]>([]);

  function accept(id: number) {
    setAccepted((prev) => [...prev, id]);
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Available Loads</h1>
        <p className="text-neutral-400 mb-8">Sample loads for demo purposes. A real version pulls this from live load data.</p>
        <div className="space-y-4">
          {sampleLoads.map((load) => (
            <div key={load.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <p className="font-semibold">{load.route}</p>
                <p className="text-sm text-neutral-400">{load.miles} miles - Pickup {load.pickup}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-indigo-300 mb-2">${load.rate}</p>
                {accepted.includes(load.id) ? (
                  <span className="text-sm text-cyan-300 font-semibold">Accepted</span>
                ) : (
                  <button onClick={() => accept(load.id)} className="bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold px-4 py-2 rounded-full transition">Accept</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
