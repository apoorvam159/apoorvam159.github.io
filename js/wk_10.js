let my_var = 100;
var my_other_var = "hello world";
const this_is_a_constant = "constant";
console.log(my_other_var);
my_other_var += "!";

console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert("Hit my site title!");
    document.getElementById("paragraph").innerHTML = "You got this! The next few weeks learning JS will be so amazing and it's gonna be a great time. Peep my cute puppy who has gotten so much bigger and no longer looks like the picture.";
    document.getElementById("paragraph").style.color = "red";
    document.getElementById("image").src = "sitting copy.JPG";
})

console.log(document.getElementById("my_head").innerHTML);