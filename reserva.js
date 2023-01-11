const search = document.getElementById("input-text-find"),
	btnSearch = document.getElementById("btn-find"),
	containerCars = document.querySelector(".cars");

const cars = [
	{
		id: 1,
		model: "Onix",
		brand: "Chevrolet ",
		motor: "1.4",
		category: "Economic",
		img: "onix_id1.jfif",
		price: 7000,
		finalPrice: "",
	},
	{
		id: 2,
		model: "Gol Trend",
		brand: "VW",
		motor: "1.6",
		category: "Economic",
		img: "goltrend_id2.jfif",
		price: 7000,
		finalPrice: " ",
	},
	{
		id: 3,
		model: "Clio",
		brand: "Renault",
		motor: "1.6",
		category: "Economic",
		img: "clio_id3.jfif",
		price: 7000,
		finalPrice: " ",
	},
	{
		id: 4,
		model: "March",
		brand: "Nissan",
		motor: "1.6",
		category: "Economic",
		img: "march_id4.jfif",
		price: 7000,
		finalPrice: " ",
	},
	{
		id: 5,
		model: "Versa",
		brand: "Nissan",
		motor: "1.6",
		category: "Intermedio",
		img: "versa_id5.jfif",
		price: 10000,
		finalPrice: " ",
	},
	{
		id: 6,
		model: "Cobalt",
		brand: "Chevrolet",
		motor: "1.8",
		category: "Intermedio",
		img: "cobalt_id6.jfif",
		price: 10000,
		finalPrice: " ",
	},
	{
		id: 7,
		model: "Fiesta",
		brand: "Ford",
		motor: "1.6",
		category: "Intermedio",
		img: "prisma_id7.jfif",
		price: 10000,
		finalPrice: " ",
	},
	{
		id: 8,
		model: "Duster",
		brand: "Renault",
		motor: "2.0",
		category: "Intermedio",
		img: "duster_id8.jpg",
		price: 10000,
		finalPrice: " ",
	},
	{
		id: 9,
		model: "Kicks",
		brand: "Nissan",
		motor: "1.6",
		category: "Premium",
		img: "kicks_id9.jfif",
		price: 12000,
		finalPrice: " ",
	},
	{
		id: 10,
		model: "Yaris",
		brand: "Toyota",
		motor: "1.6",
		category: "Premium",
		img: "yaris_id10.jfif",
		price: 12000,
		finalPrice: " ",
	},
	{
		id: 11,
		model: "Kuga",
		brand: "Ford",
		motor: "2.5",
		category: "Premium",
		img: "kuga_id11.jfif",
		price: 12000,
		finalPrice: " ",
	},
	{
		id: 12,
		model: "Tiguan",
		brand: "VW",
		motor: "2.0",
		category: "Premium",
		img: "tiguan_id12.jfif",
		price: 12000,
		finalPrice: " ",
	},
	{
		id: 13,
		model: "Renegade",
		brand: "Jeep",
		motor: "1.7",
		category: "Especial",
		img: "renegade_id13.jfif",
		price: 15000,
		finalPrice: " ",
	},
	{
		id: 14,
		model: "Frontier 4x4",
		brand: "Nissan",
		motor: "3.8",
		category: "Especial",
		img: "frontier_id14.jfif",
		price: 15000,
		finalPrice: " ",
	},
	{
		id: 15,
		model: "Ranger 4x4",
		brand: "Ford",
		motor: "2.5",
		category: "Especial",
		img: "ranger_id15.jfif",
		price: 15000,
		finalPrice: " ",
	},

	{
		id: 16,
		model: "Amarok 4x4",
		brand: "VW",
		motor: "2.5",
		category: "Especial",
		img: "amarok_id16.jfif",
		price: 15000,
		finalPrice: " ",
	},
];

//filter cars
function arrayCarFilter(filter) {
	let carFilter = cars.filter((elementCar) => {
		return elementCar.model.includes(filter);
	});
	return carFilter;
}

function arrayCarFilter(filter) {
	let carFilter = cars.filter((elementCar) => {
		return elementCar.category.includes(filter);
	});
	return carFilter;
}
function arrayCarFilter(filter) {
	let carFilter = cars.filter((elementCar) => {
		return elementCar.price.includes(filter);
	});
	return carFilter;
}
function arrayCarFilter(filter) {
	let carFilter = cars.filter((elementCar) => {
		return elementCar.motor.includes(filter);
	});
	return carFilter;
}
function arrayCarFilter(filter) {
	let carFilter = cars.filter((elementCar) => {
		return elementCar.brand.includes(filter);
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
						<p class="card-text" > $${car.price}</p>		
					</div>
					
					<div class="card-action">
						<button type="button" class=" btn btn-card" id="${cars.id}">
							Reservar
						</button>
					</div>
					
				</div>
			</div>`;
		containerCars.innerHTML += html;
	}
}

// call createHTML function
createHTML(cars);

//listener search

btnSearch.addEventListener("click", (e) => {
	e.preventDefault();
	let filterElement = arrayCarFilter(search.value);
	console.log(filterElement);
	createHTML(filterElement);
});

let priceReservation;
function lsReservation() {
	localStorage.getItem("quotation");
	priceReservation = JSON.parse(localStorage.getItem("quotation"));
}

//clase reserva
class Reservation {
	constructor(idCity, quantityDay, id, price) {
		this.idCity = idCity;
		this.quantityDay = quantityDay;
		this.id = id;
		this.price = price;
		this.reservation = reservation;
	}
}

function reservation(id, price) {
	let basePriceCar = 0;
	for (let i = 0; i < cars.length; i++) {
		if (cars[i].id == id) {
			cars[i].id.forEach((car) => {
				if (car.id == price) {
					basePriceCar = car.basePrice;
				}
			});
		}
	}
	let reservation = basePriceCar + priceReservation;
	return reservation;
}
