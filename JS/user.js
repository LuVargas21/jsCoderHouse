const user_login = document.querySelector("#login_user");
user_name = document.querySelector("#loguin_name");
user_mail = document.querySelector("#login_mail");
user_password = document.querySelector("#login_password");
user_checkbox = document.querySelector("#login_checkBox");
btn_login_user = document.querySelector("#btn_user_login");
mesagge = document.querySelector("#message");

function validateForm() {
	let formFields = [user_mail, user_password];
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

// login function
let userFound;
function startSession(users) {
	let userFound = users.find((user) => {
		return user.mail == user_mail.value && user.password == user_password.value;
	});
	if (userFound && validateForm()) {
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Hola, ¡Bienvendio!",
			showConfirmButton: false,
			timer: 3000,
		});
		setTimeout(function(){
			window.location.assign('http://127.0.0.1:5500/HTML/details.html')
			}, 3000);

	} else {
		Swal.fire(
			"¡Ups! Usuario no encontrado",
			"Por favor, intenta nuevamente",
			"error"
		);
	}
}

// recover user
function recoverLS() {
	let userDates = JSON.parse(localStorage.getItem("users"));
	return userDates;
}

//execute function
const usersLS = recoverLS();

//events
btn_login_user.addEventListener("click", (e) => {
	e.preventDefault();
	startSession(usersLS);
});
