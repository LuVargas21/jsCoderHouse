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

//validate form
function validateFieldsForm(user_register) {
	let fields = user_register.querySelector("input");
	let isValid = true;

	for (let field of fields) {
		if (!field.value || field.validity.valid === false) {
			isValid = false;
			field.classList.add("error");
		} else {
			field.classList.remove("error");
		}
	}
	return isValid;
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
	if (validateFieldsForm(register)) {
		let newUser = new User(
			user_name.value,
			user_surname.value,
			user_mail.value,
			user_password.value
		);

		cleanFields();
		storeUser(newUser);
		storeOnLS(users);
		
		Swal.fire({
			icon: "success",
			title: "¡Usuario creado exitosamente!",
			text: "",
			footer:
				'<a href="   "> <i class="bi bi-arrow-return-left"></i> Volver atrás </a>',
		});
	} else {
		Swal.fire({
			title: "¡Error!",
			text: "Por favor completa todos los campos del formulario",
			icon: "error",
		});
	}
});
