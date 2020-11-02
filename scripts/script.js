//javascript
	var openKnop = document.querySelector('#button');
	var sluitenKnop = document.querySelector('#button');
	var menu = document.querySelector("#navbar");


function openen(){
	menu.classList.toggle('open');
}


//eventlisteners

	openKnop.addEventListener('click', openen);


// bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar //
