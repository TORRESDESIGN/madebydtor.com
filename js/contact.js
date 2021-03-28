//shorcut for get Element

function _(id) {

  return document.getElementById(id);

}

/*This 

is multi-line comment*/

function lettersOnly(input) {

  var regex = /[^a-z]/gi;

  input.value = input.value.replace(regex, "");

}

function cFormGuard(input) {

  var regex = /[&<>`'"/]/;

  input.value = input.value.replace(regex, "");

}



function submitForm() {

  _("submit").disabled = true;

  _("status").innerHTML = 'please wait ...';

  var formdata = new FormData();
  //global variables
  formdata.append( "namenombre", _("namenombre").value );

  formdata.append( "emailcorreo", _("emailcorreo").value );

  formdata.append( "messagemensaje", _("messagemensaje").value );

  //formdata.append( "name", _("name").value );

  //formdata.append( "email", _("email").value );

  //formdata.append( "message", _("message").value );


  var ajax = new XMLHttpRequest();

  ajax.open( "POST", "contact_parser.php" );

  ajax.onreadystatechange = function() {

    if(ajax.readyState == 4 && ajax.status == 200) {

      if(ajax.responseText == "success") {

        _("contact-form").innerHTML = '<h2><span class="fas fa-check-circle"></span>Thanks '+_("namenombre").value+', your message has been sent.</h2>';

      }else {

        _("status").innerHTML = ajax.responseText;

        _("submit").disabled = false;

      }

    }

  }

  ajax.send( formdata );

}