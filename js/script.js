"use strict";
var elem = document.querySelector('.main-carousel');
var restartButton = document.getElementById("btn-restart");
var progressBar = document.querySelector('.progress-bar');
var infos = document.getElementById("infos");
var mapCoordinates = [];
var carouselContainer = document.getElementById("main-carousel");
var carouselElement = document.getElementById("cities-array-element").innerHTML;
Mustache.parse(carouselElement);

function carouselBuilder() {
  for (var i = 0; i < citiesArray.length; i++ ){
    var div = document.createElement("div");
    div = Mustache.render(carouselElement, citiesArray[i]); 
    carouselContainer.insertAdjacentHTML('beforeend', div);     
  }
}
carouselBuilder();

var flkty = new Flickity( elem, { 
  cellAlign: 'left',
  contain: true,
  hash: true
});

function goToBeginning() {
    flkty.select( 0, false, true );
}
restartButton.addEventListener("click", goToBeginning);

flkty.on( 'scroll', function(progress) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});

// Initialize and add the map
window.initMap = function() {
    // LOCATION
    function createArraywWithCooridinates() {
        for (var i = 0; i < citiesArray.length; i++) {   
        var mapCoordinate = citiesArray[i].coords;
        mapCoordinates.push(mapCoordinate);
        };  
        return mapCoordinates;
    };
    createArraywWithCooridinates();
    var paris = mapCoordinates[0];

    // MAP
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 7, 
            center: paris
    });

    // MARKER
    function rewind(index) {
        flkty.select( index, true, true );    
    };  

    function registerMarkerListener(marker, index ) {
        marker.addListener("click", function() {
            rewind(index);
        });
    }
    
    function addMarkersForCoordinates() {
        for(var i = 0; i < mapCoordinates.length; i++) {
            var mapCoordinate = mapCoordinates[i];
            var marker = new google.maps.Marker({
                position: mapCoordinate, 
                map: map
            });
            registerMarkerListener(marker, i);
        } 
    };
    addMarkersForCoordinates();

    flkty.on( 'change', function(index) {
        for (var i = 0; i < mapCoordinates.length; i++){
            var coordinate = mapCoordinates[index];
            map.panTo(coordinate);
            map.setZoom(7);
        }
        return coordinate; 
     });
    
    document.getElementById("center-map").addEventListener("click", function(event) {
        event.preventDefault();
        map.setZoom(10);
    });
  }

	

