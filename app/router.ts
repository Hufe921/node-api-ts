import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/getSubmitHistory', controller.index.getSubmitHistory);
  router.post('/api/postImg', app.middleware.ajaxUpload({ name: 'img' }), controller.index.upload);
};
