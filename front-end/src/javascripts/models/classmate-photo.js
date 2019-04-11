import request from '@utils/request'
// 发布朋友圈
const postPhotoItem = (data) => {
  return request({
      url: '/api/v1/classmate/photo',
      type: 'post',
      data,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
  })
}
const getPhotoItem = (data) => {
  return request({
    url:'/api/v1/classmate/photoItem',
  })
}

export  {
  postPhotoItem,
  getPhotoItem
}