const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/classmate', { useNewUrlParser: true });

// 用户信息 Schema （规定文档的格式）

let userItemSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  telephone:String,
  eMail: String,
  nowPlace: String,
  headImg: String,
  job: String,
  scienceName: String
});
// 单数会自动加s （集合）
let Items = mongoose.model('items', userItemSchema);

// 检验账户是否已存在
const checkAlready = (option) => {
    return Items.find(option)
}
// 注册
const register = (params) => {
  let item = {
    username: params.username,
    password: params.password,
    name: params.nickname,
    telephone: '',
    eMail: '',
    nowPlace: '',
    headImg: 'images/uoload/head-1552307983906.jpg',
    job: '',
    scienceName: params.scienceName
  }
  return Items.insertMany(item)
}

module.exports = { 
    register,
    checkAlready
}