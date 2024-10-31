const questions = [
	{
		text: "Do you want to get married to a female in the future?",
		options: [
			{ text: "Yes", points: { straight: 1, bi: 0, gay: 0 } },
			{ text: "No", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Maybe", points: { straight: 0, bi: 1, gay: 0 } }
		]
	},
	{
		text: "Would you like to have kids someday?",
		options: [
			{ text: "Yes, with a female partner", points: { straight: 1, bi: 0, gay: 0 } },
			{ text: "Yes, with any partner", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "No", points: { straight: 0, bi: 0, gay: 1 } }
		]
	},
	{
		text: "How do you feel about having sex with another male before getting married?",
		options: [
			{ text: "I would definitely consider it", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "I might consider it", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "Not interested", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Do you feel comfortable being in a romantic relationship with another male?",
		options: [
			{ text: "Yes", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Maybe", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "No", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Have you ever been attracted to another male?",
		options: [
			{ text: "Yes, often", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Sometimes", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "No, never", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Do you find other males attractive?",
		options: [
			{ text: "Yes, always", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Sometimes", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "Not at all", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Would you consider dating another male?",
		options: [
			{ text: "Absolutely", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Maybe", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "Not interested", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "How do you feel about public affection with another male?",
		options: [
			{ text: "Completely comfortable", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Somewhat comfortable", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "Uncomfortable", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Would you prefer to have a long-term relationship with a female?",
		options: [
			{ text: "Yes", points: { straight: 1, bi: 0, gay: 0 } },
			{ text: "No", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "It depends", points: { straight: 0, bi: 1, gay: 0 } }
		]
	},
	{
		text: "Do you feel romantic feelings when thinking about another male?",
		options: [
			{ text: "Yes, often", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Sometimes", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "No, never", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Would you like spending a romantic evening with another male?",
		options: [
			{ text: "Absolutely", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Maybe", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "Not really", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Have you ever had a crush on another male?",
		options: [
			{ text: "Yes", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Maybe", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "No", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Do you enjoy talking about emotions and deep feelings with other males?",
		options: [
			{ text: "Always", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Sometimes", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "Not really", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "How do you feel about kissing another male?",
		options: [
			{ text: "Very comfortable", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Maybe", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "Not comfortable", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Would you be comfortable sharing a bed with a male friend during a trip?",
		options: [
			{ text: "Very comfortable", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Somewhat comfortable", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "Not comfortable", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Do you enjoy spending time in places that have mostly males?",
		options: [
			{ text: "Always", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Sometimes", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "Not really", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
	{
		text: "Could you see yourself building a family with another male partner?",
		options: [
			{ text: "Yes, definitely", points: { straight: 0, bi: 0, gay: 1 } },
			{ text: "Maybe", points: { straight: 0, bi: 1, gay: 0 } },
			{ text: "No", points: { straight: 1, bi: 0, gay: 0 } }
		]
	},
];

let currentQuestion = 0;
let scores = { straight: 0, bi: 0, gay: 0 };
let username = '';

const usernameInput = document.getElementById("username");
usernameInput.addEventListener("input", () => {
	document.getElementById("start-quiz").disabled = !(usernameInput.value.length >= 2 && usernameInput.value.length <= 25);
});

document.getElementById("start-quiz").addEventListener("click", () => {
	username = usernameInput.value;
	document.getElementById("landing-page").classList.add("d-none");
	document.getElementById("quiz-container").classList.remove("d-none");
	showQuestion();
});

function showQuestion() {
	const question = questions[currentQuestion];
	document.getElementById("question-number").textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
	document.getElementById("question-text").textContent = question.text;

	document.getElementById("options").innerHTML = "";
	document.getElementById("next-btn").disabled = true;

	question.options.forEach((option, index) => {
		const optionWrapper = document.createElement("div");
		optionWrapper.classList.add("form-check");

		const radio = document.createElement("input");
		radio.type = "radio";
		radio.name = "option";
		radio.value = index;
		radio.classList.add("form-check-input");
		radio.id = `option${index}`;

		radio.addEventListener("change", () => selectOption(index));

		const label = document.createElement("label");
		label.classList.add("form-check-label");
		label.htmlFor = `option${index}`;
		label.textContent = option.text;

		optionWrapper.appendChild(radio);
		optionWrapper.appendChild(label);
		document.getElementById("options").appendChild(optionWrapper);
	});
}

function selectOption(index) {
	document.getElementById("next-btn").disabled = false;
	questions[currentQuestion].selectedOption = index;
}

document.getElementById("next-btn").addEventListener("click", () => {
	const selectedOption = questions[currentQuestion].selectedOption;
	const points = questions[currentQuestion].options[selectedOption].points;
	scores.straight += points.straight;
	scores.bi += points.bi;
	scores.gay += points.gay;

	if (currentQuestion < questions.length - 1) {
		currentQuestion++;
		showQuestion();
		document.getElementById("back-btn").disabled = currentQuestion === 0;
		document.getElementById("progress-bar").style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
	} else {
		showResults();
	}
});

document.getElementById("back-btn").addEventListener("click", () => {
	if (currentQuestion > 0) {
		currentQuestion--;
		showQuestion();
		document.getElementById("back-btn").disabled = currentQuestion === 0;
		document.getElementById("progress-bar").style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
	}
});

function showResults() {
	document.getElementById("quiz-container").classList.add("d-none");
	document.getElementById("results-page").classList.remove("d-none");

	document.getElementById("username-display").textContent = username;

	const totalScore = scores.straight + scores.bi + scores.gay;
	const straightPercentage = Math.round((scores.straight / totalScore) * 100);
	const biPercentage = Math.round((scores.bi / totalScore) * 100);
	const gayPercentage = Math.round((scores.gay / totalScore) * 100);

	document.getElementById("straight-progress").style.width = `${straightPercentage}%`;
	document.getElementById("bi-progress").style.width = `${biPercentage}%`;
	document.getElementById("gay-progress").style.width = `${gayPercentage}%`;

	document.getElementById("straight-percentage").textContent = `${straightPercentage}%`;
	document.getElementById("bi-percentage").textContent = `${biPercentage}%`;
	document.getElementById("gay-percentage").textContent = `${gayPercentage}%`;
}

document.getElementById("share-results").addEventListener("click", () => {
	html2canvas(document.getElementById("results-page")).then(canvas => {
		const link = document.createElement("a");
		link.download = `${username}_results.png`;
		link.href = canvas.toDataURL("image/png");
		link.click();
	});
});
