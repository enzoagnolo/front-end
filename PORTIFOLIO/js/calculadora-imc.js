//capturar os eventos do formulário
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e){ //a função aguarda o usuario clicar no 
    e.preventDefault(); //muda o comportamento padrão do formulário que estamos escutando

    const inputPeso = e.target.querySelector('#peso')
    const peso = Number(inputPeso.value)
    console.log(inputPeso)
    console.log(peso)

    const inputAltura = e.target.querySelector('#altura')
    const altura = Number(inputAltura.value)
    console.log(inputAltura)
    console.log(altura)
 
    const Peso = Number (inputPeso.value)
    const Altura = Number (inputAltura.value)

    const imc = calcularImc(peso, altura)

    console.log(imc)
    const classificacao = tabela (imc) //estou chamando a funçao tabelaImc
    console.log(classificacao);
    mostrarResultado(classificacao);
})

//função para calcular o IMC e retornar o valor do imc com duas casas decimais
function calcularImc(peso, altura){
    let imc= (peso / altura ** 2); //fórmula do imc
    return imc.toFixed(2); //tofixed(2) foi usado para formartar o número em 2 casas decimais
} 

//funçao para retornar o valor na tela 
function mostrarResultado(msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = msg;
}

//funçao para classificar em qual grau de imc a pessoa sera 
function tabela(imc){
    const classificaçao = ['abaixo do peso' , 'peso normal' , 'sobrepeso' ,
                           'obesidade grau I' , 'obesidade grau II' , 'obesidade grau III']
if(imc >=39.9) return classificaçao[5];
if(imc >=34.9) return classificaçao[4];
if(imc >=29.9) return classificaçao[3];
if(imc >=24.9) return classificaçao[2];
if(imc >=18.5) return classificaçao[1];
}












