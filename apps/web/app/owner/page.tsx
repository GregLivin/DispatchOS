export default function OwnerDashboard() {
  const clients = [
    { name: "Marcus Bell", company: "Bell Freight LLC", truck: "Dry Van", status: "Active", email: "marcus@bellfreight.com" },
    { name: "Sasha Ortiz", company: "Ortiz Transport", truck: "Reefer", status: "Active", email: "sasha@ortiztransport.com" },
    { name: "Devon Price", company: "DP Hauling", truck: "Flatbed", status: "Pending Agreement", email: "devon@dphauling.com" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-indigo-400 mb-2">DispatchOS</p>
        <h1 className="text-3xl font-bold mb-1">Owner dashboard</h1>
        <p className="text-neutral-400 mb-10">Sample data, this is a demo view. Real numbers come once accounts and payments are wired up.</p>
        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-neutral-500 text-sm mb-2">This month's dispatch fees</p>
            <p className="text-3xl font-bold">$4,280</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-neutral-500 text-sm mb-2">Active carriers</p>
            <p className="text-3xl font-bold">2</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-neutral-500 text-sm mb-2">Loads booked this month</p>
            <p className="text-3xl font-bold">17</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">Clients</h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden mb-12">
          <table className="w-full text-sm text-left">
            <thead className="bg-neutral-800 text-neutral-400">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Truck type</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.email} className="border-t border-neutral-800">
                  <td className="px-4 py-3">{c.name}</td>
                  <td className="px-4 py-3">{c.company}</td>
                  <td className="px-4 py-3">{c.truck}</td>
                  <td className="px-4 py-3">{c.email}</td>
                  <td className="px-4 py-3">{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-xl font-semibold mb-4">Portals and integrations</h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4 mb-12">
          <div className="flex justify-between items-center"><span>123Loadboard</span><span className="text-green-400 text-sm">Connected</span></div>
          <div className="flex justify-between items-center"><span>FMCSA SAFER</span><span className="text-green-400 text-sm">Connected</span></div>
          <div className="flex justify-between items-center"><span>DAT</span><span className="text-neutral-500 text-sm">Not connected, requires MC number</span></div>
        </div>
        <p className="text-neutral-600 text-sm">Everything on this page is sample data for the demo. Once real accounts exist, this pulls live client records, actual income, and real portal connection status.</p>
      </div>
    </main>
  );
}
