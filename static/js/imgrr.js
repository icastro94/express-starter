$('#toggle_img').click(function() {
	if ($('#toggle_img').text() === 'Go Away!') {
		$('#main_img').hide();
  		$('#toggle_img').text('Come Back!');
	} else {
  		$('#main_img').show();
  		$('#toggle_img').text('Go Away!');
  	}
});
// Problem 3 (Swap Em) -----------------------------------------------
$('#change_img').click(function() {
	if ($('#new_img_file').val() === 'giraffe.jpg') {
		$("#main_img").attr('src','/static/img/giraffe.jpg');
		$('#main_img').show();
	} 
	if ($('#new_img_file').val() === 'red_panda.jpg') {
		$("#main_img").attr('src','/static/img/red_panda.jpg');
		$('#main_img').show();
	} 
	if ($('#new_img_file').val() === 'gorilla.jpg') {
		$("#main_img").attr('src','/static/img/gorilla.jpg');
		$('#main_img').show();
	} else {
		alert(
			$('#new_img_file').val());
}});

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
  	alert(
  		$(this).attr('src'))
});

// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE
