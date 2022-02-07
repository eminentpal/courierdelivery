import mongoose, { models } from "mongoose";

const shippingsSchema = new mongoose.Schema({
  sender: {
    name: String,
    senderContact: String,
    senderAddress: String,
    country: String,
    city: String,
    zip: String,
  },

  receiver: {
    name: String,
    receiverContact: String,
    receiverAddress: String,
    country: String,
    city: String,
    zip: String,
  },
  deliveryInfo: {
    pickupDate: String,
    pickupTime: String,
    schedule: String,
    description: String,
    weight: String,
    quantity: String,
  },

  trackId: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  productTrack: [
    {
      country: {
        type: String,
      },
      status: {
        type: String,
        default: "pending",
      },
    },
  ],

  paymentInfo: {
    // this will capture stripe payment
    id: {
      type: String,
    },
    //if paid or not, we will capture it from flutterwave
    status: {
      type: String,
    },
    //we will capture this from flutterwave
    paidAt: {
      type: Date,
    },
    // taxPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    // shippingPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    orderStatus: {
      type: String,
      required: true,
      default: "processing",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.shipping ||
  mongoose.model("shipping", shippingsSchema);
