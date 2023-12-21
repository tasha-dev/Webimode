
import { Request } from "express";
import passport from "passport";
import passportGoogleOAuth from "passport-google-oauth2";
import PassportConfig from "../config/passport.js";

export default function InitPassport() {
    // passport.serializeUser(function (user, cb) {
    //     cb(null, user);
    // });
    // passport.deserializeUser(function (obj: any, cb) {
    //     cb(null, obj);
    // });

    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user: any, done) => done(null, user));

    const GoogleStrategy = passportGoogleOAuth.Strategy;
    passport.use(new GoogleStrategy({
        clientID: PassportConfig.GOOGLE_CLIENT_ID,
        clientSecret: PassportConfig.GOOGLE_CLIENT_SECRET,
        callbackURL: PassportConfig.GOOGLE_CALLBACK_URL,
        passReqToCallback: true,
    },
        function (req: Request, accessToken: any, refreshToken: any, profile: any, done: any) {
            // req.socialUser = profile;
            // req.user = profile;
            done(null, profile);
        }
    ));


    // passport.use(new GoogleStrategy({
    //     returnURL: 'http://floating-citadel-4714.herokuapp.com/auth/google/return',
    //     realm: 'http://floating-citadel-4714.herokuapp.com'
    //     },
    //     function(identifier, profile, done){
    //       console.log('Success');
    //       console.log(identifier);
    //       console.log(profile);
    //       done(null, profile); // <-- important!
    //     }
    //   ));

}