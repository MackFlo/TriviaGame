var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "Who is married to Meredith?",
  answers: ["Alex Karev", "Derek Shepherd", "Preston Burke", "Arizona Robbins"],
  correctAnswer: "Derek Shepherd"
}, {
  question: "Which of the following has NOT been the name of the hospital?",
  answers: ["Seattle Grace Hospital", "Grey Shepherd Memorial Hospital", "Grey Sloan Memorial Hospital", "Seattle Grace Mercy West Hospital"],
  correctAnswer: "Grey Shepherd Memorial Hospital"
}, {
  question: "What is Joe's boyfriend's name?",
  answers: ["Timothy", "Walter", "Thomas", "Christopher"],
  correctAnswer: "Walter"
}, {
  question: "Which STD does George get from Nurse Olivia?",
  answers: ["Herpes", "Chlamydia", "Syphilis", "Gonorrhea"],
  correctAnswer: "Syphilis"
}, {
  question: "Who has NOT lived at Meredith's mother's house?",
  answers: ["Jo Wilson", "Teddy Altman", "George O'Malley", "Callie Torres"],
  correctAnswer: "Teddy Altman"
}, {
  question: "Which original intern wore glasses?",
  answers: ["Alex", "Izzie", "Cristina", "George"],
  correctAnswer: "Izzie"
}, {
  question: "What was the name of the patient Teddy Altman married?",
  answers: ["Harry", "Mark", "Zach", "Henry"],
  correctAnswer: "Henry"
}, {
  question: "Where does Derek get an opportunity to work in Season 10?",
  answers: ["Boston", "Washington D.C.", "Manhattan", "Los Angeles"],
  correctAnswer: "Washington D.C."
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='finished'>Finished</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Wrong Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Incomplete: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#finished", function() {
  game.done();
});
