// 实例化的路由工具
import SMERouter from 'sme-router'
import angel from '@utils/angel'
import appHomeController from '@controllers/home/app-home-controller'
import appActivityChatController from '@controllers/activity/app-activity-chat-controller'
import appClassmateItemsController from '@controllers/classmate/app-classmate-items-controller'
import appClassmatePhotoController from '@controllers/classmate/app-classmate-photo-controller'
import appPersonalSetContorller from '@controllers/personal/app-personal-set-controller'
import appPersonalPasswordContorller from '@controllers/personal/app-personal-password-controller'
// 路由初始化函数
const init = () => {

    const router = new SMERouter('router-view')

 
    // 当进入项目后，没有hash值就加一个默认hash值
    if ( !location.hash ) {
        location.href = '#/home'
    }
    


    // 路由匹配
    router.route('/home', appHomeController.render)
    router.route('/personal',appHomeController.render)
    router.route('/activity/chat', appActivityChatController.render)
    router.route('/classmate/items', appClassmateItemsController.render)
    router.route('/classmate/photo', appClassmatePhotoController.render)
    router.route('/personal/set', appPersonalSetContorller.render)
    router.route('/personal/password', appPersonalPasswordContorller.render)
    // 默认路由 
    router.route('*', (req, res, next) => {
        res.redirect('/home')
    })
    
    router.use((req, res, next) => {
        // 根据当前路由前后左边导航的显示情况
        activeNavLink (req)
        
    })

    angel.on('go', router.go.bind(router));
    angel.on('back', router.back.bind(router))

}

function activeNavLink (req) {
    let route = req.route
    let firstRoute = route.split('/')[1] // 一级路由路径
    let $firstLi = $('.sidebar-menu>li')
    let length = $firstLi.length
    for (let i = 0; i < length; i++ ) {
        let $firstLiItem = $firstLi.eq(i)
        let ownDataRoute = $firstLiItem.data('route')// 一级li对应的路由属性data-route
        let ownRoute = ownDataRoute.split('/')[1]
        if ( ownRoute === firstRoute ) { // 判断一级路径哪个li能匹配
            $firstLiItem.addClass('active').siblings().removeClass('active')
            //判断这个li中又有哪个li能匹配到二级路由
            $firstLiItem.find('li').each(function () {
                if ( $(this).data('route') === route ) {
                    $(this).addClass('active').siblings().removeClass('active')
                }
            })
            break;
        }
    }
}



export default { init }