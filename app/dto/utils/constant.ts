// 权限
const Permission: object = {
    0: {
        id: 0,
        name: 'review',
        level: 1,
        description: '审核'
    },
    1: {
        id: 1,
        name: 'publish',
        level: 1,
        description: '发布'
    }
}

// 作品类型枚举（精选案例，下载）
const WorkType: object = {
    0: {
        id: 0,
        name: 'case',
        description: '精选案例'
    },
    1: {
        id: 1,
        name: 'download',
        description: '下载专区'
    },
    2: {
        id: 2,
        name: 'visual',
        description: '视觉规范'
    }
}

// 工作状态
const WorkStatus: object = {
    0: {
        id: 0,
        name: 'reject',
        description: '打回'
    },
    1: {
        id: 1,
        name: 'submit',
        description: '提交'
    },
    2: {
        id: 2,
        name: 'review',
        description: '审核'
    },
    3: {
        id: 3,
        name: 'publish',
        description: '发布'
    },
    4: {
        id: 4,
        name: 'revoke',
        description: '撤回'
    }
}

// 流程状态
const ProcessStatus: object = {
    0: {
        id: 0,
        name: 'reject',
        description: '拒绝'
    },
    1: {
        id: 1,
        name: 'resolve',
        description: '同意'
    }
}

export {
    Permission,
    WorkType,
    WorkStatus,
    ProcessStatus
}