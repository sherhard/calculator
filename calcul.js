

let buttonPlus=document.getElementById('buttonPlus');
let buttonMinus=document.getElementById('buttonMinus');
let buttonMultiply=document.getElementById('buttonMultiply');
let buttonDevide=document.getElementById('buttonDevide');

let number1=document.getElementById('number1');
let number2=document.getElementById('number2');
	




function onButtonClickPlus(){
	let value1=Number(number1.value);
	let value2=Number(number2.value);
	let result=value1+value2;
	console.log(result);

}
function onButtonClickMinus(){
	let value1=Number(number1.value);
	let value2=Number(number2.value);
	let result=value1-value2;
	console.log(result);
}
function onButtonClickMultiply(){
	let value1=Number(number1.value);
	let value2=Number(number2.value);
	let result=value1*value2;
	console.log(result);
}
function onButtonClickDevide(){
	let value1=Number(number1.value);
	let value2=Number(number2.value);
	let result=value1/value2;
	console.log(result);
}

buttonPlus.addEventListener('click',onButtonClickPlus); 
buttonMinus.addEventListener('click',onButtonClickMinus); 
buttonMultiply.addEventListener('click',onButtonClickMultiply); 
buttonDevide.addEventListener('click',onButtonClickDevide); 