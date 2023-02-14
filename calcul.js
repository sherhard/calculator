

let buttonPlus=document.getElementById('buttonPlus');
let buttonMinus=document.getElementById('buttonMinus');
let buttonMultiply=document.getElementById('buttonMultiply');
let buttonDevide=document.getElementById('buttonDevide');
let result=document.getElementById('result');

let number1=document.getElementById('number1');
let number2=document.getElementById('number2');

function getNumber1(){

	return Number(number1.value);
}

function getNumber2(){

	return Number(number2.value);
}

function makeOperation(operationCode){
	if (operationCode === '+'){
	 result.value=getNumber1()+getNumber2();
	} else if (operationCode === '-'){
		result.value=getNumber1()-getNumber2();
	} else if (operationCode === '*'){
		result.value=getNumber1()*getNumber2();
	} else if (operationCode === '/'){
		result.value=getNumber1()/getNumber2();
	}
}

function onButtonClickPlus(){

	makeOperation('+');
}

function onButtonClickMinus(){

	 makeOperation('-');
}
function onButtonClickMultiply(){

 	 makeOperation('*');	
}
function onButtonClickDevide(){

	makeOperation('/');
	
}

buttonPlus.addEventListener('click',onButtonClickPlus); 
buttonMinus.addEventListener('click',onButtonClickMinus); 
buttonMultiply.addEventListener('click',onButtonClickMultiply); 
buttonDevide.addEventListener('click',onButtonClickDevide); 