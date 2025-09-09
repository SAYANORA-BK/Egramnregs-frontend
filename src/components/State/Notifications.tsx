import React from "react";

const Notifications: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">State Notifications</h2>
      <ul className="space-y-2">
        <li className="bg-yellow-100 p-3 rounded">Meeting scheduled with District Officers - 5th Sept 2025</li>
        <li className="bg-green-100 p-3 rounded">Budget release update for FY 2025-26</li>
      </ul>
    </div>
  );
};

export default Notifications;
