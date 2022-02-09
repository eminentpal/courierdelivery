import nc from "next-connect";
import { userShipments } from "../../../../controllers/shipController";

const handler = nc();

handler.get(userShipments);

export default handler;
