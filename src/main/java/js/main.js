var button = document.getElementById("hello-button");

function buttonClick(){
    console.log("Button clicked");
   // button.removeEventListener("click", buttonClick);
    //return an object with variable:
    document.getElementById("text").innerHTML = " Don't click!";
}

//button.addEventListener("click", buttonClick);