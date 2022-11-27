function Quiz (questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

	if (this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}






function Question (text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}






function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}


function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
	var gameOverHTML = "<h2 class='result'>We think you'd really kick it off with</h2>";
	gameOverHTML += "<h3 id='score'>" + quiz.score + "</h3>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
}


var questions = [
	new Question("Choose a position...", ["Goalkeeper", "Defender", "Midfielder", "Forward"], "Response 1"),
	new Question("Question 2", ["Response 1", "Response 2", "Response 3", "Response 4"], "Response 1"),
	new Question("Question 3", ["Response 1", "Response 2", "Response 3", "Response 4"], "Response 1"),
	new Question("Question 4", ["Response 1", "Response 2", "Response 3", "Response 4"], "Response 1"),
];

var quiz = new Quiz (questions);

populate();
