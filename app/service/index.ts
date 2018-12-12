import { Service } from 'egg';
// 扩展及通用方法
import { cloneTo } from '../utils/extension';
import { formatTime } from '../utils/generic';
// 枚举
import { WorkType as WorkTypeEnum } from '../dto/utils/enum'
// 常量
import { WorkType as WorkTypeConstant } from '../dto/utils/constant'
// dto
import { Show as WorkShow } from '../dto/work/index'

/**
 * Index service
 */
export default class Index extends Service {
  // 实体
  readonly Case: any = this.ctx.model.Case;
  readonly Download: any = this.ctx.model.Download;
  readonly Visual: any = this.ctx.model.Visual;
  // 配置
  readonly config: any = this.app.config;

  // 获取我的提交历史
  public async getSubmitHistory(msg: { userNo: string }): Promise<object> {
    // 通用方法
    async function getMyWork(T: any, cover: string, workType: number): Promise<Object> {
      const raw: Array<any> = await T.findAll({
        where: {
          isLatestVersion: true,
          submiterNo: msg.userNo,
          isActive: true
        },
        order: [
          ['createdAt', 'DESC']
        ],
        raw: true
      })
      // 格式化
      return raw.map(item => cloneTo(item, WorkShow, {
        workType,
        cover: cover + item.cover,
        createdAt: formatTime('yyyy-MM-dd hh:mm:ss', item.createdAt)
      }))
    }

    return {
      caseSubmit: await getMyWork(this.Case, this.config.caseCover, WorkTypeConstant[WorkTypeEnum.Case]),
      downloadSubmit: await getMyWork(this.Download, this.config.downloadCover, WorkTypeConstant[WorkTypeEnum.Download]),
      visualSubmit: await getMyWork(this.Visual, this.config.visualCover, WorkTypeConstant[WorkTypeEnum.Visual]),
    }
  }
}
