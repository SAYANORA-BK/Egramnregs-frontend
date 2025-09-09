import React from "react";

const VideoConference: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Review Meeting (Video Conference)</h2>
      <p>Here the state can initiate or join a video conference with districts.</p>
      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700">
        Start Conference
      </button>
    </div>
  );
};

export default VideoConference;
