  var palStatus;

  var text;



function _(id) {

  return document.getElementByid(id);

}



//check button

document.getElementById('check').addEventListener('click', function palindrome(value) {

  var value = document.getElementById('palindrome').value;

  var word = value.replace(/([^a-z0-9])/gi, '').toLowerCase();

  var splitString = word.split('');

  var reverseString = splitString.reverse();

  var finalString = reverseString.join('');

  

  if(value) {

    document.getElementById('check').disabled = true;

    

    if (word === finalString) {

      palStatus = document.getElementById('palindromeStatus');

      text = document.createTextNode('Yes ' + value + ' is a palindrome');

      palStatus.appendChild(text);

      document.palStatus.appendChild('palStatus');



    } else {

      palStatus = document.getElementById('palindromeStatus');

      text = document.createTextNode('No ' + value + ' is not a palindrome');

      palStatus.appendChild(text);

      document.palStatus.appendChild('palStatus');

      document.getElementById('check').disabled = true;

    }

  } else {

    alert('enter something first');

  }

  

});



//delete button  

  document.getElementById('delete').addEventListener('click', function removeElement(parentDiv, childDiv) {

    if (childDiv == parentDiv) {

      alert('The parent div cannot be removed.');

    } else {

      document.getElementById(childDiv)

      text = document.getElementById(childDiv);

      var palStatus = document.getElementById(parentDiv);

      palStatus.removeChild(text);

    }

    

});