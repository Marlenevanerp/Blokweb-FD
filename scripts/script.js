console.log('script');

var menuButton = document.querySelector ('menu');

var menuList = document.querySelector ('navigatie');



function toggleMenu(){
	menuList.classlist.toggle('is-open')

}

menuButton.addEventListener('click', toggleMenu);


console.log('hoi')