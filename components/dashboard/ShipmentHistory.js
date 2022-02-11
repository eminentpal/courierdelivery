import React, { useRef, useState } from "react";
import { useEffect } from "react";

const customers = [
  {
    name: "innocent ezie",
    trackNumber: "QD56H7Y2G",
    address: "JG 66 apata",
    status: "Delivered",
  },
  {
    name: "Amobi ezie",
    trackNumber: "QD06H6Y8H",
    address: "Jy busa buji",
    status: "In Progress",
  },
  {
    name: "Ifedi Jude",
    trackNumber: "QD93I8Y2D",
    address: "Kano Gin7",
    status: "Pending",
  },
];
const ShipmentHistory = ({ shipments, loading }) => {
  const lists = ["All", "Delivered", "In Progress", "Processing"];
  const [toggle, setToggle] = useState(0);

  // console.log(shipments);
  const [data, setData] = useState(shipments);

  const handleClick = (list, index) => {
    setToggle(index);

    if (list === "All") {
      setData(shipments);
    } else {
      const avail = shipments?.filter((track) => {
        return track.paymentInfo.orderStatus === list;
      });
      setData(avail);
    }
  };

  console.log(data);

  return (
    <div>
      <div className="shipHistory">
        <h2>Shipment History</h2>
        <div className="shipHeader">
          <ul>
            {lists.map((list, index) => (
              <li
                key={index}
                className={toggle === index ? "activeLi" : "inactiveLi"}
                onClick={() => handleClick(list, index)}
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
        <div className="shipBody">
          {loading ? (
            <div>loading</div>
          ) : (
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
                {data?.map((item) => (
                  <tr key={item._d}>
                    <td>{item.trackId}</td>
                    <td>{item.receiver.receiverName}</td>
                    <td>{item.receiver.receiverAddress}</td>
                    <td>{item.paymentInfo.orderStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShipmentHistory;
