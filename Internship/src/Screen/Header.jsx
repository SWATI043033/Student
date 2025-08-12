import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Admin</span>
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="rounded-full"
        />
      </div>
    </header>
  );
}
