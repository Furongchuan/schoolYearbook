const { postFileData, getFileData } = require('../../models/file')
const fileUploadImage = (req, res, next) => {
  if ( req.error ) {
      next('illegal')
  } else {
      res.responseData = {
          img: req.body.img
      }
      next('success')
  }
}

const fileUploadFile = async (req, res, next) => {
  if ( req.error ) {
      next('illegal')
  } else {
      let fileNmae = req.body.fileNmae
      let filePath = 'http://localhost:3000/file/' + fileNmae
      await postFileData({fileNmae, filePath})
      next('success')
  }
}
const getFile = async (req, res, next) => {
  let data = await getFileData()
  res.responseData = {
    data
  };
  next('success')
}
module.exports = {
  fileUploadImage,
  fileUploadFile,
  getFile
}