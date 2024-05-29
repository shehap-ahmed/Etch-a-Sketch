const container= document.querySelector(".container");
let rainbow = false;
let erase=false;

const createSquares=(sizeNum)=>{
    for(let i=1;i<=sizeNum;i++){
        rows= document.createElement("div");
        rows.setAttribute("class","row");
        container.appendChild(rows);
        for(let j=1;j <= sizeNum;j++){
            colomns = document.createElement("divs");
            colomns.setAttribute("class","box");
            rows.appendChild(colomns);
            colomns.addEventListener("mouseover",addColor);
        }
        
    }
    
}

const addColor=(event)=>{
    let color 
    if(rainbow){
        let num = Math.floor(Math.random()*7+1);        
        switch(num){
            case 1:
                color= "rgb(98, 124, 160)"
                break
            case 2:
                color= "rgb(160, 105, 98)"
                break
            case 3:
                color="rgb(160, 160, 98)"
                break
            case 4:
                color= "rgb(98, 160, 132)"
                break
            case 5:
                color="rgb(132, 98, 160)"
                break
            case 6:
                color="rgb(98, 160, 145)" 
            case 7:
                color = "rgb(98, 109, 160)"  
                break                  
                

        }
    }else if(erase){
        
        color = "white";

    }else{
        color="rgb(160, 105, 98)"

    }

    event.target.style.backgroundColor=color;
    event.target.style.transition="300ms";
}

createSquares(16);

function resize(size){
    container.innerHTML="";
    
    size = prompt("eneter the number of squares per side");
    while(size > 100 || size < 10){
        size = prompt("pls enter a number between 10 and 100");
    }
    createSquares(size);

}

function useErase(){
    rainbow = false;
    erase = true;    

}

function useRainbow(){
    erase=false;
    rainbow=true;    
}
function useSingle(){
    erase=false;
    rainbow=false;
}

function reset(){
    container.querySelectorAll('*').forEach(n => n.style.backgroundColor="white");
}