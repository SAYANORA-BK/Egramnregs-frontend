import React from "react";

const ActionPlanReview: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Review District Level Action Plan</h2>
      <p>Here the state authority can vet, reject, or approve district-level action plans.</p>
      {/* Table of pending reviews */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-4">
        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">District</th>
              <th className="p-2 border">Submitted On</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Ernakulam</td>
              <td className="p-2 border">2025-09-02</td>
              <td className="p-2 border text-yellow-600">Pending</td>
              <td className="p-2 border space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActionPlanReview;
