//Makes sure HTML loads first
$(document).ready(function () {
  $("#origAnimated").hide();
  //On-click that copies translated text to the clipboard
  //Reference found here: "https://codepen.io/shaikmaqsood/pen/XmydxJ"
  $("#copy-to-clipboard").on("click", function () {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#Klingon").text()).select();
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
    window.setTimeout(divSwap, 6000);
    textHolder.attr("class", "fadeOut animated");   
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      let textResponse = response.contents.translated;
      let textHolder = $("<span>").text(textResponse);
      textHolder.attr("class", "fadeIn animated");
      console.log(textResponse);
      $("#Klingon").append(textHolder);
    })
  })
  function divSwap() {
    $("#origAnimated").hide();
    $("#original").val("");
    $("#original").show();
  }
  //on-click for old-english translate button
  $("#translate").on("click", function () {
    let engInput = $("#english").val().trim();
    let eQueryURL = "https://api.funtranslations.com/translate/oldenglish.json?text=" + engInput;
    $.ajax({
      url: eQueryURL,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      let transResponse = data.contents.translated
      let transHolder = $("<span>").text(transResponse);
      transHolder.attr("class", "fadeIn animated");
      console.log(transResponse);
      $("#Old-English").append(transHolder);
    })
    $("#english").val("");
  })
  //on-click for the clear button
  $("#clear").on("click", function () {
    $("#english").empty();
    $("#Old-English").empty();
  })
  //on-click for klingon clear
  $("#cleared").on("click", function () {
    $("#Klingon").empty();
  })
})