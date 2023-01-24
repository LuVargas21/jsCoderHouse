const register = document.querySelector(".register");
user_name = document.querySelector("#name");
user_surname = document.querySelector("#surname");
user_address = document.querySelector("#address");
user_mail = document.querySelector("#mail");
user_password = document.querySelector("#password");
btnRegistrar = document.querySelector("#user_register");

let users;
if (localStorage.getItem("users")) {
	users = JSON.parse(localStorage.getItem("users"));
} else {
	users = [];
}

//user builder
class User {
	constructor(user_name, user_surname, user_mail, user_address, user_password) {
		this.name = user_name;
		this.surname = user_surname;
		this.address = user_address;
		this.mail = user_mail;
		this.password = user_password;
	}
}

//clean fields
function cleanFields() {
	user_name.value = "";
	user_surname.value = "";
	user_address.value = "";
	user_mail.value = "";
	user_password.value = "";
}

//store user
function storeUser(user) {
	return users.push(user);
}
//store on LS
function storeOnLS(elementUser) {
	return localStorage.setItem("users", JSON.stringify(elementUser));
}

//event

btnRegistrar.addEventListener("click", (e) => {
	e.addEventListener;
	let newUser = new User(
		user_name.value,
		user_surname.value,
		user_mail.value,
		user_address.value,
		user_password.value
	);

	console.log(newUser);
	storeUser(newUser);
	storeOnLS(users);
	promess;
});

let newUser = new User();
const promess = new Promise((resolve, reject) => {
	if (newUser !== " ") {
		resolve();
	} else {
		reject();
	}
});

promess
	.then(() => {
		Swal.fire({
			icon: "success",
			title: "¡Usuario creado exitosamente!",
			text: "",
			footer: '<a href="/HTML/booking.html"> <i class="bi bi-arrow-return-left"></i> Volver atrás </a>',
		});
	})
	.catch(() => {
		Swal.fire({
			title: "¡Error!",
			text: "Por favor completa todos los campos del formulario",
			icon: "error",
		});
	});
