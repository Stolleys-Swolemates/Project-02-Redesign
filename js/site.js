$(document).ready(function () {
  // Frontpage submit
  $("#loginForm").on('submit', function (e) {
  });
  
  // Hides username label when on focus
  $("#usernameInput").on('focus', function() {
    $('#user label').addClass('gone');
  });
  
  // Hides password label when on focus
  $("#passwordInput").on('focus', function() {
    $('#pass label').addClass('gone');
  });
  
  // Restores labels if input length is zero
  $('html').focusout(function() {
    if( $('#usernameInput').val().length === 0) {
      $('#user label').removeClass('gone');
    }
    if( $('#passwordInput').val().length === 0) {
      $('#pass label').removeClass('gone');
    }
  });
 
});
