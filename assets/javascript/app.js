var correct=0;
var wrong = 0;
var userAnswer;
var start;

document.onload =
    run();
    correct=0;
    wrong=0;
var QuestionArray=[
questionOne={
    Question: "What Zodiac Sign Does Mackenzie Have?",
    Options: ["Virgo","Libra", "Scorpio", "None of These"],
    Answer: "Scorpio",
},
questionTwo={
    Question: "Where Was Mackenzie Born?",
    Options: ["Atlanta", "New Orleans", "Brooklyn", "None of These"],
    Answer: "New Orleans",
},
questionThree={
    Question: "Where Does Mackenzie Work?",
    Options: ["Local Library","Target", "Chipotle", "None of These"],
    Answer: "Local Library",
},
questionFour={
    Question: "How Old is Mackenzie?",
    Options: ["18","19","20", "None of These"],
    Answer: "None of These",
},
questionFive={
    Question: "Which Form of Art is Mackenzie Trained In?",
    Options: ["Sketching", "Painting", "Sculpting", "All Of These"],
    Answer: "All Of These",
}];

$("#Questions").html("<h2>" + QuestionArray[0]["Question"] + "</h2>");
$("#Options").html("<button>" + QuestionArray[0]["Options".split(0-3)] + "</button>");

//separate each option to own button
    // on click of option button, move to next integer in array both question and options
        //  reset run(), decrement()
        //if button clicked = answer increaseRight()
        //else button clicked != answer increaseWrong()

function increaseRight(){
    correct+=1;
}
function increaseWrong(){
    wrong+=1;
}
console.log (correct);
console.log (wrong);

var number=  30;
var intervalId;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number--;
    $("#Time").html("<h2> Time Remaining: " + number + "</h2>");
if (number === 0) {
    stop()};
};
function stop() {
    clearInterval(intervalId);
    $("#Right").html("<h2> Right: "+ correct + "</h2>");
    $("#Wrong").html("<h2> Wrong: " + wrong + "</h2>");

}

