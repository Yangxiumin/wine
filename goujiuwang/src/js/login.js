
//原生js验证
/*
onload = function() {
	var btnLogin = document.getElementById("login-btn");
	var oCheck = document.getElementById("myself");
	var oUsername = document.getElementById("username");
	var oPassword = document.getElementById("password");
	var str = document.cookie;
	var obj = {};
	var arr = str.split("; ");
	for (var i = 0; i < arr.length; i++)
	{
		var arr2 = arr[i].split("=");
		var name = arr2[0];
		var val = arr2[1];
		obj[name] = val;
	}
	if (obj.username && obj.password)
	{
		oUsername.value = obj.username;
		oPassword.value = obj.password;
		alert("登录成功！");
		window.location.href="index.html"
	}
	btnLogin.onclick = function() {
		if (oCheck.checked)
		{
			var strUsername = oUsername.value;
			var strPassword = oPassword.value;
			var oDate = new Date();
			oDate.setDate(oDate.getDate() + 7);
			document.cookie = "username="+strUsername+";expires=" + oDate;
			document.cookie = "password="+strPassword+";expires=" + oDate;
		}
	}
}
*/
//登录时验证，没有cookie先注册
jQuery(function($){
	var log=$('#login-btn')
	var str=getCookie("regArr1")
	//var str2=getCookie("regArr2")//邮箱登录验证
	if(str!=""){
	var arr1=JSON.parse(str)
	}
	else{
		log.on('click',function(){
			alert("用户名不存在，请先注册账户！")
		})
	}
	$.each(arr1,function(idx,item){
		log.on('click',function(){
			var oCheck=$('#myself')
			var oUsername=$('#username').val();
			var oPsw=$('#password').val();
			console.log(oUsername,oPsw)
			console.log(item.pohNum,item.psw1)
			if(oUsername==item.pohNum&&oPsw==item.psw1){
				alert("登录成功")
				location.href="index.html"
			}else{
				alert('请输入正确信息！')
			}
			
		})
		
	})

	
})
