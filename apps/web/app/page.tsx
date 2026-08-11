export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">DispatchOS</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Dispatch, automated.</h1>
        <p className="text-lg text-neutral-300 mb-10">We find the loads, negotiate the rates, and handle the paperwork, so you can focus on driving. Built for independent truck owners who want consistent work without doing the hunting themselves.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/DispatchOS/signup" className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-full transition">Become a Carrier</a>
          <a href="/DispatchOS/ship" className="inline-block bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-8 py-4 rounded-full transition">Need Trucks?</a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 grid gap-6 sm:grid-cols-3">
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2 text-indigo-300">Load Sourcing</h3>
          <p className="text-neutral-400 text-sm">We find and negotiate loads that match your truck and your area, so you are not stuck searching load boards yourself.</p>
        </div>
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2 text-purple-300">Automated Paperwork</h3>
          <p className="text-neutral-400 text-sm">Rate confirmations, load details, and check calls handled for you, automatically.</p>
        </div>
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2 text-cyan-300">Clear Settlements</h3>
          <p className="text-neutral-400 text-sm">A simple statement every pay period. You always know what you earned and what the fee was.</p>
        </div>
      </section>

      <footer className="text-center text-neutral-600 text-sm py-10">Independent carriers keep their own authority. We just get you the work.</footer>
    </main>
  );
}
