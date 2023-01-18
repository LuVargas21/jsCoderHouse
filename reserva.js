const search = document.getElementById("input-text-find"),
	btnSearch = document.getElementById("btn-find"),
	btnBooking = document.getElementsByClassName("btn btn-card car-btn"),
	containerCars = document.querySelector(".cars");

// const cars = [
// 	{
// 		id: 1,
// 		model: "Onix",
// 		brand: "Chevrolet ",
// 		motor: "1.4",
// 		category: "Economic",
// 		img: "onix_id1.jfif",
// 		price: 7500,
// 		finalPrice: "",
// 	},
// 	{
// 		id: 2,
// 		model: "Gol Trend",
// 		brand: "VW",
// 		motor: "1.6",
// 		category: "Economic",
// 		img: "goltrend_id2.jfif",
// 		price: 7200,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 3,
// 		model: "Clio",
// 		brand: "Renault",
// 		motor: "1.6",
// 		category: "Economic",
// 		img: "clio_id3.jfif",
// 		price: 7300,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 4,
// 		model: "March",
// 		brand: "Nissan",
// 		motor: "1.6",
// 		category: "Economic",
// 		img: "march_id4.jfif",
// 		price: 7900,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 5,
// 		model: "Versa",
// 		brand: "Nissan",
// 		motor: "1.6",
// 		category: "Intermedio",
// 		img: "versa_id5.jfif",
// 		price: 10300,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 6,
// 		model: "Cobalt",
// 		brand: "Chevrolet",
// 		motor: "1.8",
// 		category: "Intermedio",
// 		img: "cobalt_id6.jfif",
// 		price: 10600,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 7,
// 		model: "Fiesta",
// 		brand: "Ford",
// 		motor: "1.6",
// 		category: "Intermedio",
// 		img: "prisma_id7.jfif",
// 		price: 11600,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 8,
// 		model: "Duster",
// 		brand: "Renault",
// 		motor: "2.0",
// 		category: "Intermedio",
// 		img: "duster_id8.jpg",
// 		price: 11300,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 9,
// 		model: "Kicks",
// 		brand: "Nissan",
// 		motor: "1.6",
// 		category: "Premium",
// 		img: "kicks_id9.jfif",
// 		price: 12900,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 10,
// 		model: "Yaris",
// 		brand: "Toyota",
// 		motor: "1.6",
// 		category: "Premium",
// 		img: "yaris_id10.jfif",
// 		price: 13200,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 11,
// 		model: "Kuga",
// 		brand: "Ford",
// 		motor: "2.5",
// 		category: "Premium",
// 		img: "kuga_id11.jfif",
// 		price: 13300,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 12,
// 		model: "Tiguan",
// 		brand: "VW",
// 		motor: "2.0",
// 		category: "Premium",
// 		img: "tiguan_id12.jfif",
// 		price: 12700,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 13,
// 		model: "Renegade",
// 		brand: "Jeep",
// 		motor: "1.7",
// 		category: "Especial",
// 		img: "renegade_id13.jfif",
// 		price: 16000,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 14,
// 		model: "Frontier 4x4",
// 		brand: "Nissan",
// 		motor: "3.8",
// 		category: "Especial",
// 		img: "frontier_id14.jfif",
// 		price: 16800,
// 		finalPrice: " ",
// 	},
// 	{
// 		id: 15,
// 		model: "Ranger 4x4",
// 		brand: "Ford",
// 		motor: "2.5",
// 		category: "Especial",
// 		img: "ranger_id15.jfif",
// 		price: 16300,
// 		finalPrice: " ",
// 	},

// 	{
// 		id: 16,
// 		model: "Amarok 4x4",
// 		brand: "VW",
// 		motor: "2.5",
// 		category: "Especial",
// 		img: "amarok_id16.jfif",
// 		price: 16400,
// 		finalPrice: " ",
// 	},
// ];

// fetch

// fetch("./json/cars.json")
// 	.then((res) => res.json())
// 	.then((carData) => {
// 		console.log(carData);
// 		cars = carData;
// 	});
let cars = [];

fetch("./json/cars.json")
.then(response => {
   return response.json();
})
.then(carsData => {
	console.log(carsData);
	cars = carsData;
	initializeFunctions();
});

let booking;

function initializeFunctions() {
	initPriceBaseReservation();
	initCarPrices();
	createHTML(cars);
}

// Practica
// async await 
// async function fecthCarsAPI(){
// 	const response = await fetch('./json/cars.json');
// 	const carData = await response.json();
  
// 	console.log(carData);
// 	return carData;
// }

// var initCars = async function(a, b) {
// 	this.cars = await fecthCarsAPI();
	
// 	console.log(cars);
// }

// Start function
// var start = async function(a, b) {
// 	cars = await fecthCarsAPI();	
// 	console.log(this.cars);
//   }

	
//filter cars

// function arrayCarFilter(filter) {
// 	let carFilter = cars.filter((elementCar) => {
// 		return elementCar.motor.includes(filter);
// 	});
// 	return carFilter;
// }
// function arrayCarFilter(filter) {
// 	let carFilter = cars.filter((elementCar) => {
// 		return elementCar.brand.includes(filter);
// 	});
// 	return carFilter;
// }

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
							Reservar
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

Array.from(btnBooking).forEach(function (e) {
	e.addEventListener("click", function () {
		createReservation(e.id);
	});
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
	localStorage.setItem("booking", booking);
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