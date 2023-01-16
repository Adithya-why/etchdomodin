const container = document.querySelector('.container');

container.style.setProperty('--grid-rows',16);
container.style.setProperty('--grid-cols',16);


for(i=0;i<16;i++){
    
    for(j=0;j<16;j++){
        const div = document.createElement('div');
        div.classList.add(`row`);
        div.classList.add(`${i}`);
        container.appendChild(div);
    }
    

}

