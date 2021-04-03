
<?php
/*
//PHP variable starts with the '$'
//$_POST is a super global var used to collect form data after submitting and HTML form with method="post",
//also used to pass variables
if ( isset($_POST['namenombre']) && isset($_POST['emailcorreo']) && isset($_POST['messagemensaje']) ) {

  $n = $_POST['namenombre']; //HINT: use preg_replace() to filter non letters

  $e = $_POST['emailcorreo'];

  $p = nl2br($_POST['messagemensaje']);//line breaks

  $to = 'daniel@madebydtor.com';

  $from = $e;

  $subject = 'Contact Form Message';

  $message = '<b>Name:</b> '.$n.' <br><b>Email:</br> '.$e.' <p>'.$p. '</p>';

  $headers = "From: noreply@madebydtor.com\n";

  $headers .= "MIME-Version: 1.0\n";

  $headers .= "Content-type: text/html; charset=iso-8859-1\n";

  if(mail($to, $subject, $message, $headers) ){

    echo "success";//warning: PHP adds invisible whitespce to callback, not sure why

  }else {

    echo "The server failed to send the message. Please try again later.";

  }
}
*/

$nameFake = $_POST['name'];
$emailFake = $_POST['email'];
$messageFake = $_POST['message'];
  
if ($nameFake || $emailFake || $messageFake) {
  echo "Hey, not cool! ";
  die("You are a bot!");
} else {
  #honeypot not filled
  if ( isset($_POST['namenombre']) && isset($_POST['emailcorreo']) && isset($_POST['messagemensaje']) ) {
    $n = $_POST['namenombre']; //Another method to filter with PHP: use preg_replace() to filter non letters
    $e = $_POST['emailcorreo'];
    $p = nl2br($_POST['messagemensaje']);//line breaks
    $to = 'daniel@madebydtor.com';
    $from = 'noreply@madebydtor.com';
    $subject = 'Contact Form Message From madebydtor.com';
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
}
 ?>