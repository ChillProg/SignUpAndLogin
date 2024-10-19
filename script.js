const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("mousedown", () => {
	passwordInput.type = "text";
	togglePassword.textContent = "visibility";
});

togglePassword.addEventListener("mouseup", () => {
	passwordInput.type = "password";
	togglePassword.textContent = "visibility_off";
});

togglePassword.addEventListener("mouseout", () => {
	passwordInput.type = "password";
	togglePassword.textContent = "visibility_off";
});