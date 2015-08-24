$(document).ready(function() {
  if ($('.loginContainer').length < 0) {
    return;
  }
  console.log('You are on the login screen.');

  // Function hides the overlay and sign-up window.
  var hideSignUpOverlay = function() {
    $('.overlay').hide();
    $('.signUpBox').hide();
    TweenMax.to(".loginBox", 1.2, { left: "50%", ease: Expo.easeOut});
  };

  // Function shows the overlay and sign-up window.
  var showSignUpOverlay = function() {
    $('.overlay').show();
    $('.signUpBox').show();
  };

  // click handler for the 'Sign Up' button.
  $("#signUpButton").on('click', function() {
    console.log('you pushed the button');
    TweenMax.to(".loginBox", 1.2, { left: "12%", ease: Expo.easeOut, onComplete: showSignUpOverlay});
  });

  // click handler for the 'overlay' and the 'close window' button in the sign up window, both just hide the overlay and return to the login screen.
  $('.overlay').on('click', hideSignUpOverlay);
  $('#closeWindowButton').on('click', hideSignUpOverlay);

  // click handler for the new sign up button.
  

  //Initialise the sign up button function:
  $('.overlay').hide();
  $('.signUpBox').hide();

});

