var navbutton = document.querySelector('#navbutton');
var navclose = document.querySelector('#navclose');
var nav = document.querySelector('nav');
var typewriter = document.querySelector('.typewriter');
var enter = document.querySelector('#enter');
var landing = document.querySelector('.landing');
var skewer = document.querySelector('#skewer1');
var section = document.querySelector('section');
var box = new Array(0,0,0,0,0,0,0,0);
var feature = document.querySelector('#featured');
var recent = document.querySelector('#recent');
var bio = document.querySelector('#bio');
var about = document.querySelector('.about');
const mq = window.matchMedia( "(max-width: 768px)" );

for (var i = 0; i < 6; i++) {
	var boxnum ='box'+i;
	console.log(boxnum);
	box[i]=document.getElementById(boxnum);
}
	enter.onclick = function(){
		skewer.style.animation = 'skew-wipe 1.5s ease-out';
		landing.style.animation = 'display-none 1.25s forwards'
		section.style.animation = 'fade 2s ease .5s forwards';
		box[0].style.animation = 'bounce 1s ease 2s';
		box[1].style.animation = 'bounce 1s ease 2.1s';
		box[2].style.animation = 'bounce 1s ease 2.2s';
		box[3].style.animation = 'bounce 1s ease 2.3s';
		box[4].style.animation = 'bounce 1s ease 2.4s';
		box[5].style.animation = 'bounce 1s ease 2.5s';
		box[2].style.overflow = 'hidden';
	}

bio.onclick = function(){
	about.style.display = 'block';
	nav.style.animation = 'slideOut 2s ease forwards';
	section.style.animation = 'fade 5s ease .5s reverse';
	about.style.animation = 'fade 1s ease  forwards';
	
}

feature.onclick = function() {
	nav.style.animation = 'slideOut 2s ease forwards';
	about.style.display = 'none';
	section.style.animation = 'fade 2s ease .5s forwards';
}

if (mq.matches){
feature.className = 'skewright';
recent.className = 'skewright';
	navbutton.onclick = function(){
		nav.style.animation = 'slideIn2 2s ease forwards';
		typewriter.style.animation = 'flip 1.5s ease-out .5s';
		typewriter.style.transform = 'rotate(0)';

	}

	navclose.onclick = function(){
		nav.style.animation = 'slideOut2 2s ease forwards';
		typewriter.style.animation = 'wiggle 2s ease 2s infinite';
	}
} else {
	navbutton.onclick = function(){
		nav.style.animation = 'slideIn 2s ease forwards';
		typewriter.style.animation = 'flip 1.5s ease-out .5s';
		typewriter.style.transform = 'rotate(0)';

	}

	navclose.onclick = function(){
		nav.style.animation = 'slideOut 2s ease forwards';
		typewriter.style.animation = 'wiggle 2s ease 2s infinite';
	}
}



