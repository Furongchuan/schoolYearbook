const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/classmate', { useNewUrlParser: true });



// 同学录 Schema工厂
let SchemaFactory = function(schema,collection) {
  if(typeof (collection) !== "string" || typeof (schema) !== 'object') return;
  let _schema = schema;
  let _collection = collection;
  return mongoose.model(_collection, _schema)
}
// 同学录item Schema （规定文档的格式）
let classmateItemSchema = SchemaFactory({
  username: String,
  password: String,
  name: String,
  telephone:String,
  eMail: String,
  nowPlace: String,
  headImg: String,
  job: String,
  scienceName: String
},'item');

// 同学录chat Schema
let classmateChatSchema = SchemaFactory({
  name: String,
  message: String,
  date: String
},'chat')

let classmateScienceSchema = SchemaFactory({
  scienceName: String
},'science')

const geTotalPage = () => {
  return classmateItemSchema.find({}).count()
}

// 获取同学信息
// pageSize(每页几条数据), pageNo(当前页数)
const getClassmateItems =  async ({ 
  pageSize, pageNo 
}) => {
  let count = await geTotalPage();
  // 页码信息
  let pages = {
    totalPage: Math.ceil(count / pageSize), // 总页数
    totalNo: count // 总数量
  }
  return classmateItemSchema
          .find({},'name telephone eMail nowPlace headImg job')
          .limit(~~pageSize)
          .skip((pageNo - 1) * pageSize)
          .then(res => {
            return {
              items: res,
              pages
            }
          })
}

// 获取院系信息
const getClassmateScience = () => {
  return classmateScienceSchema.find({})
}

// 获取聊天信息
const getChatMessage = () => {
  return classmateChatSchema.find({})
}
// 发送聊天信息
const postChatMessage = (params) => {
  return classmateChatSchema.insertMany(params)
}

// 更新同学录信息
const updataInfo = (params) => {
  let id = params._id;
  return classmateItemSchema.update({_id: id}, params)
}
module.exports = { 
  getClassmateItems,
  getClassmateScience,
  postChatMessage,
  getChatMessage,
  updataInfo
}
