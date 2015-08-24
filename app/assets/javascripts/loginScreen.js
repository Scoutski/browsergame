$(document).ready(function() {
  if ($('.loginContainer').length < 0) {
    return;
  }
  console.log('You are on the login screen.');

  // Function hides the overlay and sign-up window.
  // var hideSignUpOverlay = function() {
  //   // $('.overlay').hide();
  //   $('.signUpBox').hide();
  //   TweenMax.to(".loginBox", 1.2, { left: "50%", ease: Expo.easeOut});
  // };

  // THE FOLLOWING FOUR FUNCTIONS ARE FOR WHEN THE USER SELECTS THE SIGN UP BUTTON.
  // ------------------------------------------------------------------------------
  var shrinkLoginBox = function() {
    TweenMax.to('.loginBox', .6 , { scale:.7, ease: Expo.easeOut, onComplete:moveOutLoginBox});
  };

  var moveOutLoginBox = function() {
    TweenMax.to(".loginBox", 1.8, { left: "-20%", ease: Expo.easeOut });
    moveInSignUpBox();
  };

  var moveInSignUpBox = function() {
    TweenMax.to(".signUpBox", 1.8, { left: "50%", ease: Expo.easeOut, onComplete: growSignUpBox });
  };

  var growSignUpBox = function() {
    TweenMax.to(".signUpBox", .6, { scale:1, ease: Expo.easeOut });
  };
  // ------------------------------------------------------------------------------

  // THE FOLLOWING FOUR FUNCTIONS ARE FOR WHEN THE USER CLOSES THE SIGN UP WINDOW.
  // ------------------------------------------------------------------------------
  var shrinkSignUpBox = function() {
    TweenMax.to('.signUpBox', .6 , { scale:.7, ease: Expo.easeOut, onComplete:moveOutSignUpBox});
  };

  var moveOutSignUpBox = function() {
    TweenMax.to(".signUpBox", 1.8, { left: "120%", ease: Expo.easeOut });
    moveInLoginBox();
  };

  var moveInLoginBox = function() {
    TweenMax.to(".loginBox", 1.8, { left: "50%", ease: Expo.easeOut, onComplete: growLoginBox });
  };

  var growLoginBox = function() {
    TweenMax.to(".loginBox", .6, { scale:1, ease: Expo.easeOut });
  };  

  // ------------------------------------------------------------------------------

  // click handler for the 'Sign Up' button and the 'Close Window' buttons to transition with the correct animations.
  $("#signUpButton").on('click', shrinkLoginBox);
  $('#closeWindowButton').on('click', shrinkSignUpBox);

  // click handler for the new sign up button.
  

  //Initialise the sign up button function:
  TweenMax.set('.signUpBox', { scale:.7 }); 

});

