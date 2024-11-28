document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submitButton');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const userRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.classList.remove('hidden');
        input.classList.add('border-red-500');
    }

    function hideError(input) {
        const errorSpan = input.nextElementSibling;
        errorSpan.classList.add('hidden');
        input.classList.remove('border-red-500');
    }

    function validateEmail() {
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Digite um email válido');
            return false;
        }
        hideError(emailInput);
        return true;
    }

    function validateUsername() {
        if (usernameInput.value.length < 5) {
            showError(usernameInput, 'O nome de usuário deve conter no mínimo 5 letras');
            return false;
        }
        if (!userRegex.test(usernameInput.value)){
            showError(usernameInput, 'O nome de usuário só pode conter letras e sublinhado');
            return false;
        }
        hideError(usernameInput);
        return true;
    }

    function validatePassword() {
        updatePasswordStrength();
        if (!passwordRegex.test(passwordInput.value)) {
            showError(passwordInput, 'A senha não atende aos requisitos');
            return false;
        }
        hideError(passwordInput);
        return true;
    }

    function updatePasswordStrength() {
        const requirements = [
            { regex: /.{8,}/, index: 0 },
            { regex: /[A-Z]/, index: 1 },
            { regex: /[a-z]/, index: 2 },
            { regex: /[0-9]/, index: 3 }
        ];

        const strengthIndicators = passwordInput.parentElement.querySelectorAll('li');

        requirements.forEach(req => {
            const indicator = strengthIndicators[req.index];
            const dot = indicator.querySelector('span:first-child');
            const text = indicator.querySelector('.password-requirement');

            if (req.regex.test(passwordInput.value)) {
                dot.classList.remove('bg-gray-500');
                dot.classList.add('bg-green-500');
                text.classList.remove('text-red-500');
                text.classList.add('text-gray-500');
            } else {
                dot.classList.remove('bg-green-500');
                dot.classList.add('bg-gray-500');
                text.classList.remove('text-gray-500');
                text.classList.add('text-red-500');
            }
        });
    }

    function validateForm() {
        const isEmailValid = validateEmail();
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();

        submitButton.disabled = !(isEmailValid && isUsernameValid && isPasswordValid);
        if (submitButton.disabled) {
            submitButton.classList.add('bg-gray-400');
            submitButton.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        } else {
            submitButton.classList.remove('bg-gray-400');
            submitButton.classList.add('bg-blue-600');
        }
    }

    [emailInput, usernameInput, passwordInput].forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('border-blue-500');
        });

        input.addEventListener('blur', () => {
            input.classList.remove('border-blue-500');
            if (input === emailInput) validateEmail();
            if (input === usernameInput) validateUsername();
            if (input === passwordInput) validatePassword();
        });

        input.addEventListener('input', validateForm);
    });

    passwordInput.addEventListener('input', updatePasswordStrength);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateEmail() && validateUsername() && validatePassword()) {
            console.log('O formulário foi submetido!');
            window.location.href = '/conta/welcome.html';
        }
    });

    validateForm();
});