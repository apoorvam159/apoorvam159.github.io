let my_var = 100;
var my_other_var = "hello world";
my_other_var += "!";

// how to interact with DOM

console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1");
    document.getElementById("paragraph").innerHTML = "this is a new paragraph";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("image").src = "laughing.jpg";

})

console.log(document.getElementById("my_head").innerHTML);