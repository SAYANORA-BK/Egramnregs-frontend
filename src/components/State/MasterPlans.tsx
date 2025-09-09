import React from "react";

const MasterPlan: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Annual Master Plan</h2>
      <p>Download or view the state-level annual master plan.</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
        Download PDF
      </button>
    </div>
  );
};

export default MasterPlan;
