const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/classmate', { useNewUrlParser: true });

// 用户信息 Schema （规定文档的格式）
let userItemSchema = new mongoose.Schema({
    username: String,
    password: String,
    nickname: String
});
let movieItemSchema = new mongoose.Schema({
  name: String,
  telephone:String,
  eMail: String,
  nowPlace: String,
  headImg: String,
  job: String,
  scienceName: String
});
// 单数会自动加s （集合）
let Users = mongoose.model('users', userItemSchema);
let Items = mongoose.model('items', movieItemSchema);

// 检验是否已存在
const checkAlready = (option) => {
    return Users.find(option)
}
// 注册
const register = (params) => {
    let item = {
      name: params.nickname,
      telephone: '请填写电话号码',
      eMail: '请填写邮箱',
      nowPlace: '请填写当前居住地',
      headImg: 'http://localhost:3000/images/uoload/v2-4f2c2235830db1a336ac27dd08a2f438_r.jpg',
      job: '请填写当前工作',
      scienceName: params.scienceName
    }
    return Items.insertMany(item)
}

module.exports = { 
    register,
    checkAlready
}