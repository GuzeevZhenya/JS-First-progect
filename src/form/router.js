export const initRouter = () => {
    window.addEventListener('hashchange', (event) => {
            if (window.location.hash === "#/clients") {
                protector(initClients);
            } else if (window.location.hash === '#/form') {
                initForm();
            }
            else{
                ROOT_NODE.innerHTML =`<div>Page not found</div>`;
            }
    });
}; 


export const protector = (initFn)=>{
    const user = {name:"alex"} // Тянем из локал сторейджа
    if(user){
        initFn()
    }
    else{
        window.location.hash = "/form";
    }
};

export const branch = (conditionFn,trueFn,falseFn)=>{
    conditionFn() ? trueFn() : falseFn();
}