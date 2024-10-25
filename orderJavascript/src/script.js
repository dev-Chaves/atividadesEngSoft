/*

    

    // const titulos = [
    //     { texto: 'ID', id: 'idTitulo' },
    //     { texto: 'Nome', id: 'nomeTitulo' },
    //     { texto: 'Departamento', id: 'departamentTitulo' },
    //     { texto: 'Função', id: 'funcaoTitulo' },
    //     { texto: 'Salário', id: 'salarioTitulo' }
    // ];


    // titulos.forEach(titulo => {
    //     const th = document.createElement('th');
    //     th.textContent = titulo.texto; 
    //     th.id = titulo.id;
    //     cabecalho.appendChild(th);
    // });

    // table.appendChild(cabecalho);


A lógica por trás da função de comparação (a, b) => a - b é simples:
Se o valor for negativo (quando a - b < 0), a é considerado menor que b e deve aparecer antes na lista.
Se o valor for zero (quando a - b === 0), a e b são iguais em termos de ordem.
Se o valor for positivo (quando a - b > 0), a é considerado maior que b e deve aparecer depois.

*/

//const vet = [ 4, 5, 3, 2 ,9 ,1];
//const vetPalavras = [ 'uva', 'banana', 'Laranja', 'morango']
//const vet = [ 4, 45, 37, 3, 2 ,9 ,1];

//console.log(vet);

//const vetOrder = vet.sort((a, b) => a - b);
//console.log(vetOrder);

// const ordenado = funcionarios.banco.sort((a,b)=>a.nome.localeCompare(b.nome));

//import { funcionarios } from "../databases/banco";

import { funcionarios } from '../databases/banco.js';

//////////////////// BOTÕES ////////
const btnId = document.getElementById('btnId');
const btnName = document.getElementById('btnName');
const btnDep= document.getElementById('btnDep');
//////////////////// BOTÕES ////////

const containerTabela = document.getElementById('containerTabela');
const table = document.getElementById('table');
const cabecalho = document.getElementById('cabecalho');


function criarTabela(dados) {


    table.innerHTML = ''; 
    table.appendChild(cabecalho); 

    
    dados.forEach(funcionario => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${funcionario.id}</td>
        <td>${funcionario.nome}</td>
        <td>${funcionario.departamento}</td>
        <td>${funcionario.funcao}</td>
        <td>${funcionario.salario}</td>
    `;
    table.appendChild(tr);
    });
}

criarTabela(funcionarios.banco); // PRIMEIRA TENTATIVA

btnName.addEventListener('click', ()=>{
    alert('mensagem');
    const dadosOrdenados = funcionarios.banco.sort((a, b) => a.nome.localeCompare(b.nome));
    console.log('Dados ordenados por Nome:', dadosOrdenados);
    criarTabela(dadosOrdenados);
    
});

btnId.addEventListener('click', ()=>{
    alert('mensagem');
    const dadosOrdenados = funcionarios.banco.sort((a, b) => a.id - b.id);
    console.log('Dados ordenados por ID:', dadosOrdenados);
    criarTabela(dadosOrdenados); // Recria a tabela com os dados ordenados
});

btnDep.addEventListener('click', ()=>{
    alert('mensagem');
    const dadosOrdenados = funcionarios.banco.sort((a, b) => a.departamento.localeCompare(b.departamento));
    console.log('Dados ordenados por Departamento:', dadosOrdenados);
    criarTabela(dadosOrdenados); // Recria a tabela com os dados ordenados
});

// Em desenvolvimento 

// FAZER A BARRA FIxA ( Foi ajustado o erro )