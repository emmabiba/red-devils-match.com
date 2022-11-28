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

const defender = {
  question: "Fullback or Centerback?"
}

const defenderChoices = {
  choice1: "Fullback",
  choice2: "Centerback"
}

const defender1 = {
  question: "Choose a country..."
}

const defenderChoices1 = {
  choice1: "England",
  choice2: "Republic of Ireland"
}

//Midfielders

const midfielder = {
  question: "What's your dominant foot?"
}

const footChoices = {
  choice1: "Left",
  choice2: "Right",
  choice3: "Both"
}

const midfielder1 = {
  question: "Choose a country..."
}

const midfielder1Choices = {
  choice1: "England",
  choice2: "Wales"
}

const midfielder2 = {
  question: "Choose a country..."
}

const midfielder2Choices = {
  choice1: "England",
  choice2: "Republic of Ireland"
}

const midfielder3 = {
  question: "Are you a free kick taker?"
}

const midfielder3Choices = {
  choice1: "Yes",
  choice2: "No"
}
//Forwards

const forward = {
  question: "Choose a country..."
}

const forwardChoices = {
  choice1: "England",
  choice2: "Netherlands",
  choice3: "Norway",
  choice4: "Portugal"
}

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
    buttonGroup.innerHTML = "<button type='button' onclick='question1()'>" + choices0.choice1 + "</button>" + "<button type='button' onclick='defenderPosition()'>" + choices0.choice2 + "</button>" + "<button type='button' onclick='dominantFoot()'>" + choices0.choice3 + "</button>" + "<button type='button' onclick='forwardCountry()'>" + choices0.choice4 + "</button>";
  };

  function question1() {
    //show question
    var element = document.getElementById('section-1');
		element.innerHTML = goalkeeper.question;

    //show choices
    var buttonGroup = document.getElementById('section-2');
    buttonGroup.innerHTML = "<button type='button' onclick='stepney()'>" + goalkeeperChoices.choice1 + "</button>" + "<button type='button' onclick='deGea()'>" + goalkeeperChoices.choice2 + "</button>";
  }

  function dominantFoot() {
    //show question
    var element = document.getElementById('section-1');
		element.innerHTML = midfielder.question;

    //show choices
    var buttonGroup = document.getElementById('section-2');
    buttonGroup.innerHTML = "<button type='button' onclick='midfielderCountry()'>" + footChoices.choice1 + "</button>" + "<button type='button' onclick='midfielderCountry2()'>" + footChoices.choice2 + "</button>" + "<button type='button' onclick='carrick()'>" + footChoices.choice3 + "</button>";
  }

  function midfielderCountry() {
    //show question
    var element = document.getElementById('section-1');
		element.innerHTML = midfielder1.question;

    //show choices
    var buttonGroup = document.getElementById('section-2');
    buttonGroup.innerHTML = "<button type='button' onclick='robson()'>" + midfielder1Choices.choice1 + "</button>" + "<button type='button' onclick='giggs()'>" + midfielder1Choices.choice2 + "</button>";
  }

  function midfielderCountry2() {
    var element = document.getElementById('section-1');
		element.innerHTML = midfielder2.question;

    //show choices
    var buttonGroup = document.getElementById('section-2');
    buttonGroup.innerHTML = "<button type='button' onclick='midfielderFreeKick()'>" + midfielder2Choices.choice1 + "</button>" + "<button type='button' onclick='keane()'>" + midfielder2Choices.choice2 + "</button>";
  }

  function midfielderFreeKick() {
    var element = document.getElementById('section-1');
		element.innerHTML = midfielder3.question;

    //show choices
    var buttonGroup = document.getElementById('section-2');
    buttonGroup.innerHTML = "<button type='button' onclick='beckham()'>" + midfielder3Choices.choice1 + "</button>" + "<button type='button' onclick='scholes()'>" + midfielder3Choices.choice2 + "</button>";
  }


    function defenderPosition() {
      var element = document.getElementById('section-1');
  		element.innerHTML = defender.question;

      //show choices
      var buttonGroup = document.getElementById('section-2');
      buttonGroup.innerHTML = "<button type='button' onclick='defenderFullbackCountry()'>" + defenderChoices.choice1 + "</button>" + "<button type='button' onclick=''>" + defenderChoices.choice2 + "</button>";
    }

    function defenderFullbackCountry() {
      var element = document.getElementById('section-1');
  		element.innerHTML = defender1.question;

      //show choices
      var buttonGroup = document.getElementById('section-2');
      buttonGroup.innerHTML = "<button type='button' onclick='neville()'>" + defenderChoices1.choice1 + "</button>" + "<button type='button' onclick='irwin()'>" + defenderChoices1.choice2 + "</button>";
    }

    function forwardCountry() {
      //show question
      var element = document.getElementById('section-1');
  		element.innerHTML = forward.question;

      //show choices
      var buttonGroup = document.getElementById('section-2');
      buttonGroup.innerHTML = "<button type='button' onclick='rooney()'>" + forwardChoices.choice1 + "</button>" + "<button type='button' onclick='nistelrooy()'>" + forwardChoices.choice2 + "</button>" + "<button type='button' onclick='solskjaer()'>" + forwardChoices.choice3 + "</button>"+ "<button type='button' onclick='ronaldo()'>" + forwardChoices.choice4 + "</button>";
    }

  //Result Functions

  function deGea() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>David de Gea</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function stepney() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Alex Stepney</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function carrick() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Michael Carrick</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function robson() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Bryan Robson</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function giggs() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Ryan Giggs</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function keane() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Roy Keane</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function scholes() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Paul Scholes</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function beckham() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>David Beckham</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function neville() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Gary Neville</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function irwin() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Denis Irwin</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function solskjaer() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Ole Gunnar Solskjaer</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function nistelrooy() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Ruud van Nistelrooy</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function rooney() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Wayne Rooney</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }

  function ronaldo() {
    var element = document.getElementById('section-1');
    element.innerHTML = result.heading;

    var resultPlayer = document.getElementById('section-2');
    resultPlayer.innerHTML = "<p>Cristiano Ronaldo</p>" + "<a href='quiz.html'>Retake the Quiz</a>";
  }


  populate();
