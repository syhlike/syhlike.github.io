var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    slidesPerView : 3,
    spaceBetween : 28,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })  
  function price(){
    var num = 1;
  $(".num").text(num);
 $(".add").click(function(){
     num++;
     $(".num").text(num);
 })
 $(".sub").click(function(){
     num--;
     $(".num").text(num);
     if(num<1){
         num = 1; 
         $(".num").text(num);
     }
 })
  }
  price();
  $(".shopping-right>div>ul>li>a").click(function(){
    $(this).css("color","#f5c26b");
    $(this).css("border","1px solid #f5c26b")
    $(this).parent("li").siblings("li").children("a").css({" border":"1px solid #b39472","color":"#b39472"})
    return false;
})
$(".cheap").click(function(){
    $(".price h4").text("￥9499");
})
$(".expensive").click(function(){
    $(".price h4").text("￥11099");
})
$(".section-inner>ul>li>a").click(function(){
  $(this).css({"color":"#fff","background-color":"#f5c26b"})
  $(this).parent("li").siblings().children("a").css({"color":"#b39472","background":"#fff"})
  $(this).removeClass("write");
  $(this).parent("li").siblings().children("a").addClass("write");
})
$(".about").click(function(){
  $(".about-inner").css("display","block");
  $(".know-inner").css("display","none")
})
$(".know").click(function(){
  $(".about-inner").css("display","none");
  $(".know-inner").css("display","block")
}) 
$('.back').click(function () {
  $('body,html').animate({ scrollTop: 0 }, 400)
})
$(window).scroll(function () {
 var height =  $(this).scrollTop()
 if(height>200){
     $(".back").css("display","block")
 }else{
  $(".back").css("display","none")  
 }
})