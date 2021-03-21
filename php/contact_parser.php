<?php 

  function honeypot_validate($req) {
    if (!empty($req)) {

      $honeypot_fields = [
        "name",
        "email",
        "message"
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
    break;
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

 ?>