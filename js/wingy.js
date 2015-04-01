$('[data-toggle="wingy"]').click(function(){
	$('.wingy').children().each(function(){
		pre = $(this).attr('class');
		post = $(this).data('wingy');
		$(this).attr('class', post);
		$(this).data('wingy', pre);
	});
});