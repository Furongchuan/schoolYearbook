const classmateModel = require('../../models/classmate')

// 处理同学录信息列表获取
const getPresonalItems = async (req, res, next) => {
  try{
   
    let data = await classmateModel.getClassmateScience();
    
    res.responseData = data;
    next('success') // 去响应 传参只能传一个
  }catch(e){
    console.log(e)
    next('error')
  }
 
}

const postUpdataInfo = async (req, res, next) => {
  try{
    await classmateModel.updataInfo(req.body)
    next('success')
  }catch(e){
    console.log(e)
    next('error')
  }
}

const postUpdataPassword = async (tokenInfo, req, res, next) => {
  let data = {
    _id: tokenInfo.uid,
    password: req.body.password
  }
  try{
    await classmateModel.updataPassword(data)
    next('success')
  }catch(e){
    console.log(e)
    next('error')
  }
}

module.exports = {
  getPresonalItems,
  postUpdataInfo,
  postUpdataPassword
}