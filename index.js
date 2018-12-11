//for setting the language profieciency bar in whatwedocontainer
for(let i=0; i<document.getElementsByClassName('fluency').length; i++){
	let elem = document.getElementsByClassName('fluency')[i];
	let fluency = elem.dataset.fluency;
	elem.style.width = (fluency/100)*65 + "%";
	elem.style.right = 5 + (65 - ((fluency/100)*65)) + "%";
	//console.log(elem.style.width);
}

var currentScreen = 1;

function addClassTo(screenClassList){
	console.log(screenClassList);
	//console.log(Object.keys(screenClass).length);
	for(let x=1; x<=Object.keys(screenClassList).length; x++){  //iterates for every element of screenclass['show' or 'hide']
		let screenClass = screenClassList[x];
		let classArray = screenClass[0],
			classToAdd = screenClass[1],
			add = screenClass[2],
			addTimes = screenClass[3];
		//console.log(classArray);
		//addTimes array contains the time difference from the beginning of the function call to the time when the class is added
		if(addTimes.length == 1){
			classArray.forEach(function(){
				addTimes.push(addTimes[0]);
			})
			addTimes.pop();
		}
		//if classarray has only element that means evbery that element will be added to classlist of every classArray elem
		if(classToAdd.length == 1){
			classArray.forEach(function(){
				classToAdd.push(classToAdd[0]);
			})
			classToAdd.pop();  //because classarray already had one element in it was passed to the func
		}
		let i = 0;
		for(let i=0; i<classArray.length; i++){
			let elems = document.querySelectorAll(classArray[i]);
			for(let ii=0; ii<elems.length; ii++){
				if(add){
					//console.log('adding ' + classToAdd[i] + ' to ' + classArray[i]);
					setTimeout(function(){
						elems[ii].classList.add(classToAdd[i]);
					}, addTimes[i])
				}else if(!add){
					setTimeout(function(){
						elems[ii].classList.remove(classToAdd[i]);
					}, addTimes[i])
				}
			}
		}
	}
}


var screenClasses = {
	1: { 'show': {  1: [ ['.blackBack', '.whiteBack', '.hello', '.from', '.rubberband'],
						 ['blackBackVisible', 'whiteBackVisible', 'helloVisible', 'fromVisible', 'rubberbandVisible'],
						 true,
						 [0] ],
					2: [ ['.whatWeDoContainer > .headline'],
			    		 ['visible'],
			    		 false,
			    		 [100] ],
				    3: [ ['.whatWeDoContainer > .headline'],
			    		 ['hidden'],
			    		 true,
			    		 [100] ] } ,
	     'hide': {	1: [ ['.blackBack', '.whiteBack', '.hello', '.from', '.rubberband'],
						 ['blackBackVisible', 'whiteBackVisible', 'helloVisible', 'fromVisible', 'rubberbandVisible'],
						 false,
						 [0] ] } },

	2: { 'show': {  1: [ ['.whatWeDoContainer'],
						 ['wwdVisible'],
						 true,
						 [0] ],
				    2: [ ['.whatWeDoContainer > .headline', '.primary .title', '.skill', '.features .box', '.skillset .title', '.secondary .title'],
						 ['hidden'],
						 false,
						 [0] ],
				    3: [ ['.headline > div'],
					     ['do'],
					     true,
					     [100] ],
					4: [ ['.whatWeDoContainer > .headline', '.primary .title', '.skill', '.features .box', '.skillset .title', '.secondary .title'],
						 ['visible'],
						 true,
						 [80, 250, 370, 400, 450, 500] ] },

	     'hide': {  1: [ ['.primary .title', '.skill', '.features .box', '.skillset .title', '.secondary .title'],
						 ['visible'],
						 false,
						 [100, 300, 500, 700, 900] ],
					2: [ ['.primary .title', '.skill', '.features .box', '.skillset .title', '.secondary .title'],
						 ['hidden'],
						 true,
						 [0] ] } },

	3: { 'show': {  1: [ ['.whatWeDidContainer'],
						 ['wwdVisible'],
						 true,
						 [0] ],
	    			2: [ ['.category', '.category img', '.category > .title', '.projects'],
						 ['hidden'],
						 false,
						 [0] ],
				    3: [ ['.headline > div'],
					     ['did'],
					     true,
					     [100] ],
					4: [ [ '.category', '.category img', '.category > .title', '.projects'],
						 ['visible'],
						 true,
						 [100, 300, 500, 700] ] },

	     'hide': {  1: [ ['.headline > div'],
					     ['did'],
					     false,
					     [100] ],
					2: [ ['.category', '.category img', '.category > .title', '.projects'],
						 ['visible'],
						 false,
						 [100, 300, 500, 700] ],
					3: [ [ '.category', '.category img', '.category > .title', '.projects'],
						 ['hidden'],
						 true,
						 [0] ] } },
	4: { 'show': {  1: [ ['.headline div'],
					     ['are'],
						 true,
					     [200] ],
					2: [ ['.whatWeAreContainer'],
						 ['wwdVisible'],
						 true,
						 [0] ],
					3: [ ['.dev', '.dev .dp', '.dev .name', '.dev .bio'],
					     ['visible'],
						 true,
					     [100,200,300,400] ] },
	     'hide': {	1: [ ['.dev', '.dev .dp', '.dev .name', '.dev .bio'],
					     ['visible'],
						 false,
					     [100,200,300,400] ],
					2: [ ['.headline div'],
					     ['are'],
						 false,
					     [200] ] } },
	5: { 'show': {  1: [ ['.contact_us_container'],
						 ['wwdVisible'],
						 true,
						 [0] ],
					2: [ ['.contact_us > .title', '.contact_us .email', '.contact_us .message', 'contact_us .submit', '.contact_us_container .padder', '.contact_us_container .submit'],
						 ['visible'],
						 true,
						 [200] ],
					3: [ ['.whatWeDoContainer > .headline'],
			    		 ['visible'],
			    		 false,
			    		 [0] ],
				    4: [ ['.whatWeDoContainer > .headline'],
			    		 ['hidden'],
			    		 true,
			    		 [0] ],
			    	3: [ ['.headline div'],
					     ['are'],
						 true,
					     [200] ] } ,
		 'hide': {	1: [ ['.contact_us > .title', '.contact_us .email', '.contact_us .message', 'contact_us .submit', '.contact_us_container .padder' , '.contact_us_container .submit'],
						 ['visible'],
						 false,
						 [200] ],
					2: [ ['.whatWeDoContainer > .headline'],
			    		 ['visible'],
			    		 true,
			    		 [700] ],
				    3: [ ['.whatWeDoContainer > .headline'],
			    		 ['hidden'],
			    		 false,
			    		 [700] ],
			    	4: [ ['.contact_us_container'],
			    		 ['wwdVisible'],
			    		 false,
			    		 [340] ] } }
}

document.addEventListener('DOMContentLoaded', function(){
	///////////entry screen animations
	setTimeout(function(){
		//addClassTo(['.blackBack', '.whiteBack', '.hello', '.from'], ['blackBackVisible', 'whiteBackVisible', 'helloVisible', 'fromVisible'], true, [0]);
		addClassTo(screenClasses[1]['show']);
	}, 100);
})

var currentScreen = 1, lastScreen = 1; //the first screen is screen 1
var scrolling = false;
var direction = true;  //true means downward scroll
var BLACK = document.getElementsByClassName('BLACK')[0];
document.addEventListener('wheel', function(e){
	if(!scrolling){
		console.log("detected" + e.deltaY);
		//checks if the user is scrolling up or down
		if(e.deltaY == 100 || e.deltaY == 3){
			scrolling = true;
			direction = true;
		}else if(e.deltaY == -100 || e.deltaY == -3){
			scrolling = true;
			direction = false;
		}

		//if scrolling down
		if(direction == true){
			currentScreen++;
			if(lastScreen == 1){
				document.querySelector('.whatWeDoContainer > .headline').style.display = 'flex';
				BLACK.style.width = 70 + 'vw';
				addClassTo(screenClasses[1]['hide']);
				setTimeout(function(){
					addClassTo(screenClasses[2]['show']);
				}, 500);
			}else if(lastScreen == 2){
				BLACK.style.width = 50 + 'vw';
				addClassTo(screenClasses[2]['hide']);
				document.querySelector('.headline div').classList.add('do');
				setTimeout(function(){
					addClassTo(screenClasses[3]['show']);
				}, 500)
			}else if(lastScreen == 3){
				addClassTo(screenClasses[3]['hide']);
				//this next timeout is important for the scrolling of headline
				setTimeout(function(){
					document.querySelector('.headline div').classList.add('did');
				}, 102);
				setTimeout(function(){
					addClassTo(screenClasses[4]['show']);
				}, 500);
			}else if(lastScreen == 4){
				document.querySelector('.whatWeDoContainer > .headline').style.display = 'none';
				addClassTo(screenClasses[4]['hide']);
				setTimeout(function(){BLACK.style.width = 20 + 'vw';}, 300);
				setTimeout(function(){
					addClassTo(screenClasses[5]['show']);
				}, 800);
			}

			//cancels the extra scroll events in case the user scrolls again before the animation completes
			setTimeout(function(){
				scrolling = false;
				lastScreen = currentScreen;
			}, 500);

			//cancels out the extra scroll after the last screen of the full page
			if(currentScreen > 5){
				scrolling = false;
				currentScreen = 5;
			}
		}else if(direction == false){
			currentScreen--;
			console.log("backward and " + lastScreen);
			if(lastScreen == 2){
				document.querySelector('.whatWeDoContainer > .headline').style.display = 'none';
				addClassTo(screenClasses[2]['hide']);
				BLACK.style.width = 50 + 'vw';
				setTimeout(function(){
					addClassTo(screenClasses[1]['show']);
				}, 500);
			}else if(lastScreen == 3){
				addClassTo(screenClasses[3]['hide']);
				BLACK.style.width = 70 + 'vw';
				setTimeout(function(){
					addClassTo(screenClasses[2]['show']);
				}, 500);
			}else if(lastScreen == 4){
				addClassTo(screenClasses[4]['hide']);
				setTimeout(function(){
					addClassTo(screenClasses[3]['show']);
				}, 500);
			}else if(lastScreen == 5){
				document.querySelector('.whatWeDoContainer > .headline').style.display = 'flex';
				addClassTo(screenClasses[5]['hide']);
				setTimeout(function(){BLACK.style.width = 50 + 'vw'}, 300);
				setTimeout(function(){
					addClassTo(screenClasses[4]['show']);
				}, 800);
			}

			setTimeout(function(){
				scrolling = false;
				lastScreen = currentScreen;
			}, 500);
			if(currentScreen < 0){
				scrolling = false;
				currentScreen = 0;
			}
		}
	}
})








