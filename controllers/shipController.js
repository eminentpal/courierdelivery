import shipConnect from "../database/shipConnect";
import Shipping from "../models/Shipping";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { Cookie } from "next-cookie";
import shortid from "shortid";

shipConnect();

export const userShipments = async (req, res) => {
  console.log("user orders");
  //  get logged in user shipment orders

  const cookies = Cookie.fromApiRoute(req, res);
  const token = cookies.get("token");
  console.log(token);
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDI1OTcwNjMwYTAyNzNmMDBiYTIzZiIsImlhdCI6MTY0NDMyMTEzOCwiZXhwIjoxNjQ0OTI1OTM4fQ.HhqqezikPSVnGbmmJxrWH75vpeWW1hMEk5mfBlqfmIo";
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userLogin = await User.findById(decoded.id);
  if (!userLogin) {
    return res.status(401).json({ message: "No User with that ID" });
  }
  console.log(userLogin);

  const data = await Shipping.find({
    user: userLogin._id,
  });

  console.log(data);
  res.status(201).json({ success: true, data });
};

export const createShipment = async (req, res) => {
  console.log("hit");
  const { receiver, sender, deliveryInfo, totalPrice } = req.body;

  //   console.log(req.body);

  const cookies = Cookie.fromApiRoute(req, res);
  const token = cookies.get("token");
  console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);
  const userLogin = await User.findById(decoded.id);

  console.log(userLogin);
  const paymentInfo = {
    totalPrice,
    paidAt: Date.now(),
  };

  //we create a short id
  const track = shortid.generate();

  console.log(track);
  const data = await Shipping.create({
    receiver,
    sender,
    deliveryInfo,
    trackId: `PD${track}`,
    totalPrice,
    paymentInfo,
    user: userLogin._id,
  });

  console.log(data);
  res.status(201).json({ success: true, data });
};
