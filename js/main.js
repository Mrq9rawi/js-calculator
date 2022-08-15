const screen = document.querySelector('.screen');
const Keys = document.querySelectorAll(".key");
const slider = document.querySelector(".slider");
const sliderCircle = document.querySelector(".slider .circle");
const equalKey = document.querySelector(".equal-key");

let currentTheme = 1;
let total = "";

if (localStorage.getItem("currentTheme")) {
	currentTheme = +window.localStorage.getItem("currentTheme");
	applyTheme(currentTheme);
} else {
	applyTheme(currentTheme);

}

slider.addEventListener("click", changeTheme);

Keys.forEach((key) => {
	key.addEventListener("click", () => {
		printOnScreen(key.textContent);
	});
});

function printOnScreen(output) {
	if (output === "DEL") {
		screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
	} else if (output === "RESET") {
		screen.textContent = "";
		total = "";
	} else if (output === "=") {
		screen.textContent = eval(total);
		total = eval(total);
	} else if (output === "x") {
		screen.textContent += output;
		total += "*";
	} else {
		screen.textContent += output;
		total += output;
	}
}

function changeTheme() {
	if (currentTheme === 3) {
		currentTheme = 1;
	} else {
		currentTheme++;
	}
	localStorage.setItem("currentTheme", JSON.stringify(currentTheme));
	applyTheme(currentTheme);
}

function applyTheme(currentTheme) {
	if (currentTheme === 1) {
		document.documentElement.style.setProperty('--window-background-color', '#3b4664');
		document.documentElement.style.setProperty('--screen-background-color', '#182034');
		document.documentElement.style.setProperty('--calculator-slider-background-color', '#242c43');
		document.documentElement.style.setProperty('--key-background-color', '#eae3dc');
		document.documentElement.style.setProperty('--key-background-hover-color', '#ffffff');
		document.documentElement.style.setProperty('--key-shadow-color', '#b4a597');
		document.documentElement.style.setProperty('--equal-key-slider-circle-background-color', '#d03f2f');
		document.documentElement.style.setProperty('--equal-key-slider-circle-hover-background-color', '#f96c5b');
		document.documentElement.style.setProperty('--equal-key-shadow-color', '#93261a');
		document.documentElement.style.setProperty('--reset-del-key-background-color', '#637097');
		document.documentElement.style.setProperty('--reset-del-key-hover-background-color', '#a2b3e1');
		document.documentElement.style.setProperty('--reset-del-key-shadow-color', '#404e72');
		document.documentElement.style.setProperty('--screen-title-text-color', '#ffffff');
		document.documentElement.style.setProperty('--equal-key-text-color', '#ffffff');
		document.documentElement.style.setProperty('--keys-text-color', '#444b5a');
		document.documentElement.style.setProperty('--reset-del-text-color', '#ffffff');
		document.documentElement.style.setProperty('--equal-key-text-color', '#ffffff');
		sliderCircle.style.left = "15px";
	} else if (currentTheme === 2) {
		document.documentElement.style.setProperty('--window-background-color', '#e6e6e6');
		document.documentElement.style.setProperty('--screen-background-color', '#ededed');
		document.documentElement.style.setProperty('--calculator-slider-background-color', '#d1cccc');
		document.documentElement.style.setProperty('--key-background-color', '#e5e4e1');
		document.documentElement.style.setProperty('--key-background-hover-color', '#ffffff');
		document.documentElement.style.setProperty('--key-shadow-color', '#a69d91');
		document.documentElement.style.setProperty('--equal-key-slider-circle-background-color', '#ca5502');
		document.documentElement.style.setProperty('--equal-key-slider-circle-hover-background-color', '#ff8b36');
		document.documentElement.style.setProperty('--equal-key-shadow-color', '#893901');
		document.documentElement.style.setProperty('--reset-del-key-background-color', '#377f86');
		document.documentElement.style.setProperty('--reset-del-key-hover-background-color', '#62b4bd');
		document.documentElement.style.setProperty('--reset-del-key-shadow-color', '#1b5f65');
		document.documentElement.style.setProperty('--screen-title-text-color', '#35352c');
		document.documentElement.style.setProperty('--keys-text-color', '#35352c');
		document.documentElement.style.setProperty('--equal-key-text-color', '#ffffff');
		document.documentElement.style.setProperty('--reset-del-text-color', '#ffffff');
		document.documentElement.style.setProperty('--equal-key-text-color', '#ffffff');
		sliderCircle.style.left = "30px";
	} else if (currentTheme === 3) {
		document.documentElement.style.setProperty('--window-background-color', '#160628');
		document.documentElement.style.setProperty('--screen-background-color', '#1d0934');
		document.documentElement.style.setProperty('--calculator-slider-background-color', '#1d0934');
		document.documentElement.style.setProperty('--key-background-color', '#341c4f');
		document.documentElement.style.setProperty('--key-background-hover-color', '#8432af');
		document.documentElement.style.setProperty('--key-shadow-color', '#871c9c');
		document.documentElement.style.setProperty('--equal-key-slider-circle-background-color', '#00e0d1');
		document.documentElement.style.setProperty('--equal-key-slider-circle-hover-background-color', '##94fff9');
		document.documentElement.style.setProperty('--equal-key-shadow-color', '#6cf9f2');
		document.documentElement.style.setProperty('--reset-del-key-background-color', '#58077d');
		document.documentElement.style.setProperty('--reset-del-key-hover-background-color', '#8631b0');
		document.documentElement.style.setProperty('--reset-del-key-shadow-color', '#bc15f4');
		document.documentElement.style.setProperty('--screen-title-text-color', '#ffe53d');
		document.documentElement.style.setProperty('--keys-text-color', '#ffe53d');
		document.documentElement.style.setProperty('--equal-key-text-color', '#1b2428');
		document.documentElement.style.setProperty('--reset-del-text-color', '#ffffff');
		sliderCircle.style.left = "47px";
	}
}