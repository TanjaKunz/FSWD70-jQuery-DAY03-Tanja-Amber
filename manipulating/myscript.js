$(document).ready(function(){
	
	// $(".product-image").mouseover(function(){
	// 	var knot = $(this).parents('div.row');
	// 	var ask = knot.find('span:eq(1)');

	// 		if ( ask.text() == "Computer") {
	// 			$(this).css('background-color', '#fcc9c9');
	// 		} else if ( ask.text() == "Phone") {
	// 			$(this).css('background-color', '#cff9de');
	// 		} else {
	// 			$(this).css('background-color', '#d1e1fc');
	// 		};

	// 		$(this).mouseout(function(){
	// 			$(this).css('background-color', '#ebf8fe');
	// 		});
	// });

	



	for ( i = 0; i < items.length; i++) {
		// 
		var box = $('.container > *');
		box.addClass('monkey');

		$('.monkey:first').clone().addClass('clone').appendTo('.container');

		var img = $('.clone img');
		$(img[i]).attr('src', items[i].pic);

		var name = $('.clone').find('a:first');
		$(name[i]).text(items[i].name);


		// var category = $('.clone').find('span:nth-of-type(1)');		
		// $(category[i]).text(items[i].category);
	};




console.log(category);
});


