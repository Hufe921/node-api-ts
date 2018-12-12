import { Errors } from "../dto/utils/index"
// 非法参数处理
export default (): Function => {
    return async function invalidArg(ctx, next) {
        await next();
        if (ctx.status === 403) {
            ctx.body = new Errors()
        }
    }
};