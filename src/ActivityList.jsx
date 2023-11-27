// Ga dipake
import React from "react";

const ActivityList = (props) => {
  return (
    <div className="activity-container">
      <p>{props.kategori}</p>
      <div className="activity-list-wrapper">
        <ol>
          <li>07.00 Solat</li>
          <li>07.00 Solat</li>
          <li>07.00 Solat</li>
        </ol>
      </div>
    </div>
  );
};
export default ActivityList;
