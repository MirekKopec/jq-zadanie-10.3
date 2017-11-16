// scripts.js

$(function(){

	var carouselList = $("#carousel ul");

  function changeSlides(){
      carouselList.animate({'marginLeft':-500}, 800, moveFirstSlide);
  }

  function moveFirstSlide(){

    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});

  }

  setInterval(changeSlides, 3000);


});
