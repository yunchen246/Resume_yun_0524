
$(document).ready(function() {
	/*首圖 CONTACT ME 按鈕*/
	$('.btn-primary').click(function(event) {
		/* Act on the event */
		$('.btn-primary').toggleClass('bounce');
	});

	/*技能按鈕 skills-btn*/
   $('.skills-btn').hover(function(){
   	event.preventDefault();
   	/* Act on the event */
   	 	$('.skills-btn').toggleClass('bounce');
   });

   });