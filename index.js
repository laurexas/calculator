function takeNumber (number) {
	var input = document.getElementById('innerValue');
	input.value += number;
}

function cleanNumber () {
	var input = document.getElementById('innerValue');
	input.value = '';
}

function makeResult (number) {
	var input = document.getElementById('innerValue');
	var result = eval(input.value);
	input.value = result;
}

