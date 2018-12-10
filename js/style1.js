$(function(){
	//设置全局变量
	$('.img_tp_jh').each(function(){
		// 获取原生js
		var Jsthis = $(this)[0];
		var jqThis = $(this);
		// 定义对象
		Jsthis.xmdjcx=0;
		Jsthis.runc = function (){
			Jsthis.xmdjcx++;
			if(Jsthis.xmdjcx>3){
				jqThis.find('.img_tp_jh_ul').css('left','0px')
				Jsthis.xmdjcx=1
			}
			if(Jsthis.xmdjcx==3){
				jqThis.find('.ms_right_ul2 li').eq(0).addClass('ms_right_li').siblings().removeClass('ms_right_li')
			}
			// 图片进行滑动
			jqThis.find('.img_tp_jh_ul').stop().animate({'left':-Jsthis.xmdjcx*378+'px'},1000);
			// 小点进行滑动
			jqThis.find('.ms_right_ul2 li').eq(Jsthis.xmdjcx).addClass('ms_right_li').siblings().removeClass('ms_right_li')
		}
		//设置定时器
	Jsthis.timer = setInterval(Jsthis.runc,3000);
	})
		
		
		
		// 清除定时器
		$('.img_tp_jh').hover(function(){
			var Jsthis = $(this)[0];
			clearInterval(Jsthis.timer);
		},function(){
			var Jsthis = $(this)[0];
			Jsthis.timer = setInterval(Jsthis.runc,3000);
		})
	// 点击右边效果
	$('.right5').click(function(){
		var Jsthis = $(this).parent()[0];
		Jsthis.runc();	
	})
	// 点击左边边效果
	$('.left5').click(function(){
		var Jsthis = $(this).parent()[0];
	
		Jsthis.xmdjcx--;
			
		if(Jsthis.xmdjcx<0){
			Jsthis.xmdjcx=2;
			$(this).siblings('.img_tp_jh_ul').css('left','-1134px');
		}
		$(this).siblings('.img_tp_jh_ul').stop().animate({'left':-Jsthis.xmdjcx*378+'px'},1000);
			// 小点进行滑动
		$(this).siblings('.ms_right_ul2').find('li').eq(Jsthis.xmdjcx).addClass('ms_right_li').siblings().removeClass('ms_right_li')
		
	})
	//小点效果
	$('.ms_right_ul2 li').mouseenter(function(){
		var Jsthis = $(this).parent()[0];
		Jsthis.xmdjcx = $(this).index();
		$(this).parent('.ms_right_ul2').siblings('.img_tp_jh_ul').stop().animate({'left':-Jsthis.xmdjcx*378+'px'},1000);
		$(this).addClass('ej2_li').siblings().removeClass('ej2_li');
	
	})
	
})
