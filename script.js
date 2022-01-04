let number1 = Number(prompt('entrez le premier nombre'));
let number2 = Number(prompt('entrez le second nombre'));
let operateur = prompt('choisisez un operateur');

function additionner(){
    if(number1 + number2){
        console.log(number1 + number2);
    }
}

function multiplier(){
    if(number1 * number2){
        console.log(number1 * number2);
    }
}

function soustraire(){
    if(number1 - number2){
        console.log(number1 - number2);
    }
}

function diviser(){
    if(number1 / number2){
        console.log(number1 / number2);
    }
}

if (operateur == "+"){
    additionner(); 
}

if (operateur == "*"){
    multiplier(); 
}

if (operateur == "-"){
    soustraire(); 
}

if (operateur == "/"){
    diviser(); 
}