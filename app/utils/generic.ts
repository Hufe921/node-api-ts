/**
 * 实体是否存在满足相应条件的数据
 * @param {Object} T model实体
 * @param {Obejct} condition 筛选条件对象
 * @returns {Array} [boolean,id]
 */

async function isExit(T: any, condition: object): Promise<[boolean, string?]> {
    let isExit: any = await T.find({
        where: condition
    })
    if (isExit) {
        return [true, isExit.id]
    } else {
        return [false]
    }
}


/**
 * 实体总数统计
 * @param {Object} T model实体
 * @param {Obejct} O 筛选条件对象
 * @returns {Number} 总数
 */
async function count(T: any, O: object = {}): Promise<number> {
    let count: Promise<number> = await T.count({
        where: {
            ...O,
            isActive: true
        }
    })
    return count
}

/**
 * 深度克隆可包含Symbol
 * @param {Object} obj 克隆对象
 */
function deepClone(obj: object): object {
    let result: object = {}
    for (let tmp of Reflect.ownKeys(obj)) {
        if (Object.prototype.toString.call(obj[tmp]) !== '[object Object]') {
            result[tmp] = Object.prototype.toString.call(obj[tmp]) === '[object Array]' ? obj[tmp].slice(0) : obj[tmp]
        } else {
            result[tmp] = deepClone(obj[tmp])
        }
    }
    return result
}

/**
 * 格式化时间
 * @param {*String} fmt 时间字符串
 * @param {*String} date 格式化字符串（yyyy-MM-dd HH:mm:ss）
 */
function formatTime(fmt: string, dat: string): string {
    const date: Date = new Date(dat)
    const o = {
        "M+": date.getMonth() + 1, //月份   
        "d+": date.getDate(), //日   
        "h+": date.getHours(), //小时   
        "m+": date.getMinutes(), //分   
        "s+": date.getSeconds(), //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
    for (const k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    return fmt
}


export {
    isExit,
    count,
    deepClone,
    formatTime
}