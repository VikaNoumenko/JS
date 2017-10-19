var button = document.getElementById("hello-button");

function buttonClick(){
    console.log("Button clicked");
   // button.removeEventListener("click", buttonClick);
    //return an object with variable:
    document.getElementById("text").innerHTML = " Don't click!";
}

//button.addEventListener("click", buttonClick);
var activities = ["go", "see"];
//removes last item in array:
console.log(activities.pop());
console.log(activities.push("walk"));
//like pop method:
activities.shift();
//at the beginning:
activities.unshift("eat");

activities.forEach(function (item, index) {
    console.log(" items", item, index);
});