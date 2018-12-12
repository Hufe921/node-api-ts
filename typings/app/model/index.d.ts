// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndex = require('../../../app/model/index');
import ExportUser = require('../../../app/model/user');

declare module 'sequelize' {
  interface Sequelize {
    Index: ReturnType<typeof ExportIndex>;
    User: ReturnType<typeof ExportUser>;
  }
}
