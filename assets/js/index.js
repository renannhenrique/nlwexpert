
// Lista de perguntas
const perguntas = [
    {
        pergunta: "Como declarar uma variável em JavaScript?",
        respostas: [
            "A. let myVar = 10;",
            "B. const myVar = 'Hello';",
            "C. var myVar = true;"
        ],
        correta: 1,
        correspondente: "B"
    },
    {
        pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
        respostas: [
            "A. Uma linguagem de programação",
            "B. Uma biblioteca de terceiros",
            "C. Uma representação hierárquica dos elementos HTML na página"
        ],
        correta: 2,
        correspondente: "C"
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "A. array.push(elemento);",
            "B. array.unshift(elemento);",
            "C. array.pop(elemento);"
        ],
        correta: 1,
        correspondente: "B"
    }

    

];

const corretas = new Set(); // Objeto onde ele armazenará apenas um valor de cada indice
const totalPerguntas = perguntas.length; // Contando quantas pergunta tem
const mostrarTotal = document.querySelector("#acertos span");
      mostrarTotal.textContent = "0 de " + totalPerguntas;
      

const template = document.querySelector("template"); // pegando a div completa
const jQuiz = document.querySelector("#j-quiz"); // Pegando a div vazia


// Contando os elementos do array acima
for (const item of perguntas) {

    const quizItem = template.content.cloneNode(true); //Pegando o conteudo da div "template" e clonando ela
    

    quizItem.querySelector("h3").textContent = item.pergunta;//Pegando o h3 e subistituindo o conteudo em texto pela pergunta la do array
   
    // Contando so as respostas
    for (let resposta of item.respostas) {

        const dt = quizItem.querySelector("dl dt").cloneNode(true); // Clonando a div dt   
              dt.querySelector("span").textContent = resposta; // Alterando o valor da resposta

              // Adicionando um atribuito no input e colocando um indice a ele
              dt.querySelector("input").setAttribute('name', 'pergunta-' + perguntas.indexOf(item));

              // Buscando o input e adicionando no valor dele os indece de resposta
              dt.querySelector("input").value = item.respostas.indexOf(resposta);
              

              // adicionando no input o evento de onChange ou seja um evento de "mudar"
              dt.querySelector("input").onchange = (event) => {
                
                corretas.delete(item);

                // Pegando o valor a qual foi selecionado no input e comparando com o resposta correta
                if (event.target.value == item.correta) {

                    window.alert("Você acertou! Parabéns!!!");
                    corretas.add(item);
                   
                }else{
                    window.alert("Você errou! a resposta correta alternativa: " + item.correspondente);
                }

                mostrarTotal.textContent = corretas.size + " de " + totalPerguntas;


                
              };


              quizItem.querySelector('dl').appendChild(dt); // adicionando dt na dl
    }

    

    quizItem.querySelector("dl dt").remove(); // Removendo a dt

    
    jQuiz.appendChild(quizItem); // adicionando na div vazia a div template  

   
}

alert("Você acertou: " + perguntasAcertos + " perguntas!");







   