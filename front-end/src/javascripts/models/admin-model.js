import request from '@utils/request'
// 注册
const postRegister = (data) => {
  return request({
      url: '/api/v1/users/register',
      type: 'post',
      data,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
  })
}
// 获取验证码
const getCodeImg = (data) => {
  return request({
      url: '/api/v1/users/code',
  })
}
// 登录
const postLogin = (data) => {
  return request({
      url: '/api/v1/users/login',
      type: 'post',
      data,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
  })
}

export  {
  postRegister,
  getCodeImg,
  postLogin
}