import shipConnect from "../../../database/shipConnect";
import Shipping from "../../../models/Shipping";
import User from "../../../models/User";
import jwt from "jsonwebtoken";
import shortid from "shortid";

shipConnect();

const handler = async (req, res) => {
  console.log("hit");
  const { receiver, sender, deliveryInfo, totalPrice } = req.body;

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDI1OTcwNjMwYTAyNzNmMDBiYTIzZiIsImlhdCI6MTY0NDMyMTEzOCwiZXhwIjoxNjQ0OTI1OTM4fQ.HhqqezikPSVnGbmmJxrWH75vpeWW1hMEk5mfBlqfmIo";
  const decoded = jwt.verify(token, "SGDHDJF3GDT6JE7JE9933H4H532HE5");
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

  //   console.log(data);
  res.status(201).json({ success: true, data });
};

export default handler;
