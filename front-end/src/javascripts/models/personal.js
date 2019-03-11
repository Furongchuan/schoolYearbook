import request from '@utils/request'

// 修改用户信息
const postInfo = (data) => {
  return request({
      url: '/api/v1/personal/updata',
      type: 'post',
      data,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
  })
}

export {
  postInfo
}