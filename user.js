const user_login = document.querySelector("#login_user");
user_name = document.querySelector("#loguin_name");
user_mail = document.querySelector("#login_mail");
user_password = document.querySelector("#login_password");
user_checkbox = document.querySelector("#login_checkBox");
btn_login_user = document.querySelector("#btn_user_login");

// login function
function startSession(users) {
	let userFound = users.find((userLog) => {
		return (
			userLog.user_name == user_name.value &&
			userLog.user_password == user_password.value
		);
	});
	// if userFound  redireccionar a la pagina siguiente
	if (userFound) {
		// window.location.assign("http://127.0.0.1:5500/reserva.html");
	} else {
		document.querySelector("#message").innerText = "Usuario no encontrado";
	}

	//sugar syntax 
	// if userFound ? window.location.assign("http://127.0.0.1:5500/booking.html") : document.querySelector("#message").innerText = "Usuario no encontrado"SS
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
	e.preventDefault;
	startSession(usersLS);
});
