const search = document.querySelector("#searchBox");
btnSearch = document.querySelector("#search");
containerCars = document.querySelector(".cars");
userName = document.querySelector("#userName");

const cars = [];

function arrayCarFilter(filter) {
	let carFilter = cars.filter((elementCar) => {
		return elementCar.carName.includes(filter);
	});
	return carFilter;
}

//cuando cree el array al nombre del car le tengo que poner el id carName

//create HTML
function createHTML(array) {
	let html;
}

// call createHTML function
createHTML(cars);
