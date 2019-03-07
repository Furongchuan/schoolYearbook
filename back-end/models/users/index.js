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
  job: String
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
      telephone: '',
      eMail: 'eMail',
      nowPlace: 'nowPlace',
      headImg: 'http://localhost:3000/images/uoload/v2-4f2c2235830db1a336ac27dd08a2f438_r.jpg',
      job: 'job'
    }
    Items.insertMany(item)
    return Users.insertMany(params)
}

module.exports = { 
    register,
    checkAlready
}