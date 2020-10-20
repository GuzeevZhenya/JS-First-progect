import { Template } from "webpack";
import { users } from "./register";

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


export const initClients = () => {
    ROOT_NODE.innerHTML = template;
    fetch("https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json").then((response) => {
        response.json();
    }).then(users => {
        createUsersTab(users);
    }).catch(error => {
        console.error(error);
        ROOT_NODE.innerHTML = "<div>Sorry</div>";
    })

};