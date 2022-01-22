import React from "react";

const TrackPage = () => {
  return (
    <div className="trackpage">
      {/* Quick track */}
      <div className="trackPage-main">
        <div className="trackPage-1">
          <h3>
            Enter your parcel number to <br /> track your deliveries
          </h3>
        </div>

        <div className="trackPage-2">
          <input placeholder="Enter your track number" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
