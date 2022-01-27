import mongoose from "mongoose";

function shipConnect() {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
  }

  mongoose.connect("mongodb://localhost:27017/shipdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("connected to mongo");
  });

  mongoose.connection.on("err", (err) => {
    console.log("error connecting", err);
  });
}

export default shipConnect;
