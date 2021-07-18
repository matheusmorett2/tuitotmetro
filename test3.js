const brain = require('brain.js')

const net = new brain.recurrent.LSTM();


const bolsonaro = 1;
const lula = 0;

net.train([
  { input: "O erro da ditadura foi torturar e não matar... Leia mais em https://www.cartacapital.com.br/politica/bolsonaro-em-25-frases-polemicas/. O conteúdo de CartaCapital está protegido pela legislação brasileira sobre direito autoral. Essa defesa é necessária para manter o jornalismo corajoso e transparente de CartaCapital vivo e acessível a todos", output: 1 },
  { input: "Ele merecia isso: pau-de-arara. Funciona. Eu sou favorável à tortura. Tu sabe disso. E o povo é favorável a isso também... Leia mais em https://www.cartacapital.com.br/politica/bolsonaro-em-25-frases-polemicas/. O conteúdo de CartaCapital está protegido pela legislação brasileira sobre direito autoral. Essa defesa é necessária para manter o jornalismo corajoso e transparente de CartaCapital vivo e acessível a todos", output: 1 },
    {input: "Vamos fuzilar a petralhada aqui do Acre. Vou botar esses picaretas para correr do Acre. Já que gosta tanto da Venezuela, essa turma tem que ir para lá... Leia mais em https://www.cartacapital.com.br/politica/bolsonaro-em-25-frases-polemicas/. O conteúdo de CartaCapital está protegido pela legislação brasileira sobre direito autoral. Essa defesa é necessária para manter o jornalismo corajoso e transparente de CartaCapital vivo e acessível a todos", output: 1},
    { input: "Morreram poucos. A PM tinha que ter matado mil... Leia mais em https://www.cartacapital.com.br/politica/bolsonaro-em-25-frases-polemicas/. O conteúdo de CartaCapital está protegido pela legislação brasileira sobre direito autoral. Essa defesa é necessária para manter o jornalismo corajoso e transparente de CartaCapital vivo e acessível a todos", output: 1 },
    { input: "Eu gosto de grafeno!", output: 1},
    { input: "Eles não vão prender meus pensamentos, não vão prender meus sonhos. Se não me deixarem andar, vou andar pelas pernas de vocês. Se não me deixarem falar, falarei pela boca de vocês. Se meu coração deixar de bater, ele baterá no coração de vocês", output: 0},
    { input: "Se juntar todos os meus acusadores, os três (desembargadores do TRF4) que me julgaram, o (Sergio) Moro, o Ministério Público da Lava-Jato e a Polícia Federal, colocar numa prensa e espremer, o que sobrar não tem 10% da honestidade que eu tenho", output: 0},
    { input: "Obviamente, o Moro não deve prestar conta para mim. Ele deve prestar conta para a história. Eu também devo. A história vai dizer quem está certo ou errado", output: 0},
    { input: "Nunca antes na história desse país alguém foi tão perseguido", output: 0},
    { input: "Cadê as mulheres do grelo duro do nosso partido?", output: 0 },
    { input: "Eu criei o Bolsa Familia ", output: 0},
    { input: "Eu gosto de arma", output: 1},
    { input: "Eu sou corintiano", output: 0 }

], {

  log: (error) => console.log(error),
    iterations: 100,
    inputSize: 20,
    inputRange: 20,
    hiddenLayers: [20, 20],
    outputSize: 20,
    learningRate: 0.01,
    decayRate: 0.999,
});

const frase1 = net.run("Eu criei o Bolsa Familia")
const frase2 = net.run("Eu sou corintiano")
const frase3 = net.run("Eu gosto de arma")
const frase4 = net.run("Gostaria de lhe fuzilar pacificamente")
const frase5 = net.run("A ditadura foi ruim")

console.log('frase1', frase1)
console.log('frase2', frase2)
console.log('frase3', frase3)
console.log('frase4', frase4)
console.log('frase5', frase5)
