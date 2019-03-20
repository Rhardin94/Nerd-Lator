//Makes sure HTML loads first
$(document).ready(function () {
  //Hide the animation divs on page load
  $("#origAnimated").hide();
  $("#engAnimated").hide();
  //Functions that apply to klingon.html
  //On-Click for copy to clipboard button/function
  //Reference found here: "https://codepen.io/shaikmaqsood/pen/XmydxJ"
  $("#copy-to-clipboard").on("click", function() {
    let inputText = $("#Klingon");
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(inputText).text()).select();
    document.execCommand("copy");
    $temp.remove();
  });
  //on-click for klingon translate
  $("#translated").on("click", function () {
    let textInput = $("#original").val().trim();
    var queryURL = "https://api.funtranslations.com/translate/klingon.json?text=" + textInput;
    let textHolder = $("<span>").text(textInput);
    $("#original").hide();
    $("#origAnimated").show();
    $("#origAnimated").append(textHolder);
    window.setTimeout(divSwap, 1000);
    textHolder.addClass("animated flipOutX");   
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      let textResponse = response.contents.translated;
      let engResponse = response.contents.text;
      let textHolder = $("<span>").text("(" + engResponse + ") " + textResponse);
      textHolder.addClass("animated flipInX");
      console.log(textHolder);
      $("#Klingon").append(textHolder);
    })
  })
  //Function that seamlessly transitions input box to div so text can animate
  function divSwap() {
    $("#origAnimated").hide();
    $("#origAnimated").val("");
    $("#original").val("");
    $("#original").show();
  }
  //on-click for klingon clear
  $("#cleared").on("click", function () {
    $("#Klingon").empty();
    $("#original").empty();
    $("#origAnimated").empty();
  })
  //Array for Klingon facts
var kliFacts = [
  "The Klingons have long been a major enemy to the Federation. The Klingon Empire is one of the most powerful alliances in the Star Trek Galaxy",
  "The Klingons are most recognized for having aggressive, war-like behavior. Combat is their defining characteristic.",
  "Though the Klingons can be brutal, they're more than just beast-like thugs. The Klingons can be a noble race with an emphasis on honor and ritual.",
  "One of the most popular Klingons is Worf, played by Michael Dorn. Worf served as the security officer aboard the Enterprise-D on Star Trek: The Next Generation. ",
  "Klingon scientists tried to use human DNA to enhance their species. In the process, they accidentally created a virus that removed Klingon forehead ridges in its victims.",
  "Klingon culture values victory in combat above all else. Their greeting and even mating is all about violence and brutality.",
  ];
  //Function to animate Old English facts
  function factAnimate(){
  const animateFacts = $(".animate-word");
  animateFacts.addClass('animated fadeIn');
  }
  //This setTimeout runs the facts function
  setTimeout(facts, 1000);
  //facts function which dynamically shows each item from kliFacts array one at a time in a p tag with a delay timer
  function facts(){
      setTimeout(function(){
          $(".cool-facts").html("<p class=animate-word>" + kliFacts[0]);
          factAnimate();
      }, 2000);
      setTimeout(function(){
          $(".cool-facts").html("<p class=animate-word>" + kliFacts[1]);
          factAnimate();
      }, 8000);
      setTimeout(function(){
          $(".cool-facts").html("<p class=animate-word>" +kliFacts[2]);
          factAnimate()
      }, 14000);
      setTimeout(function(){
          $(".cool-facts").html("<p class=animate-word>" +kliFacts[3]);
          factAnimate()
      }, 20000);
      setTimeout(function(){
          $(".cool-facts").html("<p class=animate-word>" +kliFacts[4]);
          factAnimate()
      }, 26000);
      setTimeout(facts, 32000);
  }
  //Functions for Old-English.html  }
  //on-click for old-english translate button
  $("#translate").on("click", function () {
    let engInput = $("#english").val().trim();
    let eQueryURL = "https://api.funtranslations.com/translate/oldenglish.json?text=" + engInput;
    let engHolder = $("<span>").text(engInput);
    $("#english").hide();
    $("#engAnimated").show();
    $("#engAnimated").append(engHolder);
    window.setTimeout(engDivSwap, 1000);
    engHolder.addClass("animated flipOutX");
    $.ajax({
      url: eQueryURL,
      method: "GET",
    }).then(function(data) {
      let transResponse = data.contents.translated
      let engData = data.contents.text;
      let transHolder = $("<span>").text("(" + engData + ") " + transResponse);
      transHolder.addClass("animated flipInX");
      console.log(transHolder.text());
      $("#Old-English").append(transHolder);
    })
  })
  //Function that swaps divs for animating text
  function engDivSwap() {
    $("#engAnimated").hide();
    $("#engAnimated").val("");
    $("#english").val("");
    $("#english").show();
  }
  //on-click for Old-English clear button
  $("#clear").on("click", function () {
//on-click for the clear button
$("#clear").on("click", function() {
    $("#english").empty();
    $("#engAnimated").empty();
    $("#Old-English").empty();
  })
})
//on-click for klingon clear
$("#cleared").on("click", function() {
    $("#Klingon").empty();
})

})
//Array for Old English facts (currently with some placeholder data)
var oeFacts = [
"Old English language, also called Anglo-saxon, language spoken and written in England before 1100; it is the ancestor of Middle English and Modern English.",
"fact2",
"fact3",
"fact4",
"fact5",
"fact6",
];

//Function to animate Old English facts
function factAnimate(){
const animateFacts = document.querySelector('.animate-word');
animateFacts.classList.add('animated','flipInX');
}

//This setTimeout runs the facts function
setTimeout(facts,1000);

//facts function which dynamically shows each item from oeFacts array one at a time in a p tag with a delay timer
function facts(){
    setTimeout(function(){
        $(".fun-facts").html("<p class=animate-word>" + oeFacts[0]);
        factAnimate();
    },3000);
   
    setTimeout(function(){
        $(".fun-facts").html("<p class=animate-word>" + oeFacts[1]);
        factAnimate();
    },6000);

    setTimeout(function(){
        $(".fun-facts").html("<p class=animate-word>" +oeFacts[2]);
        factAnimate()
    },9000);

    setTimeout(function(){
        $(".fun-facts").html("<p class=animate-word>" +oeFacts[3]);
        factAnimate()
    },12000);

    setTimeout(function(){
        $(".fun-facts").html("<p class=animate-word>" +oeFacts[4]);
        factAnimate()
    },15000);

    setTimeout(facts,18000);
}
