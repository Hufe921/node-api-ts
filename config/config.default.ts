import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544576191649_4019';

  // add your egg config in here
  config.middleware = ['invalidArg', 'iisError'];

  const invalidArg = {}
  const iisError = {}

  // sequelize设置
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'typescript',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
    define: {
      underscored: false
    }
  };

  // 跨域请求设置
  config.cors = {
    origin: function () {
      return '*'
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Token']
  }

  const domain: string = 'http://103.38.233.24:8084'
  // 精选案例
  const caseRecommendCover: string = domain + '/case/recommend/'
  const caseCover: string = domain + '/case/cover/'
  const caseMDImage: string = domain + '/case/md_img/'
  const caseAttachment: string = domain + '/case/attachment/'
  // 下载专区
  const downloadCover: string = domain + '/download/cover/'
  const downloadMDImage: string = domain + '/download/md_img/'
  const downloadAttachment: string = domain + '/download/attachment/'
  // 视觉规范
  const visualCover: string = domain + '/visual/cover/'
  const visualMDImage: string = domain + '/visual/md_img/'
  const visualAttachment: string = domain + '/visual/attachment/'

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...invalidArg,
    ...iisError,
    caseRecommendCover,
    caseCover,
    caseMDImage,
    caseAttachment,
    downloadCover,
    downloadMDImage,
    downloadAttachment,
    visualCover,
    visualMDImage,
    visualAttachment
  };
};
