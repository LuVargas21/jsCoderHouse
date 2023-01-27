const user_login = document.querySelector("#login_user");
user_name = document.querySelector("#loguin_name");
user_mail = document.querySelector("#login_mail");
user_password = document.querySelector("#login_password");
user_checkbox = document.querySelector("#login_checkBox");
btn_login_user = document.querySelector("#btn_user_login");
mesagge = document.querySelector("#message");
// login function
function startSession(users) {
	let userFound = users.find(user => {
		return user.user_mail == user_mail.value && user.user_password == user_password.value;
	});
	if (userFound) {
		alert ("buenas buenaaaas")
	} else {
		//document.querySelector("#message").innerText = SWEET ALERT
		alert("HOLAAAAA");
	}
	// if (userFound) {
	// 	Swal.fire({
	// 		position: "center",
	// 		icon: "success",
	// 		title: "Hola, ¡Bienvendio!",
	// 		showConfirmButton: false,
	// 		timer: 1500,
	// 	});
	// } else {
	// 	Swal.fire(
	// 		"¡Ups! Usuario no encontrado",
	// 		"Por favor intenta nuevamente",
	// 		"error"
	// 	);
	// }
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
