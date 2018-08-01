// // // When the header is hovered over, change the font color and when the mouse stops hovering, 
// // // it returns to the original color.When the paragraph element is clicked on, 
// it should populate the following paragraph: "jQuery is a fast, JavaScript library 
// that makes many tasks easier and simpler to accomplish. A JavaScript library contains
// \ pre-written JavaScript which makes developing applications a bit easier for the developer. 
// This means jQuery is not a language, but an extension of JavaScript. It takes many lines of 
// JavaScript code, which we would have had to write ourselves before jQuery, and compresses it."
// // Hint! You will be using a new jQuery method: .text()

// When a list element is double clicked on, it should be hidden
// When typing in an input, on keydown, toggle the following class:
// .input{
//     color: red;
// }

$(document).ready(function () {
    $(".title1").hover(function (){
        $(this).css("color","blue");
    }, function () {
        $(this).css("color", "black");
    });
});


$(document).ready(function () {
    $("p").click(function () {
        $("p").text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it");
    });
});


$(document).ready(function () {
    $("li").dblclick(function () {
        $(this).hide();
    });
});

$(document).ready(function () {
    $("input").keydown(function () {
        $(this).css("color", "red");
    });
});