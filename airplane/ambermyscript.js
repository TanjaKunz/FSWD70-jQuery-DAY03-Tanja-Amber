$(document).on('mousemove', function(e) {
	$('#moveme').css({
		left: e.pageX-128,
		top: e.pageY-128
	});
});

$('#moveme').on('click', function(){
	$('#moveme').css(
		'position', 'static'
	);
	$('#moveme').on('click', function(){
	$('#moveme').fadeOut(3000).fadeIn(3000);
})

})

