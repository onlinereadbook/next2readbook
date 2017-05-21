const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const { User, UserLogin, UserClaim, UserProfile } = require('../data/models');
const config = require('../config').auth;

/**
 * Sign in with Facebook.
 */

passport.use(new FacebookStrategy({
    clientID: config.facebook.id,
    clientSecret: config.facebook.secret,
    callbackURL: '/login/facebook/return',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, done) => {
    /* eslint-disable no-underscore-dangle */
    const loginName = 'facebook';
    const claimType = 'urn:facebook:access_token';
    const fooBar = async () => {
        if (req.user) {
            const userLogin = await UserLogin.findOne({
                attributes: ['name', 'key'],
                where: { name: loginName, key: profile.id },
            });
            if (userLogin) {
                // There is already a Facebook account that belongs to you.
                // Sign in with that account or delete it, then link it with your current account.
                done();
            } else {
                const user = await User.create({
                    id: req.user.id,
                    email: profile._json.email,
                    logins: [
                        { name: loginName, key: profile.id },
                    ],
                    claims: [
                        { type: claimType, value: profile.id },
                    ],
                    profile: {
                        displayName: profile.displayName,
                        gender: profile._json.gender,
                        picture: `https://graph.facebook.com/${profile.id}/picture?type=large`,
                    },
                }, {
                        include: [
                            { model: UserLogin, as: 'logins' },
                            { model: UserClaim, as: 'claims' },
                            { model: UserProfile, as: 'profile' },
                        ],
                    });
                done(null, {
                    id: user.id,
                    email: user.email,
                });
            }
        } else {
            const users = await User.findAll({
                attributes: ['id', 'email'],
                where: { '$logins.name$': loginName, '$logins.key$': profile.id },
                include: [
                    {
                        attributes: ['name', 'key'],
                        model: UserLogin,
                        as: 'logins',
                        required: true,
                    },
                ],
            });
            if (users.length) {
                done(null, users[0]);
            } else {
                let user = await User.findOne({ where: { email: profile._json.email } });
                if (user) {
                    // There is already an account using this email address. Sign in to
                    // that account and link it with Facebook manually from Account Settings.
                    done(null);
                } else {
                    user = await User.create({
                        email: profile._json.email,
                        emailConfirmed: true,
                        logins: [
                            { name: loginName, key: profile.id },
                        ],
                        claims: [
                            { type: claimType, value: accessToken },
                        ],
                        profile: {
                            displayName: profile.displayName,
                            gender: profile._json.gender,
                            picture: `https://graph.facebook.com/${profile.id}/picture?type=large`,
                        },
                    }, {
                            include: [
                                { model: UserLogin, as: 'logins' },
                                { model: UserClaim, as: 'claims' },
                                { model: UserProfile, as: 'profile' },
                            ],
                        });
                    done(null, {
                        id: user.id,
                        email: user.email,
                    });
                }
            }
        }
    };

    fooBar().catch(done);
}));

// export default passport;
module.exports = passport;