const classmateModel = require('../../models/classmate')

// 处理同学录信息列表获取
const getClassmateItems = async (req, res, next) => {
  let { pageSize, pageNo } = req.query;
  try{
    // 利用res或者req来进行路由中间件间的传参
    let data = await classmateModel.getClassmateItems({
      pageSize, pageNo
    });
    
    res.responseData = {
      items:data.items,
      pages:data.pages
    };
    next('success') // 去响应 传参只能传一个
  }catch(e){
    console.log('getClassmateItems',e)
    next('error')
  }
 
}




module.exports = {
  getClassmateItems
}