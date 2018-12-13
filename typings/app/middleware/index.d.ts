// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAjaxUpload from '../../../app/middleware/ajaxUpload';
import ExportIisError from '../../../app/middleware/iisError';
import ExportInvalidArg from '../../../app/middleware/invalidArg';

declare module 'egg' {
  interface IMiddleware {
    ajaxUpload: typeof ExportAjaxUpload;
    iisError: typeof ExportIisError;
    invalidArg: typeof ExportInvalidArg;
  }
}
