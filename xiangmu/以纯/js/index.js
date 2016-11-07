// JavaScript Document

$(function(){
	//banner轮播图
	var timer=null;
	var i=0;
	$(".num li").eq(0).addClass("sty");
	$(".banner a").eq(0).fadeIn();
	starMove();
	
	$(".num li").click(function(){
		clearInterval(timer);
		i=$(this).index();
		Show();	
	});
	
	$(".prev").click(function(){
		i--;
		if(i==-1){
			i=4;	
		}
		Show();
	})
	
	$(".next").click(function(){
		i++;
		if(i==5){
			i=0;	
		}
		Show();
	})
	
	$("._banner").hover(function(){
		clearInterval(timer);		
	},function(){
		starMove();	
	});	
	
	
	function Show(){
		$(".num li").eq(i).addClass("sty").siblings().removeClass("sty");
		$(".banner a").eq(i).fadeIn().siblings().fadeOut();	
	}
	
	function starMove(){
		timer=setInterval(function(){
			i++;
			if(i==5){
				i=0;	
			}
			Show();
		},5000)	
	}
	
	//轮播图2
	var timer1=null,j=0;
	move();
	$(".mid-num li").eq(0).addClass("sty");
	$(".mid-num li").hover(function(){
		j=$(this).index();
		$(".mid-num li").eq(j).addClass("sty").siblings().removeClass("sty");
		$(".mid-nav div").animate({"top":-352*j},30);	
	})
	
	$(".mid-nav").hover(function(){
		clearInterval(timer1);		
	},function(){
		move();	
	});	
	
	function move(){
		timer1=setInterval(function(){
			j++;
			if(j==3){
				j=0;	
			}
			$(".mid-num li").eq(j).addClass("sty").siblings().removeClass("sty");
			$(".mid-nav div").animate({"top":-352*j},500);
		},5000)	
	}
	
	//轮播图3
	var timer2=null,k=0;
	Move();
	$(".mid2-num li").eq(0).addClass("sty");
	$(".mid2-num li").hover(function(){
		k=$(this).index();
		$(".mid2-num li").eq(k).addClass("sty").siblings().removeClass("sty");
		$(".mid2-nav div").animate({"left":-785*k},30);	
	})
	
	$(".mid2-nav").hover(function(){
		clearInterval(timer2);		
	},function(){
		Move();	
	});	
	
	function Move(){
		timer2=setInterval(function(){
			k++;
			if(k==3){
				k=0;	
			}
			$(".mid2-num li").eq(k).addClass("sty").siblings().removeClass("sty");
			$(".mid2-nav div").animate({"left":-785*k},500);
		},5000)	
	}
	
	//首页延迟动画
	setTimeout(function(){
			$(".up").animate({top:90},1000,function(){
				$(".shower").show();
				$(".hid").hide();	
			})		
	},4000)		
})