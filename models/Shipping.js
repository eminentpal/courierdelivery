import mongoose, { models } from "mongoose";

const shippingsSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  trackId: {
    type: String,
  },

  productTrack: [
    {
      country: {
        type: String,
      },
      status: {
        type: String,
        default: "processing",
      },
    },
  ],
});

export default mongoose.models.shipping ||
  mongoose.model("shipping", shippingsSchema);
