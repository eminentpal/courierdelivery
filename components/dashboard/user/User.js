import React, { useEffect } from "react";
import ShipmentHistory from "../ShipmentHistory";
import ShipmentChart from "../ShipmentChart";
import SideBar from "../SideBar";
import { useDispatch } from "react-redux";
import { myShipments } from "../../../redux/actions/shipActions";
import { useSelector } from "react-redux";

const User = () => {
  const dispatch = useDispatch();

  const { loading, myshipments } = useSelector((state) => state.myshipments);

  const totalDelivered = myshipments?.filter((order) => {
    return order.paymentInfo.totalPrice === "Processing";
  });

  console.log(totalDelivered);
  useEffect(() => {
    dispatch(myShipments());
  }, []);

  return (
    <div>
      <div className="dashboardCont">
        <div className="dash">
          <SideBar dashboard="Dashboard" track="Track" shipments="Shipments" />
        </div>
        <div className="dashBody">
          <h2>Dashboard Overview</h2>
          <div className="layout-1">
            <div className="overview">
              <div className="card-1">
                <div>
                  <span>N0.000</span>
                  <h4>Total Spent</h4>
                </div>
              </div>
              <div className="card-2">
                <div>
                  <span>{myshipments?.length}</span>
                  <h4>Shipments</h4>
                </div>
              </div>
              <div className="card-3">
                <div>
                  {totalDelivered?.length === 0 ? (
                    <span>0</span>
                  ) : (
                    <span>{totalDelivered}</span>
                  )}

                  <h4>Delivered</h4>
                </div>
              </div>
              <div className="card-4">
                <div>
                  <span>23,394</span>
                  <h4>Pending</h4>
                </div>
              </div>
            </div>
            {/* Quick track */}
            <div className="quickTrack">
              <div className="quickBox-1">
                <h3>
                  Enter your parcel number to <br /> track your deliveries
                </h3>
              </div>

              <div className="quickBox-2">
                <input placeholder="Enter your track number" />
                <button>Submit</button>
              </div>
            </div>
          </div>
          {/* Layout two */}
          {/* Shipment History */}
          <div className="layout-2">
            <ShipmentHistory shipments={myshipments} loading={loading} />
            {/* B part of layout two */}
            <div className="dashChart">
              <ShipmentChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
