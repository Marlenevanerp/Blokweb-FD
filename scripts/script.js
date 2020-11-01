//javascript
	var openKnop = document.querySelector('#button');
	var sluitenKnop = document.querySelector('#button');
	var menu = document.querySelector("#navbar");

function sluiten (){
	menu.classList.remove('open');
	menu.classList.add('dicht');
}

function openen(){
	menu.classList.remove('dicht');
	menu.classList.add('open');
}

//eventlisteners

	openKnop.addEventListener('click', openen);
	sluitenKnop.addEventListener('click', sluiten)


// bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar //
