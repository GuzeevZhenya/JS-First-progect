import { usersInfo } from "./usersInfo";
const template = `<div id ="tableOfClients"></div>`;

export function initTableOfUsers() {


    const ROOT_NODE = document.getElementById('app');
    ROOT_NODE.innerHTML = template;
    const tableRoot = document.getElementById("tableOfClients");



    usersInfo.forEach((item) => {
        //деструктуризация, чтобы не писать item.name
        const {
            name,
            company,
            email,
            phone,
            balance,

            isActive,
            gender
        } = item;

        let info = document.createElement('div');
        document.body.appendChild(info);
        info.classList.add('box');
        //вывод на экран информации
        info.innerHTML = `${name},  ${company},  ${email}, ${phone}, ${balance}, ${isActive}, ${gender}`;


        //работа с кнопкой
        let btnDelete = document.createElement('button');
        document.body.append(btnDelete);
        btnDelete.innerHTML = 'Удалить';
        btnDelete.addEventListener('click', (event) => {
            event.preventDefault();
            // получаем актуальный индекс 
            const userIndex = usersInfo.findIndex(user => user.email === item.email);
            usersInfo.splice(userIndex, 1);
            info.remove();
            btnDelete.remove();
            calculateUsers(usersInfo);
        });
    });

    function calculateUsers(users) {
        let womenInfo = document.querySelector('.female-info');
        let menInfo = document.querySelector('.men-info');
        const allWomen = (users) => users.filter((item) => item.gender === 'female');
        const allMen = (users) => users.filter((item) => item.gender === 'male');
        womenInfo.innerHTML = `Количество женщин: ` + allWomen(users).length;
        menInfo.innerHTML = `Количество мужчин: ` + allMen(users).length;
    }

    calculateUsers(usersInfo);


    const bigestBalance = (users) => users
        .sort((a, b) => parseInt(a.balance) - parseInt(b.balance))[users.length - 1];
    console.log(bigestBalance(users));
}