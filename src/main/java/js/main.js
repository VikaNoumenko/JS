var button = document.getElementById("hello-button");

function buttonClick(){
    console.log("Button clicked");
    button.removeEventListener("click", buttonClick);
}

button.addEventListener("click", buttonClick);