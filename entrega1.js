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
function quotation(destination, quantityDay) {
	priceResult = 0;
	destinationBsAs = 2500;
	destinationCba = 2300;
	destinationMza = 2700;
	destinationBrc = 3200;

	switch (destination) {
		case "Buenos Aires":
			priceResult = destinationBsAs * quantityDay;

			break;
		case "Cordoba":
			priceResult = destinationCba * quantityDay;

			break;
		case "Mendoza":
			priceResult = destinationMza * quantityDay;

			break;
		case "Bariloche":
			priceResult = destinationBrc * quantityDay;

			break;

		default:
			alert("Por favor, chequea los datos ingresados.");
			break;
	}
	console.log(priceResult);
	document.getElementById("priceResult").innerHTML = priceResult;
    alert("El precio para los días y el destino seleccionado es de" + priceResult)
}
