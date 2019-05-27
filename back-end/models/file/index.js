const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/school', { useNewUrlParser: true });

let fileSchema = new mongoose.Schema({
  fileNmae: String,
  filePath: String
});

// 单数会自动加s （集合）
let files = mongoose.model('files', fileSchema);

const postFileData = (params) => {
  return files.insertMany(params)
}
const getFileData = () => {
  return files.find({})
}
module.exports = { 
  postFileData,
  getFileData
}
