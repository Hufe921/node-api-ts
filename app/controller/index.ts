import { Controller } from 'egg';

export default class IndexController extends Controller {
  // 获取我的提交历史
  public async getSubmitHistory() {
    const { ctx, service } = this
    try {
      let data: any = ctx.query
      if (data.userNo) {
        ctx.body = await service.index.getSubmitHistory(data)
      } else {
        ctx.status = 403
      }
    } catch (err) {
      this.logger.error(err)
      ctx.status = 500
    }
  }
}
