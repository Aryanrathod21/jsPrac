document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here you can handle the form data, for example, send it to the server
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // Clear the form
        form.reset();
    });
});
