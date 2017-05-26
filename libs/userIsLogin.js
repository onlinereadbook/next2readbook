const { User, UserLogin, UserClaim, UserProfile } = require('../data/models');

module.exports = async function userIsLogin(decode) {

    console.log(decode.userid);
    const LoginState = await UserLogin.findOne({
        attributes: ['userId'],
        where: { userId: decode.userid },
    });
    if (LoginState) {
        return true;
    } else {
        return false;
    }
    //console.log(LoginState)
    // return true;
}
