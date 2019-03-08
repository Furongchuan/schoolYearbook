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

export  {
  postRegister
}