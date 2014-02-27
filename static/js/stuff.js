alert('Hey, This is Isaac\'s Page!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
	alert('Hello World!')
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#turn_me_pink').click(function() {
  $('#tickled_text').css('color','pink');
});

// Problem 4 (Greet Me) -----------------------------------------------------
$('#greet_me').click(function() {
	alert(
		$('#my_name').val());
});
