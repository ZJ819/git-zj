//配置当前这个项目用到了那些模块
//遵从AMD规范
//所有.js文件 后缀都可以省略
require.config({
    paths:{
        "jquery": "jquery-1.10.1.min",
        "jquery-cookie": "jquery-cookie",
        "nav":"nav",
        "list":"list",
        "goods":"goods",
        "register":"register"
    },
    shim:{
        //设置依赖关系
        "jquery-cookie":["jquery"],
        parabola:{
            exprots:"_"
        }
    }
})

require(["nav"], function(nav){
    nav.NavDownload();
    nav.topNav();
    nav.banner();
})

require(["list"], function(list){
    list.ListDownload();
})

require(["goods"], function(goods){
    goods.Glass();
})

require(["register"], function(register){
    register.reg();
})