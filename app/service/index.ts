import { Service } from 'egg';

/**
 * Index service
 */
export default class Index extends Service {
  // 获取我的提交历史
  public async getSubmitHistory(msg: { userNo: string }): Promise<Array<object>> {
    let result = await this.ctx.model.Case.findAll({
      //attributes:['hh'],
      where: {
        submiterNo: msg.userNo,
        isActive: true
      },
      raw: true
    })
    return result
  }
}
