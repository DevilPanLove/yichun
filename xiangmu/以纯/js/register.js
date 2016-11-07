// JavaScript Document
$(function(){
	var $arr=[
		"- 用户名长度不能少于3个字符",
		"* 邮件地址不能为空",
		"* 邮件地址不合法",	
		"- 登录密码不能少于6个字符",
		"- 两次输入密码不一致",
		"* 可以注册"
	];
	var $opu=$(".tab td>input");
	var $osp=$(".tab td>span");
	var $odiv=$(".tab td>div");
	console.log($odiv)
	//用户名
	$opu.eq(0).blur(function(){
		if($(this).val().length<3){
			$osp.eq(0).html($arr[0])
		}else{
			$osp.eq(0).html($arr[5])	
		}	
	})
	//邮箱
	$opu.eq(1).blur(function(){
		var $pattern=/^\w+@\w+(.com||.cn)$/
		if($(this).val()==""){
			$osp.eq(1).html($arr[1])
		}else if(!$(this).val().match($pattern)){
			$osp.eq(1).html($arr[2])	
		}else{
			$osp.eq(1).html($arr[5])		
		}	
	})
	//密码
	$opu.eq(2).blur(function(){
		if($(this).val().length<6){
			$osp.eq(2).html($arr[3])
		}else{
			$osp.eq(2).html($arr[5])	
		}	
	})
	
	//密码确认
	$opu.eq(3).blur(function(){
		if($(this).val().length<6){
			$osp.eq(3).html($arr[3])
		}
		else if($(this).val()!=$opu.eq(2).val()){
			$osp.eq(3).html($arr[4])	
		}
		else{
			$osp.eq(3).html($arr[5])	
		}	
	})
	//密码强度
	var $pat1=/^\d+$|^[a-zA-Z]+$|^[！@#$%^&,.?]+$/;//只有数字或字母或特殊符号
	var $pat2=/^(?!\d+$)(?![a-zA-Z]+$)[\w]{6,}$|^(?![a-zA-Z]+$)(?![！@#$%^&,.?]+$)[a-zA-Z！@#$%^&,.?]{6,}$|^(?!\d+)(！@#$%^&,.?]+$)[\d！@#$%^&,.?]{6,}$/
	var $pat3=/^(?!\d+$)(?![a-zA-Z]+$)(?![！@#$%^&,.?,m]+$)[\w！@#$%^&,.?]{6,}$/
	$opu.eq(2).keyup(function(){
		if($(this).val().match($pat1)){
			$odiv.eq(0).css("border-color","#f00").siblings().css("border-color","#fff");	
		}
		else if($(this).val().match($pat2)){
			$odiv.eq(1).css("border-color","#ff0").siblings().css("border-color","#fff");		
		}
		else if($(this).val().match($pat3)){
			$odiv.eq(2).css("border-color","#0f0").siblings().css("border-color","#fff");	
		}
	})
})