import { Server } from "socket.io";
import socketIOConfig from "../../config/socket-io.js";
// import SocketRoutes from "../../routes/socket/index.js";
class SocketIO {

    public startSocket() {
        // const io = new Server(socketIOConfig.port, {
        //     maxHttpBufferSize: socketIOConfig.maxHttpBufferSize,
        //     allowEIO3: socketIOConfig.allowEIO3,
        //     cors: socketIOConfig.cors,
        //     allowRequest: (req, callback) => {
        //         callback(null, true); // message, success status
        //     },
        // });
        // io.use(SocketIOMiddleware.userAuthCheck);
        // io.on("connection", (socket) => {
        //     SocketHandler.connected();
        //     socket.on('disconnect', SocketHandler.disconnect);
        // });
    }

    public startSocketWithHttpServer(httpServer: any) {
        // Configurations
        const io = new Server(httpServer, {
            maxHttpBufferSize: socketIOConfig.maxHttpBufferSize,
            allowEIO3: socketIOConfig.allowEIO3,
            cors: socketIOConfig.cors,
            allowRequest: (req, callback) => {
                callback(null, true); // message, success status
            },
        });
        // SocketRoutes(io);
        return io;  // to set io for api routes
    }
}

export default new SocketIO();