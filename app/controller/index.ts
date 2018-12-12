import { Controller } from 'egg';

export default class IndexController extends Controller {
  // 获取我的提交历史
  public async getSubmitHistory() {
    const { ctx } = this
    try {
      let data = ctx.query
      if (data.userNo) {
        ctx.body = await ctx.service.index.getSubmitHistory(ctx.query);
      } else {
        // 非法访问
        ctx.status = 403
      }
    } catch (err) {
      this.logger.error(err)
      // 服务器内部错误
      ctx.status = 500
    }
  }
}
