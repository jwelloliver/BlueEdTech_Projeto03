var prompt = require('prompt-sync')();

// Inicio do Jogo
console.log("### Jogo do Dados ###\n")

let rodadas = +prompt("quantas Rodadas você que fazer?: ");

let numeroJogadores = +prompt("\nQuantos Jogadores vão jogar?: ");
let cont = 0;
let numero1 = 0;
let nome1 = '';
let = jogarDado = '';
const listaJogadores = [];
const dados = ['1','2','3','4','5','6'];

function jogador(nome,numero) {
    this.nome = nome;
    this.numero = numero;
}
 
    while (cont < rodadas) {

        for (let i = 0; i < numeroJogadores; i++) {
            
            nome1 = prompt(`Digite o nome do Jogador ${i+1} :`);
            
            numero1 = dados[Math.floor(Math.random() * dados.length)];
            
            console.log(`\n O valor do dado e: ${numero1}`)
                
            const jogadores = new jogador(nome1,numero1);

            listaJogadores.push(jogadores);
            
        }


     cont++;
    }


console.log(listaJogadores);