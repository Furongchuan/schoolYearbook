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




module.exports = {
  getPresonalItems
}