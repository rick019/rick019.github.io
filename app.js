function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo")
    if(campo.style.display == "inline"){
        campo.style.display = "none" 
    }else{
        campo.style.display = "inline"
    }
}

// array
// let projetos = ['Calculadora' , 'Conversor' , 'Mentalista' , 'NetFilmes']
// let projetosDescricao = [
//     'Descrição do projeto da calculadora',
//     'Descrição do projeto do conversor' ,
//     'Descrição do projeto mentalista' ,
//     'Descrição do projeto NetFilmes'
// ]
// let fotos = [calculadora.png]

// objetos + array
let projeto1 = {
    titulo: 'Calculadora' ,
    descricao: 'Projeto desenvolvido utilizando javascript, htm e css de uma calculadora de média simples' ,
    foto: 'calculadora.png'
}

let projeto2 = {
    titulo: 'Conversor' ,
    descricao: 'Descrição do conversor' ,
    foto: 'conversor.png'
}

let projetos = [projeto1, projeto2]

let projetoAtual = 0

function ProximoProjeto(){
    if(projetoAtual < 1){
    projetoAtual++
    }else{
        projetoAtual = 0
    }

    titulo = document.querySelector(".titulo-projeto")
    titulo.innerHTML = projetos[projetoAtual].titulo

    descricao = document.querySelector(".texto-corpo")
    descricao.innerHTML = projetos[projetoAtual].descricao

    imagem = document.querySelector(".foto-perfil")
    imagem.src = "images/" + projetos[projetoAtual].foto
}