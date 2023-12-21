import { createTerminus } from '@godaddy/terminus';
import { Application } from 'express';
import { Mongoose } from 'mongoose';

export const serverConfig = function (app: Application, mongoose: Mongoose, serverInit: any) {
	function healthCheck() {
		// ERR_CONNECTING_TO_MONGO
		if (mongoose.connection.readyState === 0 || mongoose.connection.readyState === 3) {
			return Promise.reject(new Error('Mongoose has disconnected'));
		}
		// CONNECTING_TO_MONGO
		if (mongoose.connection.readyState === 2) {
			return Promise.reject(new Error('Mongoose is connecting'));
		}
		// CONNECTED_TO_MONGO
		return Promise.resolve();
	}

	function onSignal() {
		console.log('server is starting cleanup');
		return new Promise<void>((resolve, reject) => {
			mongoose
				.disconnect()
				.then(() => {
					console.info('Mongoose has disconnected');
					resolve();
				})
				.catch(reject);
		});
	}

	function beforeShutdown() {
		return new Promise((resolve) => {
			setTimeout(resolve, 15000);
		});
	}

	function onShutdown() {
		return new Promise((resolve, reject) => {
			// Your code here
			console.log('cleanup finished, server is shutting down');
		});
	}

	function startServer(): void {

		createTerminus(serverInit, {
			logger: console.log,
			signal: 'SIGINT',
			healthChecks: {
				'/healthcheck': healthCheck,
			},
			onSignal,
			onShutdown,
			beforeShutdown,
		}).listen(process.env.PORT, () => {
			console.log('Express server listening on %d, in %s mode', process.env.PORT, app.get('env'));
		});
	}

	return {
		startServer,
	};
};
