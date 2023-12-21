declare global {
	namespace NodeJS {
		interface ProcessEnv {
			HOST: string;
			NODE_ENV: 'development' | 'production';
			PORT?: number;
			APP_URL: string;
			MONGO_HOST: string;
			MONGO_PORT: string;
			CONNECTION_STRING_MONGO: string;
			MONGO_DB_NAME: string;
			MONGO_USERNAME?: string;
			MONGO_PASSWORD?: string;
			MONGO_RECONNECT_INTERVAL: number;
			API_JWT_SECRET: string;
			APP_DEBUG: string;
			SOCKET_IO_PORT: number;
			SOCKET_IO_MAX_HTTP_BUFFER_SIZE: number;
			SOCKET_IO_ALLOWED_HEADERS: string;
			SOCKET_IO_ORIGINS: string;
			SOCKET_IO_TRANSPORTS: string;
			SOCKET_IO_METHODS: string;
			SOCKET_IO_ALLOW_IO3: string;
			MONGO_CONNECTION_STRING: string;
			MAIL_HOST: string;
			MAIL_PORT: number;
			MAIL_SERVICE: string;
			MAIL_FROM: string;
			MAIL_DEFAULT_SUBJECT: string;
			MAIL_USERNAME: string;
			MAIL_PASSWORD: string;
			SESSION_SECRET_KEY: string;
			PUBLIC_VAPID_KEY: string;
			PRIVATE_VAPID_KEY: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
