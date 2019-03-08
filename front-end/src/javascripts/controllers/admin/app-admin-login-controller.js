import angel from '@utils/angel'
import appAdminrLogin from '@views/routes/app-admin-login.html';
import { getCodeImg, postLogin } from '@models/admin-model';


const getCode = async ($code) => { // 验证码
  try{
    let data = await getCodeImg();
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
      let data = await postLogin({
        username, password, code
      })
      if( !data ) {
        $('.code').click()
        return false
      }
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

// function login (e) { // 登录逻辑
//   e.preventDefault()
//   let username = $loginInps.username.val()
//   let password = $loginInps.password.val()
//   let code = $loginInps.code.val()
  
//   $.ajax({
//       url: '/api/v1/users/login',
//       type: 'post',
//       data: {
//           username,
//           password,
//           code
//       }
//   }).done(function(res) {
//       if ( res.code === 200 ) {
//           window.location.href = '/'
//       } else {
//           getCode() // 如果登录失败更改验证码
//       }
//       console.log(res)
//   })
// }



export default {
  render
}