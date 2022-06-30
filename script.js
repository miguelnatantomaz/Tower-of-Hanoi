
//ELEMENTOS E VARIAVEIS UTILIZADAS
const telaDoJogo = document.querySelector(".teladastorres")
const header = document.querySelector("header")
const divDadosDaTorre = document.querySelector(".dadosDaTorre") 
const qtdDisco3 = document.querySelector("#qtdDisks3") 
const qtdDisco4 = document.querySelector("#qtdDisks4") 
const qtdDisco5 = document.querySelector("#qtdDisks5") 
const qtdDisco6 = document.querySelector("#qtdDisks6") 
const btnStart = document.querySelector(".btnStart")
const qtdMovimentos = document.querySelector(".movimentos")
const btnRestart = document.querySelector(".restart")
const tituloDoJogo = document.querySelector("h1")
const msgVitoria = document.querySelector("#mensagemVitoria")
const victory = document.getElementById("victory")
const contadorSegReset = document.getElementById("contadorSegReset")
const escolhaDificuldade = document.getElementById("escolhadificuldade")

// CRIADO AS TORRES
const torreUm = document.createElement("div")
torreUm.id = "primeiraTorre"
torreUm.classList.add("torres")
telaDoJogo.appendChild(torreUm)

const torreDois = document.createElement("div")
torreDois.id = "segundaTorre"
torreDois.classList.add("torres")
telaDoJogo.appendChild(torreDois)

const torreTres = document.createElement("div")
torreTres.id = "terceiraTorre"
torreTres.classList.add("torres")
telaDoJogo.appendChild(torreTres)

let verifyDisks = false
//SELECIONANDO DISCO
let discoOrigem = 0;
let discoDestino = 0;
//clique = false quer dizer começo do jogo ou que fez uma movimentação
let clique = false;
let clickDisco = 0;
let contadorMovimentos = 0;
let discoWidth = 0;
let segundoCliqueWidth = 0;
let vitorias = 0;
let discosTerceiraTorre = 0;


//FUNÇÕES UTILIZADAS

//TRAINSIÇÃO DA TELA DE START PARA A TELA DO JOGO
const transicaoDeTela = () => {    
    telaDoJogo.style.display = "flex"
    btnStart.style.display = "none"
    header.classList.add("headerTitutlo")
    divDadosDaTorre.style.display = "flex"
    tituloDoJogo.classList.add("tituloH1")
    msgVitoria.innerHTML = "Move all disks to third tower!"
}

//FUNCTION
//VERIFICAR SE GANHOU
const verifyVictory = ()=>{    
    if(discosTerceiraTorre === 3 && torreUm.childElementCount === 0 && torreDois.childElementCount === 0){
        discosTerceiraTorre = 0;
        mensagemVitoria()
    } else if (discosTerceiraTorre === 4 && torreUm.childElementCount === 0 && torreDois.childElementCount === 0){
        discosTerceiraTorre = 0;
        mensagemVitoria()
    } else if (discosTerceiraTorre === 5 && torreUm.childElementCount === 0 && torreDois.childElementCount === 0){
        discosTerceiraTorre = 0;
        mensagemVitoria()
    } else if (discosTerceiraTorre === 6 && torreUm.childElementCount === 0 && torreDois.childElementCount === 0){
        discosTerceiraTorre = 0;
        mensagemVitoria()
    } 
}


//MENSAGEM VITORIA
const mensagemVitoria = ()=>{      
            msgVitoria.style.color = "#533B4D"
            msgVitoria.innerHTML = "PARABÉNS, VOCÊ CONSEGUIU!"
            contadorSegReset.style.display = "flex"
            victory.style.display = "flex"
            victory.innerHTML = "O jogo irá reiniciar em 5 segundos!"
            setTimeout(reset, 5500)
}   


//CRIAR COR ALEATORIA
const corRandom = (opacidade)=>{
   let r = Math.random() * 255;
   let g = Math.random() * 255;
   let b = Math.random() * 255;
   
   return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

//CRIAR OS DISCOS
const disk = (numDiscos) => {
    for(let i = 0; i < numDiscos; i++){
        const disco = document.createElement("div")
        disco.classList.add(`disco`)
        disco.id = `disco${i}`
        disco.style.background = `${corRandom(1)}`
        torreUm.appendChild(disco)
    }
}

//RESTART // corrigido bug de clicar em um disco e resetar e depois clicar na torre o ultimo disco é movido!
const reset = () => {
    verifyDisks = false
    contadorMovimentos = 0;
    discoOrigem = 0;
    qtdMovimentos.innerHTML = "0"  
    torreUm.innerHTML = ""
    torreDois.innerHTML = ""
    torreTres.innerHTML = ""
    msgVitoria.innerHTML = "Move all disks to third tower!"
    contadorSegReset.style.display = "none"
    victory.style.display = "none"
    msgVitoria.style.color = "#275070"
}


//EVENTOS 
btnRestart.addEventListener("click", reset)
btnStart.addEventListener("click", transicaoDeTela)

qtdDisco3.addEventListener("click", (a) => {
  if(verifyDisks === false){
    verifyDisks = true
    return disk(3)
    }
})
 
qtdDisco4.addEventListener("click", (a) => {
  if(verifyDisks === false){
    verifyDisks = true 
    return disk(4)
    }
})

qtdDisco5.addEventListener("click", (a) => {
  if(verifyDisks === false){
    verifyDisks = true 
    return disk(5)
    }
})

qtdDisco6.addEventListener("click", (a) => { 
  if(verifyDisks === false){
    verifyDisks = true 
    return disk(6)
    } 
})



//INCERCEPTADOR DO MEU CLICK NA TELA DO JOGO
telaDoJogo.addEventListener("click", verifyTurrent)

function verifyTurrent(event){
const click = event.target
let segundoCliqueWidth = 0;
let segundoCliqueWidhtDisco = 0;


            //CONDICIONAIS SOBRE CLICAR EM TORRES OU DISCOS
        if(click.className == "torres" && click.childElementCount > 0){
                    clique = true;
                    discoOrigem = click.lastElementChild
                    discoWidth = discoOrigem.clientWidth

        } else if(clique === false && click.className == "disco"){
                    clique = true
                    clickDisco = click.parentNode
                    discoOrigem = clickDisco.lastElementChild
                    discoWidth = discoOrigem.clientWidth
        } else if(clique === true){
                   clique = false 
            
                if(click.className == "torres"){
                    if(click.childElementCount > 0){
                        segundoCliqueWidth = click.lastElementChild
                        segundoCliqueWidhtDisco = segundoCliqueWidth.clientWidth   
                    } else {
                            click.appendChild(discoOrigem)
                            discosTerceiraTorre = torreTres.childElementCount
                            contadorMovimentos++; 
                        } 
                } 

                
                if(click.className == "disco"){
                   if(click.parentNode.childElementCount > 0){
                        segundoCliqueWidth = click
                        segundoCliqueWidhtDisco = segundoCliqueWidth.clientWidth     
                    }

                    if(segundoCliqueWidhtDisco > discoWidth){
                        discoDestino = click.parentNode
                        discoDestino.appendChild(discoOrigem)
                        contadorMovimentos++; 
                        discosTerceiraTorre = torreTres.childElementCount
                    } 
                }
            }
            console.log(discosTerceiraTorre)
            verifyVictory()
            
    qtdMovimentos.innerHTML = contadorMovimentos
}


 
            
     
