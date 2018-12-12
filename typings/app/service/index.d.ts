// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndex from '../../../app/service/index';

declare module 'egg' {
  interface IService {
    index: ExportIndex;
  }
}
