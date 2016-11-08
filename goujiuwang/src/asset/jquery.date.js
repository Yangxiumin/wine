;(function($){
   $.fn.extend({
    daojishi:function(options){
        return this.each(function(){
            //默认倒计时长度为一天
            //在当前时间基础上加一天
            var endDate = new Date();
            endDate.setDate(endDate.getDate() + 1);
            var defaults = {
                ele:$(this),
                endTime:endDate
            };
            var opt = $.extend({},defaults,options);
            // 获取时间差
            // Date.parse返回当前时间距离1970-1-1的毫秒数
            opt.timer = setInterval(function(){
                var now = new Date();
                offsetTime = (Date.parse(opt.endTime) - Date.parse(now))/1000;//差值的秒数
                var secondsLeft = offsetTime % 60;//68 ==> 01:08; 60==>01:00
                var minutesLeft = Math.floor((offsetTime / 60)) %60; //50 ==> 0:50:00; 80 ==> 01:20:00
                var hoursLeft = Math.floor((offsetTime /(60 * 60))) % 24;//48 ==> 2day 00:00:00; 52 ==> 2day 04:00:00
                var dayLeft = Math.floor((offsetTime / (60 * 60 * 24)));
                opt.ele.html('剩余时间：'+ dayLeft + '天'+ hoursLeft + '时'+ minutesLeft + '分'+ secondsLeft + '秒');
            },1000);
        });
    }
   })
})(jQuery);