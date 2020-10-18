define(["jquery"],function($){
    function reg(){ 
$(".btn").click(function(){
    $.ajax({
        type:"post",
        url:"./php/register.php",
        data:{
            username:$(".register-item").eq(0).val(),
            password:$(".register-item").eq(1).val(),
            repassword:$(".register-item").eq(2).val(),
            createtime:(new Date()).getTime()
        },
        success:function(result){
           console.log(result)
        },
        error:function(msg){
            console.log(msg)
        }
    })
})
    }
    return {
        reg:reg
    }
})