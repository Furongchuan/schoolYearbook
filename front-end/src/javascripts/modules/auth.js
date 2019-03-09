
import { userLoginAuth } from '@models'

// 用户是否登录
const userLoginAuthAction =  () => {
    return new Promise(async (resolve, reject) => {
        let data = await userLoginAuth()
        if (data.code === 200) {
            resolve()
        } else {
            reject()
        }
    })
}

export  {
    userLoginAuthAction
}