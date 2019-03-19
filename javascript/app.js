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
    window.setTimeout(divSwap, 3000);
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
  //Functions for Old-English.html  }
  //on-click for old-english translate button
  $("#translate").on("click", function () {
    let engInput = $("#english").val().trim();
    let eQueryURL = "https://api.funtranslations.com/translate/oldenglish.json?text=" + engInput;
    let engHolder = $("<span>").text(engInput);
    $("#english").hide();
    $("#engAnimated").show();
    $("#engAnimated").append(engHolder);
    window.setTimeout(engDivSwap, 6000);
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
    $("#english").empty();
    $("#engAnimated").empty();
    $("#Old-English").empty();
  })
})