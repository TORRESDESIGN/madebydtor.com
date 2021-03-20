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

  _("mybtn").disabled = true;

  _("status").innerHTML = 'please wait ...';

  var formdata = new FormData();

  formdata.append( "namenombre", _("namenombre").value );

  formdata.append( "emailcorreo", _("emailcorreo").value );

  formdata.append( "messagemensaje", _("messagemensaje").value );

  var ajax = new XMLHttpRequest();

  ajax.open( "POST", "contact_parser.php" );

  ajax.onreadystatechange = function() {

    if(ajax.readyState == 4 && ajax.status == 200) {

      if(ajax.responseText == "success") {

        _("contact_form").innerHTML = '<h2><span class="fas fa-check-circle"></span>Thanks '+_("n").value+', your message has been sent.</h2>';

      }else {

        _("status").innerHTML = ajax.responseText;

        _("mybtn").disabled = false;

      }

    }

  }

  ajax.send( formdata );

}