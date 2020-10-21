import { initChips } from "./chips";
initChips();
export const initLogin = () => {
    const login = document.querySelector('.login');
    const password = document.querySelector('.password');
    const btnLogin = document.querySelector('#btnLogin');
    const formLogin = document.querySelector('form');
    const div = document.querySelector('.div');



    const users = {
        email: '1',
        password: '12',
        name: 'Lil'
    };

    login.addEventListener('input', (event) => {
        if (document.body.contains(div)) {
            div.remove();
        }
        empty(event);
    });

    password.addEventListener('input', (event) => {
        empty(event);
        if (document.body.contains(div)) {
            div.remove();
        }
    });

    //Проверка чтобы 2 поля были заполнены
    function setDisabledStatus() {
        if (login.value === "" || password.value === "") {
            btnLogin.disabled = true;
        } else {
            btnLogin.disabled = false;
        }
    }

    function empty(event) {
        const isValid = event.target.value;
        if (isValid === "") {
            btnLogin.disabled = true;
            event.target.classList.add('invalid');
        } else {
            btnLogin.disabled = false;
            event.target.classList.remove('invalid');
        }
        setDisabledStatus();
    }

    btnLogin.addEventListener('click', (event) => {
        event.preventDefault();
        if (login.value == users.email && password.value == users.password) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            chipsCreate('Добро пожаловать');
            form.remove();
        } else {
            let div = document.createElement('div');
            div.classList.add('div');
            document.body.appendChild(div);
            chipsCreate('Ошибка, повторите ввод данных');
            password.value = "";
            login.value = "";
            btnLogin.disabled = true;
        }
    })
}