
const status = {
    'success': {
        code: '200',
        msg: 'request is success'
    },
    'miss param': {
        code: '205',
        msg: 'missing params'
    },
    'error': {
        code: '500',
        msg: 'request is error from server'
    },
    'illegal': {
        code: '501',
        msg: '请上传正确的图片格式'
    },
    'username exist': {
        code: '204',
        msg: '用户名已经存在'
    },
    'nickname exist': {
        code: '204',
        msg: '昵称已经存在'
    },
    'username unexist': {
        code: '205',
        msg: '用户名不存在'
    },
    'unreal password': {
        code: '205',
        msg: '密码不正确'
    },
    'code wrong': {
        code: '206',
        msg: '验证码不正确'
    },
}
module.exports = status 