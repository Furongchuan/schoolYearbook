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
  name: String,
  telephone:Number,
  eMail: String,
  weChat: String,
  nowPlace: String
},'item');

// 同学录chat Schema
let classmateChatSchema = SchemaFactory({
  name: String,
  message: String,
  date: String
},'chat')

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
          .find({})
          .limit(~~pageSize)
          .skip((pageNo - 1) * pageSize)
          .then(res => {
            return {
              items: res,
              pages
            }
          })
}
// 获取聊天信息
const getChatMessage = () => {
  return classmateChatSchema.find({})
}
// 发送聊天信息
const postChatMessage = (params) => {
  return classmateChatSchema.insertMany(params)
}


module.exports = { 
  getClassmateItems,
  postChatMessage,
  getChatMessage
}
