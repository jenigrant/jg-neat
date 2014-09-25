$ (window).scroll(function() {
    $(".fade").fadeTo(2000, 0.125, "swing");
});


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateCloud(id, min, max, parentElem) {
  //insert a cloud element into passed element
    //make a div

  var x = getRandomInt(2, 5); var y = getRandomInt(7, 15);
  var cloudWidth =  getRandomInt(min, max);
  var cloudHeight = (cloudWidth / x) + y;

  var cloud = $("<div/>", {
      "class" : "cloud",
      "id" : "cloud-" + id,
      "css" : {
        "position" : "absolute",
        "height" : 300 + "px",
        "width" :  800 + "px",
        "z-index" : 99
      }
  }).prependTo(parentElem);

//holy shit this is ugly, is what this is

  var cloudElem1 = $("<span/>", {
      "css" : {
          "display" : "inline-block",
          "background-color" : "white",
          "border-color" : "red",
          "height" : (cloudWidth / 4) * 2.8 + "px", //height and width must be the same
          "width" : (cloudWidth / 4) * 2.8 + "px",
          "border-radius" : (cloudWidth / 4) * 2.8 + "px",
          "position" : "relative",
          "top" : "-5px",
          "left" : "auto",
          "right" :  ((cloudWidth / 4) * 3) + "px",
          "vertical-align" : "middle"
      }
  }).prependTo(cloud);

  var cloudElem2 = $("<span/>", {
      "css" : {
        "display" : "inline-block",
        "background-color" : "white",
        "border-color" : "blue",
        "height" : cloudHeight + "px",
        "width" : cloudWidth + "px",
        "border-radius" : cloudHeight + "px",
        //"box-shadow" : "0 5px 7px 0 rgba(167, 167, 167, .5)",
        "vertical-align" : "middle"
      }
  }).prependTo(cloud);

var cloudElem3 = $("<span/>", {
      "css" : {
        "display" : "inline-block",
        "background-color" : "white",
        "border-color" : "green",
        "height" : cloudHeight * 1.5 + "px",
        "width" : cloudWidth / 2.33 + "px",
        "border-radius" : cloudHeight * 1.5 + "px",
        //"box-shadow" : "0 5px 7px 0 rgba(167, 167, 167, .5)",
        "position" : "relative",
        "left" : (cloudWidth / 2) + "px",
        "top" : "0",
        "transform" : "rotate(30deg)",
        "vertical-align" : "middle"
      }
  }).prependTo(cloud);

  $(cloud).draggable();

 return cloud;


      //?give it a generic class of cloud
      //?give is a specific class of cloud number (can id work?) 

  //give clouds shape in CSS 
    //make the div an oval
      //height: long
      //width: long/4 + 1-=0
    //give it a solid white background
    //define a border radius the same as height
    //position it absolutely 
    //give the cloud a layer

    //select the cloud element's before and after
    //height, width, background, border-radius, position: absolute;
    //define height/width seperately for each node
    //rotate both nodes 30deg
    //mode one node towards center of cloud
    //move one node up or down (same node?)

    // can't select pseudo-elements in JS

    /*        ":before" : {
          "css" : {
            "background-color" : "red",
            "border-color" : "red",
            "height" : cloudHeight / 2,
            "width" : cloudWidth / 3.3,
            "transform" : "rotate(30deg)",
            "position" : "relative",
            "top" : "10px",
            "left" : "5px"
          }
        },
        ":after" : {
          "css" : {
            "background-color" : "#0F0F0F",
            "border-color" : "#0F0F0F",
            "height" : cloudHeight / 2.75,
            "width" : cloudWidth / 1.5,
            "position" : "relative",
            "top" : "5px",
            "left" : "-15px"
          }
        } */

}

function placeCloud(cloud) {

console.log("cloud: " + $("#hero").parent().height());

var cloudLeft = getRandomInt(1, $(cloud).parent().width() - 300);
var cloudTop = getRandomInt(1, 450); //hardcoding here, tsk.

$(cloud).css ({
        "left" : cloudLeft + "px",
        "top" : cloudTop + "px"
});



//         "left" : cloudLeft + "px",
//        "top" : cloudTop + "px",
}

function animateCloud() {

}

function raiseStorm(min, max, minheight, minwidth, parent) {

//select a random integer number of clouds to generate

var numClouds = getRandomInt(min, max);

for (var i = 0; i < numClouds; i++) {
    var cloud = generateCloud(i, minheight, minwidth, parent);
    placeCloud(cloud);
    animateCloud(cloud);
   // more statements

}

//generateCloud();

//placeCloud();

//animateCloud();
}






$( document ).ready(function() {

  $("#clouds").ready(function() {
    //note to self: this function is called before the rest of the document is generated
    raiseStorm(2, 5, 100, 300, $("#clouds"));
  });

});





