for(let i=0; i<document.getElementsByClassName('fluency').length; i++){
	let elem = document.getElementsByClassName('fluency')[i];
	let fluency = elem.dataset.fluency;
	elem.style.width = (fluency/100)*65 + "%";
	elem.style.right = 5 + (65 - ((fluency/100)*65)) + "%";
	//console.log(elem.style.width);
}

var currentScreen = 1;
document.addEventListener('scroll', function(){
	console.log("gg");
})


document.addEventListener('DOMContentLoaded', function(){
	///////////entry screen animations 

	////rubberband animation
	let blackBack = document.getElementsByClassName('blackBack')[0];
	let whiteBack = document.getElementsByClassName('whiteBack')[0];
	let hello = document.getElementsByClassName('hello')[0];
	let from = document.getElementsByClassName('from')[0];
	blackBack.classList.add('blackBackVisible'); 
	whiteBack.classList.add('whiteBackVisible');
	hello.classList.add('helloVisible');
	from.classList.add('fromVisible');
})