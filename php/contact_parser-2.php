<?php 
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  function honeypot_validate($req) {
    if (!empty($req)) {
      $honeypot_fields = [
        "name",
        "email",
        "message"
      ];

      foreach ($honeypot_fields as $field) {
        if (isset($req[$field]) && !empty($req[$field])) {
          return false;
        }
      }
    }

    return true;
  }

  if ()

 ?>