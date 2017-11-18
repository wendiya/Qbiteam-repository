var formState = 'enter';

function init() {
    var regBtn = document.querySelector('.form-bottom-reg');
    regBtn.addEventListener('click', regBtnClick);
    var formBtn = document.querySelector('.form-btn');
    formBtn.addEventListener('click', formBtnClick);
}

function regBtnClick() {
    var title = document.querySelector('.form-title');
    var btn = document.querySelector('.form-btn');
    var btnBottom = document.querySelector('.form-bottom-reg');
    if (formState === 'enter') {
        formState = 'reg';
        title.innerHTML = 'Регистрация';
        btn.innerHTML = 'Зарегистрироваться';
        btnBottom.innerHTML = 'Войти';
    } else {
        formState = 'enter';
        title.innerHTML = 'Вход';
        btn.innerHTML = 'Войти';
        btnBottom.innerHTML = 'Регистрация';
    }  
}

function formBtnClick() {
    var mailInpt = document.querySelector('#mail');
    var passInpt = document.querySelector('#pass');
    ajaxSendForm(formState, mailInpt, passInpt);
}

function ajaxSendForm(formState, mail, pass) {
    var xhr = new XMLHttpRequest();
    var xhr1 = new XMLHttpRequest();
    var json = JSON.stringify({
        formState: formState,
        mail: mail.value,
        pass: pass.value
    });
    xhr.open("POST", '/' + formState, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
            console.log('oK');
        if (xhr.status != 200) {
            console.log('err');
        } else {
            console.log(xhr.responseText);
            if (formState === 'reg') {
                mail.value = '';
                pass.value = '';
                regBtnClick();
            } else {
                console.log('enter');
                document.body.innerHTML = xhr.responseText;
            }
        }
      }
    xhr.send(json);
}


document.addEventListener('DOMContentLoaded', init);