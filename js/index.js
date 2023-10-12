var inpNumber = document.getElementById('inpNumber');
var btn = document.getElementById('btn');
var resultado = document.getElementById('resultado');


var numAleatorio = Math.floor(Math.random() * 20) + 1;

btn.addEventListener('click', function(){
    
    var palpitePlayer = inpNumber.value;

    if(isNaN(palpitePlayer) || palpitePlayer < 1 || palpitePlayer > 20){

        resultado.innerHTML = 'Digite um numero válido!';

    }else if(palpitePlayer === numAleatorio){

    }else{

        if(palpitePlayer != numAleatorio){


            switch(true){

                case numAleatorio  >= 1 && numAleatorio <= 5:
    
                    resultado.innerHTML = 'Dica: fica entre 1 e 5';
    
                break;
    
                case numAleatorio  >= 5 && numAleatorio <= 10:
    
                    resultado.innerHTML = 'Dica: fica entre 5 e 10';
    
                break;
    
                case numAleatorio  >= 10 && numAleatorio < 15:
    
                    resultado.innerHTML = 'Dica: fica entre 10 e 15';
                    
                break;

                case numAleatorio  >= 15 && numAleatorio < 20:
    
                    resultado.innerHTML = 'Dica: fica entre 15 e 20';
                    
                break;
    
                default:
    
                break;
            }

        }else{

            resultado.innerHTML = 'Parabéns, você ganhou!'

        }
    }

});