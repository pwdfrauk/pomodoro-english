
$step = 1;
$loops = Math.round(600 / $step);
$increment = 360 / $loops;
$half = Math.round($loops / 2);
$barColor = '#ec366b';
$backColor = '#feeff4';

$(function(){
	clock.init();
});  
clock={
	interval:null,
	init:function(){
		$('.timer-area').click(function(){
            clock.stop(60);
            
            console.log('circle function clicked')
			switch($(this).data('action')){
				case'start':
					clock.stop();
					clock.start($('.input-num').val());
				break;
				case'stop':
					clock.stop();
				break;
			}
		});
	},
	start:function(t){
		var pie = 0;
		var num = 0;
		var min = t?t:1;
		var sec = min*60;
		var lop = sec;
		clock.interval = setInterval(function(){
            console.log('animation start')
			sec = sec-1;
			if(min>1){
				pie = pie+(100/(lop/min));
			}else{
				pie = pie+(100/(lop));
			}
			if(pie>=101){ pie = 1; }
			num = (sec/60).toFixed(2).slice(0,-3);

			$i = (pie.toFixed(2).slice(0,-3))-1;
			if($i < $half){
				$nextdeg = (90 + ( $increment * $i ))+'deg';
				$('.timer-wraper').css({'background-image':'linear-gradient(90deg,'+$backColor+' 50%,transparent 50%,transparent),linear-gradient('+$nextdeg+','+$barColor+' 50%,'+$backColor+' 50%,'+$backColor+')'});
			}else{
				$nextdeg = (-90 + ( $increment * ( $i - $half ) ))+'deg';
				$('.timer-wraper').css({'background-image':'linear-gradient('+$nextdeg+','+$barColor+' 50%,transparent 50%,transparent),linear-gradient(270deg,'+$barColor+' 50%,'+$backColor+' 50%,'+$backColor+')'});
			}
			if(sec==0){
				clearInterval(clock.interval);

				$('.timer-wraper').removeAttr('style');
			}
		},1000);
	},
	stop:function(){
		clearInterval(clock.interval);
		$('.timer-wraper').removeAttr('style');
	}
}
