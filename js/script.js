const elementosDaCelula = document.querySelectorAll("[data-cell]")
const mesaDeJogo = document.querySelector("[data-mesaDeJogo]")
const mensagemVencedorTexto = document.querySelector("[data-mensagemVencedor]")
const mensagemVencedor = document.querySelector("[data-MensageDeVitoria]")


let contX = 0
let contO = 0
let contE = 0

let x = document.getElementById('x')
let o = document.getElementById('o')
let e = document.getElementById('e')
const botao = document.querySelector("[data-buttonr]")



function iniciarJogo(){
    for (const cell of elementosDaCelula ) {

         cell.classList.remove('o')
         cell.classList.remove('x')

    
        cell.addEventListener("click", controleClick, {once: true})

    

    } 

    teste()


    mensagemVencedor.classList.remove('t')
    
   
}









const combinacaoVitoria = [

    //horizontal
    [0, 1, 2], //eixo x 1
    [3, 4, 5], //eixo x 2
    [6, 7, 8], //eixo x 3
    

    //vertical
    [0, 3, 6], //eixo y 1
    [1, 4, 7], //eixo y 2
    [2, 5, 8], //eixo y 3

    //diagonal
    [0, 4, 8], //diagonal decendente
    [2, 4, 6 ], //diagonal acendente
    
    
    

]

let t 


 //checar por vitoria

    function combinacaoVitoriam(jogador){

        return combinacaoVitoria.some((combination) => {
            return combination.every((index) => {
                return  elementosDaCelula[index].classList.contains(jogador)
            })
        })
      }








let vezDoCirculo ;


    //colocar o x ou circulo

    function colocarXouCirculo(cell, adicionarClass){

    

      
        cell.classList.add(adicionarClass)

    }

    //mudar o simbulo


    function teste(){

        mesaDeJogo.classList.remove('x')
        mesaDeJogo.classList.remove('o')

        if(vezDoCirculo == true){
            
            mesaDeJogo.classList.add('o')
            
        }else{
          


            
            mesaDeJogo.classList.add('x')
        }
    }

    function trocaSimbulo(){

        vezDoCirculo = !vezDoCirculo

        teste()
        

    }




 



    function controleClick (e){

        const cell = e.target
        const adicionarClass = vezDoCirculo ? "o"  : "x"
        //colocar o x ou circulo
            colocarXouCirculo( cell, adicionarClass)
        //mudar o simbulo
        trocaSimbulo()
            
            //checar por vitoria

        let ganhou = combinacaoVitoriam( adicionarClass)

        let empat = empate()
        if (ganhou){
            fimJogo(false)
            
        }else  if (empat){
            //checar por empate
            fimJogo(true)
            
        }
         
        }

iniciarJogo()

//fin de jogo
function teste3(){
    if(vezDoCirculo === true){

        vezDoCirculo = false
        
        mensagemVencedorTexto.innerHTML = "x ganhou"  

        contX++

        x.innerHTML = contX


    }else{
        vezDoCirculo = true
        mensagemVencedorTexto.innerHTML = "o ganhou" 

        contO++

        o.innerHTML = contO

    }
}

function fimJogo(parar){

    if (parar){
        mensagemVencedorTexto.innerHTML = "empate";
        contE++

        e.innerHTML = contE
   
        
    }
    else{
        teste3()

    }
    

    

    mensagemVencedor.classList.add('t')
}








function empate(){
     return[... elementosDaCelula].every((cell)=>
     {
        return cell.classList.contains('x') || cell.classList.contains('o')
     })
}


