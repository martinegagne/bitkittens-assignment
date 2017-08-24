document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM CONTENT LOADED");

  var buttonSummonKitties = document.querySelector('.summon-cats')

  buttonSummonKitties.addEventListener( 'click', function() {
    console.log('BUTTON CLICKED')
  });
});
