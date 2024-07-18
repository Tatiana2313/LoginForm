loginForm.addEventListener('submit', function(e) {
    
    e.preventDefault();
    let login = document.getElementById('login').value;
    let password = document.getElementById('pasword').value;
    let confirmPassword = document.getElementById('confirmpasword').value;
    let email = document.getElementById('email').value;
    let about = document.getElementById('about').value;
    let error = false;

    if (login === '') {
        document.getElementById('login').classList.add('invalid');
        error = true;
    } 
    else document.getElementById('login').classList.remove('invalid');

    if (password === '') {
        document.getElementById('pasword').classList.add('invalid');
        error = true;
    } 
    else document.getElementById('pasword').classList.remove('invalid');

    if (confirmPassword === '') {
        document.getElementById('confirmpasword').classList.add('invalid');
        error = true;
    } 
    else document.getElementById('confirmpasword').classList.remove('invalid');

    if (email === '') {
        document.getElementById('email').classList.add('invalid');
        error = true;
    } 
    else document.getElementById('email').classList.remove('invalid');

    if (about === '') {
        document.getElementById('about').classList.add('invalid');
        error = true;
    } 
    else document.getElementById('about').classList.remove('invalid');

    if (error) {
        messangess.innerHTML = 'Не все обязательные поля заполнены!';
        messangess.style.display = 'block';
        return;
    }
    
    if (password !== confirmPassword) {
        messangess.innerHTML = 'Пароли не совпадают.';
        document.getElementById('pasword').classList.add('invalid');
        document.getElementById('confirmpasword').classList.add('invalid');
        messangess.style.display = 'block';
        return;
    }
    else {
        document.getElementById('pasword').classList.remove('invalid');
        document.getElementById('confirmpasword').classList.remove('invalid');
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    
    if ( email !== '' && !emailPattern.test(email)) {
        messangess.innerHTML = 'Введен не корректный e-mail!';
        document.getElementById('email').classList.add('invalid');
        messangess.style.display = 'block';
        return;
    }
    else document.getElementById('email').classList.remove('invalid'); 

    if (isTelefon() === false) return;
    loginForm.submit();
});

function isTelefon() {
    let telefone = document.getElementById('phone').value; 
    let phonePattern = /^\+373\d{3}-\d{3}-\d{2}$/;

    if (telefone === '') return;
    else if (!phonePattern.test(telefone)) {
        messangess.innerHTML = 'Введите номер телефона в формате +373XXX-XXX-XX.';
        document.getElementById('phone').classList.add('invalid');
        messangess.style.display = 'block';
        return false;
    } 
    else { 
        document.getElementById('phone').classList.remove('invalid');  
        return true;
    }
}