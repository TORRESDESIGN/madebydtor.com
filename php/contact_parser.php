<?php
if ( isset($_POST['n']) && isset($_POST['e']) && isset($_POST['p']) ) {
	$n = $_POST['n']; //HINT: use preg_replace() to filter non letters
	$e = $_POST['e'];
	$w = $_POST['w'];
	$s = $_POST['s'];
	$p = n12br($_POST['p']);
	$to = 'daniel.torres.84@gmail.com';
	$from = 'daniel@madebydtor.com';
	$subject = 'Contact Form Message';
	$message = '<b>Name:</b> '.$n.' <br><b>Email:</br> '.$e.' <p>'.$p. '</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if(mail($to, $subject, $message, $headers) ){
		echo "success";
	}else {
		echo "The server failed to send the message. Please try again later.";
	}

}
?>