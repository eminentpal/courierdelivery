import Progress from "./progress";

const TrackDetails = () => {
  return (
    <div>
      <div className="trackDetails">
        <div className="detailsHeader">
          <h2>ORDER TRACKING: DHA4GDJSH70</h2>
        </div>
        <div className="progessCont">
          <Progress />
        </div>
        {/* shipment details */}

        {/* Table */}
        <div className="tableBox">
          <table>
            <caption>Shipment Details</caption>
            <tbody>
              <tr>
                <td data-label="Quantity:">2</td>
              </tr>

              <tr>
                <td data-label="Weight:">
                  Jentafadwmu street 46 road to 30minures of terminus jos
                  Nigeria country
                </td>
              </tr>

              <tr>
                <td data-label="Service Type:">Heavy Cargo</td>
              </tr>

              <tr>
                <td data-label="Description:">
                  Two sealed bags of foreign rice
                </td>
              </tr>
            </tbody>
          </table>
          {/* Table 2 */}
          <table>
            <caption>Destination</caption>

            <tbody>
              <tr>
                <td data-label="Quantity:">2</td>
              </tr>

              <tr>
                <td data-label="Weight:">
                  Jentafadwmu street 46 road to 30minures of terminus jos
                  Nigeria country
                </td>
              </tr>

              <tr>
                <td data-label="Service Type:">Heavy Cargo</td>
              </tr>

              <tr>
                <td data-label="Description:">
                  Two sealed bags of foreign rice
                </td>
              </tr>
            </tbody>
          </table>

          {/* table 3 */}
          <table>
            <caption>Origin</caption>

            <tbody>
              <tr>
                <td data-label="Quantity:">2</td>
              </tr>

              <tr>
                <td data-label="Weight:">
                  Jentafadwmu street 46 road to 30minures of terminus jos
                  Nigeria country
                </td>
              </tr>

              <tr>
                <td data-label="Service Type:">Heavy Cargo</td>
              </tr>

              <tr>
                <td data-label="Description:">
                  Two sealed bags of foreign rice
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table History Summary */}
        <div className="trackHistory">
          <table className="tableHistory">
            <caption>History Summary</caption>
            <thead>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Remark</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>2020-06-10</td>
                <td>Lagos express</td>
                <td> In good condition</td>
                <td>In transit</td>
              </tr>

              <tr>
                <td>2020-06-10</td>
                <td>Abuja express</td>
                <td> In good condition</td>
                <td>In transit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrackDetails;

{
  /* <div id="feedback-form">
          <input type="checkbox" id="feedback-notify" name="notify" />
          <input
            type="text"
            id="feedback-phone"
            name="phone"
            placeholder="Phone number"
          />
        </div> */
}
