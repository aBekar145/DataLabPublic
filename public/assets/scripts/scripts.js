
//E:\web\2020\Lastrep DataLab\DataLab\src\assets\scripts\tools.js
//-->
jQuery(document).ready(function($) {
	
    $('a.js-anchor-go').click(function(){
        $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 800, 'swing');
        return false;
    });

	$( ".services__tabs-wrap" ).tabs({
        classes: { "ui-tabs-active": "services-tabs__item--active" },
		hide: { effect: "fade", duration: 200 },
		show: { effect: "fade", duration: 200 }
	});
});