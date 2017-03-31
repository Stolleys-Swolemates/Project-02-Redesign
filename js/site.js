// Stolley only wants one js file
// Also, avoid using "onclick" when you guys do html tags

$(document).ready(function () {
  // Frontpage submit
  $("#loginForm").on('submit', function (e) {
    
  });
  
  $("#usernameInput").on('focus', function() {
    $('#user label').addClass('gone');
    if( $('#passwordInput').val().length === 0) {
      $('#pass label').removeClass('gone');
    }
  });
  
  $("#passwordInput").on('focus', function() {
    $('#pass label').addClass('gone');
    if( $('#usernameInput').val().length === 0) {
      $('#user label').removeClass('gone');
    }
  });
 
});