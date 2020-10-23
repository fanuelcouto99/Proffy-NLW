// Função para encontrar o botão de horarios e adicionar o novo campo ao formulario

// Na linha abaixo querySelector sever para localizar o item desejado atraves de seu id
document.querySelector("#add-time")
// Ao clicar sera executada a função cloneField
.addEventListener('click', cloneField);

function cloneField(){
    // Clonando o item selecionado
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // limpar os campos para irem vazios o novo campo
    const fields = newFieldContainer.querySelectorAll('input');

    fields.forEach(function(field) {
        field.value = "";
    });

    // Adicionando o clone na pagina dentro do formulario selecionado
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}