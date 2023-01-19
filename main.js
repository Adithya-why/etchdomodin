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


const elelst = document.querySelectorAll('.row');
elelst.forEach((ele)=>{
    ele.addEventListener('mouseover',function(){
        ele.classList.add('hovered');
    })
})



const bt = document.querySelector('.bt');
bt.addEventListener('click',function(){
    let x;
    x = parseInt(prompt("Enter the Number of Rows required"));
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }


    container.style.setProperty('--grid-rows',x);
    container.style.setProperty('--grid-cols',x);


    for(i=0;i<x;i++){
    
        for(j=0;j<x;j++){
            const div = document.createElement('div');
            div.classList.add(`row`);
            div.classList.add(`${i}`);
            container.appendChild(div);
        }
        
    
    }

    const elelst = document.querySelectorAll('.row');
elelst.forEach((ele)=>{
    ele.addEventListener('mouseover',function(){
        ele.classList.add('hovered');
    })
})


})

