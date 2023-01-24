
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
			userLog.user_mail == user_mail.value &&
			userLog.user_password == user_password.value
		);
	});
	if (userFound) {
		document.querySelector("#message").innerText = Swal.fire({
			position: "center",
			icon: "success",
			title: "Hola" + user_name,
			showConfirmButton: false,
			timer: 1500,
		});
	} else {
		document.querySelector("#message").innerText = Swal.fire(
			"¡Ups! Usuario no encontrado",
			"Por favor intenta nuevamente",
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
	e.preventDefault;
	startSession(usersLS);
});



// let userOk = new User();
// const promess = new Promise((resolve, reject) => {
// 	if (userOk == userFound) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });

// promess
// 	.then(() => {
// 		Swal.fire({
// 			icon: "success",
// 			title: "¡Bienvenido!",
// 			text: "",
// 		});
// 	})
// 	.catch(() => {
// 		Swal.fire({
// 			title: "¡Error!",
// 			text: "Usuario no encontrado",
// 			icon: "error",
// 		});
// 	});
