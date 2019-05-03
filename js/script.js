"use strict";

var elem = document.querySelector('.main-carousel');
var restartButton = document.getElementById("btn-restart");
var progressBar = document.querySelector('.progress-bar');

var carouselContainer = document.getElementById("main-carousel");
var carouselElement = document.getElementById("cities-array-element").innerHTML;
Mustache.parse(carouselElement);

var citiesArray = [
            {
                imageSrc: "https://images.pexels.com/photos/87374/pexels-photo-87374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                title: "Louvre Museum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                imageSrc: "https://images.pexels.com/photos/1114892/pexels-photo-1114892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                title: "Brandenburg Gate",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                imageSrc: "https://images.pexels.com/photos/1243538/pexels-photo-1243538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                title: "Papal Basilica of St. Peter ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                imageSrc: "https://images.pexels.com/photos/42061/architecture-building-city-dark-42061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                title: "London Bridge ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                imageSrc: "https://images.pexels.com/photos/83133/night-83133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                title: "Wilanow Palace ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
];


function carouselBuilder() {
  for (var i = 0; i < citiesArray.length; i++ ){
    var div = document.createElement("div");
    div.setAttribute("class", "carousel-cell");
    div = Mustache.render(carouselElement, citiesArray[i]);  
    carouselContainer.insertAdjacentHTML('beforeend', div);   
    // console.log(div);  
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
restartButton.addEventListener ("click", goToBeginning);

flkty.on( 'scroll', function(progress) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});

