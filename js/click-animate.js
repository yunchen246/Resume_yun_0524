
$(document).ready(function() {
	/*首圖 CONTACT ME 按鈕*/
	$('.btn-primary').click(function(event) {
		/* Act on the event */
		$('.btn-primary').toggleClass('bounce');
	});

	/*技能按鈕 skills-btn*/
   $('.skills-btn-01').hover(function(){
   	event.preventDefault();
   	/* Act on the event */
   	 	$('.skills-btn-01').toggleClass('bounce');
   });

   	/*技能按鈕 skills-btn*/
   $('.skills-btn-02').hover(function(){
   	event.preventDefault();
   	/* Act on the event */
   	 	$('.skills-btn-02').toggleClass('bounce');
   });

   	/*技能按鈕 skills-btn*/
   $('.skills-btn-03').hover(function(){
   	event.preventDefault();
   	/* Act on the event */
   	 	$('.skills-btn-03').toggleClass('bounce');
   });

   });