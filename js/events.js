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
    $('input')
  }
  
}

});
