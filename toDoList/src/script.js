// btn - buttons
const btnAdd = document.getElementById('btnAdd');
const btnDelFirst = document.getElementById('btnDelPrimeiro')
const btnDelLasst = document.getElementById('btnDelUltimo')
//

const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');

let items = [];

btnAdd.addEventListener('click', ()=>{
    // console.log('teste');

    let task = inputBox.value;
    console.log(task);

    if(task === ''){

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Digite uma Tarefa!!!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });

    }else if(items.includes(task)){
        Swal.fire({
            icon: "warning",
            title: "Tarefa já existe",
            text: "Você já adicionou essa tarefa!",
        });

    }else if(items){
        items.push(task);
        displayItems();

        console.log(items.length);
    };

});

btnDelFirst.addEventListener('click', ()=>{
    let task = inputBox.value;
    items.shift(task);
    displayItems();
});

btnDelLasst.addEventListener('click', ()=>{
    let task = inputBox.value;
    items.pop(task);
    displayItems();
});

function displayItems(){

    listContainer.innerHTML = '';

    items.forEach((item, index)=>{
        const li = document.createElement('li');
        li.textContent = item;
        listContainer.appendChild(li);
        
        const btnRemove = document.createElement('button');
        btnRemove.textContent = "Remover";
        li.appendChild(btnRemove);

        // Função de Remover
        // Fiz o btn aqui dentro porque ele só 
        btnRemove.addEventListener('click', ()=>{
            items.splice(index, 1);
            displayItems();
        });

    });
};