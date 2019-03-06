


const request = (options) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            ...options,
            success: (res) =>  {
                if ( res.code >= 200 && res.code < 300 || res.code === 304 ) {
                    // 成功处理
                    $.Toast('Success', '数据请求成功', 'success')
                    resolve(res.data)
                } else {
                    // 除请求失败处理
                    $.Toast('Warning', '数据请求失败', 'warning')
                    console.log('fail')
    
                }
            },
            error (error) {
                //做error的处理
                $.Toast('Danger', '请求出错', 'error')
                console.log('error', error)
                reject(error)
            }
        })
    })
}

export default request