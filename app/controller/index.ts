import { Controller } from 'egg';
// import { cloneTo } from '../utils/extension'

export default class IndexController extends Controller {
  // 获取我的提交历史
  public async getSubmitHistory() {
    const { ctx, service } = this
    try {
      let data = ctx.query
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
