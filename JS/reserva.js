const search = document.getElementById("input-text-find"),
	btnSearch = document.getElementById("btn-find"),
	btnBooking = document.getElementsByClassName("btn btn-card car-btn"),
	containerCars = document.querySelector(".cars");

let cars = [];

fetch("/json/cars.json")
	.then((response) => {
		return response.json();
	})
	.then((carsData) => {
		console.log(carsData);
		cars = carsData;
		initializeFunctions();
	});

let booking = Object;

function initializeFunctions() {
	initPriceBaseReservation();
	initCarPrices();
	createHTML(cars);
	initCarListener();
}

//filter cars
function arrayCarFilter(filter) {
	let carFilter = cars.filter((elementCar) => {
		return elementCar.model.toLowerCase().includes(filter.toLowerCase());
	});
	return carFilter;
}


//create HTML
function createHTML(array) {
	let html;
	containerCars.innerHTML = "";
	for (const car of array) {
		html = `<div class="card-container">
				<div class="card">
					<div class="card-image">	
					 <img src="/images_cars/${car.img}" alt=""> 
				
					</div>
					<div class="card-content">
					<span class="card-title">${car.model}</span>
						<p class ="card-text">${car.brand}</p>
						<p class ="card-text">Motor: ${car.motor}</p>
					    <p class ="card-text">Categoria: ${car.category}</p>
						<p class="card-text" > $${car.finalPrice}</p>		
					</div>
					
					<div class="card-action">
						<button type="button" class="btn btn-card car-btn" id="${car.id}">
							Seleccionar
						</button>
					</div>
					
				</div>
			</div>`;
		containerCars.innerHTML += html;
	}
}

//listener search
btnSearch.addEventListener("click", (e) => {
	e.preventDefault();
	let filterElement = arrayCarFilter(search.value);
	console.log(filterElement);
	createHTML(filterElement);
});



let priceBaseReservation = 0;
function initPriceBaseReservation() {
	this.priceBaseReservation = JSON.parse(localStorage.getItem("quotation"));
}

function createReservation(idCar) {
	let savedBasePrice = JSON.parse(localStorage.getItem("quotation"));
	let savedSelectedCountry = JSON.parse(
		localStorage.getItem("selectedCountry")
	);
	let savedSelectedCity = JSON.parse(localStorage.getItem("selectedCity"));
	let savedQuantityDay = JSON.parse(localStorage.getItem("quantityDay"));
	this.priceBaseReservation = savedBasePrice;

	let car = this.getCarSelected(idCar);
	this.booking = new Reservation(
		savedSelectedCountry,
		savedSelectedCity,
		car,
		savedQuantityDay,
		car.finalPrice
	);
	localStorage.setItem("booking", JSON.stringify(this.booking));
}

//clase reserva
class Reservation {
	constructor(country, city, car, quantityDay, price) {
		this.country = country;
		this.city = city;
		this.car = car;
		this.quantityDay = quantityDay;
		this.price = price;
	}

	setCar(car) {
		this.car = car;
	}

	setPrice(price) {
		this.price = price;
	}
}

function initCarPrices() {
	cars.forEach((car) => {
		car.finalPrice = car.price + this.priceBaseReservation;
	});
}

function getCarSelected(idCar) {
	let car = cars.find((x) => x.id == idCar);
	return car;
}

function initCarListener() {
	//Reservation 
	Array.from(btnBooking).forEach(function (e) {
		e.addEventListener("click", function () {
			createReservation(e.id);
		});
	});
}

