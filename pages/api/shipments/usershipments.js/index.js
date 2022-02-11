import nc from "next-connect";
import { userShipments } from "../../../../controllers/shipController";
import shipConnect from "../../../../database/shipConnect";
import isAuthenticated from "../../../../middlewares/auth";

const handler = nc();
shipConnect();
handler.use(isAuthenticated).get(userShipments);

export default handler;
