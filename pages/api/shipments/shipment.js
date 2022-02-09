import nc from "next-connect";
import { createShipment } from "../../../controllers/shipController";

const handler = nc();

handler.post(createShipment);

export default handler;
