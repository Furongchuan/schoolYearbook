
import appPersonalSet from '@views/routes/app-personal-set.html'
import { getClassmateScienceName } from '@models/classmate-model'
import { getUserInfo } from '@models'
import { postInfo }from '@models/personal'

let id = '';
const render = async (req, res, next) => {
    // 获取用户信息
    let getUserData = await getUserInfo();
    let userData = getUserData.data
    id = userData._id
    // 获取学院信息
    let getData = await getClassmateScienceName();
    let data = getData.data;

    //过滤获得的学院信息 
    let scienceItem = data.filter(data => data.scienceName != userData.scienceName)
    scienceItem.unshift({scienceName: userData.scienceName})
    userData.scienceItem = scienceItem;

    res.render(template.compile(appPersonalSet)({
        info: userData
    }))

    bindEvents() // 绑定各种事件
}
function bindEvents() {
     // 上传图片具体逻辑
    // 点击按钮上传图片
    $('.img-btn').click(function() {
        // 触发上传图片input的click方法
        $('#item-img').trigger('click')
    })
    // 当用户选择好图片之后
    $('#item-img').change(function(e) {
        // 将图片内容转换为form-data的二进制格式，post到后端
        uploadImage(this)
    })

    $('#publish-form').submit(updataInfo)
}

// 修改用户个人信息 
async function updataInfo (e) {
    e.preventDefault()
    let info = {
        name: $('#set-name').val(),
        telephone: $('#set-phone').val(),
        eMail: $('#set-eMail').val(),
        nowPlace: $('#set-nowPlace').val(),
        job: $('#set-job').val(),
        scienceName: $('#set-scienceName').val(),
        headImg: 'images' + $('.profile-user-img').attr('src').split('images')[1],
        _id: id
    }
    await postInfo(info)
    window.location.reload(); 
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
        $('.publish-img-box').find('img').attr('src', img)
        $.Toast('Success', '图片上传成功', 'success')
    }).fail((error) => {
        $.Toast('Danger', '上传出错', 'error')
    })
}
export default {
    render
}