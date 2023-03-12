let incrementEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save");
let entries = document.querySelector("#entries")


let count = 0;
let entrie = 0;


function increment(){
    count = count + 1;
    incrementEl.textContent = count;
    
}


function save(){
    let entrie = incrementEl.textContent;
   entries.textContent += " - " + entrie;
}


