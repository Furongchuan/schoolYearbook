
import request from '@utils/request'

// 获取同学录信息
const getClassmateItems = (data) => {
    return request({
        url: '/api/v1/classmate/items',
        data
    })
}
// 获取院系名称
const getClassmateScienceName = () => {
    return request({
        url:'api/v1/personal/science'
    })
}



export  {
    getClassmateItems,
    getClassmateScienceName
}