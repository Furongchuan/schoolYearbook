
import appActivityFile from '@views/routes/app-activity-file.html'
import { postFile, getFile } from '@models/active-model'

const bindEvents = () => {
  let exampleInputFile = $("#exampleInputFile")
  exampleInputFile.on('change',function () {
    // console.log(this)
    let formData = new FormData()
    formData.append('file', this.files[0])
    postFile(formData)
    window.location.reload()
  })
}

const render = async (req, res, next) => { 
  let {data} = await getFile()
  let item = data.data
  res.render( template.compile(appActivityFile)({
    item
  }))  
  bindEvents()
}

export default {
    render
}