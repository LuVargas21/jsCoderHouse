// //de la pagina "RESERVA" tomar los datos y guardarlos en Local Storage.
// const form = document.querySelector('form')
// form.addEventListener('submit', (e)=>{
// 	e.preventDefault()
// 	console.log(e.target.children[0].children[1].value);
// })

//execute the function startApp. Load the page.
window.onload = startApp;

function startApp() {

    console.log('valor variable',  localStorage.getItem('quotation'))
}







const jsonCars =JSON.parse(cars) 

localStorage.setItem("") 
function quotationCar (idCity, quotation) {
    let averageCar =0; 
    
}