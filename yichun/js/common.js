// JavaScript Document

$(function(){
	//返回顶部
	$(window).scroll(function(){
		var $scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
		if($scrolltop>=500){
			$(".backtop").show();	
		}else{
			$(".backtop").hide();	
		}
	})
	
	$(".backtop").click(function(){
		$("body,html").animate({scrollTop:0},300)	
	})
	//客服
	$(".service>span").click(function(){
		$(".service").hide();	
	})
	
	$(".collection").click(function(){
		alert("您可以通过快捷键Ctrl+D加入到收藏夹~")	
	})
	
	//nav
	$(".nav>li:has('div')").hover(function(){	
		$(this).find("div").show();
	},function(){
		$(this).find("div").hide();
	})	
	
	//子页面nav
	$(".mid_nav>div>ul").eq(0).height("auto");
	$(".mid_nav>div>div:eq(0)>span").html("-");
	$(".mid_nav>div>div").click(function(){
		$(".mid_nav>div ul").height(3);
		$(".mid_nav>div span").html("+");
		$(this).find("span").html("-");
		$(this).siblings().height("auto");
		
	})

	//商品排序点击事件
	var $flag1=false,$flag2=true,$flag3=true;
	$(".num1").css("background-image","url(images/_gt1up.jpg)");
	$(".num1").click(function(){
		if($flag1){
			$(this).css("background-image","url(images/_gt1up.jpg)");	
		}else{
			$(this).css("background-image","url(images/_gt1down.jpg)");	
		}
		$(".num2").css("background-image","url(images/gt2.jpg)");
		$(".num3").css("background-image","url(images/gt3.jpg)");
		$flag1=!$flag1;
	})
	$(".num2").click(function(){
		if($flag2){
			$(this).css("background-image","url(images/_gt2up.jpg)");	
		}else{
			$(this).css("background-image","url(images/_gt2down.jpg)");	
		}
		$(".num1").css("background-image","url(images/gt1.jpg)");
		$(".num3").css("background-image","url(images/gt3.jpg)");
		$flag2=!$flag2;
	})
	$(".num3").click(function(){
		if($flag3){
			$(this).css("background-image","url(images/_gt3up.jpg)");	
		}else{
			$(this).css("background-image","url(images/_gt3down.jpg)");	
		}
		$(".num1").css("background-image","url(images/gt1.jpg)");
		$(".num2").css("background-image","url(images/gt2.jpg)");
		$flag3=!$flag3;
	})
})

//子页面从服务器调用商品函数
function getGoods(url){
	$.get(url,function(str){
		var obj=str;
		for(var key in obj){
			//console.log(obj[key].src)
			var $oli=$("<li></li>");
			$(".goods").append($oli);
			var $odiv=$("<div class='bigger'></div>");
			$oli.append($odiv);
			var $oa=$("<a href='#'></a>");
			$odiv.append($oa);
			console.log(typeof(obj[key].src))
			var $oimg=$("<img/>");
			$oa.append($oimg);
			$oimg.attr("src", obj[key].src);
			var $odiv=$("<div class='smaller'></div>");
			$oli.append($odiv);
			var $oa=$("<a href='#'></a>");
			$odiv.append($oa);
			console.log(typeof(obj[key].src))
			var $oimg=$("<img/>");
			$oa.append($oimg);
			$oimg.attr({src:obj[key].src,width:42,height:42});
			var $oh=$("<h2></h2>");
			$oli.append($oh);
			var $oa=$("<a href='#'></a>");
			$oh.append($oa);
			$oa.html(obj[key].good);
			var $odiv=$("<div class='price'></div>");
			$oli.append($odiv);
			$odiv.html("市场价：");
			var $ospan=$("<span></span>");
			$odiv.append($ospan);
			$ospan.html("￥"+obj[key].price+"元");
			var $ob=$("<b></b>");
			$odiv.append($ob);
			$ob.html("促销价：￥"+obj[key].newPrice+"元");
			
		}
		$(".num4>span").html($(".goods>li").length);
	})
}