// 基础抽象提示类
abstract class BasicTips {
    public state: boolean;
    public tip: string;
    public code: number;
    constructor(state: boolean, tip: string, code: number) {
        this.state = state;
        this.tip = tip;
        this.code = code;
    }
}

// 一般提示类
class Tips extends BasicTips {
    constructor(state: boolean, tip: string, code: number = 200) {
        super(state, tip, code)
    }
}

// 错误处理类
class Errors extends BasicTips {
    constructor(state: boolean = false, tip: string = '请求参数缺失！', code: number = 403) {
        super(state, tip, code)
    }
}

export {
    Tips,
    Errors
}