;(function($){
	
	$.fn.extend({
		hdzCarousel:function(opts){
			var defaults = {
				imgs:[],//大图列表
				btn:true,//是否显示前后按钮
				smallPic:true,//是否显示小图
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
					//移入时停止轮播
					$self.on('mouseenter',function(){
						clearInterval(timer);
					}).on('mouseleave',function(){//移出时轮播
						timer = setInterval(function(){
							index++;
							showPic();
						},opt.speed);
					}).trigger('mouseleave')//手动触发
				}
				

				// 上一张
				$self.on('click','.prev',function(e){
					index--;
					showPic();
					e.preventDefault();//清除默认样式
				})

				// 下一张
				.on('click','.next',function(e){
					index++;
					showPic();
					e.preventDefault();//清除默认样式
				})

				// 小图切换
				.on('click','.smallList li',function(){
					index = $(this).index();
					showPic();
				});

				// 生成html结构
				function init(){
					// 生成html结构
					$bigPic = $('<ul/>').addClass('bigpic');

					// 遍历图片
					var lis = $.map(opt.imgs,function(imgsrc){
						return '<li><img src="' + imgsrc + '"/></li>'
					});
					
					// 生成大图
					$bigPic.html(lis);
					$bigPic.appendTo($self)

					//生成小图标
					var $smallList=$('<ul/>').addClass('smallList');
					var smallList=$.each(opt.imgs, function(idx,val) {    
						 $('<li/>').appendTo($smallList) ;                                                        
					});
					$smallList.appendTo($self);
					
					// 显示前后按钮
					if(opt.btn){
						var $prev = $('<a href="#"/>').html('&lt;').addClass('prev');
						var $next = $('<a href="#"/>').html('&gt;').addClass('next');

						$self.append([$prev,$next]);
					}

					showPic();
				}

				// 图片显示
				function showPic(){
					if(index>=opt.imgs.length){
						index = 0;
					}else if(index<0){
						index = opt.imgs.length -1;
					}
					$bigPic.find('li').eq(index).animate({opacity:1}).siblings('li').animate({opacity:0});
					$('.smallList').find('li').eq(index).addClass('hover').siblings('li').removeClass('hover');
				}
			});
		}
	})
})(jQuery);


