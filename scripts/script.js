//javascript
	var menuButton = document.querySelector(".mobile");

function menuFunction() {
	if (menuButton.style.display === "block") {
		menuButton.style.display = "none";
	} else {
		menuButton.style.display = "block";
	}
}

//eventlisteners

addEventListener('click', menuFunction)

// bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar //
