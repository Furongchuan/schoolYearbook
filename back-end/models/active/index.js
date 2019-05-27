const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/school', { useNewUrlParser: true });

// 同学录 Schema工厂
let SchemaFactory = function(schema,collection) {
  if(typeof (collection) !== "string" || typeof (schema) !== 'object') return;
  let _schema = schema;
  let _collection = collection;
  return mongoose.model(_collection, _schema)
}

// 同学录chat Schema
let classmateChatSchema = SchemaFactory({
  scienceName: String,
  chat: Array,
},'chat')

// 获取聊天信息
const getChatMessage = (scienceName) => {
  return classmateChatSchema.find({'scienceName':scienceName},'chat')
}
// 发送聊天信息
const postChatMessage = async (params) => {
  let msg = await getChatMessage(params.scienceName) 
  if( msg.length ){
    return classmateChatSchema.update({'scienceName': params.scienceName}, { $push: {chat:params.chat}})
  }
  return classmateChatSchema.insertMany(params)
}

module.exports = { 
  postChatMessage,
  getChatMessage,
}
