$(".list>li").mouseenter(function(){
    var indexLi = $(this).index();
    console.log(indexLi)
    var picSrc = "./images/menu"+(1+indexLi)+".png";
    console.log(picSrc)
    $(".pic>img").attr("src",picSrc)
})
var num = 0;
$(".opener").click(function(){
if(num === 0 || num === 2){
num = 1
$(".mynav").css("display","block");
$(".opener-top").css({"transform":"translateY(11px)rotate(-45deg)"});
$(".opener-down").css({"transform":"translateY(-11px)rotate(45deg)"});
$(".opener-mid").css("opacity","0");
}else{
num = 2
$(".mynav").css("display","none");
$(".opener-top").css({"transform":"rotate(0deg)"});
$(".opener-down").css({"transform":"rotate(0deg)"});
$(".opener-mid").css("opacity","1");
}
})
var mySwiperone = new Swiper ('.one', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect:'fade',
    // 如果需要前进后退按钮
    autoplay:true,
    autoplay: {
    delay: 3000,//1秒切换一次
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function(){
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + '</span>';
        },
   
  }
  })
  $(".shop").click(function(){
    window.open("shoppingcart.html")
 })