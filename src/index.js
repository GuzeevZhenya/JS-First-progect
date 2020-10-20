// import { chipsCreate, deleteChips, addChips } from "./chips.js";
// import { form, btn, INVALID_CLASS, users, formHelper, handleClassAdding } from "./register";
// import { bigestBalance, calculateUsers, usersInfo } from "./users-table";
// import { login, password, btnLogin, formLogin, div, setDisabledStatus, empty, } from "./login.js";

import { initForm } from "./form/form";
import { initRouter } from './form/router';
import { initTableOfUsers } from "./form/users-table";


// initForm();
// initRouter();
// initTableOfUsers();

const checkIsEven = (number) => {
    return newPromise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(number);
        } else {
            reject('It bad');
        }
    });
}


checkIsEven(9)
    .then((number) => {
        console.log("hey,it's good number", number);
        return number + 2
    })
    .then((number) => {
        return number + 3
    })
    .catch((error) => {
        console.log("sorry", error);
    });