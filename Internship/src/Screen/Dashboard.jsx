import React from "react";

export default function Dashboard() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-blue-500 text-white p-6 rounded shadow">Total Users: 120</div>
      <div className="bg-green-500 text-white p-6 rounded shadow">Revenue: $5000</div>
      <div className="bg-yellow-500 text-white p-6 rounded shadow">Orders: 75</div>

      <div className="bg-white p-6 rounded shadow md:col-span-2">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <ul>
          <li className="border-b py-2">User John added a product</li>
          <li className="border-b py-2">Order #1234 placed</li>
          <li className="border-b py-2">User Sarah updated her profile</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Stats</h2>
        <p>Coming soon...</p>
      </div>
    </div>
  );
}



