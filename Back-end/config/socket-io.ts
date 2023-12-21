

export default {
    port: Number(process.env.SOCKET_IO_PORT) || 5200,
    maxHttpBufferSize: Number(process.env.SOCKET_IO_MAX_HTTP_BUFFER_SIZE) || 1e6,
    transports: process.env.SOCKET_IO_TRANSPORTS?.split(',') || ['websocket', 'polling'],
    methods: process.env.SOCKET_IO_METHODS?.split(',') || ['GET', 'POST'],
    allowEIO3: process.env.SOCKET_IO_ALLOW_IO3 === 'true',

    cors: {
        origin: process.env.SOCKET_IO_ORIGINS?.split(',') || [],
        allowedHeaders: process.env.SOCKET_IO_ALLOWED_HEADERS?.split(',') || [],
        credentials: true
    }
}