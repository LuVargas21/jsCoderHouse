// La idea del proyecto es una página de renta de autos.
//El usuario debe ingresar el destino y  días para poder cotizarlo.

//ejecuta la funcion "start" para cargar la página y el código de JS
window.onload = startApp;

function startApp() {
	var btnCalculator = document.getElementById("btnCalculator");
	btnCalculator.addEventListener("click", clickBtnCalculator);
}

function clickBtnCalculator() {
	//capturo el elemento ingresado en el  html
	var txtDestination = document.getElementById("txtDestination");
	//obtengo el valor del elemento html y lo guardo en una variable
	var destination = txtDestination.value;

	var txtDay = document.getElementById("txtDay");
	var quantityDay = txtDay.value;

	console.log(destination, quantityDay);

	quotation(destination, quantityDay);
}

//cotiza el precio de alquiler de acuerdo a la ciudad. Las ciudades ya tienen una tarifa preestablecida. 


// function quotation(destination, quantityDay) {
// 	priceResult = 0;
// 	destinationBsAs = 2500;
// 	destinationCba = 2300;
// 	destinationMza = 2700;
// 	destinationBrc = 3200;

// 	switch (destination) {
// 		case "Buenos Aires":
// 			priceResult = destinationBsAs * quantityDay;

// 			break;
// 		case "Cordoba":
// 			priceResult = destinationCba * quantityDay;

// 			break;
// 		case "Mendoza":
// 			priceResult = destinationMza * quantityDay;

// 			break;
// 		case "Bariloche":
// 			priceResult = destinationBrc * quantityDay;

// 			break;

// 		default:
// 			alert("Por favor, chequea los datos ingresados.");
// 			break;
// 	}
// 	console.log(priceResult);
// 	document.getElementById("priceResult").innerHTML = priceResult;
// 	alert(
// 		"El precio para los días y el destino seleccionado es de" + priceResult
// 	);
// }



// Array of countries and cities
const countries = [
	{
		name: "Argentina", id: 1, 
		cities: [
			{ id: 1, idCountry: 1, name: "Buenos Aires", basePrice: 3200 },
			{ id: 2, idCountry: 1, name: "Bariloche", basePrice: 3500 },
			{ id: 3, idCountry: 1, name: "Cordoba", basePrice: 2900 },
			{ id: 4, idCountry: 1, name: "Mendoza", basePrice: 3000 },
		],
	},
	{
		name: "Brasil", id: 2, 
		cities: [
			{ id: 1, idCountry: 2, name: "Rio de Janeiro", basePrice: 4500 },
			{ id: 2, idCountry: 2, name: "Sao Paulo", basePrice: 4000 },
			{ id: 3, idCountry: 2, name: "Brasilia", basePrice: 3700 },
			{ id: 4, idCountry: 2, name: "Salvador de Bahía", basePrice: 3500 },
		],
	},

	{
		name: "Chile", id:3, 
		cities: [
			{ id: 5, idCountry: 3, name: "Santiago de Chile", basePrice: 4000 },
			{ id: 6, idCountry: 3, name: "Valparaíso", basePrice: 4200 },
			{ id: 7, idCountry: 3, name: "Viña del Mar", basePrice: 5000 },
			{ id: 8, idCountry: 3, name: "Punta Arenas", basePrice: 4500 },
		],
	},

	{
		name: "Uruguay", id:4, 
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
	console.log("psdo")
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
			option.value = city.id ;
			option.text = city.name;
			citySelect.add(option);
		});
	}
});
