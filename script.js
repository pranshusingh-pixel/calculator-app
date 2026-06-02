const inputvalue = document.getElementById("user-input");
const numberButtons = document.querySelectorAll(".key-numbers");
const calculate = document.querySelectorAll(".operations");

numberButtons.forEach((item) =>{
    item.addEventListener("click", (e) => {
        if(inputvalue.value === "NaN"){
            inputvalue.innerText = " ";
    }
    if(inputvalue.innerText === "0"){
        inputvalue.innerText = " ";
    }
    inputvalue.innerText += e.target.innerHTML.trim();
    
})
}) 

calculate.forEach((item) =>{
    item.addEventListener("click", (e) => {
        let lastvalue = inputvalue.innerText.substring(inputvalue.innerText.length, inputvalue.innerText.length - 1);

        if(!isNaN(lastvalue) && e.target.innerHTML === "="){

            inputvalue.innerText = eval(inputvalue.innerText);
        }
        else if(e.target.innerHTML === "AC"){
            inputvalue.innerText = "0";
        }
        else if(e.target.innerHTML === "Del"){
            inputvalue.innerText = inputvalue.innerText.substring(0, inputvalue.innerText.length - 1);

            if(inputvalue.innerText.length === 0){
                inputvalue.innerText = "0";
            }
        }
        else{
            if(!isNaN(lastvalue)){
                inputvalue.innerText += e.target.innerHTML;
            }
        }
    });
});