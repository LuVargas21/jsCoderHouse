const search = document.querySelector("#searchBox");
btnSearch = document.querySelector("#search");
containerCars = document.querySelector(".cars");
userName = document.querySelector("#userName");

const cars = [
	{
		id: 1, 
		model:"Onix", 
		brand:"Chevrolet ",
		motor:"1.4" , 
		category:"Economic", 
		price:    , 
	},
	{
		id: 2, 
		model: "Gol Trend", 
		brand: "VW",
		motor:  "1.6", 
		category: "Economic", 
		price:    , 
		

	},
	{
		id:3, 
		model:"Clio", 
		brand:"Renault" ,
		motor: "1.6"   , 
		category:"Economic"  , 
		price:    , 
		

	}, 
	{
		id:4, 
		model: "March", 
		brand: "Nissan",
		motor: "1.6"  , 
		category: "Intermedio"  , 
		price:    , 
		

	},
	{
		id:5, 
		model:"Versa", 
		brand:"Nissan" ,
		motor:"1.6", 
		category:"Intermedio"   , 
		price:    , 
		

	},
	{
		id:6 , 
		model:"Cobalt", 
		brand:"Chevrolet",
		motor:"1.8", 
		category:"Intermedio", 
		price:    , 
		

	},
	{
		id:7, 
		model:"Fiesta", 
		brand:"Ford",
		motor:"1.6", 
		category:"Intermedio", 
		price:    , 
		

	},
	{
		id:8, 
		model:"Duster", 
		brand:"Renault",
		motor:"2.0"    , 
		category:"Intermedio"  , 
		price:    , 
		

	}, 
	{
		id:9, 
		model:"Kicks", 
		brand:"Nissan",
		motor:"1.6", 
		category:"Premium"   , 
		price:    , 
		

	}, 
	{
		id:10 , 
		model:"Yaris" , 
		brand:"Toyota",
		motor:"1.6", 
		category:"Premium", 
		price:    , 
		

	}, 
	{
		id:11 , 
		model:"Kuga", 
		brand:"Ford" ,
		motor:"2.5"    , 
		category:"Premium", 
		price:    , 
		

	},
	{
		id:12, 
		model:"Tiguan", 
		brand:"VW" ,
		motor:"2.0"    , 
		category:"Premium" , 
		price:    , 
		

	}, 
	{
		id:13 , 
		model:"Renegade", 
		brand:"Jeep",
		motor:"1.7", 
		category:"Especial", 
		price:    , 
		

	},
	{
		id:14 , 
		model:"Frontier 4x4", 
		brand:"Nissan",
		motor:"3.8"    , 
		category:"Especial", 
		price:    , 
		

	},
	{
		id:15 , 
		model:"Ranger 4x4", 
		brand:"Ford" ,
		motor:"2.5", 
		category:"Especial", 
		price:    , 
		

	},
	
	{
		id:16 , 
		model:"Amarok 4x4", 
		brand:"VW",
		motor:"2.5", 
		category:"Especial", 
		price:    , 
		

	},
];

function arrayCarFilter(filter) {
	let carFilter = cars.filter((elementCar) => {
		return elementCar.carName.includes(filter);
	});
	return carFilter;
}

//cuando cree el array al nombre del car le tengo que poner el id carName

//create HTML
function createHTML(array) {
	let html;
}

// call createHTML function
createHTML(cars);
