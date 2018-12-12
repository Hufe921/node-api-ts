// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndex from '../../../app/controller/index';

declare module 'egg' {
  interface IController {
    index: ExportIndex;
  }
}
