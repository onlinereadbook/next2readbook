/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const DataType = require('sequelize');
const Model = require('../sequelize');

const UserClaim = Model.define('UserClaim', {

  type: {
    type: DataType.STRING,
  },

  value: {
    type: DataType.INTEGER,
  },

});

//export default UserClaim;
module.exports = UserClaim;