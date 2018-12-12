import { Errors } from "../dto/utils/index"
// 内部服务器参数处理
export default (): Function => {
    return async function iisError(ctx, next) {
        await next();
        if (ctx.status === 500) {
            ctx.body = new Errors(false, "内部服务器错误", 500)
        }
    }
};