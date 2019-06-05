$('.prod-info-main:last').after($('.col-xs-12:first').html())
$('.prod-info-main:last').after($('.col-xs-12:first').html())

$('.prod-info-main:eq(6) a:first').text('Android Tablet')
$('.prod-info-main:eq(6) img').attr('src', 'http://www.pngpix.com/wp-content/uploads/2016/04/Tablet-PNG-Image2-500x663.png')
$('.product-image:eq(6)').addClass('tablet')

$('.prod-info-main:eq(7) a:first').text('LG Mobile')
$('.prod-info-main:eq(7) img').attr('src', 'http://www.pngall.com/wp-content/uploads/1/Mobile-PNG.png')
$('.product-image:eq(7)').addClass('mobile')

$('.product-image').on('mouseover', function(){
	if ($(this).hasClass('laptop')){
		$(this).css('background-color', 'red')
	}
	if ($(this).hasClass('mobile')){
		$(this).css('background-color', 'green')
	}
	if ($(this).hasClass('tablet')){
		$(this).css('background-color', 'blue')
	}
	$(this).on('mouseout', function(){
		$(this).css('background-color', '#EBF8FE')
	})
});

