import angel from '@utils/angel'
import appAdminrLogin from '@views/routes/app-admin-login.html';
import { getCodeImg, postLogin } from '@models/admin-model';


const getCode = async ($code) => { // 验证码
  try{
    let getData = await getCodeImg();
    let data = getData.data
    $code.html(data.img);
    $.cookie('mark',data.mark)
  }catch(e){
  }
}

const login = (e) => { //登录逻辑
  e.preventDefault()
  let $loginInps = {
    username: $('#login-username'),
    password: $('#login-password'),
    code: $('#login-code')
  }
  return (async () => {
    let username = $loginInps.username.val()
    let password = $loginInps.password.val()
    let code = $loginInps.code.val()
    try{
      let getData = await postLogin({
        username, password, code
      })
      let data = getData.data
      if( !data ) {
        $('.code').click()
        return false
      }
      localStorage.token = data.token
      window.location.href = '/'
    }catch(e){
      console.log(e)
    }
  })()

}

const bindEvents = () => {
  let $loginForm = $('#login-form')
  let $code = $('.code')
  $code.click(() => {
    getCode($code);
  })
  getCode($code);
  $loginForm.submit(login);
    $('.btn-change-type').click(function () {
    let url = $(this).data('targer') // 获取url
    angel.emit('go', url) // 进行跳转
  })  
}
const render = (req, res, next) => { 
  res.render(appAdminrLogin);
  bindEvents();
}

export default {
  render
}