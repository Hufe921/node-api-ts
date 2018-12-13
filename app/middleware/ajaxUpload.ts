import fs = require('mz/fs');
import path = require('path');
import pump = require('mz-modules/pump');
import uuidv4 = require('uuid/v4');
import { Tips } from '../dto/utils/index';
// ajax上传图片
export default (options): any => {
    return async function ajaxUpload(ctx, next) {
        try {
            const stream = await ctx.getFileStream();
            const filename = uuidv4().toUpperCase() + path.extname(stream.filename).toLowerCase();
            const target = path.join(path.resolve(__dirname, `../public/${options.name}`), filename);
            const writeStream = fs.createWriteStream(target);
            await pump(stream, writeStream);
            ctx.filename = filename;
            await next();
        } catch (err) {
            ctx.body = new Tips(false, err.message, 400)
        }
    }
};