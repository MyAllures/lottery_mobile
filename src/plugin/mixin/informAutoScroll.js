import $ from 'jquery'

function informAutoScroll (ele) {
	$.fn.textScroll = function(){ 
	    var speed = 60
	    var flag = null
	    var tt
	    var that = $(this)
	    var child = that.children()
	    var p_w = that.width()
	    var w = child.width()
	    
	    child.css({left: p_w})
	    
	    var t = (w + p_w) / speed * 1000
	    
	    function play (m) {
	        var tm = m==undefined ? t : m
	        
	        child.animate({left: -w}, tm, "linear", function () {
	            $(this).css("left", p_w)
	            play()
	        });
	    }
	    play();
	}
	$(ele).textScroll();
}

export default informAutoScroll