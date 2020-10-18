//gulp编写任务
//遵从commonJS
const gulp = require("gulp");

//创建一个任务
//dist如果这个目录没有，会自动创建
//拷贝html
gulp.task("copy-html", function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})

//拷贝图片
gulp.task("images", function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

//拷贝数据
gulp.task("data", function(){
    return gulp.src("json/*.json")
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload()); 
})

//处理scss
const sass = require("gulp-sass");
sass.conpiler = require("node-sass");

gulp.task("sass", function(){
    return gulp.src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

//处理js
gulp.task("scripts", function(){
    return gulp.src("./js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})





//监听，只要数据发生变化，自动执行对应的任务，完成更新。
gulp.task("watch", function(){
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("images/**/*", ["images"]);
    gulp.watch("json/*.json", ["data"]);
    gulp.watch("./scss/*.scss", ["sass"]);
    gulp.watch("./js/*.js", ["scripts"]);
})
 
//启动一个临时服务器
const connect = require("gulp-connect");
gulp.task("server", function(){
    connect.server({
        root: "dist",
        port: 8111,    //0~65535
        livereload: true  //实时更新 
    })
}) 

//最后同时启动服务和监听  默认任务直接通过gulp启动
gulp.task("default", ["watch", "server"]);