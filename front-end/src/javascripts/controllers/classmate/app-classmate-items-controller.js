
import appClassmateItems from '@views/routes/app-classmate-items.html'
import appClassmateItemsContent from '@views/routes/app-classmate-items-collection.html'
import { getClassmateItems } from '@models/classmate-model'

let pageSize = 12; // 展示数据数量
let pageNo = 1; // 当前页数
let pages = null // 页面信息
const render = async (req, res, next) => { 
    // 渲染主体结构
    res.render(appClassmateItems) 
    await renderItems();
    // 实列化分页器
    $('#classmate-items-pagination').createPage({
        pageNum: pages.totalPage,
        current: pageNo,
        backfun: function(e){
            pageNo = e.current
            renderItems()
            $('.zxfinput').val(pages.totalPage)
        }
    })
    $('.zxfinput').val(pages.totalPage)
}
// 
function renderItems() {
    return new Promise(async (resolve) => {
         // 获取列表数据
    let data = await getClassmateItems({
        pageSize, pageNo
    }) 
    pages = data.pages
    $('#class-items-content').html(
        template.compile(appClassmateItemsContent)({
            items: data.items
        }))
    resolve(data)
    })
}
 
export default {
    render
}