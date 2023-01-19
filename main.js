const container = document.querySelector('.container');
let x=16;



function createGrid(x){
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

}


createGrid(x);

const bt = document.querySelector('.bt');
bt.addEventListener('click',function(){
    x = parseInt(prompt("Enter the Number of Rows required"));
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }


    createGrid(x)


})



const cl = document.querySelector('.cl');
cl.addEventListener('click',function(){
    const ds = document.querySelectorAll('.row');
    ds.forEach((d)=>{d.classList.remove('hovered')})
});
