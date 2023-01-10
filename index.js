// La idea del proyecto es una página de renta de autos.
//El usuario debe ingresar el destino y  días para poder cotizarlo.

//execute the function startApp. Load the page.
window.onload = startApp;

// Array of countries and cities
const countries = [
	{
		name: "Argentina",
		id: 1,
		cities: [
			{ id: 1, idCountry: 1, name: "Buenos Aires", basePrice: 3200 },
			{ id: 2, idCountry: 1, name: "Bariloche", basePrice: 3500 },
			{ id: 3, idCountry: 1, name: "Cordoba", basePrice: 2900 },
			{ id: 4, idCountry: 1, name: "Mendoza", basePrice: 3000 },
		],
	},
	{
		name: "Brasil",
		id: 2,
		cities: [
			{ id: 1, idCountry: 2, name: "Rio de Janeiro", basePrice: 4500 },
			{ id: 2, idCountry: 2, name: "Sao Paulo", basePrice: 4000 },
			{ id: 3, idCountry: 2, name: "Brasilia", basePrice: 3700 },
			{ id: 4, idCountry: 2, name: "Salvador de Bahía", basePrice: 3500 },
		],
	},

	{
		name: "Chile",
		id: 3,
		cities: [
			{ id: 5, idCountry: 3, name: "Santiago de Chile", basePrice: 4000 },
			{ id: 6, idCountry: 3, name: "Valparaíso", basePrice: 4200 },
			{ id: 7, idCountry: 3, name: "Viña del Mar", basePrice: 5000 },
			{ id: 8, idCountry: 3, name: "Punta Arenas", basePrice: 4500 },
		],
	},

	{
		name: "Uruguay",
		id: 4,
		cities: [
			{ id: 9, idCountry: 4, name: "Montevideo", basePrice: 3500 },
			{ id: 10, idCountry: 4, name: "Punta del Este", basePrice: 5500 },
			{ id: 11, idCountry: 4, name: "Maldonado", basePrice: 4000 },
			{ id: 12, idCountry: 4, name: "Trinidad", basePrice: 3500 },
		],
	},
];

// Get references to the dropdown menus
const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");

// Populate the country dropdown menu
countries.forEach((country) => {
	const option = document.createElement("option");
	option.value = country.id;
	option.text = country.name;
	countrySelect.add(option);
});

// Update the city dropdown menu when the country selection changes
countrySelect.addEventListener("change", (event) => {
	// Clear the city dropdown menu
	citySelect.innerHTML = '<option value="">Ciudad</option>';

	// Get the selected country
	const selectedCountry = countries.find(
		(country) => country.id == event.target.value
	);

	// Populate the city dropdown menu with the cities for the selected country
	if (selectedCountry) {
		selectedCountry.cities.forEach((city) => {
			const option = document.createElement("option");
			option.value = city.id;
			option.text = city.name;
			citySelect.add(option);
		});
	}
});

function startApp() {
	let btnCalculator = document.getElementById("btnCalculator");
	btnCalculator.addEventListener("click", (e) => {
		e.preventDefault();
		btnCalculator.addEventListener("click", clickBtnCalculator);
	});
}

function clickBtnCalculator() {
	//get the  value of element select "country". Storage in a variable
	let idCountry = countrySelect.value;

	// get the  value of element select "city". Storage in a variable
	let idCity = citySelect.value; //value of ""select"

	let quantityDay = getQuantityDays();
	let isValid = validateFields(idCity, idCountry, quantityDay);
	if (isValid) {
		let quotationResult = quotation(idCountry, idCity, quantityDay);
		document.getElementById("priceResult").innerHTML =
			"El precio es de: " + quotationResult;
	}
}

// validates the  input value bigger than 0.
function validateFields(idCity, idCountry, quantityDay) {
	let isValid = true;
	if (idCity <= 0) {
		alert("ingrese pais");
		isValid = false;
	}
	return isValid;
}
//iterates the array "countries", and compares the selected option with the idCountry.
//iterates the array "cities" of each country.
//When found the idCity compares with the id and acces to the method "basePrice"

function quotation(idCountry, idCity, quantityDay) {
	let basePrice = 0;
	for (let i = 0; i < countries.length; i++) {
		if (countries[i].id == idCountry) {
			countries[i].cities.forEach((city) => {
				if (city.id == idCity) {
					basePrice = city.basePrice;
				}
			});
		}
	}
	let quotation = basePrice * quantityDay;
	console.log("paso");
	localStorage.setItem("quotation", quotation);
	return quotation;
}

function getQuantityDays() {
	let startDateStrValue = startDateElem.value;
	let endDateStrValue = endDateElem.value;

	// Supongamos que hemos seleccionado las fechas de inicio y fin utilizando un datepicker y las hemos almacenado en las variables "startDate" y "endDate"

	//parsear las fechas para convertirlas en un objeto

	let parseDateStart = Date.parse(startDateStrValue);
	let dateStart = new Date(parseDateStart);

	let parseDateEnd = Date.parse(endDateStrValue);
	let dateEnd = new Date(parseDateEnd);

	// Obtenemos la cantidad de milisegundos transcurridos desde la fecha de referencia (01 de enero de 1970) hasta la fecha de inicio y fin
	let startTime = dateStart.getTime();
	let endTime = dateEnd.getTime();

	// Calculamos la diferencia entre las dos fechas en milisegundos
	let difference = endTime - startTime;

	// Dividimos la diferencia entre la cantidad de milisegundos en un día para obtener la cantidad de días
	let days = difference / 86400000 + 1;

	// Mostramos el resultado en la consola
	console.log(days + " días seleccionados");
	return days;
}

// get the input "dates"
let startDateElem = document.getElementById("startDate");
let endDateElem = document.getElementById("endDate");

startDateElem.addEventListener("change", (e) => {
	startDateStrValue = e.target.value;
	document.getElementById("startDateSelected").innerText = startDateStrValue;
});

endDateElem.addEventListener("change", (e) => {
	endDateStrValue = e.target.value;
	document.getElementById("endDateSelected").innerText = endDateStrValue;
});
