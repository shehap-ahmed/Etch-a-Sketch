const container= document.querySelector(".container");
let paintSound = new Audio('assets/marker.mp3') ;
let eraseSound = new Audio('assets/erase.mp3');
let rainbowSound = new Audio('assets/rainbow.mp3')
let newPaperSound = new Audio('assets/new-paper.mp3') 

let rainbow = false;
let erase=false;
let singleColor=true;
let sound = false;


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
                color= "rgb(98, 124, 160)";
                playSound(rainbowSound);
                break
            case 2:
                color= "rgb(160, 105, 98)";
                playSound(rainbowSound);
                break
            case 3:
                color="rgb(160, 160, 98)";
                playSound(rainbowSound);
                break
            case 4:
                color= "rgb(98, 160, 132)";
                playSound(rainbowSound);
                break
            case 5:
                color="rgb(132, 98, 160)";
                playSound(rainbowSound);
                break
            case 6:
                color="rgb(98, 160, 145)";
                playSound(rainbowSound);
            case 7:
                color = "rgb(98, 109, 160)";
                playSound(rainbowSound);  
                break                  
                

        }
    }else if(erase){
        
        color = "white";
        playSound(eraseSound);

    }else if(singleColor){
        color="rgb(160, 105, 98)"
        playSound(paintSound);

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

let btnEraser = document.querySelector('#btnErase');
let btnRainbow = document.querySelector('#btnRainbow');
let btnSingle = document.querySelector('#btnSingle');
let btnSound = document.querySelector('#btnSound');
btnSingle.setAttribute("class","toolActive");


function useErase(){
    rainbow = false;
    singleColor=false;
    erase = true; 
     
    
    btnSingle.removeAttribute("class");
    btnRainbow.removeAttribute("class");
    btnEraser.setAttribute("class","toolActive");

    
}

function useRainbow(){
    singleColor=false;
    erase=false;
    rainbow=true;

    btnRainbow.setAttribute("class","toolActive");
    btnSingle.removeAttribute("class");
    btnEraser.removeAttribute("class");  
       
}
function useSingle(){
    erase=false;
    rainbow=false;
    singleColor=true;

    btnEraser.removeAttribute("class");
    btnRainbow.removeAttribute("class")
    btnSingle.setAttribute("class","toolActive");
    
}

function reset(){
    playSound(newPaperSound);
    container.querySelectorAll('*').forEach(n => n.style.backgroundColor="white");
}

function activateSound(){
    if(sound === true){
        sound = false;
        btnSound.removeAttribute("class");
        
    }else if(sound === false){
        sound = true;
        btnSound.setAttribute("class","toolActive")
    }
    
}

function playSound(audio){
    if(sound === true){
        audio.play();
    }

}