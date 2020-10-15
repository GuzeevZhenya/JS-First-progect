export const form = document.forms.register;
export const btn = document.querySelector('#btn');
export const INVALID_CLASS = "invalid";
export let users = [];

//Поля для записи из формы
export const formHelper = {
    name: {
        value: '',
        valid: false,
        checkValidation() {
            this.name.valid = this.name.value !== "";
        },
    },
    email: {
        value: '',
        valid: false,
        checkValidation() {
            this.email.valid = this.email.value !== "";
        },
    },
    password: {
        value: '',
        valid: false,
        checkValidation() {
            this.password.valid = this.password.value !== "";
        },
    },
    repeatPassword: {
        value: '',
        valid: false,
        checkValidation() {
            this.repeatPassword.valid = this.password.value === this.repeatPassword.value;
        },
    },
    //Проходим по всему объекту(всем ключам) и если ключ не функция
    // и значение valid === false то вернет false, если нет,  то вернет true;
    checkFormValidation() {
        for (const key in this) {
            if (typeof this[key] !== 'function' && this[key].valid === false) {
                return false;
            }
        }
        return true;
    },

    // получаем значения объекта
    getValue() {
        return {
            name: this.name.value,
            email: this.email.value,
            password: this.password.value,
        };
    },
};

form.addEventListener('input', (event) => {
    //Получаем значение Input
    const value = event.target.value;
    //Получаем имя input
    const name = event.target.name;

    // по ключу name заносим в Объект значение
    formHelper[name].value = value;
    //formHelper[name].checkValidation();
    const bindedValidator = formHelper[name].checkValidation.bind(formHelper);
    bindedValidator();

    //вызываем метод и завернем в btn.disabled результат
    btn.disabled = !formHelper.checkFormValidation();
    handleClassAdding(event.target, formHelper[name].valid);
});

//принимает DOM ноlу и статус валидации
export function handleClassAdding(domNode, isValid) {
    if (isValid) {
        domNode.classList.remove(INVALID_CLASS);
    } else {
        domNode.classList.add(INVALID_CLASS);
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    //запись данных пользователя в переменную
    const user = formHelper.getValue();
    users.push(user);
    console.log(users);
});