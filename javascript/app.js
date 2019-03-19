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