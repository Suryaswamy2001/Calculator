let buttons = document.querySelectorAll('button');
let text = document.querySelector('input');
let arr = Array.from(buttons);
let calculatedValue = "";
arr.forEach(button => {
    button.addEventListener('click', () => {
        if(button.innerHTML === '='){
            calculatedValue = eval(calculatedValue);
            text.value = calculatedValue;
        }
        else if(button.innerHTML === 'del'){
            calculatedValue = calculatedValue.substring(0,calculatedValue.length-1);
            text.value = calculatedValue;
            console.log("del");
        }
        else if(button.innerHTML === "Ac"){
            calculatedValue = "";
            text.value = calculatedValue;
        }
        else{
            calculatedValue += button.innerHTML;
            text.value = calculatedValue;
        }
    });
});