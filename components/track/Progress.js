import React from "react";

const Progress = ({ page, answer }) => {
  return (
    <>
      {/* <!-- progressbar --> */}

      <div>
        {" "}
        <ul id="progressbar">
          <li class="active" id="account">
            <strong>Confirmed</strong>
          </li>
          <li id="personal" className={page >= 2 && "active"}>
            <strong>Picked Parcel</strong>
          </li>
          <li id="loan" className={page >= 3 && "active"}>
            {" "}
            {answer === "Yes" ? (
              <strong>Loan</strong>
            ) : (
              <strong>On The Way</strong>
            )}
          </li>
          <li id="income" className={page >= 4 && "active"}>
            <strong>Delivered</strong>
          </li>
        </ul>
        <hr />
        <br />
      </div>
    </>
  );
};

export default Progress;
