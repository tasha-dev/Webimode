import bcrypt from 'bcryptjs';
import { Socket } from 'socket.io';
import auth from '../../../services/auth';
import PersonalAccessToken from '../../models/mongo/personal_access_token.js';


class SocketIOMiddleware {

    async userAuthCheck(socket: Socket, next: any) {
        try {
            const result = await SocketIOMiddleware.isAuthUser(socket);
            if (result) return next();
            else return next(new Error('Authenticate failed !'));
        } catch (e) {
            next(new Error(`Authentication error ${e}`));
        }
    }

    static async isAuthUser(socket: Socket): Promise<boolean> {
        try {
            if (socket.handshake.query && socket.handshake.query.token && typeof socket.handshake.query.token === 'string') {
                const _token = socket.handshake.query.token;
                const result = await PersonalAccessToken.findById(_token.split('|')[0]).populate("from_users").exec();
                if (!result || !result.token) return false;
                const plainTextToken = _token.split('|')[1];
                if (!plainTextToken || !bcrypt.compareSync(plainTextToken, result.token)) return false;
                if (result.tokenable_type !== 'users') return false;
                socket.user = result.from_users;
                return true;
            }
            else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }


}

export default new SocketIOMiddleware();