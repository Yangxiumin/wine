jQuery(function($){
//购物车列表，请求数据加入页面	
	$.ajax({
	type:"get",
	url:"gcar.json",
	async:true,
	success:function(res){			
//		console.log(res)
		var $goods=$('<div/>')
		$.each(res, function(idx,value) {
//			console.log(res) 
			$goods.addClass('gcar').appendTo($('.list'))
			var $good=$('<dl/>')
			$('<img/>').attr('src',"../img/car_pic"+value.imgId+".jpg").appendTo($good)
			$('<dt/>').text(value.msg).appendTo($good)
			$('<a/>').attr('href','#').css('color','red').text(value.conect).appendTo($good)
			$('<dd/>').text(value.price).appendTo($good)
			$('<a/>').attr('href','#').text('加入购物车').addClass('ospan').appendTo($good)
			$good.appendTo($goods)
		});
		//加入购物车
	}
})
//请求购物车数据	
	var str=getCookie("arr");
	var arr=JSON.parse(str)
//	console.log(arr)
	var i=0;
	$.each(arr,function(idx,item){
		i++;
//		console.log(idx,item.price)
		var otr1=$('<tr/>')
		otr1.insertBefore($('.car-content .td4')).addClass('tr1');
		$('<td/>').attr({'width':430}).html("<img src="+item.picture+"><a href='#'>"+item.msg+"</a>").appendTo(otr1)
		$('<td/>').addClass('td2').html('<i>-</i><span>'+0+'</span><i>+</i>').appendTo(otr1);
		$('<td/>').addClass('td1').attr('width','200').text("￥"+item.price).appendTo(otr1)
		$('<td/>').html('<a href="#">收藏</a>').appendTo(otr1)
		$('<td/>').addClass('td3').html('<a href="#">删除</a>').appendTo(otr1)
		
		$('#godnum').css('color','red').html(i);//数量
		$('#cuntPric').css('color','red').html("￥"+i*item.price)//价格
		var adprice=i*item
		//数量的加减
		$('.td2 i').eq(0).on('click',function(){
			$('.td2 span').html(i--)
			$('#godnum').css('color','red').html(i);
			if(i<=0){
				$('.td2 span').html(0)
				$('#godnum').css('color','red').html(0);
			}
			$('#cuntPric').css('color','red').html("￥"+adprice)
		})
		
		$('.td2 i').eq(1).on('click',function(){
			$('.td2 span').html(i++)
			$('#godnum').css('color','red').html(i);
			if(i<=0){
				$('.td2 span').html(0)
				$('#godnum').css('color','red').html(0);
			}
			$('#cuntPric').css('color','red').html("￥"+i*item.price)
		})
		
	})
		var str=getCookie("arr");
			var arr=JSON.parse(str)
			$.each(arr,function(i,val){
				console.log(i,val)
				$('.td3').eq(i).on('click',function(){
				JSON.stringify(val)
				console.log()
			addCookie("arr",JSON.stringify(arr[i]),0);
			})
			
		})
		
		
	
	
	
})