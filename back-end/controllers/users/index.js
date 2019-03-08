const usersModel = require('../../models/users');
const { Decrypt } = require('../../modules/crypto');

const register = async (req, res, next) => {

  // 查看用户名是否已存在   
  let usernameExist = await usersModel.checkAlready({ username: req.body.username })
  if ( usernameExist.length ) { // 已经有用户存在了
      next('username exist')
      return false
  }

  // 开始注册
  try {
      await usersModel.register(req.body)
      next('success')
  } catch (e) {
      console.log(e)
      next('error')
    }
}

const login = async (req, res, next) => {
  let text = Decrypt(req.cookies.mark)
  if ( req.body.code.toLowerCase() !== text ) {
    
    // 验证码不正确
    next('code wrong')
    return false
  }

  let usernameExist = await usersModel.checkAlready({ username: req.body.username })
  if ( !usernameExist.length ) { // 没有用户
      next('username unexist')
      return false
  }
  // 密码错误
  if ( usernameExist[0].password !== req.body.password ) {
      next('unreal password')
      return false;
  }
  next('success')
}

module.exports = {
  register,
  login
}