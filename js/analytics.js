
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '897051573781708',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.7'
    });
    FB.AppEvents.logPageView();   
  };



   
   function onButtonClick() {
  // Add this to a button's onclick handler
  FB.AppEvents.logEvent("pressedFacebookButton");
 }
 