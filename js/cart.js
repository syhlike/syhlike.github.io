
var shops = [
    {
        img:'images/shop1.jpg',
        name:'iPhone XR 移动联通电信4G手机 （双卡双待）',
        color:'白色',
        space:'64GB',
        price:'￥6499',
        num:'1',
        allprice:'￥6,499.00',
        remove:'images/shopdown.png'
    },
    {
        img:'images/shop2.jpg',
        name:'iPhone XS Max',
        color:'深灰空色色',
        space:'64GB',
        price:'￥9599',
        num:'1',
        allprice:'￥9,599.00',
        remove:'images/shopdown.png'
    },
    {
        img:'images/shop3.jpg',
        name:'iPhone XS',
        color:'深灰空色',
        space:'64GB',
        price:'￥8699',
        num:'1',
        allprice:'￥8,699.00',
        remove:'images/shopdown.png'
    },
    {
        img:'images/shop4.jpg',
        name:'iPhone X',
        color:'银色',
        space:'64GB',
        price:'￥7399',
        num:'1',
        allprice:'￥7,399.00',
        remove:'images/shopdown.png'
    },
    {
        img:'images/shop8.jpg',
        name:'iPhone 7 Plus',
        color:'黑色',
        space:'32GB',
        price:'￥4599',
        num:'1',
        allprice:'￥4,599.00',
        remove:'images/shopdown.png'
    }
]


function allclicks(x){
    
    x.css({"margin-right":"10px","float":"left","border":"2px solid #ece4d9","background-color":"#fff","width":"16px","height":"16px","border-radius":"4px","cursor":"pointer"})
    x.click(function(){
        var y = $('.yuf1').text()
        $('.yuf').text(y)
        var x1 = x.css("background-color")
        if(x1 === 'rgb(255, 255, 255)'){
            x1=1
            $('.chebox').css({"background":"url('images/checkbox.png') no-repeat 3px 4px #f5c26b","border-color":"#f5c26b","background-size":"10px"})
            x.css({"background":"url('images/checkbox.png') no-repeat 3px 4px #f5c26b","border-color":"#f5c26b","background-size":"10px"})
            $('.checkone').css({"background":"url('images/checkbox.png') no-repeat 3px 4px #f5c26b","border-color":"#f5c26b","background-size":"10px"})
        } else  {  
            $('.yuf').text(0)
            $('.chebox').css({"background":"transparent","border-color":"#b39472"})
            x.css({"background":"#fff","border-color":"#ece4d9"})
            $('.checkone').css({"background":"#fff","border-color":"#ece4d9"})
        }

    })
   
}
function clicks (x) {
    x.css({"margin-right":"10px","float":"left","border":"2px solid #ece4d9","background-color":"#fff","width":"16px","height":"16px","border-radius":"4px","cursor":"pointer"})
    x.click(function(){
    var y1 = $('.checkone').length
    var rest = 0
    var checx = $('.yuf').text()
    var checx1 = x.parent('.shopping').children('.numshopbox').children('.shopnum').text()
    checx1 = checx1*1
    checx = checx*1
    var i = x.css('background-color')
    if(i==='rgb(255, 255, 255)'){
        checx=checx + checx1
        
        $('.yuf').text(checx)
        x.css({"background":"url('images/checkbox.png') no-repeat 3px 4px #f5c26b","border-color":"#f5c26b","background-size":"10px"})
    } else{
        checx=checx - checx1
        $('.yuf').text(checx)
        $('.allcli').css({"background":"#fff","border-color":"#ece4d9"})
        $('.chebox').css({"background":"transparent","border-color":"#b39472"})
        x.css({"background":"#fff","border-color":"#ece4d9"})
    } 
    for(var a=0;a<y1;a++){
        var index2=$('.shopping').eq(a).children('.checkone').css('background-color')
     
        if(index2 ==='rgb(255, 255, 255)'){
            rest = 0
            a=y1
        } else {
            rest = 1
        }
      
    }
        if(rest==1){
            $('.allcli').css({"background":"url('images/checkbox.png') no-repeat 3px 4px #f5c26b","border-color":"#f5c26b","background-size":"10px"})  
            $('.chebox').css({"background":"url('images/checkbox.png') no-repeat 3px 4px #f5c26b","border-color":"#f5c26b","background-size":"10px"})  
        }
})
}
function hovers (x){
    x.hover(function(){
        x.css({"color":"#f3bd62","border":"1px solid #f3bd62"})
    },function(){
        x.css({"color":"#b39472","border":"1px solid #b39472"})
    })
}
function tanchu(x){
    x.click(function(){
        x.next().css("display","block")
    }) 
}
function xiaoshi(x){
    x.click(function(){
        x.parent().css("display","none")
    })
}


function jian(x){
    x.click(function(){
        var check1 = x.parent().parent().children('.checkone').css('background-color')
        if(check1 != 'rgb(255, 255, 255)'){
            var yuft = $('.yuf').text()*1
            yuft --
            $('.yuf').text(yuft)
        }

        var inde = $('.yuf1').text()*1
        var ind = x.next().text()
        if(ind != '1'){
            var un = x.parent().prev().text()
            var resp = parseInt(un.replace(/[^0-9]/ig,""))
            ind = ind*1-1
            x.next().text(ind)
            inde=inde*1-1
            $('.allshop .yuf1').text(inde)
            var par = x.parent()
            var chid = par.next()
            var resprice = parseInt($(chid).text().replace(/[^0-9]/ig,""))
            resprice = (resprice*1)/100-resp
            
            var ind = parseInt(resprice/1000)
            var ind2 = resprice%1000
            ind2 = ind2+''
            if(ind2.length<3){
            for(var a = 1; a<=(3-ind2.length);a++){
                
                ind2='0'+ind2
                console.log(ind2)
            }
        }
            var res = '￥'+ind+','+ind2+'.00'
            $(chid).text(res)
            shiyan()
        }

    })
}

function jia(x){
    x.click(function(){  
        var check1 = x.parent().parent().children('.checkone').css('background-color')
        if(check1 != 'rgb(255, 255, 255)'){
            var yuft = $('.yuf').text()*1
            yuft ++
            $('.yuf').text(yuft)
        }

       
        var inde = $('.yuf1').text()*1 
        var ind = x.prev().text()
        var un = x.parent().prev().text()
        var resp = parseInt(un.replace(/[^0-9]/ig,""))
        ind = ind*1+1
        x.prev().text(ind)
        inde = inde*1+1
        $('.allshop .yuf1').text(inde)
        ind = ind*resp
        var ind1 =parseInt(ind/1000) 
        var ind2 = ind%1000
        ind2 = ind2+''
        if(ind2.length<3){
            for(var a = 1; a<=(3-ind2.length);a++){
                
                ind2='0'+ind2
                console.log(ind2)
            }
        }
        
        var res = '￥'+ind1+','+ind2+'.00'
        var par = x.parent()
        var chid = par.next()
        $(chid).text(res)
        shiyan()
        
        
    })
    
}
var div = $("<div class='sectionall1' class='clearfix'>")
div.css({"width":"1100px","margin":"0 auto","height":"44px","padding-top":"50px","border-bottom":"3px solid #ece4d9","font-size":"14px","color":"#c2c4c6"})
var div1 = $("<div class='div1 clearfix'>")
div1.css("float","left")
var inputbox = $("<div class='allcli'>")
allclicks(inputbox)
var span = $('<span>全选</span>')
div1.append(inputbox,span)
var div2 = $("<div class='div2'>")
div2.css({"margin-left":"35px","float":"left"})
var span1 = $("<span>商品</span>")
div2.append(span1)
var div3 = $("<div class='div3'>")
var span2 = $("<span>操作</span>")
div3.css({"margin-right":"15px","float":"right"})
div3.append(span2)
var div4 = $("<div class='div4'>")
var span3 = $("<span>小计</span>")
div4.css({"margin-right":"70px","float":"right"})
div4.append(span3)
var div5 = $("<div class='div5'>")
var span4 = $("<span>数量</span>")
div5.css({"margin-right":"130px","float":"right"})
div5.append(span4)
var div6 = $("<div class='div6'>")
var span5 = $("<span>单价</span>")
div6.css({"margin-right":"160px","float":"right"})
div6.append(span5)
div.append(div1,div2,div3,div4,div5,div6)
$('.sectiondown').append(div)
var a = 0


while(a<5){
var shopping = $('<div class="shopping clearfix">')
shopping.css({"width":"1100px","margin":"0 auto","height":"100px","padding":"28px 0px 28px 35px","color":"#c2c4c6","position":"relative"})
var inputbox1 = $("<div class='checkone'>")
inputbox1.css("margin-top","40px")
clicks(inputbox1)
var img = $(`<img src=${shops[a].img}>`)
img.css({"width":"100px","height":"100px","float":"left","margin":"0 10px 0 35px"})
var shopbox = $("<div>")
shopbox.css("float","left")
var boxp=$(`<p>${shops[a].name}<p>`)
boxp.css({"color":"#1c1f26","font-size":"14px","width":"256px"})
var boxp2=$(`<p>颜色：${shops[a].color}<p>`)
boxp2.css({"color":"#1c1f26","font-size":"12px","line-height":"30px"})
var boxp3=$(`<p>颜色：${shops[a].space}<p>`)
boxp3.css({"color":"#1c1f26","font-size":"12px"})
shopbox.append(boxp,boxp2,boxp3)
var shopsp=$(`<p class="unitp">${shops[a].price}</p>`)
shopsp.css({"float":"left","margin":"45px 0 0 150px"})
var numdiv = $('<div class="numshopbox" class="clearfix">')
numdiv.css({"float":"left","margin":"45px 0px 0 100px"})
var numdivbox = $('<div  onselectstart="return false;">-</div>')
numdivbox.css({"float":"left","width":"24px","height":"24px","border":"1px solid #b39472","color":"#b39472","text-align":"center","cursor":"pointer","border-radius":"4px","transition":"all 0.3s"})
hovers(numdivbox)
jian(numdivbox)
var nump =$(`<p class="shopnum">${shops[a].num}</p>`)
nump.css({"float":"left","width":"80px","font-size":"14px","text-align":"center","color":"black"})
var numdivbox1 = $('<div  onselectstart="return false;">+</div>')
numdivbox1.css({"float":"left","width":"24px","height":"24px","border":"1px solid #b39472","color":"#b39472","text-align":"center","cursor":"pointer","border-radius":"4px","transition":"all 0.3s"})
hovers(numdivbox1)
jia(numdivbox1)
numdiv.append(numdivbox,nump,numdivbox1)
var prices = $(`<p class="shopsprices">${shops[a].allprice}</p>`)
prices.css({"color":"#ff6633","float":"left","margin":"45px 0 0 58px","font-size":"14px"})
var remimg = $(`<img class="remimg" src=${shops[a].remove}>`)
remimg.css({"margin":"49px 40px 0 0","cursor":"pointer","width":"12px","height":"12px","float":"right"})
var imginner = $('<div class="clearfix">')
imginner.css({"display":"none","position":"absolute","right":"25px","bottom":"20px","width":"200px","height":"32px","color":"#fff","font-size":"14px"})
var trian = $('<div>')
trian.css({"position":"absolute","top":"-14px","right":"14px","width":"0","height":"0","border-left":"6px solid transparent","border-right":"6px solid transparent","border-bottom":"14px solid #b39472"})
var imginner1 =$('<div class="removeclass">确定删除</div>')
imginner1.css({"cursor":"pointer","float":"left","background":"#dd2424","width":"40%","line-height":"32px","border-radius":"4px 0 0 4px","text-align":"center"})
var imginner2 =$('<div>不删除</div>')
imginner2.css({"cursor":"pointer","float":"left","background":"#b39472","width":"60%","line-height":"32px","border-radius":"0 4px 4px 0","text-align":"center"})
tanchu(remimg)
xiaoshi(imginner2)

imginner.append(imginner1,imginner2,trian)
shopping.append(inputbox1,img,shopbox,shopsp,numdiv,prices,remimg,imginner)


$('.sectiondown').append(shopping)
a++
}



function clicksall(x){
    x.css({"float":"left","margin-right":"10px","float":"left","border":"1px solid #b39472","background-color":"transparent","width":"16px","height":"16px","border-radius":"4px","cursor":"pointer"})
    x.click(function(){
    var y = $('.yuf1').text()
    $('.yuf').text(y)    
    var i = x.css('background-color');
    if(i==='rgba(0, 0, 0, 0)'){
        $('.allcli').css({"background":"url('images/checkbox.png') no-repeat 3px 4px #f5c26b","border-color":"#f5c26b","background-size":"10px"})
        $('.checkone').css({"background":"url('images/checkbox.png') no-repeat 3px 4px #f5c26b","border-color":"#f5c26b","background-size":"10px"})
        x.css({"background":"url('images/checkbox.png') no-repeat 3px 4px #f5c26b","border-color":"#f5c26b","background-size":"10px"})
    } else{
        $('.yuf').text(0)
        x.css({"background":"transparent","border-color":"#b39472"})
        $('.allcli').css({"background":"#fff","border-color":"#ece4d9"})
        $('.checkone').css({"background":"#fff","border-color":"#ece4d9"})
    } 
})
}
clicksall($('.chebox'))
$('.remo').hover(function(){
    $(this).css({"background":"url('images/all1-1.png') no-repeat left","background-size":"30%"})
},function(){
    $(this).css({"background":"url('images/all1.png') no-repeat left","background-size":"30%"})
})
$('.remo1').hover(function(){
    $(this).css({"background":"url('images/all2-2.png') no-repeat left","background-size":"15%"})
},function(){
    $(this).css({"background":"url('images/all2.png') no-repeat left","background-size":"15%"})
})
var inde = 5
var tru = 0
var index1 = 0
var num1 = ''
$('.removeclass').click(function(){ 
    var that = $(this).parent().parent()
    var yfl = that.children('.numshopbox').children('.shopnum').text()
    var bgc = that.children('.checkone').css('background-color')
    if(bgc === 'rgb(245, 194, 107)'){
        var yf = $('.yuf').text()
        yf = yf*1-yfl*1
        $('.yuf').text(yf)
    }
    index1 = that.index()
    tru=1
    inde--
    num1=that.children('.shopsprices').text()
    var y = $('.yuf1').text()*1-yfl*1   
    $('.yuf1').text(y)   
    that.remove()
    shiyan()
    var sh = $('.shopping').length
    if (sh == 0){
        $('.sectiondown').css("background","url('images/g-gwc-k.jpg') no-repeat center #fff")
        $('.sectionall1').css("display","none")
    }
})
function shiyan(){
    var allres =0
    for(var i = 0;i<inde;i++){   
            var pr =  parseInt($('.shopping').eq(i).children('.shopsprices').text().replace(/[^0-9]/ig,""))
            pr = pr*1/100 
            allres = allres+pr    
            
    }
    var pr1 = parseInt(allres/1000)
     var pr2 = allres%1000
     pr2=pr2+''
     if(pr2.length<3){
         for(var x =1;x<=(3-pr2.length);x++){
             pr2 = '0'+pr2
         }   
     }
     var pr3 = '￥'+pr1+','+pr2+'.00'  
     
    $('.rightprice').text(pr3)
}
 shiyan()

$('.remo').click(function(){
   
    for(var i = 0;i<inde;i++){ 
       var x = $('.shopping').eq(i).children('.checkone').css('background-color')
       if(x === 'rgb(245, 194, 107)'){
        var num =$('.shopping').eq(i).children('.numshopbox').children('.shopnum').text()
        var x = $('.yuf1').text()
        x = x*1-num*1
        $('.yuf').text(x)

            var that = $('.shopping').eq(i)
            that.remove()
            inde--
            shiyan()
            i--
        }
    }
    var y = $('.checkone').length
    $('.yuf1').text(y)  
    $('.yuf').text('0')
    var sh = $('.shopping').length

    if (sh == 0){
        $('.sectiondown').css("background","url('images/g-gwc-k.jpg') no-repeat center #fff")
        $('.sectionall1').css("display","none")
    }
})

