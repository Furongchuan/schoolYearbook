const usersModel = require('../../models/users');

const register = async (req, res, next) => {
  console.log(req.body)
  // 查看是否已经有这个用户
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

module.exports = {
  register
}