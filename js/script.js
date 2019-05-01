"use strict";

var elem = document.querySelector('.main-carousel');
var restartButton = document.getElementById("btn-restart");
var progressBar = document.querySelector('.progress-bar');

var flkty = new Flickity( elem, { 
  cellAlign: 'left',
  contain: true,
  hash: true
});

function goToBeginning() {
    flkty.select( 0, false, true );
}
restartButton.addEventListener ("click", goToBeginning);

flkty.on( 'scroll', function(progress) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});

// element argument can be a selector string
//   for an individual element


// var flkty = new Flickity( '.main-carousel', {
//   options
// });