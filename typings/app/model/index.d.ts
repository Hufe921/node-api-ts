// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccesslog = require('../../../app/model/accesslog');
import ExportBrowselog = require('../../../app/model/browselog');
import ExportCase = require('../../../app/model/case');
import ExportDownload = require('../../../app/model/download');
import ExportDownloadlog = require('../../../app/model/downloadlog');
import ExportMenu = require('../../../app/model/menu');
import ExportProcesslog = require('../../../app/model/processlog');
import ExportSearchlog = require('../../../app/model/searchlog');
import ExportTag = require('../../../app/model/tag');
import ExportUserentity = require('../../../app/model/userentity');
import ExportUserpermission = require('../../../app/model/userpermission');
import ExportVisual = require('../../../app/model/visual');
import ExportWorktag = require('../../../app/model/worktag');

declare module 'sequelize' {
  interface Sequelize {
    Accesslog: ReturnType<typeof ExportAccesslog>;
    Browselog: ReturnType<typeof ExportBrowselog>;
    Case: ReturnType<typeof ExportCase>;
    Download: ReturnType<typeof ExportDownload>;
    Downloadlog: ReturnType<typeof ExportDownloadlog>;
    Menu: ReturnType<typeof ExportMenu>;
    Processlog: ReturnType<typeof ExportProcesslog>;
    Searchlog: ReturnType<typeof ExportSearchlog>;
    Tag: ReturnType<typeof ExportTag>;
    Userentity: ReturnType<typeof ExportUserentity>;
    Userpermission: ReturnType<typeof ExportUserpermission>;
    Visual: ReturnType<typeof ExportVisual>;
    Worktag: ReturnType<typeof ExportWorktag>;
  }
}
