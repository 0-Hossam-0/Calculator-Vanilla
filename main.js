const display = document.getElementById('display');

function appendToDisplay(input){
    if(display.value == 'Error')
        {
            return
        }
    display.style.color = 'white';
    display.value += input;
}
function displayResult()
{
    try{
    display.value = eval(display.value);
}
catch(error){
    display.style.color = 'red';
    display.value = 'Error';
}
}

function clearDisplay(){
display.value = '';
}