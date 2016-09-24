jQuery(function($){
				//悬浮框
	var $tnav=$('#t-nav')
	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>500){
			$tnav.fadeIn()
		}else{
			$tnav.fadeOut()
		}
			})
	//懒加载
	
	$.ajaxSetup({
		type:"get",
		data:{pageNo:pageNum},
		url:"list.json",
		dataType:'json',
		success:function(res){
			console.log(res)
			$.each(res,function(idx,item){
				console.log(item.imgId)
				var $olist=$('<div/>')
				$olist.addClass('olist')
				$('<img/>').attr('src',"../css/img/list"+item.imgId+".jpg").appendTo($olist)
				$('<p/>').html("<a href='#'>"+item.msg+"</a>").appendTo($olist)
				$('<span/>').text(item.price).addClass('price').appendTo($olist)
				$('<span/>').text(item.salePrice).addClass('oprice').appendTo($olist)
				$('<p/>').appendTo($olist)
				$('<span/>').text(item.personN).addClass('per').appendTo($olist)
				$('<a/>').addClass('gadd').text('加入购物车').appendTo($olist)
				$olist.appendTo($('.glist'))
			})
			
		}
	});
	
	$.ajax()
	var pageNum=1;
	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= $(document).height() - $(window).height()-100){		
			pageNum++
			$.ajax({data:{pageNo:pageNum}})
		}
	})
			// 手动触发滚动事件
	$(window).trigger('scroll');
		
})