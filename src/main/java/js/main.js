var button = document.getElementById("hello-button");

function buttonClick() {
    console.log("Button clicked");

    var customText = document.getElementsByClassName("input");
    var textArea = document.getElementsByClassName("textarea");
    var results = document.getElementById("text");

    console.log("textArea");
    results.innerHTML = " Hello, " + customText[0].value + "<br />";
    results.innerHTML += " Message " + textArea[0].value;

}