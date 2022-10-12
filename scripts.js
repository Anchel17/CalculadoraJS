let display = document.getElementById("textoDisplay");
let numero1 = "";
let numero2 = "";
let result;
let op;
let ligado = false;

function salvaNum(el){
    if(ligado){
        if(op == null){
            if(numero1.length < 10){
                numero1 += el.textContent;
                display.textContent = numero1;
            }
        }
        else{
            if(numero2.length < 10){
                numero2 += el.textContent;
                display.textContent = numero2;
            }
        }
    }
}

function liga_desliga(){
    ligado = !ligado;
    if(ligado){
        display.textContent = "0";
    }
    else{
        display.textContent = "";
        numero1 = "";
        numero2 = "";
        op = null;
    }
}

function setOperacao(el){
    if(op != null){
        numero1 = result;
        numero2 = "";
        result = null;
    }
    op = el.textContent;
}

function reset(){
    numero1 = "";
    numero2 = "";
    op = null;
    display.textContent = "0";
}

function resultado(){
    if(ligado){
        switch(op){
            case "+":
                result = parseFloat(numero1) + parseFloat(numero2);
            break;
            case "-":
                result = parseFloat(numero1) - parseFloat(numero2);
            break;
            case "*":
                result = parseFloat(numero1) * parseFloat(numero2);
            break;
            case "/":
                if(numero2 == 0){
                    result = "Operação inválida!";
                    reset();
                }
                else{
                    result = parseFloat(numero1)/parseFloat(numero2);
                }
            break;
            default:
        }

        if(result === "Operação inválida!"){
            setTimeout(reset, 2000);
        }
        
        display.textContent = "" + result;
    }
}