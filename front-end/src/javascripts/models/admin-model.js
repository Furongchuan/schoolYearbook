import request from '@utils/request'

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

const getCodeImg = (data) => {
  return request({
      url: '/api/v1/users/code',
  })
}

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