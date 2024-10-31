document.getElementById("startQuiz").addEventListener("click", function () {
	const gender = document.querySelector('input[name="gender"]:checked').value;

	let questions = [];

	if (gender === "male") {
		questions.push(
			{
				text: "Do you want to get married to a female in the future?",
				options: ["Yes", "No", "Maybe"],
				category: ["straight", "gay", "bi"]
			},
			{
				text: "Would you like to have kids someday?",
				options: ["Yes, with a female partner", "Yes, with any partner", "No"],
				category: ["straight", "bi", "gay"]
			},
			{
				text:
					"How do you feel about having sex with another male before getting married?",
				options: [
					"I would definitely consider it",
					"I might consider it",
					"Not interested"
				],
				category: ["gay", "bi", "straight"]
			},
			{
				text:
					"Do you feel comfortable being in a romantic relationship with another male?",
				options: ["Yes", "Maybe", "No"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Have you ever been attracted to another male?",
				options: ["Yes, often", "Sometimes", "No, never"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Do you find other males attractive?",
				options: ["Yes, always", "Sometimes", "Not at all"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Would you consider dating another male?",
				options: ["Absolutely", "Maybe", "Not interested"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "How do you feel about public affection with another male?",
				options: [
					"Completely comfortable",
					"Somewhat comfortable",
					"Uncomfortable"
				],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Would you prefer to have a long-term relationship with a female?",
				options: ["Yes", "No", "It depends"],
				category: ["straight", "gay", "bi"]
			},
			{
				text: "Do you feel romantic feelings when thinking about another male?",
				options: ["Yes, often", "Sometimes", "No, never"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Would you like spending a romantic evening with another male?",
				options: ["Absolutely", "Maybe", "Not really"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Have you ever had a crush on another male?",
				options: ["Yes", "Maybe", "No"],
				category: ["gay", "bi", "straight"]
			},
			{
				text:
					"Do you enjoy talking about emotions and deep feelings with other males?",
				options: ["Always", "Sometimes", "Not really"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "How do you feel about kissing another male?",
				options: ["Very comfortable", "Maybe", "Not comfortable"],
				category: ["gay", "bi", "straight"]
			},
			{
				text:
					"Would you be comfortable sharing a bed with a male friend during a trip?",
				options: ["Very comfortable", "Somewhat comfortable", "Not comfortable"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Do you enjoy spending time in places that have mostly males?",
				options: ["Always", "Sometimes", "Not really"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Could you see yourself building a family with another male partner?",
				options: ["Yes, definitely", "Maybe", "No"],
				category: ["gay", "bi", "straight"]
			}
		);
	} else if (gender === "female") {
		questions.push(
			{
				text: "Do you want to get married to a male in the future?",
				options: ["Yes", "No", "Maybe"],
				category: ["straight", "gay", "bi"]
			},
			{
				text: "Would you like to have kids someday?",
				options: ["Yes, with a male partner", "Yes, with any partner", "No"],
				category: ["straight", "bi", "gay"]
			},
			{
				text:
					"How do you feel about having sex with another female before getting married?",
				options: [
					"I would definitely consider it",
					"I might consider it",
					"Not interested"
				],
				category: ["gay", "bi", "straight"]
			},
			{
				text:
					"Do you feel comfortable being in a romantic relationship with another female?",
				options: ["Yes", "Maybe", "No"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Have you ever been attracted to another female?",
				options: ["Yes, often", "Sometimes", "No, never"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Do you find other females attractive?",
				options: ["Yes, always", "Sometimes", "Not at all"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Would you consider dating another female?",
				options: ["Absolutely", "Maybe", "Not interested"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "How do you feel about public affection with another female?",
				options: [
					"Completely comfortable",
					"Somewhat comfortable",
					"Uncomfortable"
				],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Would you prefer to have a long-term relationship with a male?",
				options: ["Yes", "No", "It depends"],
				category: ["straight", "gay", "bi"]
			},
			{
				text: "Do you feel romantic feelings when thinking about another female?",
				options: ["Yes, often", "Sometimes", "No, never"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Would you like spending a romantic evening with another female?",
				options: ["Absolutely", "Maybe", "Not really"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Have you ever had a crush on another female?",
				options: ["Yes", "Maybe", "No"],
				category: ["gay", "bi", "straight"]
			},
			{
				text:
					"Do you enjoy talking about emotions and deep feelings with other females?",
				options: ["Always", "Sometimes", "Not really"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "How do you feel about kissing another female?",
				options: ["Very comfortable", "Maybe", "Not comfortable"],
				category: ["gay", "bi", "straight"]
			},
			{
				text:
					"Would you be comfortable sharing a bed with a female friend during a trip?",
				options: ["Very comfortable", "Somewhat comfortable", "Not comfortable"],
				category: ["gay", "bi", "straight"]
			},
			{
				text: "Do you enjoy spending time in places that have mostly females?",
				options: ["Always", "Sometimes", "Not really"],
				category: ["gay", "bi", "straight"]
			},
			{
				text:
					"Could you see yourself building a family with another female partner?",
				options: ["Yes, definitely", "Maybe", "No"],
				category: ["gay", "bi", "straight"]
			}
		);
	}

	let currentQuestionIndex = 0;
	const totalQuestions = questions.length;
	let selectedAnswers = new Array(totalQuestions).fill(null);

	document.getElementById("initialQuestions").classList.add("d-none");
	document.getElementById("quizForm").classList.remove("d-none");

	function renderQuestion(index) {
		const quizQuestionsDiv = document.getElementById("quizQuestions");
		quizQuestionsDiv.innerHTML = "";

		const question = questions[index];
		const questionDiv = document.createElement("div");
		questionDiv.classList.add("mb-3");

		const questionLabel = document.createElement("label");
		questionLabel.classList.add("form-label");
		questionLabel.textContent = question.text;
		questionDiv.appendChild(questionLabel);

		question.options.forEach((option, optionIndex) => {
			const optionDiv = document.createElement("div");
			optionDiv.classList.add("form-check");

			const optionInput = document.createElement("input");
			optionInput.classList.add("form-check-input");
			optionInput.type = "radio";
			optionInput.name = `q${index}`;
			optionInput.value = question.category[optionIndex];
			optionInput.id = `q${index}option${optionIndex}`;
			optionInput.required = true;

			if (selectedAnswers[index] === question.category[optionIndex]) {
				optionInput.checked = true;
			}

			const optionLabel = document.createElement("label");
			optionLabel.classList.add("form-check-label");
			optionLabel.htmlFor = optionInput.id;
			optionLabel.textContent = option;

			optionDiv.appendChild(optionInput);
			optionDiv.appendChild(optionLabel);
			questionDiv.appendChild(optionDiv);
		});

		quizQuestionsDiv.appendChild(questionDiv);

		document.getElementById("progressBar").style.width = `${
			((index + 1) / totalQuestions) * 100
		}%`;
		document
			.getElementById("progressBar")
			.setAttribute("aria-valuenow", ((index + 1) / totalQuestions) * 100);
		document.getElementById("progressText").textContent = `Question ${
			index + 1
		} of ${totalQuestions}`;

		document.getElementById("prevQuestion").disabled = index === 0;
		document
			.getElementById("nextQuestion")
			.classList.toggle("d-none", index === totalQuestions - 1);
		document
			.getElementById("submitQuiz")
			.classList.toggle("d-none", index !== totalQuestions - 1);
	}

	renderQuestion(currentQuestionIndex);

	document.getElementById("prevQuestion").addEventListener("click", function () {
		if (currentQuestionIndex > 0) {
			saveSelectedAnswer(currentQuestionIndex);
			currentQuestionIndex--;
			renderQuestion(currentQuestionIndex);
		}
	});

	document.getElementById("nextQuestion").addEventListener("click", function () {
		if (
			document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`)
		) {
			saveSelectedAnswer(currentQuestionIndex);
			if (currentQuestionIndex < totalQuestions - 1) {
				currentQuestionIndex++;
				renderQuestion(currentQuestionIndex);
			}
		} else {
			alert("Please select an answer before proceeding.");
		}
	});

	function saveSelectedAnswer(index) {
		const selectedOption = document.querySelector(
			`input[name="q${index}"]:checked`
		);
		if (selectedOption) {
			selectedAnswers[index] = selectedOption.value;
		}
	}

	document.getElementById("submitQuiz").addEventListener("click", function () {
		if (
			!document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`)
		) {
			alert("Please select an answer before submitting.");
			return;
		}
		saveSelectedAnswer(currentQuestionIndex);

		let scores = { straight: 0, bi: 0, gay: 0 };

		selectedAnswers.forEach((answer) => {
			if (answer in scores) {
				scores[answer]++;
			}
		});

		const totalPoints = scores.straight + scores.bi + scores.gay;
		const straightPercent = Math.round((scores.straight / totalPoints) * 100);
		const biPercent = Math.round((scores.bi / totalPoints) * 100);
		const gayPercent = Math.round((scores.gay / totalPoints) * 100);

		let resultMessage = "";
		if (biPercent > straightPercent && biPercent > gayPercent) {
			resultMessage =
				gayPercent > straightPercent
					? "You have an attraction to both genders (bi), with a possible lean towards the same gender."
					: "You have an attraction to both genders (bi), with a possible lean towards the opposite gender.";
		} else if (straightPercent > biPercent && straightPercent > gayPercent) {
			resultMessage =
				biPercent > gayPercent
					? "You're mostly attracted to the opposite gender (straight), but explore your feelings as you may also be bi."
					: "You're mostly attracted to the opposite gender (straight).";
		} else if (gayPercent > straightPercent && gayPercent > biPercent) {
			resultMessage =
				biPercent > straightPercent
					? "You show a strong attraction to the same gender (gay/lesbian), with a possible lean towards both genders."
					: `You show a strong attraction to the same gender (${
							gender === "male" ? "gay" : "lesbian"
					  }).`;
		}

		document.getElementById("quizForm").classList.add("d-none");
		document.getElementById("result").innerHTML = `
		<div class="alert alert-info">${resultMessage}</div>
		<div class="mb-3">
			<label class="form-label">Straight: ${
				scores.straight
			} points (${straightPercent}%)</label>
			<div class="progress">
				<div class="progress-bar bg-danger" role="progressbar" style="width: ${straightPercent}%;" aria-valuenow="${straightPercent}" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		</div>
		<div class="mb-3">
			<label class="form-label">Bi: ${scores.bi} points (${biPercent}%)</label>
			<div class="progress">
				<div class="progress-bar bg-purple-500" role="progressbar" style="width: ${biPercent}%;" aria-valuenow="${biPercent}" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		</div>
		<div class="mb-3">
			<label class="form-label">${gender === "male" ? "Gay" : "Lesbian"}: ${
			scores.gay
		} points (${gayPercent}%)</label>
			<div class="progress">
				<div class="progress-bar bg-primary" role="progressbar" style="width: ${gayPercent}%;" aria-valuenow="${gayPercent}" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		</div>
	`;
	});
});