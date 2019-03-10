import request from '@utils/request'
// 验证是否登录
const userLoginAuth = () => {
    return request({
        url: '/api/v1/users/auth',
        data: {
            token: localStorage.token
        }
    })
}
// 获取用户数据
const getUserInfo = () => {
    return request({
        url: '/api/v1/users/info',
        data: {
            token: localStorage.token
        }
    })
}



export {
    userLoginAuth,
    getUserInfo
}