//define functions here

$(document).ready(function(){

// call functions here
function getIt() {
  $('p').on('click', (e) => {
    alert('Hey!');
  });
  
  function frameIt() {
    $('img').on('load', (e) => {
      $('img').addClass('tasty');
    });
  }
  
  function pressIt() {
    $('input#typing').on('keydown', (e) => {
      if (e.which == 71)  alert('G pressed!');
    });
  }
  
  function submitIt() {
    $('form').on('submit', (e) => {
      alert('Your form is going to be submitted now.');
    });
  }
  
}

});
