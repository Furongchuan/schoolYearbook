### 山川同学录系统 API接口文档

api-server： http://localhost: 3000

基础路径： /api/version

当前版本： v1

#### 同学录信息接口

1. 同学录信息获取

接口地址：/classmate/items
返回格式：json
请求方式：get
请求示例：http://localhost:3000/api/v1/classmate/items
请求参数说明：
    * page 
响应参数说明：
    * items 用户信息集合
    * name 用户名字
    * telephone 电话号码
    * eMail 邮箱
    * weChat 微信号
    * nowPlace 目前所在地
    * headImg 头像路径

    * pages 页数信息集合
    * totalNo 总数据数
    * totalPage 总页数

#### 同学录聊天接口
1. 聊天室websoncet连接
接口地址：/ws/chat
请求方式：websocket
请求示例：http://localhost:3000/ws/chat
发送参数说明：
    * name 用户姓名
    * message 用户聊天发送的信息
接受参数说明：
    * name 用户姓名
    * message 用户聊天发送的信息
    * data 信息发送时间