# -Front-end-exercises
前端知识点练习
第五周1-6
需求如下：

通过header里面传递一个role属性admin，使用post请求，发送给koa这边的/api/user接口json数据为{name: "imooc", email: "imooc@test.com"}。
role无值：
{
    "code": 401,
    "message": "unauthorized post"
}

role有值且name，email也有值
{
    "code": 200,
    "data": {
        "name": "jakeby",
        "email": "jakeby@163.com"
    },
    "message": "上传成功"
}

role有值且name，email无值
{
    "code": 404,
    "message": "name与email不得为空"
}



