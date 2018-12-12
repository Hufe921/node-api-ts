// 权限枚举
enum Permission {
    Review,
    Publish
}

// 作品类型枚举
enum WorkType {
    Case,
    Download,
    Visual
}

// 作品审核状态枚举
enum WorkStatus {
    Reject,
    Submit,
    Review,
    Publish,
    Revoke
}

// 流程状态枚举
enum ProcessStatus {
    Reject,
    Resovle
}

// 工作状态枚举
enum JobStatus {
    On = "在职",
    Off = "已离职"
}

// 菜单枚举
enum Menu {
    EnterpriseImage,
    InteractiveDesign,
    VisualDesign,
    FE,
    PPT,
    H5,
    Icon,
    Holiday,
    Business,
    Common
}

// 数据格式枚举
enum Format {
    Object = 'object',
    Array = 'array'
}

export {
    Permission,
    WorkType,
    WorkStatus,
    ProcessStatus,
    JobStatus,
    Menu,
    Format
}