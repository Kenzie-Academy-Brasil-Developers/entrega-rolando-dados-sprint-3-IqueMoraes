// defenir objeto inicial
let count = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]

//seleção da área para limpar filhos e imprimir novos
const mesa = document.getElementById('mesa_dos_resultados');
const freqEmTexto = document.getElementById('frequenciaEmTexto')


//função para limpar a mesa
function limparMesa(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    let i=0;
    while(i<count.length){
        count[i]=0;
        i++
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
      
     let max = 0;
     count.filter(item => {
         if(item > max){
             max = item;
         }
     })

      for(let i=2; i<13; i++){
        const numero_da_vez = document.getElementById(`${i}`);
        const pontoFreq = document.createElement("div");
        pontoFreq.classList.add('linha_grafico')
        pontoFreq.style.height = `${(count[i-2]*100)/max}%`
        numero_da_vez.appendChild(pontoFreq);
    }
};

//função para expor frequencia de numeros em texto

function frequenciaEmTexto(x){
    
    for(let i=2; i<13; i++){
        const p = document.createElement('p')
        p.innerText= `${i}: ${count[i-2]}`
        freqEmTexto.appendChild(p)
       
    }


}

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
    limparMesa(mesa);
    limparMesa(freqEmTexto);
    for(let i=2; i< 13;i++){
        const numero_da_vez = document.getElementById(`${i}`);
        limparMesa(numero_da_vez)
    }

    const numero_lances = document.getElementById('input_lances');
    const lances = numero_lances.value;

    for (let rodadas = 0; rodadas < lances ; rodadas ++) {
        // console.log(rodadas);
        const resultadoDado1 = faceAleatoria();
        const resultadoDado2 = faceAleatoria();
        const numeroLance = rodadas + 1;
        count[(resultadoDado1+resultadoDado2)-2]++

        escreveDados(numeroLance, resultadoDado1, resultadoDado2);
        
    }
    escreveGrafico();
    frequenciaEmTexto()

});