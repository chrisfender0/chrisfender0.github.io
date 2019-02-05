function huva(){
    var arrayBuddy =  [evanesco, HalloweenText, goingCrazy];
    var textArray = ["Watch your pointer !","HalloweenText activated !", "Shake it !"]
    var fifty_fifty = Math.floor(Math.random() * 3);
    arrayBuddy[fifty_fifty]();
    alert(textArray[fifty_fifty]);
}
function evanesco(){
    $( "li" ).hover(function() {
        $(this).fadeOut(1,null);
    });
    $( "button" ).hover(function() {
        $(this).fadeOut(1,null);
    });
    $( "img" ).hover(function() {
        $(this).fadeOut(1,null);
    });
    $( "a" ).hover(function() {
        $(this).fadeOut(1,null);
    });
}
function HalloweenText(){
    $( "button" ).hover(function(){
        $(this).addClass("extra");
    });
    $( "h3" ).hover(function(){
        $(this).addClass("extra");
    });
    $( "p" ).hover(function(){
        $(this).addClass("extra");
    });
    $( "a" ).hover(function(){
        $(this).addClass("extra");
    });
    $( "nav" ).hover(function(){
        $(this).addClass("extra");
    });
}
function goingCrazy(){
    $("img").addClass("moveMe"); 
    $("a").addClass("moveMe");
    $("button").addClass("moveMe");
}