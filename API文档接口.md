### 山川同学录系统 API接口文档

api-server： http://localhost: 3000

基础路径： /api/version

当前版本： v1

#### 登录注册接口

1. 注册

接口地址：/users/register
返回格式：json
请求方式：post
请求示例：http://localhost:3000/api/v1/users/register
请求参数说明：
    * username 账号
    * password 密码 
    * nickname 用户名 
响应参数署名：
    * code 状态
    * msg 信息
    * data null;
2. 登录

接口地址：/users/login
返回格式：json
请求方式：post
请求示例：http://localhost:3000/api/v1/users/login
请求参数说明：
    * username 账号
    * password 密码 
    * code 验证码

3. 验证码
接口地址：/users/code
返回格式：json
请求方式：post
请求示例：http://localhost:3000/api/v1/users/code
响应参数说明：
    * code 状态
    * img 验证码图片
    * mark 加密后的验证码

#### 同学录信息接口

1. 同学录信息获取

接口地址：/classmate/items
返回格式：json
请求方式：get
请求示例：http://localhost:3000/api/v1/classmate/items
请求参数说明：
    * pageSize 请求数据长度
    * pageNo 当前页码数 
响应参数说明：
    * items 用户信息集合
        * name 用户名字
        * telephone 电话号码
        * eMail 邮箱
        * nowPlace 目前所在地
        * headImg 头像路径
        * user 用户账户名
        * job 工作

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

#### 个人信息接口

1. 获取院系名

接口地址： /personal/science
请求方式： get
请求示例：http://localhost:3000/api/v1/personal/science
响应参数说明
    * scienceName 院系名称

2. 获取当前登录用户的用户信息
接口地址： /personal/users
请求方式： get
请求示例：http://localhost:3000/api/v1/personal/users
请求参数说明：
    * user 当前登录用户的用户名