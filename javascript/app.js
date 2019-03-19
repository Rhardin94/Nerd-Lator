//On-click that copies translated text to the clipboard
//Reference found here: "https://codepen.io/shaikmaqsood/pen/XmydxJ"
$("#copy-to-clipboard").on("click", function() {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#Klingon").text()).select();
    document.execCommand("copy"); 
    $temp.remove();
});
//on-click for ajax request
$("#translated").on("click", function() {
    let textInput = $("#original").val().trim();
    var queryURL = "https://api.funtranslations.com/translate/klingon.json?text=" + textInput;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        let textResponse = response.contents.translated;
        console.log(textResponse);
        $("#Klingon").append(textResponse);
    })
    $("#original").val("");
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
//on-click for the clear button
$("#clear").on("click", function() {
    $("#english").empty();
    $("#Old-English").empty();
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
