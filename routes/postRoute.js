import express from "express"

import {signin,getUserBooking,getDetails , getUserPastBooking} from "../controller/userController.js"
import { authenticateToken } from "../middleware/authmiddleware.js";
const route = express.Router();
route.post("/signin",signin);
route.get("/getReservations/:userId",authenticateToken,getUserBooking);
route.get("/details/:userId",authenticateToken,getDetails);
route.get("/getpastReservations/:userId",authenticateToken,getUserPastBooking);

export default postRoute;