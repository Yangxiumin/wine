
jQuery(function($){
	//界面切换
	$('#reg-em').on('click',function(){
			$('#email').animate({marginLeft:-600},function(){
				$('#phot').hide();
				$('#email').show();
		})
	})
		$('#reg-pho').on('click',function(){
			$('#phot').show();
			$('#email').hide();
	});
	
	//数据验证
	var flag1=false;
	var flag2=false;
	var flag3=false;
	var flag4=false;
	var flag5=false;
	var fla6=false;
	var fla7=false;
	//手机
	$('#pho').on('blur',function(){
		var reg = /^1[35678]\d{9}$/;
		if(reg.test($(this).val())){
			$(this).next().text('输入成功！');
			flag1=true;
		}else{
			$(this).next().text("请输入您的手机！")
		}		
	});
	//邮箱
	$('#emaill').on('blur',function(){
		var reg = /\w+@[a-zA-Z0-9]+\.[a-zA-Z]+/;
		if(reg.test($(this).val())){
			$(this).next().text('输入成功！')
			flag2=true;
		}else{
			$(this).next().text("请输入正确邮箱")
		}
		
	});
	
	//form1
	$('.form1 #psw1').on('blur',function(){
		if($(this).val().length>=6&&$(this).val().length<20){
			$(this).next().text("密码正确")
			flag3=true;
		}else{
			$(this).next().text("密码为6-20的非空字符")
		}
	});
	
	
	$('.form1 #psw2').on('blur',function(){
		var mypsw=$('.form1 #psw1').val()
		if(mypsw==$(this).val()&&$(this).val()||mypsw!==""){
			$(this).next().text("密码正确")
			flag4=true;
		}else{
			$(this).next().text("请输入相同密码")
		}
	});
	
	//form2
	$('.form2 #psw1').on('blur',function(){
		if($(this).val().length>=6&&$(this).val().length<20){
			//console.log(mypsw.length)
			$(this).next().text("密码正确！")
			flag5=true;
		}else{
			$(this).next().text("密码为6-20个非空字符")
		}
	});
	
	$('.form2 #psw2').on('blur',function(){
		var mypsw=$('.form2 #psw1').val()
		if(mypsw==$(this).val()&&$(this).val()||mypsw!==""){
			$(this).next().text("密码正确")
			flag6=true;
		}else{
			$(this).next().text("请输入相同密码")
		}
	});
	//创建验证码
	$('<i/>').text('换一张').appendTo($('.reg-mac-1'))
	var $ospan=$('<span/>')
	$ospan.addClass('ospan').text('2345').appendTo($('.reg-mac-1'))
	$('.reg-mac-1 i').on('click',function(){
		$ospan.text(parseInt(Math.random()*10000)).appendTo($('.reg-mac-1'))
	});
	$('#reg-mac-1').on('blur',function(){
//		console.log($ospan.text())
		if($(this).val()==$ospan.text()){
//			console.log($(this).val())
//			console.log($ospan.text())
			$(this).next().text("验证正确!");
		flag7=true;
		}else{
			$(this).next().text("请输入正确的验证码")
		}
	});
	//存手机cookie
	var str=getCookie("regArr1")
	var regAarr1=[]
	//手机cookie
	$('#sub').on('click',function(){
		if(flag1&&flag3&&flag4&&flag7){
			alert("注册成功")
		//注册成功后将信息存入cookie	
			var obj={};
			obj.pohNum=$('#pho').val();
			obj.psw1=$('#psw2').val();
			regAarr1.push(obj)
			addCookie("regArr1",JSON.stringify(regAarr1))
		}
		else{
			alert("信息错误！")
		}
	})
	//邮箱cookie
	var str=getCookie("regArr2")
	var regAarr2=[]
	$('#sub2').on('click',function(){
		if(flag2&&flag5&&flag6){
			alert("注册成功！")
		//注册成功后将信息存入cookie	
			var obj={};
			obj.pohNum=$('#emaill').val();
			obj.psw1=$('#psw2').val();
			regAarr2.push(obj)
			
			addCookie("regArr2",JSON.stringify(regAarr2))
		}
		else{
			alert("信息错误")
		}
	});
	
	
})