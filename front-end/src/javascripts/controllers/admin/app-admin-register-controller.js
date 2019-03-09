import angel from '@utils/angel'
import appAdminrRgister from '@views/routes/app-admin-register.html';
import { postRegister } from '@models/admin-model';
import { getClassmateScienceName } from '@models/classmate-model'

const render = async (req, res, next) => { 
  let getData = await getClassmateScienceName();
  let data = getData.data
  res.render(template.compile(appAdminrRgister)({
    items: data
}))
  bindEvents() // 事件绑定
  $('.btn-change-type').click(function () {
    let url = $(this).data('targer') // 获取url
    angel.emit('go', url) // 进行跳转
  })  
}

function bindEvents() {
  let $registerForm = $('#register-form')
  // 注册
  $registerForm.submit(register)
}

function register (e) { // 注册逻辑

  let $registerInps = {
    username: $('#register-username'),
    password: $('#register-password'),
    nickname: $('#register-nickname'),
    scienceName: $('#register-scienceName')
  }
  e.preventDefault()
  return (async () => {
    let username = $registerInps.username.val()
    let password = $registerInps.password.val()
    let nickname = $registerInps.nickname.val()
    let scienceName = $registerInps.scienceName.val()
    try{
      let data = await postRegister({
        username, password, nickname, scienceName
      })
      if( !data ) return false;
      $('.btn-change-type').click()
    }catch(e){
      console.log(e,'e')
    }
  })()
}
export default {
  render
}