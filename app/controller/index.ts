import { Controller } from 'egg';

export default class IndexController extends Controller {
  // 获取我的提交历史
  public async getSubmitHistory() {
    const { ctx } = this
    ctx.body = await ctx.service.index.getSubmitHistory(ctx.query);
  }
}
