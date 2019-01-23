let questionDisplay = document.querySelector('h3');
let answerButtons = document.querySelectorAll('.btn-default');
let dogNameDisplay = document.querySelector('p');
let surveyDisplay = document.querySelector('.jumbotron');
let generateAgain = document.querySelector('#generateAgain');
let generateButton = document.querySelector('#generateButton');
let dogNameResult = document.querySelector('#dogNameResult');

let questionPosition = 0;
let dogName = "";
let dogStats = {};

init();

function init() {
	setupAnswers();
	reset();
};

function setupAnswers() {
	// 
	for (let i=0; i<answerButtons.length; i++) {
		answerButtons[i].addEventListener("click", function() {
			if(questionPosition < quiz.length-1) {
				trackDogStats($(this));
				nextQuestion();
				newAnswers();
			} else {
				trackDogStats($(this));
				chooseName();
				dogNameDisplay.classList.remove('hide');
				dogNameResult.textContent = dogName;
				surveyDisplay.classList.add("hide");
				generateAgain.classList.remove("hide");
			};
		});
	};
};

function nextQuestion() {
	questionPosition++;
	questionDisplay.textContent = quiz[questionPosition]["question"];
}

function newAnswers() {
	for (let i=0; i<answerButtons.length; i++) {
	answerButtons[i].textContent = quiz[questionPosition]["answers"][i];
	// answerButtons[i].value (is it value or name attribute?)
	};
};

function trackDogStats(clickedButton) {
	let val = clickedButton.val();

// I can do a ton to simplify this - (hint: the value is a string by default, i think i'm doing extra work to turn it into a number)
// potentially a switch statement or Object.keys
	if (questionPosition === 0) {
		if (Number(val) === 1) {
			dogStats.gender = "boy";
		} else if (Number(val) === 2) {
			dogStats.gender = "girl";
		} else if (Number(val) === 3) {
			dogStats.gender = "neutral";
		}
	} else if (questionPosition === 1) {
		if (Number(val) === 1) {
			dogStats.group = "dogs";
		} else if (Number(val) === 2) {
			dogStats.group = "cats";
		} else if (Number(val) === 3) {
			dogStats.group = "humans";
		}
	}  else if (questionPosition === 2) {
		if (Number(val) === 1) {
			dogStats.activity = "running";
		} else if (Number(val) === 2) {
			dogStats.activity = "mysteries";
		} else if (Number(val) === 3) {
			dogStats.activity = "sleeping";
		}
	} else if (questionPosition === 3) {
		if (Number(val) === 1) {
			dogStats.description = "energetic";
		} else if (Number(val) === 2) {
			dogStats.description = "hungry";
		} else if (Number(val) === 3) {
			dogStats.description = "diva";
		}
	};
};


function chooseName() {
	//good opp for git - experiment with versioning
	// look up options for nesting loops
	newArr = [];
	for (let i=0; i<dogNameList.length; i++) {
		for (let j=0; j<dogNameList[i].gender.length; j++) {
			if (dogStats.gender === dogNameList[i].gender[j]) {
				for (let k=0; k<dogNameList[i].group.length; k++) {
					if (dogStats.group === dogNameList[i].group[k]) {
						for (let l=0; l<dogNameList[i].activity.length; l++) {
							if (dogStats.activity === dogNameList[i].activity[l]) {
								for (let k=0; k<dogNameList[i].group.length; k++) {
									if (dogStats.group === dogNameList[i].group[k]) {
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
	questionDisplay.textContent = quiz[0]["question"];
	for (let i=0; i<answerButtons.length; i++) {
		answerButtons[i].textContent = quiz[0]["answers"][i];
	}
	dogName = "";
	questionPosition = 0;
	dogStats = {};
	surveyDisplay.classList.remove("hide");
	generateAgain.classList.add("hide");
	dogNameDisplay.classList.add('hide');
};


generateButton.addEventListener('click', function() {
	reset();
});
