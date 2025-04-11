const txt = document.getElementById("txtBox")
const buttonElem = document.querySelectorAll("button");
for(let i = 0 ; i<buttonElem.length ; i++){
    buttonElem[i].addEventListener("click",() =>{
    
        buttonValue = buttonElem[i].textContent
        if(buttonValue == "C"){
            clearResult();
        }
        else if(buttonValue == "="){
            calculate();
        }
        else{
            showValue(buttonValue);
        }
    })
}

document.getElementById("crossId").addEventListener("click",() =>{
    txt.value = txt.value.slice(0, -1);
})
document.getElementById("percentID").addEventListener("click",() =>{
    txt.value = (parseFloat(txt.value) / 100).toString();
})




function clearResult(){
txt.value = "";
}
function calculate(){
txt.value = eval(txt.value);

}
function showValue(buttonValue){
    txt.value += buttonValue;
}
