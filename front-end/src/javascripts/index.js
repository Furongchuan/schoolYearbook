
import '@styles/index.scss'
import router from  '@router'
import indexController  from '@controllers/index-controller'
import { userLoginAuthAction } from '@modules/auth'

userLoginAuthAction()
        .then(res => { // 登录成功
            indexController.render()
            router.init()
        }).catch(err => {
            console.log('userLoginAuthActionError')
            $.Toast('Warning', '请登陆后进入', 'warning')
            // setTimeout(() => {
            //     window.location.href = '/admin.html'
            // })
        })
