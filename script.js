let display = document.querySelector("#display");
let opDisplay = document.querySelector("#op-display");
let clear = document.querySelector("#CE");
let backspace = document.querySelector("#backspace");
display.innerHTML = "";
let num = 0;

let numBtn = document.querySelectorAll("#num");
let opBtn = document.querySelectorAll("#op");

numBtn.forEach(element => {
    element.addEventListener("click", ()=>{
        if(display.innerHTML.length < 15) display.innerHTML += element.value;
    })
});

const operation = () => {
    const val = parseFloat(display.innerHTML);
    const cls = opDisplay.classList.value;
    if(opDisplay.innerHTML === ""){
        num = val;
    } else {
        if(cls === "plus"){
            num += val;
        } else if(cls === "minus"){
            num -= val;
        } else if(cls === "multiply"){
            num *= val;
        } else if(cls === "divide"){
            num /= val;
        } 
    }
}

opBtn.forEach(element =>  {
    element.addEventListener("click",async ()=>{
        if(element.classList.value === "minus" && display.innerHTML === ""){
            display.innerHTML += "-";
        } else if((display.innerHTML !== "" && display.innerHTML[0] !== '-') || (display.innerHTML[0] === '-' && display.innerHTML.length>1)) {

            operation();
            opDisplay.innerHTML = element.innerHTML;
            opDisplay.classList.value = element.classList.value;
            if(element.classList.value === "equal"){
                if(num > 999999999999999){
                    display.innerHTML = "ERROR";
                } else {
                    display.innerHTML = num.toString();
                    if(display.innerHTML.length > 15){
                        display.innerHTML = display.innerHTML.slice(0, 15);
                    }
                }
                
            } else {
                display.innerHTML = "";
            }
        }
    })
})

clear.addEventListener("click", ()=>{
    display.innerHTML = "";
    opDisplay.innerHTML = "";
    num = 0;
})

backspace.addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML.slice(0, -1);
})
