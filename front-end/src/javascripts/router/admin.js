// 实例化的路由工具
import SMERouter from 'sme-router';
import angel from '@utils/angel';
import appAdminLoginController from '@controllers/admin/app-admin-login-controller';
import appAdminrRgisterController from '@controllers/admin/app-admin-register-controller'

// 路由初始化函数
const init = () => {
  
    const router = new SMERouter('router-view')

 
    // 当进入项目后，没有hash值就加一个默认hash值
    if ( !location.hash ) {
        location.href = '#/login'
    }
    


    // 路由匹配
    router.route('/login', appAdminLoginController.render);
    router.route('/register', appAdminrRgisterController.render)

    // 默认路由 
    router.route('*', (req, res, next) => {
        res.redirect('/login')
    })
    

    angel.on('go', router.go.bind(router));
    angel.on('back', router.back.bind(router))

}

export default { init }