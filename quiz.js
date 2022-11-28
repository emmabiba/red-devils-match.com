const question0 = {
  question: "Choose a position...",
  choices: "Goalkeeper"
};

const choices0 = ["Goalkeeper", "Defender", "Midfielder", "Forward"];

function populate() {
		var element = document.getElementById('question');
		element.innerHTML = question0.question;

		//show choices
    var choices = document.getElementById('button-grp');
    element.innterHTML = question.choices
  };

  populate();
