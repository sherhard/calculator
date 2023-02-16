

let buttonPlus=document.getElementById('buttonPlus');
let buttonMinus=document.getElementById('buttonMinus');
let buttonMultiply=document.getElementById('buttonMultiply');
let buttonDevide=document.getElementById('buttonDevide');
let result=document.getElementById('result');

let input1=document.getElementById('number1');
let input2=document.getElementById('number2');



function makeOperation(operationCode){

	let  number1=Number(input1.value);
	let  number2=Number(input2.value);

	if (operationCode === '+'){
	 result.value=number1+number2;
	} else if (operationCode === '-'){
		 result.value=number1-number2;
	} else if (operationCode === '*'){
		 result.value=number1*number2
	} else if (operationCode === '/'){
		 result.value=number1/number2
	}
}


function onButtonOperation(eventObject){
		let clickElement=eventObject.currentTarget;
		let operation=clickElement.innerHTML;
		makeOperation(operation)
}


	let arrayButton=[buttonPlus,buttonMinus,buttonMultiply,buttonDevide];

for(let i=0; i<arrayButton.length; i++){
	let operationButton=arrayButton[i];
	operationButton.addEventListener('click',onButtonOperation)
}
































