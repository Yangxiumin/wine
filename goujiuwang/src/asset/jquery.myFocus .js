;(function($){
	// $.fn.myFocus
	$.fn.extend({
		myFocus:function(opts){
			var defaults = {
				imgs:[],//大图列表
				btn:false,//是否显示前后按钮
				smallPic:false,//是否显示小图
				navSmall:true,//是否显示小导航栏
				speed:2000,	//切换时间
				autoplay:true, //自动轮播
				type:'fade',//left,top
			};
			return this.each(function(){
				var $self = $(this);
				
				var opt = $.extend({},defaults,opts);

				var $bigPic,$smallPics;

				// 默认显示第一张
				var index = 0;

				init();

				// 轮播

				if(opt.autoplay){
					var timer;

					$self.on('mouseenter',function(){
						clearInterval(timer);
					}).on('mouseleave',function(){
						timer = setInterval(function(){
							index++;
							showPic();
						},opt.speed);
					}).trigger('mouseleave')
				}
				

				// 上一张
				$self.on('click','.prev',function(){
					index--;
					showPic();
				})

				// 下一张
				.on('click','.next',function(){
					index++;
					showPic();
				})

				// 小图切换
				.on('click','.smallpic li',function(){
					index = $(this).index();
					showPic();
				});

				// 生成html结构
				function init(){
					// 生成html结构
					// var $myFocus = $('<div/>').addClass('myfocus');
					$bigPic = $('<ul/>').addClass('bigpic');

					// 遍历图片
					/*$.each(opt.imgs,function(idx,imgsrc){

					})*/
					var lis = $.map(opt.imgs,function(imgsrc){
						return '<li><img src="' + imgsrc + '"/></li>'
					});
					
					var lins=$.map(opt.imgs,function(idx,val){
//						console.log(imgsrc)
						return '<li>'+val+'</li>'
					});

					// 生成大图
					$bigPic.html(lis);
					$bigPic.appendTo($self)

					// 生成小图
					if(opt.smallPic){
						$smallPic = $('<div/>').addClass('smallpic').html(lis);
						$smallPic.appendTo($self);
					}
					
					//生成点击小导航栏
					if(opt.navSmall){
						$navSmall=$('<ul/>').addClass('navSmall').html(lins);
						$navSmall.appendTo($self);
					}
					
					//给按钮绑定点击事件
	          		if(opt.navSmall){
	          			$('.navSmall li').each(function(idx){
			          		$(this).on('click',function(){
//			          			console.log($(this));
				          		index=idx;
				          		showPic();
		          			})	          		
		          		})
	          		}
		          	
					
					// 显示前后按钮
					if(opt.btn){
						var $prev = $('<i/>').html('&lt;').addClass('prev');
						var $next = $('<i/>').html('&gt;').addClass('next');

						$self.append([$prev,$next]);
					}

					showPic();
				}

				// 图片显示
				function showPic(){
					if(index>=opt.imgs.length){
						index = 0;
					}else if(index<0){
						index = opt.imgs.length-1;
					}
					
					$bigPic.find('li').eq(index).animate({opacity:1}).siblings('li').animate({opacity:0});
					
//					if(index==opt.imgs.length)
//					{$navSmall.find('li').eq(0).addClass('select').siblings().removeClass();}
//					else 
//					{
//						$navSmall.find('li').eq(index).addClass('select').siblings().removeClass();
//					}
//					console.log($navSmall.find('li').eq(index))
					if(opt.navSmall)
					{
//						if(index==opt.imgs.length){$('.navSmall li').eq(0).addClass('select').siblings().removeClass();}
//					else{	
						$('.navSmall li').eq(index).addClass('select').siblings('li').removeClass('select');
//						}
						
					}
					
					if(opt.smallPic) $smallPic.find('li').eq(index).animate({opacity:1}).siblings('li').animate({opacity:0.5});
					
			
				}
			});
		}
	})
})(jQuery);