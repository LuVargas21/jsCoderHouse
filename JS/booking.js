const bookingCard = document.querySelector(".booking_card"),
	btnReservation = document.querySelector("#btn-booking");

//execute the function startApp. Load the page.
window.onload = startApp;

let booking = Object;

function startApp() {
	initBooking();
	fillTable();
}

function initBooking() {
	this.booking = JSON.parse(localStorage.getItem("booking"));
}

function fillTable() {
	let cityName = this.booking.city.name;
	let daysBooking = this.booking.quantityDay;
	let carSelect = this.booking.car.model;
	let carCategory = this.booking.car.category;
	let carBrand = this.booking.car.brand;
	let imageCar = this.booking.car.img;
	let finalPrice = this.booking.price;

	let html;
	bookingCard.innerHTML = "";
	html = `
  <div class="card" style="width: 25rem;">
  <img class="card-img-top" src="/images_cars/${imageCar}"  alt="Card image">
  <div class="card-body">
    <h5 class="card-title"> Destino: ${cityName}</h5>
    <h5 class="card-title">Cantidad de días: ${daysBooking}</h5>
    <h5 class="card-title">Auto:${carSelect}</h5>
    <h5 class="card-title">Marca:${carBrand}</h5>
    <h5 class="card-title">Categoría:${carCategory}</h5> 
    <h5 class="card-title">Auto:${finalPrice}</h5>
    <a href="#" class="btn btn-primary">Reservar</a>
  </div>
  </div>
  `;
	bookingCard.innerHTML = html;
}
