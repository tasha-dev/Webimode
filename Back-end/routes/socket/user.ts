// import SocketController, { TIO } from "../../app/socket/controller/socketController.js";
// const BaseSocketController = new SocketController();

// export default function (io: TIO) {
//     const UserNamespace = io.of("/users");
//     // ? only User Middleware => UserNamespace.use()
//     UserNamespace.on("connection", (userSocket) => {
//         // common actions
//         BaseSocketController.connected();
//         // join user
//         BaseSocketController.joinToActiveConversations(userSocket);
//         // common events
//         userSocket.on('disconnect', BaseSocketController.disconnected);
//     });
// }