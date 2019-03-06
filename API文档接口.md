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
    * page ....
响应参数说明：
    * name 用户名字
    * telephone 电话号码。。。