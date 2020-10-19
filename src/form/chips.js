
//export let chipsClass = [chipsCreate,deleteChips,addChips];

// export let chipsClass = {chipsCreate,deleteChips,addChips};
//Выподашка при успешной авторизации
export function initChips(){
    function chipsCreate(message, timeremove = 3000) {
        let chips = document.createElement('div');
        chips.classList.add('chips');
        chips.innerHTML = message;
        document.querySelector('body').appendChild(chips);
        setTimeout(function() { deleteChips(chips) }, timeremove)
    }
    
     function deleteChips(chips) {
        chips.remove();
    }
    
    function addChips(chips) {
        let chipsField = document.querySelector('.chips-field');
        console.log(chipsField);
    }
    
}

// document.querySelector('button').onclick = function() {
//     chips('Добро пожаловать', 2000);
// };