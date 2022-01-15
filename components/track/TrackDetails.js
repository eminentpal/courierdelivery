import Progress from "./progress";

const TrackDetails = () => {
  return (
    <div>
      <div className="trackDetails">
        <div className="detailsHeader">
          <h2>ORDER TRACKING DHA4GDJSH70</h2>
        </div>
        <div className="progessCont">
          <Progress />
        </div>
        {/* shipment details */}

        {/* Table */}
        <div className="tableBox">
          <table>
            <caption>Employee Data</caption>

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
            <caption>Employee Data</caption>

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
            <caption>Employee Data</caption>

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
