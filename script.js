let count = 0;

let increment = () => {
    count++;
    document.querySelector("#count").textContent = count;
};

let save = () => {
    if (count === 0){

    } else {
        let prevEntry = ` ${count} - `;
        document.querySelector("#entries").textContent += prevEntry;
        clear();
    }
};

let clearEntry = () => {
    document.querySelector("#entries").textContent = "Previous Entries:";
    clear();
};

let clear = () => {
    document.querySelector("#count").textContent = 0;
    count = 0;
}
