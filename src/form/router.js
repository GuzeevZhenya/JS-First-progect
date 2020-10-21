 import { initTableOfUsers } from "./users-table.js";
 import { initForm } from "./form";

 export const initRouter = () => {
     window.addEventListener('hashchange', (event) => {
         if (window.location.hash === "#/clients") {
             protector(initTableOfUsers);
         } else if (window.location.hash === '#/form') {
             initForm();
         } else {
             ROOT_NODE.innerHTML = `<div>Page not found</div>`;
         }
     });
 };


 export const protector = (initFn) => {
     const user = { name: "alex" } // Тянем из локал сторейджа
     if (user) {
         initFn()
     } else {
         window.location.hash = "/form";
     }
 };

 export const branch = (conditionFn, trueFn, falseFn) => {
     conditionFn() ? trueFn() : falseFn();
 }



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