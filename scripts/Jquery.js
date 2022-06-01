console.log("hi")
console.log(1+2)
console.log('1+2')

// jquery code to target cards
$(function(){
    $(".card-box").animate({
        "margin-left":"10px",
        "background": "#000"
    },2000);
});

$(function(){
    $(".card-box").fadeOut(2000)
    alert("faded succesfully")
});

$(function(){
    $("card-box").toggle()
});

$(function(){
    $("tooltip").hover({
        "margin-right":"30px"
    })
    console.log("hovered")
});

$(function(){
    $("#btn-click").click(function() {
        console.log("Button was clicked");
    });
});

document.getElementById('#btn-click').addEventListener('click', onclick);
function onclick(e){
   console.log("clicked")
}