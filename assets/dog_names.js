const questionDisplay = document.querySelector('h3');
const answerButtons = document.querySelectorAll('.btn-default');
const dogNameDisplay = document.querySelector('p');
const surveyDisplay = document.querySelector('.jumbotron');
const generateAgain = document.querySelector('#generateAgain');
const generateButton = document.querySelector('#generateButton');
const dogNameResult = document.querySelector('#dogNameResult');

let questionPosition = 0;
let dogName;
let dogStats = {};

init();

function init() {
	setupAnswers();
	reset();
};

function setupAnswers() {
	for (let i=0; i<answerButtons.length; i++) {
		answerButtons[i].value = quiz[questionPosition]["answers"][i];
		answerButtons[i].addEventListener("click", function() {
			if(questionPosition < quiz.length-1) {
				trackDogStats(this);
				nextQuestion();
				newAnswers();
			} else {
				trackDogStats(this);
				chooseName();
				endQuiz();
			};
		});
	};
};

function endQuiz() {
	dogNameResult.textContent = dogName;
	dogNameDisplay.classList.toggle('hide');
	surveyDisplay.classList.toggle("hide");
	generateAgain.classList.toggle("hide");
};

function nextQuestion() {
	questionPosition++;
	questionDisplay.textContent = quiz[questionPosition]["question"];
};

function newAnswers() {
	for (let i=0; i<answerButtons.length; i++) {
		answerButtons[i].textContent = quiz[questionPosition]["answers"][i];
		answerButtons[i].value = quiz[questionPosition]["answers"][i];
	};
};

function trackDogStats(clickedButton) {
	let val = clickedButton.value;
    if (questionPosition === 0) {
		dogStats.gender = val;
    } else if (questionPosition === 1) {
		dogStats.group = val;
    } else if (questionPosition === 2) {
		dogStats.activity = val;
    } else if (questionPosition === 3) {
		dogStats.desc = val;
	}
};

function chooseName() {
	newArr = [];
	for (let i=0; i<dogNameList.length; i++) {
		for (let j=0; j<dogNameList[i].gender.length; j++) {
			if (dogStats.gender === dogNameList[i].gender[j]) {
				for (let k=0; k<dogNameList[i].group.length; k++) {
					if (dogStats.group === dogNameList[i].group[k]) {
						for (let l=0; l<dogNameList[i].activity.length; l++) {
							if (dogStats.activity === dogNameList[i].activity[l]) {
								for (let k=0; k<dogNameList[i].desc.length; k++) {
									if (dogStats.desc === dogNameList[i].desc[k]) {
										newArr.push(dogNameList[i].name);
									}
								}
							}
						}		
					}
				}	
			}
		}
	}
	let randomName = Math.floor(Math.random() * newArr.length);
	dogName = newArr[randomName];
	return dogName;
};

function reset() {
	questionPosition = 0;
	dogName = "";
	dogStats = {};
	questionDisplay.textContent = quiz[0]["question"];
	newAnswers();
	surveyDisplay.classList.remove("hide");
	generateAgain.classList.add("hide");
	dogNameDisplay.classList.add('hide');
};

generateButton.addEventListener('click', function() {
	reset();
});
