var numberRule =/^1[34578]\d{9}/;
$(".erorr>span").hide();
$(".erorr").hide()
$(".enter>div").click(function(){
    $(this).css({"color":"#2b2e33","border-bottom":"1px solid #000"});
    $(this).siblings("div").css({"color":"#c2c4c6","border-bottom":"none"});
})
$(".zhanghao").click(function(){
    $(".zhanghao-inner").css("display","block");
    $(".shouji-inner").css("display","none");
    $(".main-right input").val('')
})
$(".shouji").click(function(){
    $(".zhanghao-inner").css("display","none");
    $(".shouji-inner").css("display","block");
    $(".main-right input").val('')
    

})

$(".click2").click(function(){
   var phoneNumber = $(".phonenumber1").val();
   var message =  $(".message-yanzheng").val();
//    console.log(phoneNumber);
   var backNumber = numberRule.test(phoneNumber); 
   var pass = $(".pass1").val();
    if(pass ==='' || pass!=="ksba"){
               $(".erorr>span").text("图片验证码错误")
               down()
              
           }else if(backNumber && message ===''){
            $(".erorr>span").text("短信验证码不能为空")
            down() 
           }else if(backNumber && message !=='12345'){
            $(".erorr>span").text("短信验证码不正确")
            down() 
           }  
})
$(".huoqu").click(function(){
    var phoneNumber = $(".phonenumber1").val();
       console.log(phoneNumber);
    var backNumber = numberRule.test(phoneNumber); 
    console.log(backNumber)
    var pass = $(".pass1").val();
   var message =  $(".message-yanzheng").val();
    if(pass!== "ksba"){
        $(".erorr>span").text("图片验证码错误")
               down()
    }else if(!backNumber){
        $(".erorr>span").text("请正确填写手机号")
               down()
    
    }else{
        $(".erorr>span").text("您的序号为：51")
               down()
        $(this).css("background-color","#666");
    }
})

$(".click1").click(function(){
    var phoneNumber = $(".phonenumber").val();
    var password = $(".password").val();
    var pass = $(".pass").val();
    var backNumber = numberRule.test(phoneNumber); 
    console.log(backNumber)
    if(phoneNumber === "" && password ===""){
        $(".erorr>span").text("请输入手机号和密码")
        down()
    }else if(!backNumber){
        $(".erorr>span").text("请正确输入手机号")
        down()
    }else if(!pass){
        $(".erorr>span").text("验证码不能为空")
        down()
    }else if(pass !=='ksba'){
        $(".erorr>span").text("验证码错误")
        down()
    }   
})
$(".main-left").click(function(){
    window.open("detail.html")
})
function down(){
    $(".erorr").show().delay(3000).hide(50);
    $(".erorr>span").show().delay(3000).hide(50);
}