import appPersonalPassword from '@views/routes/app-personal-password.html'
import { postPassword }from '@models/personal'
const compare = () => {
  let password = $('#set-password').val()
  let newPassword = $('#set-newPassword').val()
  if( password != newPassword){
    $.Toast('Warning', '两次输入密码不一致', 'warning')
    return ;
  }
  return password;
}

const updataPassword = async () => {
  let password = compare()
  let data = {
    password,
    token: localStorage.token
  }
  await postPassword(data)
}

const render =  (req, res, next) => {
  res.render(appPersonalPassword)
  $('#publish-form').submit(updataPassword)
}

export default {
  render
}