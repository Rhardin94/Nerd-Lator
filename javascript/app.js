//On-click that copies translated text to the clipboard
//Reference found here: "https://codepen.io/shaikmaqsood/pen/XmydxJ"
$("#copy-to-clipboard").on("click", function() {
    let transText = $("#translated").val().trim();
    let tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val($(transText).text()).select();
    document.execCommand("copy");
    tempInput.remove();
});