function  saySomething(phrase) {
    console.log(" you said: " + phrase);

}

function getPhraseLength(phrase, another) {
    var l = phrase.length + another.length;
    return l;
}

var p1 = "long";
var p2 = "short";

var thisLength = getPhraseLength(p1, p2);

console.log(thisLength);
