import TrackDetails from "../../components/track/TrackDetails";
import uniqid from "uniqid";
const trackParcel = () => {
  function CallId() {
    const id = uniqid.time("DH");
    console.log(id.toUpperCase());
  }

  CallId();
  return (
    <div>
      <TrackDetails />
    </div>
  );
};

export default trackParcel;
