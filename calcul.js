

let buttonPlus=document.getElementById('buttonPlus');
let buttonMinus=document.getElementById('buttonMinus');
let buttonMultiply=document.getElementById('buttonMultiply');
let buttonDevide=document.getElementById('buttonDevide');
let result=document.getElementById('result');

let number1=document.getElementById('number1');
let number2=document.getElementById('number2');
	




function onButtonClickPlus(){
	let value1=Number(number1.value);
	let value2=Number(number2.value);
	 result.value=value1+value2;
	

}
function onButtonClickMinus(){
	let value1=Number(number1.value);
	let value2=Number(number2.value);
	 result.value=value1-value2;
	
}
function onButtonClickMultiply(){
	let value1=Number(number1.value);
	let value2=Number(number2.value);
	 result.value=value1*value2;
	
}
function onButtonClickDevide(){
	let value1=Number(number1.value);
	let value2=Number(number2.value);
	 result.value=value1/value2;
	
}

buttonPlus.addEventListener('click',onButtonClickPlus); 
buttonMinus.addEventListener('click',onButtonClickMinus); 
buttonMultiply.addEventListener('click',onButtonClickMultiply); 
buttonDevide.addEventListener('click',onButtonClickDevide); 