import isAuthenticated from "../../../middlewares/auth";
import nc from "next-connect";
import { getUser } from "../../../controllers/userController";
import shipConnect from "../../../database/shipConnect";

const handler = nc();

shipConnect();
handler.use(isAuthenticated).get(getUser);

export default handler;
