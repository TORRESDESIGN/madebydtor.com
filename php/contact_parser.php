
<?php


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

  $headers = "From: $from\n";

  $headers .= "MIME-Version: 1.0\n";

  $headers .= "Content-type: text/html; charset=iso-8859-1\n";

  if(mail($to, $subject, $message, $headers) ){

    echo "success good bro";

  }else {

    echo "The server failed to send the message. Please try again later.";

  }



}

/*
  $nameFake = $_POST['name'];
  $emailFake = $_POST['email'];
  $messageFake = $_POST['message'];
  
  function honeypot_validate($req) {
    if (!empty($req)) {

      $honeypot_fields = [
        $nameFake,
        $emailFake,
        $messageFake
      ];

      foreach ($honeypot_fields as $field) {
        if (isset($req[$field]) && !empty($req[$field])) {
          #honeypot filled
          return false;
        }
      }
    }
    #honeypot not filled
    return true;
  }
  if (honeypot_validade($_REQUEST)) {
            // The honeypot fields are clean, go on
            $is_spammer = false;
        } else {
            // A spammer filled a honeypot field
            $is_spammer = true;
        }
  #stops form
  if ($is_spammer) {
    die("Thank you! But no thank you Mr.Roboto!");
    #continue with form
  } else if ( isset($_POST['namenombre']) && isset($_POST['emailcorreo']) && isset($_POST['messagemensaje']) ) {
    $n = $_POST['namenombre']; //Another method to filter with PHP: use preg_replace() to filter non letters
    $e = $_POST['emailcorreo'];
    $p = n12br($_POST['messagemensaje']);//line breaks
    $to = 'daniel.torres.84@gmail.com';
    $from = $e;
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
*/


 ?>

 
