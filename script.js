//your code here
let displayValue = '';

function updateDisplay(){
	document.getElementById('input').value = displayValue;
}

function appendtoDisplay(value){
	displayValue+=value;
	updateDisplay();
}

function clearDisplay(){
	displayValue = '';
	updateDisplay();
}

function clearEntry(){
	displayValue = displayValue.slice(0,-1);
	updateDisplay();
}

function calculate(){
	try{
		const result = eval(displayValue);
		displayValue = isFinite(result) ? result.toString() : 'Infinity';
		displayValue = isNaN(result) ? 'NaN' : displayValue;
		updateDisplay();
	}
	catch(error){
		displayValue = 'Error';
		updateDisplay();
	}
}