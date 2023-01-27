const register = document.querySelector(".register");
user_name = document.querySelector("#name");
user_surname = document.querySelector("#surname");
user_mail = document.querySelector("#mail");
user_password = document.querySelector("#password");
btnRegistrar = document.querySelector("#user_register");

let users;
if (localStorage.getItem("users")) {
	users = JSON.parse(localStorage.getItem("users"));
} else {
	users = [];
}

function validateForm() {
	let formFields = [user_name, user_surname, user_mail, user_password];
	let isFormValid = true;

	formFields.forEach((field) => {
		if (!field.value) {
			isFormValid = false;
			field.classList.add("invalid");
		} else {
			field.classList.remove("invalid");
		}
	});

	return isFormValid;
}

//user builder
class User {
	constructor(user_name, user_surname, user_mail, user_password) {
		this.name = user_name;
		this.surname = user_surname;
		this.mail = user_mail;
		this.password = user_password;
	}
}

//clean fields
function cleanFields() {
	user_name.value = "";
	user_surname.value = "";
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
	e.preventDefault();
	if (validateForm()) {
		let newUser = new User(
			user_name.value,
			user_surname.value,
			user_mail.value,
			user_password.value
		);

		storeUser(newUser);
		storeOnLS(users);
		Swal.fire({
			icon: "success",
			title: "¡Usuario creado exitosamente!",
			text: "",
			footer:
				'<a href="http://127.0.0.1:5500/HTML/user.html"> <i class="bi bi-arrow-return-left"></i> Volver atrás </a>',
		});
	} else {
		Swal.fire({
					title: "¡Error!",
					text: "Por favor completa todos los campos del formulario",
					icon: "error",
		});
	}
});
