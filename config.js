// /**
//  * React Starter Kit (https://www.reactstarterkit.com/)
//  *
//  * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE.txt file in the root directory of this source tree.
//  */

// /* eslint-disable max-len */

module.exports.port = process.env.PORT || 3000;
module.exports.host = process.env.WEBSITE_HOSTNAME || `localhost:3000`;

// // default locale is the first one
// //module.exports.locales = ['en-US', 'cs-CZ'];

//module.exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
module.exports.databaseUrl = process.env.DATABASE_URL || 'mysql:polo:1314@localhost:8889/polodb';

// module.exports.analytics = {

//     // https://analytics.google.com/
//     google: {
//         trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
//     },

// };

module.exports.auth = {

    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

    // https://developers.facebook.com/
    facebook: {
        id: process.env.FACEBOOK_APP_ID || '1224419620984014',
        secret: process.env.FACEBOOK_APP_SECRET || 'e1301f2dc0b0b1d63736be0374d8805b',
    },

    // https://cloud.google.com/console/project
    google: {
        id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
        secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
    },

    // https://apps.twitter.com/
    twitter: {
        key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
        secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
    },

};
