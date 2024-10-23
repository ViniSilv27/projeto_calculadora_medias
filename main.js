const form = document.getElementById('form-atividades');
const imgAprovado  = `<img src="./images/aprovado.png" alt="emoji festejando">`
const imgReprovado  = `<img src="./images/reprovado.png" alt="emoji decepcionado">`
let linhas = '';
const listaAtividades = [];
const listanotas = [];
const spanAprovado = `<span  class="resultado aprovado">Aprovado</span></td>`
const spanReprovado = `<span  class="resultado reprovado">Reprovado</span></td>`
const notaMinima = parseFloat(prompt("Digite a nota minima: "))

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaNota();
    adicionaMedia();





})

function adicionaNota(){
    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')
    if(listaAtividades.includes(nomeAtividade.value)){
        alert("Essa atividade já foi adicionada")
    } else{
        listanotas.push(parseFloat(notaAtividade.value));
        listaAtividades.push(nomeAtividade.value);
        let linha = `<tr>`;
        linha += `<td>${nomeAtividade.value}</td>`
        linha += `<td>${notaAtividade.value}</td>`
        linha +=`<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`
        linha += `</tr>`
        linhas += linha
        const corpoTabela = document.querySelector('tbody')
        corpoTabela.innerHTML= linhas

    }

    nomeAtividade.value= ''
    notaAtividade.value=''

}

function calculaMedia(){
    let notas = 0;
    for (i=0; i< listanotas.length; i++){
        notas += listanotas[i]
    }
    return notas / listanotas.length;

}

function adicionaMedia(){
    const media = calculaMedia()
    document.getElementById('media-notas').innerHTML = media
    document.getElementById('situacao-aluno').innerHTML = media >= notaMinima ? spanAprovado : spanReprovado
}