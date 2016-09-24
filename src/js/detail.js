jQuery(function($){
	// 实现放大镜效果
	$('#box').elevateZoom({easing : true})
	$('#box2').elevateZoom({});
	//点击小图
	$('.s-pic').on('click','li',function(){
		var $src=$(this).find('img').attr('src')
		$('#box').attr({'src':$src},{'data-zoom-image':$src})
	})

//请求图片数据
	$.ajax({
		type:"get",
		url:"gcar.json",
		async:true,
		success:function(res){
//				console.log(res)
			$.each(res, function(idx,value) {    
//				console.log(res) 
				var $goods=$('.other')
				var $good=$('<dl/>')
				$('<img/>').attr('src',"../img/car_pic"+value.imgId+".jpg").appendTo($good)
				$('<dt/>').text(value.msg).appendTo($good)
				$('<dd/>').text(value.price).appendTo($good)
				$('<a/>').attr('href','#').addClass('gadd').text("加入购物车").appendTo($good)
				$good.appendTo($goods)
			});
		}
	});
	
	//加入购物车
	//取出Cookie,将数组转换为字符串
	var str=getCookie("arr")
	console.log(str)
	var arr=[]
	var i=0
//	arr=JSON.parse(str)
	$('#g-add').on('click',function(){
		i++;
		var obj={};
		obj.price=$('#pr2 span').text();
		obj.msg=$('#msg0').text();
		obj.picture=$('#box').attr('src');
		console.log(obj.price)
		console.log(obj.msg)
		console.log(obj.picture)
		arr.push(obj)
		$('.number').css('color','red').html(i);
		console.log(arr);
		
		//对象转json字符串,写入cookie
		addCookie("arr",JSON.stringify(arr),7);
		alert("添加成功")	
		console.log(arr)
		//location.href="gcar.html"
	})
	
})