//const vetOrder = vet.sort((a, b) => a - b);
//console.log(vetOrder);

// const ordenado = funcionarios.banco.sort((a,b)=>a.nome.localeCompare(b.nome));


import { funcionarios } from '../databases/banco.js';

//////////////////// BOTÕES ////////
const btnId = document.getElementById('btnId');
const btnName = document.getElementById('btnName');
const btnDep= document.getElementById('btnDep');
const btnFuncao = document.getElementById('btnFuncao');
const btnSalario = document.getElementById('btnSalario');
const btnIncluir = document.getElementById('btnIncluir')
const btnFecharModal = document.getElementById('btnFecharModal');
const btnFiltrar = document.getElementById('btnFiltrar');
//////////////////// BOTÕES ////////

const table = document.getElementById('table');
const cabecalho = document.getElementById('cabecalho');
const modalProdutos = document.getElementById('modalProdutos');
const inpFiltrarNome = document.getElementById('inpFiltrarNome');


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
        <td> 
            <img id="btnDel" src="./assents/3334328.png" class="btnDelete">
            <img id="btnEdit" src="./assents/1000_F_435074402_IWFBHlPhtwWWW8May4m5Y34mFb6Fdjdm.jpg" class="btnEdit">
        </td>
    `;
    table.appendChild(tr);
    });
}

// botões editores - Passar uma classe e edita-los deu errado

// const btnDelete = document.querySelectorAll('.btnDelete');
// const btnEdit = document.querySelectorAll('.btnEdit');

criarTabela(funcionarios.banco); // PRIMEIRA TENTATIVA

btnName.addEventListener('click', ()=>{

    alert('Dados sendo ordenados por Nome:');
    const dadosOrdenados = funcionarios.banco.sort((a, b) => a.nome.localeCompare(b.nome));
    console.log('Dados ordenados por Nome:', dadosOrdenados);
    criarTabela(dadosOrdenados);
    
});

btnId.addEventListener('click', ()=>{
    alert('Dados sendo ordenados por ID:');
    const dadosOrdenados = funcionarios.banco.sort((a, b) => a.id - b.id);
    console.log('Dados ordenados por ID:', dadosOrdenados);
    criarTabela(dadosOrdenados); // Recria a tabela com os dados ordenados
});

btnDep.addEventListener('click', ()=>{
    alert('Dados sendo ordenados por Departamento:');
    const dadosOrdenados = funcionarios.banco.sort((a, b) => a.departamento.localeCompare(b.departamento));
    console.log('Dados ordenados por Departamento:', dadosOrdenados);
    criarTabela(dadosOrdenados); // Recria a tabela com os dados ordenados
});

btnFuncao.addEventListener('click', ()=>{
    alert('Dados sendo ordenados por Função:');
    const dadosOrdenados = funcionarios.banco.sort((a, b) => a.funcao.localeCompare(b.funcao));
    console.log('Dados ordenados por Função:', dadosOrdenados);
    criarTabela(dadosOrdenados); // Recria a tabela com os dados ordenados
});

btnSalario.addEventListener('click', ()=>{
    alert('Dados sendo ordenados por Salário:');
    const dadosOrdenados = funcionarios.banco.sort((a,b)=>{
        return b.salario - a.salario
    });
    console.log('Dados ordenados por Salário:', dadosOrdenados);
    criarTabela(dadosOrdenados); // Recria a tabela com os dados ordenados
});

btnIncluir.addEventListener('click',()=>{
    modalProdutos.showModal();
});

btnFecharModal.onclick = ()=>{
    modalProdutos.close();
}

btnFiltrar.addEventListener('click', ()=>{
    let data = inpFiltrarNome.value.trim().toLowerCase();

    console.log(data);

    const dadosOrdenados = funcionarios.banco.filter((funcionario)=> funcionario.nome.toLowerCase().includes(data));

    console.log(dadosOrdenados);

    criarTabela(dadosOrdenados);

});




// Em desenvolvimento 

// FAZER A BARRA FIxA ( Foi ajustado o erro )

// Como pegar o target ( da lixeira e editar ? )

table.addEventListener('click',(e)=>{
    const target = e.target;

    // Verificar se o botão(img foi clicado)

    if( target.tagName == 'IMG'){
        const linha = target.closest('tr');

        //

        const dados = {
            id: linha.cells[0].innerHTML,
            nome: linha.cells[1].innerHTML,
            dep: linha.cells[2].innerHTML,
            funcao: linha.cells[3].innerHTML,
            sal: linha.cells[4].innerHTML,
        };

        console.log(dados);

    };  

});