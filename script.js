const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "A nessecidade de tratamento de esgoto se faz cada vez mais presente em nosso dia a dia... ",
    alternativas:[
        {
        texto:"Se faz cada vez mais necessaria por conta do mau descarte.",
        afirmacao:"Por conta que muitas das vezes são descartados em lagos e rios."
        },
        {
       texto:"Como podem ser tratadas as redes de esgoto.",
       afirmacao:"Se faz necessario o uso de saneamento basico"
        }

    ]
},

{
    
        enunciado: "Entre os principais impactos de mau descarte do esgoto estão.",
        alternativas:[{
            texto:"A poluição de rios e lagos por conta de alguns esgotos serem descartado no rio sem o saneamento basico.",
            afirmacao:"Essa poluição está muito presente em varias regiões."
        },
        {        
           texto:"Uma dos impactos causados entre eles tambem são a morte de alguns animais de várias especies.  ",
           afirmacao:"causadas por conta de algumas bacterias que estão presentes no esgoto."
        }        
        ]
    },
    

    {
    
        enunciado: "Ainda sobre os impactos temos tabem alguns fatores principais de falta de rede de esgoto.",
        alternativas:[
            {
            texto:"Diarreia e leptospirose, devido à contaminação de água e alimentos, e degrada o meio ambiente.",
            afirmacao:"por conta da falta de tratamento"
            },
            {
            texto:"Poluição solos, rios e mares, afetando a biodiversidade e o turismo.",
            afirmacao:"falta de saneamento basico"
            }
        ]
    },
    
    {
    
        enunciado: "Qual uma soluçlão para fazer o tratamento dos esgotos.",
        alternativas:[
            {
            texto:"processos físicos, como gradeamento e sedimentação, para remover sólidos; químicos, que utilizam reagentes para purificar a água; e biológicos, que empregam microrganismos para degradar matéria orgânica.",
            afirmacao:"soluções para tratamento"
        },
        {
            texto:"As técnicas incluem sistemas como o lodo ativado, reatores anaeróbios.",
            afirmacao:"afirmação"
        }
        ]
    },

    {
    
        enunciado: "Quais os impactos possitivo de rede esgoto?",
        alternativas:[
            {
            texto:"reduz o índice de doenças, diminuindo os gastos do sistema público de saúde.",
            afirmacao:"afirmação"
            },
        {
            texto:"Além disso, a geração de emprego e o aumento da renda trazem mais conforto e estabilidade para a população.",
            afirmacao:"afirmação"
        }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
    }
    
    function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
    }
     }

     function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada. afirmacoes;
        historiaFinal += afirmacoes + "" ;
        atual++;
        mostraPergunta();

     }

     function mostraResultado(){
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
     }
    
     mostraPergunta();

