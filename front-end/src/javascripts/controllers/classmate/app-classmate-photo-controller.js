import appClassmatePhoto from '@views/routes/app-classmate-photo.html';
import { postPhotoItem, getPhotoItem } from '@models/classmate-photo'
const bindEvents= () => {
  let $submit = $('#mine')
  let $sure = $('#sure')
  let $textContent = $('#text-content')
  let $toClick = $('#toClick')
  let $itemImg = $('#item-img')
  let $photo = $('#photo')
  let $outputMine = $(".outputMine")
  $submit.click(() => {
    $outputMine.removeClass('hide')
  })
  $toClick.click(() => {
    $itemImg.click()
  })
  $itemImg.change(() => {
    uploadImage($itemImg[0])
  })
  $sure.click(async () => {
    let text = $textContent.val()
    let src = $photo[0].src
    let { name, headImg } = JSON.parse(localStorage.user)
    if( !text && !src){
      $.Toast('Warning', '不能为空', 'warning')
      return
    }
    $outputMine.addClass('hide')
    await postPhotoItem({text, src, name, headImg})
  })
}
// 上传图片业务逻辑  action
function uploadImage (inp) {
  let img = '' // 准备上传的图片的路径
  let formData = new FormData()
  // 第一个参数为上传的字段
  formData.append('headImg', inp.files[0])
  $.ajax({
      url: '/api/v1/file/upload/img',
      type: 'post',
      data: formData,
      processData: false,
      contentType: false,
  }).done((res) => {
      if ( res.code === 501 ) {
          $.Toast('Warning', res.msg, 'warning')
          return false;
      }
      img = 'http://localhost:3000' + res.data.img
      $('#photo').removeClass('hide')
      $('#photo').attr('src', img)
  }).fail((error) => {
      $.Toast('Danger', '上传出错', 'error')
  })
}
const render = async (req, res, next) => {
  let allData = await getPhotoItem()
  let data = allData.data
  console.log(data)
  res.render(template.compile(appClassmatePhoto)({
    info: data
  }))
}
export default {
  render
}