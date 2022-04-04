import mongoose, { models } from "mongoose";

const shippingsSchema = new mongoose.Schema({
  sender: {
    senderName: String,
    senderContact: String,
    senderAddress: String,
    senderCountry: String,
    senderCity: String,
    zip: String,
  },

  receiver: {
    receiverName: String,
    receiverContact: String,
    receiverAddress: String,
    receiverCountry: String,
    receiverCity: String,
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
      date: {
        type: Date,
      },
      location: {
        type: String,
      },
      status: {
        //use select option to create the status list choice, ege pending,processing, on hold, delivered.
        type: String,
      },
      //explain the point u are and if any issue
      remark: {
        type: String,
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
      default: "Processing",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //you will manually set delivery date from dashboard
  deliveryDate: {
    type: Date,
  },
  //you will manually set shipped date from dashboard
  shippedAt: {
    type: Date,
  },
});

export default mongoose.models.shipping ||
  mongoose.model("shipping", shippingsSchema);
