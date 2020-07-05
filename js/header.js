var num = 0;
$(".opener").click(function(){
    if(num === 0 || num === 2){
      num = 1
      $(".mynav").css("display","block");
      $(".opener-top").css({"transform":"rotate(45deg)","top":"40px"});
      $(".opener-down").css({"transform":"rotate(-45deg)","bottom":"32px"});
      $(".opener-mid").css("opacity","0");
    }else{
      num = 2
      $(".mynav").css("display","none");
      $(".opener-top").css({"transform":"rotate(0deg)","top":"30px"});
      $(".opener-down").css({"transform":"rotate(0deg)","bottom":"26px"});
      $(".opener-mid").css("opacity","1");
    }
})
$(".shop").click(function(){
   window.open("shoppingcart.html")
})
