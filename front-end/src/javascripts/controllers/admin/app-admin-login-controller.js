import angel from '@utils/angel'
import appAdminrLogin from '@views/routes/app-admin-login.html';

const render = (req, res, next) => { 
  res.render(appAdminrLogin);
  $('.btn-change-type').click(function () {
    let url = $(this).data('targer') // 获取url
    angel.emit('go', url) // 进行跳转
  })  
}

export default {
  render
}