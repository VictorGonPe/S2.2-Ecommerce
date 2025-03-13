
// Exercise 6
document.addEventListener("DOMContentLoaded", function () {

	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Regular esxpressions
	let nameTemplate = /^[A-Za-zÀ-ÿ\s]{3,}$/;
	let phoneTemplate = /^[0-9]{9}$/;
	let emailTemplate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let passwordTemplate = /^(?=.*[A-Za-z])(?=.*\d).{4,8}$/;


	let form = document.querySelector("form");

	form.addEventListener("submit", function (event) {

		let isValid = true;

		if (!nameTemplate.test(fName.value.trim())) {
			fName.classList.add("is-invalid");
			isValid = false;
		} else {
			fName.classList.remove("is-invalid");
			fName.classList.add("is-valid");
		}

		if (!nameTemplate.test(fLastN.value.trim())) {
			fLastN.classList.add("is-invalid");
			isValid = false;
		} else {
			fLastN.classList.remove("is-invalid");
			fLastN.classList.add("is-valid");
		}

		if (!emailTemplate.test(fEmail.value.trim())) {
			fEmail.classList.add("is-invalid");
			isValid = false;
		} else {
			fEmail.classList.remove("is-invalid");
			fEmail.classList.add("is-valid");
		}

		if (fAddress.value.trim().length < 3) {
			fAddress.classList.add("is-invalid");
			isValid = false;
		} else {
			fAddress.classList.remove("is-invalid");
			fAddress.classList.add("is-valid");
		}

		if (!passwordTemplate.test(fPassword.value.trim())) {
			fPassword.classList.add("is-invalid");
			isValid = false;
		} else {
			fPassword.classList.remove("is-invalid");
			fPassword.classList.add("is-valid");
		}

		if (!phoneTemplate.test(fPhone.value.trim())) {
			fPhone.classList.add("is-invalid");
			isValid = false;
		} else {
			fPhone.classList.remove("is-invalid");
			fPhone.classList.add("is-valid");
		}


		if (!isValid) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			alert("¡Formulario enviado!");
		}
	});

	document.querySelectorAll("input").forEach(inputItem => {
		inputItem.addEventListener("input", function () {
			this.classList.remove("is-invalid"); // Si el usuario corrige, se quita la clase de error
		});
	});
});
