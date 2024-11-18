const listaTarefas = document.querySelector(".tarefas");
const textoTarefa = document.querySelector("#tarefaText");
const dataTarefa = document.querySelector("#tarefaData");
const horarioTarefa = document.querySelector("#tarefaHorario");
const botaoSalvar = document.querySelector("#botaoSalvar");
const botaoLimpar = document.querySelector("#botaoLimpar");
const botaoApagarTarefas = document.querySelector("#botaoLimparTarefas");

let indexcont = 1;

const formatarData = (input)=>{
    const value = input.value.replace(/\D/g, '');
    let formatted = '';
    if(value.length <= 2) {
        formatted = value;
    }else if(value.length <= 4) {
        formatted = value.slice(0, 2) + '/' + value.slice(2);
    }else{
        formatted = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
    }

    input.value = formatted;
}

const formatarHora = (input)=>{
    const value = input.value.replace(/\D/g, '');
    let formatted = '';
    if(value.length <= 2) {
        formatted = value;
    }else {
        formatted = value.slice(0, 2) + ':' + value.slice(2, 4);
    }

    input.value = formatted;
}

dataTarefa.addEventListener("input",() => formatarData(dataTarefa));
horarioTarefa.addEventListener("input", ()=> formatarHora(horarioTarefa));

botaoSalvar.addEventListener("click", ()=>{
    if(textoTarefa.value === '' || dataTarefa.value === '' || horarioTarefa.value === '') {
        alert("Por favor, preencha todos os campos!");
    }else{
        const novatarefa = document.createElement("div");
        novatarefa.setAttribute("id", "t"+indexcont);
        novatarefa.setAttribute("class", "tarefa");
        novatarefa.innerHTML = `${horarioTarefa.value} || ${textoTarefa.value} || ${dataTarefa.value}`;
        listaTarefas.appendChild(novatarefa);
        indexcont++;

        novatarefa.addEventListener("click", () => {
            novatarefa.classList.add("concluido");
        })
        
        textoTarefa.value = '';
        dataTarefa.value = '';
        horarioTarefa.value = '';
    }   
})


botaoLimpar.addEventListener("click", ()=>{
    textoTarefa.value = '';
    dataTarefa.value = '';
    horarioTarefa.value = '';
})

botaoApagarTarefas.addEventListener("click", ()=>{
    if(confirm("Deseja apagar a lista de tarefas inteira?")) {
        while(listaTarefas.firstChild) {
            listaTarefas.removeChild(listaTarefas.firstChild);
        }
    }
    
})


