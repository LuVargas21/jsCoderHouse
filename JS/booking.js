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
  <div class="card" style="">
  <img class="card-img-top" src="/images_cars/${imageCar}"  alt="Card image">
  <div class="card-body">
    <h5 class="card-title">Destino:   ${cityName}</h5>
    <h5 class="card-title">Cantidad de días:   ${daysBooking}</h5>
    <h5 class="card-title">Modelo:   ${carSelect}</h5>
    <h5 class="card-title">Marca:   ${carBrand}</h5>
    <h5 class="card-title">Categoría:   ${carCategory}</h5> 
    <h5 class="card-title-price">Precio Final:  $ ${finalPrice}</h5>
    <button type="button"  class="btn btn-primary" id="btnFinalBooking">Reservar
</button>
	
	</div>
  </div>
  `;
	bookingCard.innerHTML = html;

	let btnFinalBooking = document.getElementById("btnFinalBooking");


	btnFinalBooking.addEventListener("click", function () {
		//alerttt 
		var randomNumber = Math.floor(Math.random() *999999) + 1;
		// Mostrar la alerta con el número aleatorio
		Swal.fire({
		  title: "¡Genial! Te enviaremos un mail con los detalles y un link de pago.",
		  text: "Para completar el link de pago y retirar tu auto te vamos a pedir este Token  " + randomNumber,
		  icon: "success"
		});
	  });
		
}
