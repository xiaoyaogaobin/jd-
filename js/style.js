  window.onload = function(){
 
	
	// 抓取元素
			var d = document.getElementById('d')
			var h = document.getElementById('h')
			var m = document.getElementById('m')
			var s = document.getElementById('s')
			// 获取日期对象 (获取当前时间)
			// var timer = new Date();
			// document.write(timer) 
			
			// 自定义时间
			// 月份的取值范围是0-11
			var w = new Date(2019,1,4,0,0,0);
			
			// 获取未来时间的时间节点
			var endTime = w.getTime()
			
			// 设置定时器
				setInterval(function(){
					// 获取当前时间
					var timer = new Date();
					// 将当前时间传换为时间节点
					var startTime = timer.getTime()
					
					// 计算时间差
					var stepTime = endTime - startTime;
					// 计算时间差中有多少天
					var DTime = parseInt(stepTime/(24*60*60*1000));
					// 计算时间差中的小时数	
					var HTime =parseInt(stepTime%(24*60*60*1000)/(60*60*1000));
					
					// 计算分钟数
					var MTime = parseInt(stepTime%(60*60*1000)/(60*1000))
					
					// 计算秒数
					var STime = parseInt(stepTime%(60*1000)/1000)
					
					
					h.innerHTML = HTime
					m.innerHTML = MTime
					s.innerHTML = STime
					
				},1000)
			
		 
				//下面这个是加载结束符,不能动
		// ms_centerli点击右边效果
	
	
}