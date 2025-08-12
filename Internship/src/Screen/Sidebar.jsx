import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded cursor-pointer">Users</li>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded cursor-pointer">Reports</li>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}
