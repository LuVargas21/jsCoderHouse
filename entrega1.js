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
	var btnCalculator = document.getElementById("btnCalculator");
	btnCalculator.addEventListener("click", clickBtnCalculator);
}

function clickBtnCalculator() {
	//get the  value of element select "country". Storage in a variable
	var idCountry = countrySelect.value;

	// get the  value of element select "city". Storage in a variable
	var idCity = citySelect.value; //value of ""select"

	var txtDay = document.getElementById("txtDay");
	var quantityDay = txtDay.value;
	var isValid = validateFields(idCity, idCountry, quantityDay);
	if (isValid) {
		var quotationResult = quotation(idCountry, idCity, quantityDay);
		document.getElementById("priceResult").innerHTML =
			"El precio es de: " + quotationResult;
	}
}
// validates the  input value bigger than 0.
function validateFields(idCity, idCountry, quantityDay) {
	var isValid = true;
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
	var basePrice = 0;
	for (let i = 0; i < countries.length; i++) {
		if (countries[i].id == idCountry) {
			countries[i].cities.forEach((city) => {
				if (city.id == idCity) {
					basePrice = city.basePrice;
				}
			});
		}
	}
	var quotation = basePrice * quantityDay;
	return quotation;
}

// get the input "dates"
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");

startDate.addEventListener("change", (e) => {
	let startDateVal = e.target.value;
	document.getElementById("startDateSelected").innerText = startDateVal;
});

endDate.addEventListener("change", (e) => {
	let endDateVal = e.target.value;
	document.getElementById("endDateSelected").innerText = endDateVal;
});
