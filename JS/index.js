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
		clickBtnCalculator();
	});
}

function clickBtnCalculator() {
	//get the  value of element selected. Storage in a variable
	let idCountry = countrySelect.value;
	let idCity = citySelect.value;
	let startDate = DateTime.fromISO(document.getElementById("startDate").value);
	let endDate = DateTime.fromISO(document.getElementById("endDate").value);
	let quantityDay = calculateStay(startDate, endDate);
	let isValid = validateFields(idCity, idCountry, quantityDay);
	if (isValid) {
		let quotationResult = quotation(idCountry, idCity, quantityDay);
		document.getElementById("priceResult").innerHTML = Swal.fire({
			title: `La cantidad de dias seleccionados son ${quantityDay} y el precio base de $${quotationResult}`,
			icon: "info",
			html:
				'<a href="http://127.0.0.1:5500/HTML/reserva.html"</a> ' +
				"ELEGIR MI AUTO!",
		});
	}
}

// validates the  input value bigger than 0.
function validateFields(idCity) {
	let isValid = true;
	if (idCity <= 0) {
		Swal.fire(
			"",
			"Debes completar todos los campos para poder continuar",
			"warning"
		);
		isValid = false;
	}
	return isValid;
}
//iterates the array "countries", and compares the selected option with the idCountry.
//iterates the array "cities" of each country.
//When found the idCity compares with the id and acces to the method "basePrice"

function quotation(idCountry, idCity, quantityDay) {
	let basePrice = 0;
	let selectedCountry;
	let selectedCity;

	for (let i = 0; i < countries.length; i++) {
		if (countries[i].id == idCountry) {
			countries[i].cities.forEach((city) => {
				if (city.id == idCity) {
					selectedCountry = countries[i];
					selectedCity = city;
					basePrice = city.basePrice;
				}
			});
		}
	}
	let quotation = basePrice * quantityDay;
	localStorage.setItem("quotation", quotation);
	localStorage.setItem("selectedCountry", JSON.stringify(selectedCountry));
	localStorage.setItem("selectedCity", JSON.stringify(selectedCity));
	localStorage.setItem("quantityDay", quantityDay);
	return quotation;
}

// get days selected using luxor library
const DateTime = luxon.DateTime;

let nowDate = DateTime.now();
console.log(nowDate.toString());
console.log(nowDate.toLocaleString(DateTime.DATETIME_FULL));
console.log(
	nowDate.setLocale("es").toLocaleString(DateTime.TIME_24_WITH_SECONDS)
);

let dates = document.querySelectorAll('input[type="date"]');
let startDate = DateTime.now().toFormat("yyyy-MM-dd");
let endDate = DateTime.now().plus({ months: 5 }).toFormat("yyyy-MM-dd");

dates.forEach((el) => {
	el.setAttribute("min", startDate);
	el.setAttribute("max", endDate);
});

function calculateStay(startDate, endDate) {
	let total = endDate.diff(startDate);
	return total.as("days");
}
