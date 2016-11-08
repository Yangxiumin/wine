jQuery(function($){
		//二维码
		$('#top1').on('mouseover',function(){
			$('#top1').css({'color':'red'},{'background':'#eee'})
			var $oi=$('<i/>')
			$oi.appendTo($('#top1')).html('<img src="src/css/img/top1.jpg">').addClass('oi').show()
		}).on('mouseout',function(){
			$('#top1').removeAttr('style')
			$('#top1 .oi').hide()
		});
		
		//顶部收缩
		$('#top-btn').on('click',function(){
			$('.top-pic').animate({height:280},400,function(){
				$('#top-btn').text("收起");
				$('#top-btn').on('click',400,function(){
					$('.top-pic').animate({height:180})
				})
			})
			
		});
		
		//悬浮框
		var $tnav=$('#t-nav')
		$(window).on('scroll',function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop>500){
				$tnav.fadeIn()
			}else{
				$tnav.fadeOut()
			}
			//右边缘
			//回顶部
			$('#gtop').on('click',function(){
			scrollTop = 0;
		})
		
		});
		//左边导航
		//菜单一
		$.ajax({
			type:"get",
			url:"src/html/tt.json",
			async:true,
			success:function(res){
				console.log(res)
				$.each(res,function(idx,val){
					console.log(val.title)
					$('<span/>')
				})
			}
		});
		//下拉菜单
		$('#user').find('p').hide()
		$('#user').on('mouseover',function(){
			$('#user').find('p').show()
		}).on('mouseout',function(){
			$('#user').find('p').hide()
		})
		

		$('#type01').on('mouseover',function(){
			$('.banner ul').hide()
			$('<div/>').addClass('oneList').appendTo($('.banner'))
			
		}).on('mouseout',function(){
			$('.banner ul').show()
			$('.oneList').remove()
		})
		//菜单二，请求数据写入页面
	$('#type02').on('mouseenter',function(){
//	$('.banner ul').remove();
			$.ajax({
			type:"get",
			url:"src/html/tt.json",
			async:true,
			success:function(res){
				console.log(res)
				$.each(res,function(idx,item){
					console.log(item.title)
					$.each(item.title,function(n,m){
						console.log(m)
						$('<span/>').html(m).css({"color":"red"}).appendTo($('.banner'))
					})
					
				})
			}
		})
		
	})	
			
		//效果	
		$('#type03').on('mouseover',function(){
			$('.banner ul').hide()
			$('<div/>').addClass('oneList').appendTo($('.banner'))
			
		}).on('mouseout',function(){
			$('.banner ul').show()
			$('.oneList').remove()
		})
		
		$('#type04').on('mouseover',function(){
			$('.banner ul').hide()
			$('<div/>').addClass('oneList').appendTo($('.banner'))
			
		}).on('mouseout',function(){
			$('.banner ul').show()
			$('.oneList').remove()
		})
		
		//大轮播
		$('.banner').myFocus({
			imgs:['src/img/banner1.jpg','src/img/banner2.jpg','src/img/banner3.jpg','src/img/banner4.jpg','src/img/banner5.jpg','src/img/banner6.jpg'],
		});
		
		
		$('.t_middle').find('dl').on('mouseenter',function(){
			$(this).css('color','red')
			$(this).find('img').animate({marginRight:20})
		});
		
		$('.t_middle').find('dl').on('mouseout',function(){
			$(this).css('color','black')
			$(this).find('img').animate({marginRight:0})
		});
		
		//小图轮播
		$('.lun1').hdzCarousel({
			imgs:['src/img/f1_1.jpg','src/img/f1_2.jpg','src/img/f1_3.jpg'],
			btn:true,
		});
		var $oList=$('.bigpic')
		
		//多图切换
		var n=0
		$('.prev1').on('click',function(){
			$('#pic-group').animate({marginLeft:300},function(){
				$('#pic-group img:last').after($('#pic-group img:first'))
				$('#pic-group').css({marginLeft:0});
				if(n<$("#pic-group img").length-1){
					n=n+1
				}
				else{
					n=0
				}
			})	
		})
		
		//楼梯；
		var $nav=$('#nav');
		var $floor=$('.floor');
		$(window).on('scroll',function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop >1650){
						$nav.fadeIn();
					}else{
						$nav.fadeOut();
					}
				$floor.each(function(idx,ele){
					if($(ele).offset().top - scrollTop < $(window).height()/2-200){
						$nav.find('li').eq(idx).addClass('hover').siblings('li').removeClass('hover');
					}
				})
			});
			$nav.on('click','li',function(){
					if($(this).hasClass('last')){
						scrollTop = 0;
					}else{
						var index = $(this).index();
						var scrollTop = $floor.eq(index).offset().top - ($(window).height()-$floor.eq(index).outerHeight())/2;
					}
					$('html,body').animate({scrollTop:scrollTop});
				});
	/*
		var starTime=new Date().getTime();
		var endTime=new Date("2016/09/24 00:00:00").getTime()

		var deta=(endTime-starTime)/1000;
		var oMinutes=Math.floor(deta/60%60);
		var oSeconds=Math.floor(deta%60);
		
		if(deta>0){
			var oDay=Math.floor(deta/(24*60*60));
			deta-=oDay*24*60*60;
			
			var oHours=Math.floor(deta/(60*60)%24);
			deta-=oHours*
		}
		*/
		
		

})
		

	