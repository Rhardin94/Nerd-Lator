//Makes sure HTML loads first
$(document).ready(function () {
  //Timeout for the fontswap function set to 4 seconds
  window.setTimeout(fontSwap, 4000);
//Function taht swaps klingon font with Federation font
  function fontSwap() {
    $("body").removeClass("funkyFont");
  }
  //Hide the animation divs on page load
  $("#origAnimated").hide();
  $("#engAnimated").hide();
  //Functions that apply to klingon.html
  //On-Click for copy to clipboard button/function
  //Reference found here: "https://codepen.io/shaikmaqsood/pen/XmydxJ"
  $("#copy-to-clipboard").on("click", function () {
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
    if ($("#original").val() === "") {
      return false;
    }
    var queryURL = "https://api.funtranslations.com/translate/klingon.json?text=" + textInput;
    let textHolder = $("<span>").text(textInput);
    $("#original").hide();
    $("#origAnimated").show();
    $("#origAnimated").append(textHolder);
    window.setTimeout(divSwap, 1000);
    textHolder.addClass("animated fadeOut");
    $.ajax({
      url: queryURL,
      method: "GET",
      headers: {
        "X-FunTranslations-Api-Secret": "3S5WzR119t49935jscXzSgeF",
      }
    }).then(function (response) {
      let textResponse = response.contents.translated;
      let engResponse = response.contents.text;
      let textHolder = $("<span>").text("(" + engResponse + ") " + textResponse);
      textHolder.addClass("animated fadeIn");
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
  //Function to animate Klingon facts
  function factsAnimate() {
    const animateFacts = $(".animated-word");
    animateFacts.addClass('animated fadeIn slow');
  }
  //This setTimeout runs the facts function
  //Method used to avoid factAnimate functions running unnecessarily found here: "https://stackoverflow.com/questions/17970734/how-to-call-window-load-event-on-specific-page"
  if (window.location.href.match("/klingon.html") != null) {
    setTimeout(kFacts, 1000);
  } else {
    clearTimeout(kFacts);
  }
  //facts function which dynamically shows each item from kliFacts array one at a time in a p tag with a delay timer
  function kFacts() {
    setTimeout(function () {
      $(".cool-facts").html("<p class=animated-word>" + kliFacts[0]);
      factsAnimate();
    }, 2000);
    setTimeout(function () {
      $(".cool-facts").html("<p class=animated-word>" + kliFacts[1]);
      factsAnimate();
    }, 8000);
    setTimeout(function () {
      $(".cool-facts").html("<p class=animated-word>" + kliFacts[2]);
      factsAnimate()
    }, 14000);
    setTimeout(function () {
      $(".cool-facts").html("<p class=animated-word>" + kliFacts[3]);
      factsAnimate()
    }, 20000);
    setTimeout(function () {
      $(".cool-facts").html("<p class=animated-word>" + kliFacts[4]);
      factsAnimate()
    }, 26000);
    setTimeout(kFacts, 32000);
  }
  //Functions for Old-English.html
  //On-Click for copy to clipboard button/function
  //Reference found here: "https://codepen.io/shaikmaqsood/pen/XmydxJ"
  $("#Copy-to-Clipboard").on("click", function () {
    let inputText = $("#Old-English");
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(inputText).text()).select();
    document.execCommand("copy");
    $temp.remove();
  });
  //on-click for old-english translate button
  $("#translate").on("click", function () {
    let engInput = $("#english").val().trim();
    if ($("#english").val() === "") {
      return false;
    }
    let eQueryURL = "https://api.funtranslations.com/translate/oldenglish.json?text=" + engInput;
    let engHolder = $("<span>").text(engInput);
    $("#english").hide();
    $("#engAnimated").show();
    $("#engAnimated").append(engHolder);
    window.setTimeout(engDivSwap, 1000);
    engHolder.addClass("animated fadeOut");
    $.ajax({
      url: eQueryURL,
      method: "GET",
      headers: {
        "X-FunTranslations-Api-Secret": "QsiIkEAVkbGd_qXfagBAHAeF",
      }
    }).then(function (data) {
      let transResponse = data.contents.translated
      let engData = data.contents.text;
      let transHolder = $("<span>").text("(" + engData + ") " + transResponse);
      transHolder.addClass("animated fadeIn");
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
    $("#clear").on("click", function () {
      $("#english").empty();
      $("#engAnimated").empty();
      $("#Old-English").empty();
    })
  })
  //on-click for klingon clear
  $("#cleared").on("click", function () {
    $("#Klingon").empty();
  })

})
//Array for Old English facts (currently with some placeholder data)
var oeFacts = [
  "Old English language, also called Anglo-saxon, language spoken and written in England before 1100; it is the ancestor of Middle English and Modern English.",
  "Old English was spoken by the Anglo-Saxons who came to England from what is now Germany and Denmark.",
  "Old English is very different from Modern English; it has many more Germanic words, and its grammar is more difficult and closer to Old German. Old English slowly turned into Middle English after the Norman Conquest of 1066.",
  "Beowulf is written in Old English. It is an Old English epic poem consisting of 3,182 alliterative lines. It is arguably one of the most important works of Old English literature.",
  "Beowulf, a hero of the Geats, comes to the aid of Hrothgar, the king of the Danes, whose mead hall in Heorot has been under attack by a monster known as Grendel.",
  "In 1852, the German linguist, Jacob Grimm, called English 'the language of the world', and predicted it was 'destined to reign in future with still more extensive sway over all parts of the globe.",
];
//Function to animate Old English facts
function factAnimate() {
  const animateFacts = $('.animate-word');
  animateFacts.addClass('animated fadeInRight slow');
}
//This setTimeout runs the facts function
//Method used to avoid factAnimate functions running unnecessarily found here: "https://stackoverflow.com/questions/17970734/how-to-call-window-load-event-on-specific-page"
if (window.location.href.match("/Old-English.html") != null) {
  setTimeout(facts, 1000);
} else {
  clearTimeout(facts);
}
//facts function which dynamically shows each item from oeFacts array one at a time in a p tag with a delay timer
function facts() {
  setTimeout(function () {
    $(".fun-facts").html("<p class=animate-word>" + oeFacts[0]);
    factAnimate();
  }, 2000);
  setTimeout(function () {
    $(".fun-facts").html("<p class=animate-word>" + oeFacts[1]);
    factAnimate();
  }, 8000);
  setTimeout(function () {
    $(".fun-facts").html("<p class=animate-word>" + oeFacts[2]);
    factAnimate()
  }, 14000);
  setTimeout(function () {
    $(".fun-facts").html("<p class=animate-word>" + oeFacts[3]);
    factAnimate()
  }, 20000);
  setTimeout(function () {
    $(".fun-facts").html("<p class=animate-word>" + oeFacts[4]);
    factAnimate()
  }, 26000);
  setTimeout(facts, 30000);
}