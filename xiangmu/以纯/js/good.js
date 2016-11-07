// JavaScript Document
$(function(){
	//放大镜效果
	$(".god>dt").hover(function(){
		$(this).find("div").show();
		$(".mat>div").eq(0).show();
		
	},function(){
		$(this).find("div").hide();	
		$(".mat>div").eq(0).hide();
	})
	$(".god>dt").mousemove(function(e){
		var $left=e.clientX-$(this).find("div").width()/2-$(this).offset().left;
		var $top=e.clientY-$(this).find("div").height()/2-$(this).offset().top+$(document).scrollTop();
		var $leftmax=$(this).width()-$(this).find("div").width();
		var $topmax=$(this).height()-$(this).find("div").height();
		if($left<0){
			$left=0;
		}
		if($top<0){
			$top=0;
		}
		if($left>$leftmax){
			$left=$leftmax;
		}
		if($top>$topmax){
			$top=$topmax;
		}
		$(this).find("div").css({left:$left,top:$top});	
		$(".mat>div>img").css({left:-$left*1.5,top:-$top*1.5})
	})
	
	//商品数量增添
	$(".up").click(function(){
		var $price=$(".good-price>h2>span").html();
		$(".good_num").html($(".good_num").html()*1+1);
		$(".salesNum span").html($(".good_num").html()*$price);	
	})	
	$(".down").click(function(){
		var $price=$(".good-price>h2>span").html();
		if($(".good_num").html()==1){
			$(".good_num").html(1);	
		}else{
			$(".good_num").html($(".good_num").html()*1-1);	
		}
		$(".salesNum span").html($(".good_num").html()*$price);	
	})
	
	//会员活动
	$(".good-price div").hover(function(){
		$(".noe").show();	
	},function(){
		$(".noe").hide();	
	})	
	
	//二维码弹出
	$(".online3").hover(function(){
		$(this).find("div").show();	
	},function(){
		$(this).find("div").hide();	
	})	
	
	//商品详情选项卡
	$(".mid_bot>li").eq(0).css("background-color","#f5f3f0").find("span").css("border-color","#c80a28");
	$(".mid_bot>li").click(function(){
		$(this).css("background-color","#f5f3f0").find("span").css("border-color","#c80a28");
		$(this).siblings().css("background-color","#fff").find("span").css("border-color","#fff");
		var $i=$(this).index();	
		$(".middle_right>.com").hide();
		$(".middle_right>.com").eq($i).show();
	})
	//分享淡入淡出
	$(".share>dd>img").hover(function(){
		
		$(this).fadeTo(200,0.7);	
	},function(){
		$(this).fadeTo(200,1);	
	});
	
	//滚动条 商品详情页悬浮事件
	$(document).scroll(function(){
		var $scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
		if($scrolltop>=870){
			$(".mid_bot").css({position:"fixed",top:-20});	
		}else{
			$(".mid_bot").css({position:"relative",top:0});	
		}
	})
	//评论
	if($(".as li").length){
		$(".tig span").html($(".as li").length)	
	}else{
		$(".as").html("暂时还没有任何用户评论")	
	}	
	
	$(".btn").click(function(){
		var $pattern=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.com|.cn)$/;
		if($(".email").val().length==0){
			alert("请输入您的电子邮件地址")		
		}
		else if(!($pattern.test($(".email").val()))){
			alert("电子邮件地址格式不正确")	
		}
		else if($(".texa").val().length==0){
			alert("您没有输入评论的内容")	
		}else{
			alert("评论成功")	
		}	
	})
	
})