  var palStatus;

  var text;


//not used
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
    document.getElementById('delete').disabled = false;
    

    if (word === finalString) {

      palStatus = document.getElementById('palindromeStatus');

      text = document.createTextNode('Yes ' + value + ' is a palindrome!');

      palStatus.appendChild(text);

      document.getElementById('palindromeStatus').style.border = '2px solid var(--primary-teal)';
      document.palStatus.appendChild('palStatus');



    } else {

      palStatus = document.getElementById('palindromeStatus');

      text = document.createTextNode('No ' + value + ' is not a palindrome.');

      palStatus.appendChild(text);

      document.getElementById('palindromeStatus').style.border = '2px solid var(--primary-teal)';
      document.palStatus.appendChild('palStatus');

      document.getElementById('check').disabled = true;

    }

  } else {

    alert('enter something first');

  }

  

});



//delete button  

  document.getElementById('delete').addEventListener('click', removeElement);

  function removeElement() {
    document.getElementById('palindrome').value = "";
    document.getElementById('palindromeStatus').innerHTML = "";
    document.getElementById('palindromeStatus').style.border = 'none';
    document.getElementById('check').disabled = false;
    document.getElementById('delete').disabled = true;
}