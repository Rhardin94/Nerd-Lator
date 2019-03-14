//On-click that copies translated text to the clipboard
//Reference found here: "https://codepen.io/shaikmaqsood/pen/XmydxJ"
$("#Copy to Clipboard").on("click", function() {
    let transText = $("#Klingon").val().trim();
    let tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val($(transText).text()).select();
    document.execCommand("copy"); 
    tempInput.remove();
});
//on-click for ajax request
$("#translated").on("click", function() {
    let textInput = $("#english").val().trim();
    var queryURL = "https://api.funtranslations.com/translate/klingon.json?text=" + textInput;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        let textResponse = response.contents.translated;
        console.log(textResponse);
        $("#Klingon").append(textResponse);
    })
})
//on-click for old-english translate button
$("#translate").on("click", function() {
    let engInput = $("#english").val().trim();
    let eQueryURL = "https://api.funtranslations.com/translate/oldenglish.json?text=" + engInput;
    $.ajax({
        url: eQueryURL,
        method: "GET",
    }).then(function(data) {
        console.log(data);
        let unTransText = data.contents.text;
        let transResponse = data.contents.translated
        console.log(transResponse);
        $("#Old-English").append(unTransText + transResponse);
    })
    $("#english").val("");
})
//on-click for the clear button
$("#clear").on("click", function() {
    $("#english").empty();
    $("#Old-English").empty();
})
//on-click for klingon clear
$("#cleared").on("click", function() {
    $("#Klingon").empty();
})