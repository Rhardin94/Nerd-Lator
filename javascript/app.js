//On-click that copies translated text to the clipboard
//Reference found here: "https://codepen.io/shaikmaqsood/pen/XmydxJ"
$("#copy-to-clipboard").on("click", function () {
    let transText = $("#translated").val().trim();
    let tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val($(transText).text()).select();
    document.execCommand("copy");
    tempInput.remove();
});
//on-click for ajax request
$("#button").on("click", function () {
    let textInput = $("#text").val().trim();
    var queryURL = "https://api.funtranslations.com/translate/klingon.json?text=" + textInput;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        let textResponse = response.contents.translated;
        console.log(textResponse);
    })
})