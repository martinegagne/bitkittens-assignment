document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM CONTENT LOADED");

  var buttonSummonKitties = document.querySelector('.summon-cats')
  var catDiv = document.querySelectorAll('.cat-box');

  buttonSummonKitties.addEventListener( 'click', function() {
    console.log('BUTTON CLICKED')

    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON',
    }).done(function(catData){
      for (var i = 0; i < catData.cats.length; i++) {

        var img = document.createElement('img');
        img.src = catData.cats[i].photo;
        img.alt = 'Photo of' + catData.cats[i].name;

        catDiv[i].append(img);
      }
    });

  });
});
