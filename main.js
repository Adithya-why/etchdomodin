const container = document.querySelector('.container');

for(i=0;i<16;i++){
    const rowcontainer = document.createElement('div');
    rowcontainer.classList.add(`rowcont`);
    rowcontainer.classList.add(`${i}`);
    for(j=0;j<16;j++){
        const div = document.createElement('div');
        div.classList.add(`row${i}`);
        rowcontainer.appendChild(div);
    }
    container.appendChild(rowcontainer);

}


const rowconts = document.querySelectorAll('.rowcont')
rowconts.forEach((rowcont) => {
    rowcont.style.display = 'flex';
    rowcont.style.flex = '1';
    rowcont.style.justifyContent = "center";
    rowcont.style.alignItems = "spaceAround";

})
