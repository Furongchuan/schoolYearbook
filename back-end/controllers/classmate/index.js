const classmateModel = require('../../models/classmate')

// 处理同学录信息列表获取
const getClassmateItems = async (req, res, next) => {
  let { pageSize, pageNo, id } = req.query;
  try{
    // 利用res或者req来进行路由中间件间的传参
    let data = await classmateModel.getClassmateItems({
      pageSize, pageNo, id
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

const postClassmatePhoto = async (req, res, next) => {
  try {
    await classmateModel.updataPhoto(req.body)
    next('success')
} catch (e) {
    console.log(e)
    next('error')
  }
}

const getPhotoItems = async (req, res, next) => {
  try{
    let data = await classmateModel.getPhotoItems()
    res.responseData = data;
    next('success')
  }catch(e){
    console.log(e)
    next('error')
  }
  // try{
  //   let data = await classmateModel.getClassmateScience();
  //   res.responseData = data;
  //   next('success') // 去响应 传参只能传一个
  // }catch(e){
  //   console.log(e)
  //   next('error')
  // }
 
}

const postClassmatePhotoText = async (req, res, next) => {
  try{
    let { text, name, id } = req.body
    await classmateModel.updataPhotoPingLun({text, name, id})

    next('success')
  }catch(e){
    console.log(e)
    next('error')
  }
}

module.exports = {
  getClassmateItems,
  postClassmatePhoto,
  getPhotoItems,
  postClassmatePhotoText
}