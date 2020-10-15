export const usersInfo = [{
        name: "Alex",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+375292929292",
        balance: "$54",
        isActive: false,
        gender: "female",
    },
    {
        name: "Vlad",
        company: "Yandex",
        email: "vlad @gmail.com",
        phone: "+375293429232",
        balance: "$64",
        isActive: false,
        gender: "female",
    }, {
        name: "Igor",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+37529223492",
        balance: "$57",
        isActive: false,
        gender: "female",
    }, {
        name: "Stas",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+375292929292",
        balance: "$79",
        isActive: false,
        gender: "male",
    }, {
        name: "Sergei",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+375292929292",
        balance: "$43",
        isActive: false,
        gender: "male",
    }, {
        name: "Viktor",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+375292929292",
        balance: "$54",
        isActive: false,
        gender: "male",
    }, {
        name: "Zhenya",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+375292929292",
        balance: "$58",
        isActive: false,
        gender: "female",
    },
];

users.forEach((item) => {
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
        const userIndex = users.findIndex(user => user.email === item.email);
        users.splice(userIndex, 1);
        info.remove();
        btnDelete.remove();
        calculateUsers(users);
    });
});


export function calculateUsers(users) {
    let womenInfo = document.querySelector('.female-info');
    let menInfo = document.querySelector('.men-info');
    const allWomen = (users) => users.filter((item) => item.gender === 'female');
    const allMen = (users) => users.filter((item) => item.gender === 'male');
    womenInfo.innerHTML = `Количество женщин: ` + allWomen(users).length;
    menInfo.innerHTML = `Количество мужчин: ` + allMen(users).length;
}

calculateUsers(users);


// const allWomen = (users) =>users.reduce((count,item)=>(count + item.gender),0 === 'female');
// console.log(allWomen(users));


export const bigestBalance = (users) => users
    .sort((a, b) => a.balance - b.balance)[users.length - 1];
console.log(bigestBalance(users));