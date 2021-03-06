$(document).ready(function() {
  if ($('.loginContainer').length < 0) {
    // Does not run any extra code if not on the login page.
    return;
  }
  
  console.log('You are on the login screen.');
  //Initialise the sign up window size:
  TweenMax.set('.signUpBox', { scale:.7 }); 

  // THE FOLLOWING FOUR FUNCTIONS ARE FOR WHEN THE USER SELECTS THE SIGN UP BUTTON.
  // ------------------------------------------------------------------------------
  var shrinkLoginBox = function() {
    TweenMax.to('.loginBox', .6 , { css: { scale: ".7", webkitBoxShadow: "0px 0px 0px 0px #003D19", mozBoxShadow: "0px 0px 0px 0px #003D19", boxShadow: "0px 0px 0px 0px #003D19;" }, ease: Expo.easeOut, onComplete:moveOutLoginBox});
  };

  var moveOutLoginBox = function() {
    TweenMax.to(".loginBox", 1.8, { left: "-20%", ease: Expo.easeOut });
    moveInSignUpBox();
  };

  var moveInSignUpBox = function() {
    TweenMax.to(".signUpBox", 1.8, { left: "50%", ease: Expo.easeOut, onComplete: growSignUpBox });
  };

  var growSignUpBox = function() {
    TweenMax.to(".signUpBox", .6, { css: { scale: "1", webkitBoxShadow: "8px 8px 3px -5px #003D19", mozBoxShadow: "8px 8px 3px -5px #003D19", boxShadow: "8px 8px 3px -5px #003D19;"}, ease: Expo.easeOut });
  };
  // ------------------------------------------------------------------------------

  // THE FOLLOWING FOUR FUNCTIONS ARE FOR WHEN THE USER CLOSES THE SIGN UP WINDOW.
  // ------------------------------------------------------------------------------
  var shrinkSignUpBox = function() {
    TweenMax.to('.signUpBox', .6 , { css: { scale: ".7", webkitBoxShadow: "0px 0px 0px 0px #003D19", mozBoxShadow: "0px 0px 0px 0px #003D19", boxShadow: "0px 0px 0px 0px #003D19;" }, ease: Expo.easeOut, onComplete:moveOutSignUpBox});
  };

  var moveOutSignUpBox = function() {
    TweenMax.to(".signUpBox", 1.8, { left: "120%", ease: Expo.easeOut });
    moveInLoginBox();
  };

  var moveInLoginBox = function() {
    TweenMax.to(".loginBox", 1.8, { left: "50%", ease: Expo.easeOut, onComplete: growLoginBox });
  };

  var growLoginBox = function() {
    TweenMax.to(".loginBox", .6, { css: { scale: "1", webkitBoxShadow: "8px 8px 3px -5px #003D19", mozBoxShadow: "8px 8px 3px -5px #003D19", boxShadow: "8px 8px 3px -5px #003D19;"}, ease: Expo.easeOut });
  };  

  // ------------------------------------------------------------------------------

  // click handler for the 'Sign Up' button and the 'Close Window' buttons to transition with the correct animations.
  $("#signUpButton").on('click', shrinkLoginBox);
  $('#closeWindowButton').on('click', shrinkSignUpBox);

  // click handler for the new sign up button.

});

