import React, { useRef, useState } from "react";

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
const ShipmentHistory = () => {
  const lists = ["All", "Delivered", "In Progress", "Pending"];
  const [toggle, setToggle] = useState(0);

  const [data, setData] = useState(customers);

  const handleClick = (list, index) => {
    setToggle(index);

    if (list === "All") {
      setData(customers);
    } else {
      const avail = customers.filter((track) => {
        return track.status === list;
      });
      setData(avail);
    }
  };

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
              {data.map((item) => (
                <tr key={item.trackNumber}>
                  <td>{item.trackNumber}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShipmentHistory;
