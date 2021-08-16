// index.html login file

document.getElementById('submit-button').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // check email and password
    if (userEmail == 'prantoshbepari@gmail.com' && userPassword == 'bepari$prantosh360') {
        window.location.href = 'banking.html';
    }
});

/* document.getElementById('submit-button').addEventListener('click', function () {
    // get user email
    document.getElementById('user-email').value;

    // get user password
    document.getElementById('user-password').value;

    // check email and password

    if (document.getElementById('user-email').value == 'prantoshbepari@gmail.com' && document.getElementById('user-password').value == 'bepari$prantosh360') {
        window.location.href = 'banking.html'
    }

}) */