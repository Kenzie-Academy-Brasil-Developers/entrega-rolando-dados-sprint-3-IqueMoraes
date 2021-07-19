// defenir objeto inicial
const count = [
    {2: 0},
    {3: 0},
    {4: 0},
    {5: 0},
    {6: 0},
    {7: 0},
    {8: 0},
    {9: 0},
    {10: 0},
    {11: 0},
    {12: 0}
]
console.log(count)

//seleção da área para limpar filhos e imprimir novos
const mesa = document.getElementById('mesa_dos_resultados');

//função para limpar a mesa
function limparMesa(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//função para rodar números aleatórios
const faceAleatoria = () => {
    const numFaces = [1, 2, 3, 4, 5, 6];
  
    let numAleatorio = numFaces[Math.floor(Math.random() * 6)];
    // console.log(numAleatorio);
    return numAleatorio;
  };

//função para desenhar gŕafico de frequência
  const escreveGrafico = (y, z) => {
    //cria os pontos do gráfico na impressão dos dados
    const pontoFreq = document.createElement("div");
    pontoFreq.classList.add('linha_grafico')
   
    //soma os dados
    let soma = y + z;

    //cria uma variável para atribuir os pontos
    const numero_da_vez = document.getElementById(soma);
    numero_da_vez.appendChild(pontoFreq);
};

const escreveDados = (x, y, z) => {
    //cria a área de impressão dos dados
    const caixa = document.createElement("div");
    const numeroLance = document.createElement("h2");
    numeroLance.classList.add('numero_lance');
    numeroLance.innerText = 'Lance número:' + x;


    //cria os próprios dados
    const dado1 = document.createElement("div");
    dado1.classList.add('dados');

    const dado2 = document.createElement("div");
    dado2.classList.add('dados');


    //atribui os valores aos dados
    const numeroDado1 = document.createElement("h3");
    numeroDado1.classList.add('numero_dados');
    numeroDado1.innerText = y;

    const numeroDado2 = document.createElement("h3");
    numeroDado2.classList.add('numero_dados');
    numeroDado2.innerText = z;

    //aninha os valores nos dados e os dados na área de impressão
    dado1.appendChild(numeroDado1);
    dado2.appendChild(numeroDado2);

    caixa.appendChild(numeroLance);
    caixa.appendChild(dado1);
    caixa.appendChild(dado2);


    mesa.appendChild(caixa);

};


const lancador = document.getElementById("lancador");
lancador.addEventListener("click", () => {
    console.log('aqui funciona');

    limparMesa(mesa);

    const numero_lances = document.getElementById('input_lances');
    const lances = numero_lances.value;

    for (let rodadas = 0; rodadas < lances ; rodadas ++) {
        console.log(rodadas);
        const resultadoDado1 = faceAleatoria();
        const resultadoDado2 = faceAleatoria();
        const numeroLance = rodadas + 1;

        escreveGrafico(resultadoDado1, resultadoDado2);
        escreveDados(numeroLance, resultadoDado1, resultadoDado2);

    }
});