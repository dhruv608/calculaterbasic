const txt = document.getElementById("txtBox")
const showtxt = document.getElementById("showText");
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
livePreview()
}
function calculate(){
txt.value = eval(txt.value);

}
function showValue(buttonValue){
    txt.value += buttonValue;
    livePreview()
}
function livePreview() {
    try {
        let last = txt.value.slice(-1);
        if (["+", "-", "*", "/"].includes(last)) {
            showtxt.innerText = ""; // don't calculate if incomplete
        } else {
            let result = eval(txt.value);
            showtxt.innerText = result;
        }
    } catch {
        showtxt.innerText = "";
    }
}