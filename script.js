let quizData = [
    {  
            title: `Acrescente uma "tooltip" ao parágrafo abaixo com o texto "Sobre Quizcode".`,
            question: `<p ***="Sobre Quizcode">Quizcode de quiz sobre programação.</p>`,
            a: "h1",
            b: "id",
            c: "class",
            d: "title",
            correct: "d",
          },
          {
            title: `Ajuste o tamanho da imagem para 250 pixels de largura e 400 pixels de altura.`,
            question: '<img src="w3schools.jpg" width="***" height="***">',
            a: "width=250, height=250",
            b: "width=400, height=250",
            c: "width=250, height=400",
            d: "width=400, height=400",
            correct: "c",
          },
          {
            title: `Transforme o elemento abaixo em um link que vá para "https://www.quizcode.com.br".`,
            question: `<a ***="https://www.quizcode.com.br">Isso é um link.</a>`,
            a: "src",
            b: "href",
            c: "link",
            d: "script",
            correct: "b",          
    }
]
let pergunta1 = document.querySelector("#pergunta1")
let pergunta2 = document.querySelector("#pergunta2")

let a = document.querySelector("#question1")
let b = document.querySelector("#question2")
let c = document.querySelector("#question3")
let d = document.querySelector("#question4")

let button = document.querySelector("submit")
let answerEls = document.querySelectorAll(".answer")

let currentQuiz = 0
let score = 0


function loadQuiz(){
    let currentQuizData = quizData[currentQuiz]
    pergunta1.innerText = currentQuizData.title
    pergunta2.innerText = currentQuizData.question
    a.innerText = currentQuizData.a
    b.innerText = currentQuizData.b
    c.innerText = currentQuizData.c
    d.innerText = currentQuizData.d
}
loadQuiz();

// Fazer uma função com for each ver como funciona
