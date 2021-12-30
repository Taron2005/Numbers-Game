let menu = document.querySelector("section.menu ");
let game = document.querySelector("section.game ");
let startBtn = document.querySelector("section.menu #start__btn");
let boxes = document.querySelectorAll("section.game .board .box");
let finishBtn = document.querySelector("section.game #finish__btn");
let steps = document.querySelector("p");
startBtn.addEventListener("click", () => {
	menu.classList.remove("active");
	game.classList.add("active");
	document.querySelector("h1").textContent = "";
	random();
	gaming();
});
finishBtn.addEventListener("click", () => {
	menu.classList.add("active");
	game.classList.remove("active");
	boxes[0].textContent = "";
	boxes[1].textContent = "";
	boxes[2].textContent = "";
	boxes[3].textContent = "";
	boxes[4].textContent = "";
	boxes[5].textContent = "";
	boxes[6].textContent = "";
	boxes[7].textContent = "";
	boxes[8].textContent = "";
	steps.textContent = 0;
});
function gaming() {
	boxes[0].addEventListener("click", function () {
		win();
		if (boxes[1].textContent == "") {
			let newBox = boxes[0].textContent;
			boxes[0].textContent = boxes[1].textContent;
			boxes[1].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[3].textContent == "") {
			let newBox = boxes[0].textContent;
			boxes[0].textContent = boxes[3].textContent;
			boxes[3].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
	});
	boxes[1].addEventListener("click", function () {
		win();
		if (boxes[0].textContent == "") {
			let newBox = boxes[1].textContent;
			boxes[1].textContent = boxes[0].textContent;
			boxes[0].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[2].textContent == "") {
			let newBox = boxes[2].textContent;
			boxes[2].textContent = boxes[1].textContent;
			boxes[1].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[4].textContent == "") {
			let newBox = boxes[1].textContent;
			boxes[1].textContent = boxes[4].textContent;
			boxes[4].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
	});
	boxes[2].addEventListener("click", function () {
		win();
		if (boxes[1].textContent == "") {
			let newBox = boxes[2].textContent;
			boxes[2].textContent = boxes[1].textContent;
			boxes[1].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[5].textContent == "") {
			let newBox = boxes[2].textContent;
			boxes[2].textContent = boxes[5].textContent;
			boxes[5].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
	});
	boxes[3].addEventListener("click", function () {
		win();
		if (boxes[4].textContent == "") {
			let newBox = boxes[3].textContent;
			boxes[3].textContent = boxes[4].textContent;
			boxes[4].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[0].textContent == "") {
			let newBox = boxes[3].textContent;
			boxes[3].textContent = boxes[0].textContent;
			boxes[0].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[6].textContent == "") {
			let newBox = boxes[3].textContent;
			boxes[3].textContent = boxes[6].textContent;
			boxes[6].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
	});
	boxes[4].addEventListener("click", function () {
		win();
		if (boxes[1].textContent == "") {
			let newBox = boxes[4].textContent;
			boxes[4].textContent = boxes[1].textContent;
			boxes[1].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[3].textContent == "") {
			let newBox = boxes[4].textContent;
			boxes[4].textContent = boxes[3].textContent;
			boxes[3].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[5].textContent == "") {
			let newBox = boxes[5].textContent;
			boxes[5].textContent = boxes[4].textContent;
			boxes[4].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[7].textContent == "") {
			let newBox = boxes[4].textContent;
			boxes[4].textContent = boxes[7].textContent;
			boxes[7].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
	});
	boxes[5].addEventListener("click", function () {
		win();
		if (boxes[4].textContent == "") {
			let newBox = boxes[5].textContent;
			boxes[5].textContent = boxes[4].textContent;
			boxes[4].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[2].textContent == "") {
			let newBox = boxes[2].textContent;
			boxes[2].textContent = boxes[5].textContent;
			boxes[5].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[8].textContent == "") {
			let newBox = boxes[8].textContent;
			boxes[8].textContent = boxes[5].textContent;
			boxes[5].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
	});
	boxes[6].addEventListener("click", function () {
		win();
		if (boxes[7].textContent == "") {
			let newBox = boxes[6].textContent;
			boxes[6].textContent = boxes[7].textContent;
			boxes[7].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[3].textContent == "") {
			let newBox = boxes[6].textContent;
			boxes[6].textContent = boxes[3].textContent;
			boxes[3].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
	});
	boxes[7].addEventListener("click", function () {
		win();
		if (boxes[6].textContent == "") {
			let newBox = boxes[7].textContent;
			boxes[7].textContent = boxes[6].textContent;
			boxes[6].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[8].textContent == "") {
			let newBox = boxes[8].textContent;
			boxes[8].textContent = boxes[7].textContent;
			boxes[7].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[4].textContent == "") {
			let newBox = boxes[4].textContent;
			boxes[4].textContent = boxes[7].textContent;
			boxes[7].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
	});
	boxes[8].addEventListener("click", function () {
		win();
		if (boxes[7].textContent == "") {
			let newBox = boxes[8].textContent;
			boxes[8].textContent = boxes[7].textContent;
			boxes[7].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
		if (boxes[5].textContent == "") {
			let newBox = boxes[8].textContent;
			boxes[8].textContent = boxes[5].textContent;
			boxes[5].textContent = newBox;
			steps.textContent = Number(steps.textContent) + 1;
			return;
		}
	});
}

function random() {
	let unshuffled = [1, 2, 3, 4, 5, 6, 7, 8];
	let shuffled = unshuffled
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
	boxes[0].textContent = shuffled[0];
	boxes[1].textContent = shuffled[1];
	boxes[2].textContent = shuffled[2];
	boxes[3].textContent = shuffled[3];
	boxes[4].textContent = shuffled[4];
	boxes[5].textContent = shuffled[5];
	boxes[6].textContent = shuffled[6];
	boxes[7].textContent = shuffled[7];
}
function win() {
	if (
		boxes[0].textContent == "1" &&
		boxes[1].textContent == "2" &&
		boxes[2].textContent == "3" &&
		boxes[3].textContent == "4" &&
		boxes[4].textContent == "5" &&
		boxes[5].textContent == "6" &&
		boxes[6].textContent == "7" &&
		boxes[7].textContent == "8"
	) {
		menu.classList.add("active");
		game.classList.remove("active");
		document.querySelector("h1").textContent = "You won";
		boxes[0].textContent = "";
		boxes[1].textContent = "";
		boxes[2].textContent = "";
		boxes[3].textContent = "";
		boxes[4].textContent = "";
		boxes[5].textContent = "";
		boxes[6].textContent = "";
		boxes[7].textContent = "";
		boxes[8].textContent = "";
		steps.textContent = 0;
	}
}
