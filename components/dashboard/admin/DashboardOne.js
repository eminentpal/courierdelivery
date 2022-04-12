import React, { useEffect } from "react";
import ShipmentHistory from "../ShipmentHistory";
import ShipmentChart from "../ShipmentChart";
import SideBar from "../SideBar";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { myShipments } from "../../../redux/actions/shipActions";
import { useSelector } from "react-redux";

const DashboardOne = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, myshipments } = useSelector((state) => state.myshipments);
  const { user } = useSelector((state) => state.auth);

  const totalDelivered = myshipments?.filter((order) => {
    return order.paymentInfo.totalPrice === "Processing";
  });

  // console.log(totalDelivered);
  useEffect(() => {
    if (user.role !== "admin") {
      router.push("/");
    }
    dispatch(myShipments());
  }, [user]);

  return (
    <div>
      <div className="dashboardCont">
        <div className="dash">
          <SideBar
            dashboard="Dashboard"
            track="Track"
            user="Users"
            shipments="Shipments"
          />
        </div>
        <div className="dashBody">
          <h2>Dashboard Overview</h2>
          <div className="layout-1">
            <div className="overview">
              <div className="card-1">
                <div>
                  <span>N0.000</span>
                  <h4>Earnings</h4>
                </div>
              </div>
              <div className="card-2">
                <div>
                  <span>2,340</span>
                  <h4>Shipments</h4>
                </div>
              </div>
              <div className="card-3">
                <div>
                  <span>2,203</span>
                  <h4>Delivered</h4>
                </div>
              </div>
              <div className="card-4">
                <div>
                  <span>23,394</span>
                  <h4>Users</h4>
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

export default DashboardOne;
