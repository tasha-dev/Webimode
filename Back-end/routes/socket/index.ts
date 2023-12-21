// import { TIO } from "../../app/socket/controller/socketController.js";
// import SocketIOMiddleware from "../../app/socket/middleware/index.js";
// import UserSocketRoutes from "./user.js";
// import AdminSocketRoutes from "./admin.js";

// export default function (io: TIO) {
//     // base middleware
//     io.use(SocketIOMiddleware.userAuthCheck);
//     // apply  routes
//     UserSocketRoutes(io);
//     AdminSocketRoutes(io);
// }