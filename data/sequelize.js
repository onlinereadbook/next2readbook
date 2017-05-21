/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const Sequelize = require('sequelize');
const { databaseUrl } = require('../config');
// console.log(databaseUrl);
// console.log('databaseUrl')
const sequelize = new Sequelize(databaseUrl, {
    define: {
        freezeTableName: true,
    },
});
//console.log(sequelize);
//export default sequelize;
module.exports = sequelize;