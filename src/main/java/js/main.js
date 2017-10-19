var button = document.getElementById("hello-button");

function buttonClick() {
    console.log("Button clicked");

    var customText = document.getElementsByClassName("input");
    var results = document.getElementById("text");
    results.innerHTML = " Hello, " + customText[0].value;
}