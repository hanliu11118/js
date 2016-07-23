;(function($){
    var pluginName = "myWrap",
        defaults = {

        };
    $.fn[pluginName] = function(options){
        var settings = $.extend({},defaults,options);

        var that = this;
        var $tupian = $(that).children().first().children();
        var $num = $(that).children().last().children();
        var oldindex = 0;
        var timmer = setInterval(autoplay,3000);

        var mouseoverTime = null;

        $(that).last().on("mouseover","li",showTab);
        $(that).last().on("mouseout","li",outTab);

        function showTab(e){
            var that = this;
            clearInterval(timmer);
            mouseoverTime = setTimeout(function(){
                showChg($(that).index(),oldindex);
            },400)

        }
        function outTab(e){
            timmer = setInterval(autoplay,3000);
            clearTimeout(mouseoverTime);//清除自动计时
        }

        function autoplay(){
            var newindex;
            if(oldindex < $tupian.length - 1){
                newindex = oldindex + 1;
            }
            else{
                newindex = 0;
            }
            showChg(newindex,oldindex);
        }
        function showChg(now,old){
            if(now != old){
                $($tupian[old]).fadeOut(200);
                $($tupian[now]).fadeIn(200);

                $($num[old]).removeClass("active");
                $($num[now]).addClass("active");

                oldindex = now;
            }
        }
    }
})(jQuery);

