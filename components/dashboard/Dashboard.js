import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboardCont">
        <div className="dashSidebar">
          <ul className="dashPages">
            <li>Dashboard</li>
            <li>Shipments</li>
            <li>Track</li>
            <li>Users</li>
          </ul>
          {/* Profile */}
          <ul className="profilePic">
            <li>Profile</li>
          </ul>
        </div>
        <div className="dashBody">
          <h2>Dashboard Overview</h2>
          <div className="overview">
            <div className="card-1">
              <div>
                <span>N0.000</span>
                <h4>Earnings</h4>
              </div>
            </div>
            <div className="card-2">
              <div>
                <span>N98,598</span>
                <h4>Shipments</h4>
              </div>
            </div>
            <div className="card-3">
              <div>
                <span>N98,598</span>
                <h4>Delivered</h4>
              </div>
            </div>
            <div className="card-4">
              <div>
                <span>N98,598</span>
                <h4>Users</h4>
              </div>
            </div>
          </div>
          {/* Shipment History */}
          <div className="shipHistory">
            <h2>Shipment History</h2>
            <div className="shipHeader">
              <ul>
                <li>All</li>
                <li>Delivered</li>
                <li>In Progress</li>
                <li>Pending</li>
              </ul>
            </div>
            <div className="shipBody">
              <table>
                <thead>
                  <tr>
                    <th>Tracking Number</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>QD3G7DTA8</td>
                    <td>Innocent Ezie</td>
                    <td>JG 66A APATA</td>
                    <td>Delivered Parcel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
