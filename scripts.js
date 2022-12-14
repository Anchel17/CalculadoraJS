let display = document.getElementById("textoDisplay");
let num1String = "";
let numero1 = 0;
let num2String = "";
let numero2 = 0;
let result;
let op;
let ligado = false;

function salvaNum(el){
    if(ligado){
        if(op == null){
            if(num1String.length < 10){
                if((num1String.includes('.')) && el.textContent === '.'){
                    return;
                }
                if(el.textContent === '.'){
                    num1String += el.textContent;
                    display.textContent = num1String;
                }
                else{
                    num1String += el.textContent;
                    numero1 = parseFloat(num1String);
                    display.textContent = num1String;
                }
            }
        }
        else{
            if(op === '-' && numero1 === 0){
                if(num1String.length < 10){
                    if((num1String.includes('.')) && el.textContent === '.'){
                        return;
                    }
                    if(el.textContent === '.'){
                        num1String += el.textContent;
                        display.textContent = num1String;
                    }
                    else{
                        num1String += el.textContent;
                        numero1 = parseFloat(num1String) * -1;
                        display.textContent = numero1;
                    }
                }
                op = null;
                return;
            }

            if(num2String.length < 10){
                if(num2String.includes('.') && el.textContent === '.'){
                    return;
                }
                if(el.textContent === '.'){
                    num2String += el.textContent;
                    display.textContent = num2String;
                }
                else{
                    num2String += el.textContent;
                    numero2 = parseFloat(num2String);
                    display.textContent = num2String;
                }
            }
        }
    }
}

function liga_desliga(){
    ligado = !ligado;
    if(ligado){
        display.textContent = "-";
    }
    else{
        display.textContent = "";
        num1String = "";
        num2String = "";
        numero1 = 0;
        numero2 = 0;
        op = null;
    }
}

function setOperacao(el){
    if(op != null){
        num1String = "";
        num2String = "";
        numero1 = result;
        numero2 = 0;
        result = null;
    }
    op = el.textContent;
}

function reset(){
    num1String = "";
    num2String = "";
    numero1 = 0;
    numero2 = 0;
    op = null;
    display.textContent = "0";
}

function resultado(){
    if(ligado){
        switch(op){
            case "+":
                result = numero1 + numero2;
            break;
            case "-":
                result = numero1 - numero2;
            break;
            case "*":
                result = numero1 * numero2;
            break;
            case "/":
                if(numero2 == 0){
                    result = "Opera????o inv??lida!";
                    reset();
                }
                else{
                    result = numero1/numero2;
                }
            break;
            default:
        }

        if(result === "Opera????o inv??lida!"){
            setTimeout(reset, 2000);
        }
        
        display.textContent = "" + result;
    }
}