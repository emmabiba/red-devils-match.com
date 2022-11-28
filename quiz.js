// Define the questions and answer choices
const question0 = {
  question: "Choose a position...",
};

const choices0 = {
  choice1: "Goalkeeper",
  choice2: "Defender",
  choice3: "Midfielder",
  choice4: "Forward"
};

//Goalkeepers
const goalkeeper = {
  question: "Choose a country..."
}

const goalkeeperChoices = {
  choice1: "England",
  choice2: "Spain"
}

//Defenders

//Midfielders

//Forwards

//Result Heading

const result = {
  heading: "We think you'd really kick it off with...",
}

//Populate first question on the page
function populate() {
    //show question
		var element = document.getElementById('section-1');
		element.innerHTML = question0.question;

		//show choices
    var buttonGroup = document.getElementById('section-2');
    buttonGroup.innerHTML = "<button type='button' onclick='question1()'>" + choices0.choice1 + "</button>" + "<button type='button'>" + choices0.choice2 + "</button>" + "<button type='button'>" + choices0.choice3 + "</button>" + "<button type='button'>" + choices0.choice4 + "</button>";
  };

  function question1() {
    //show question
    var element = document.getElementById('section-1');
		element.innerHTML = goalkeeper.question;

    //showchoices
    var buttonGroup = document.getElementById('section-2');
    buttonGroup.innerHTML = "<button type='button'>" + goalkeeperChoices.choice1 + "</button>" + "<button type='button' onclick='deGea()'>" + goalkeeperChoices.choice2 + "</button>";
  }

  //Result Functions

  function deGea() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>David de Gea</p>" + "<a href='quiz.html'>Retake the Quiz</a>";

  }

  populate();
