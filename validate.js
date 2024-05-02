


// No seu arquivo JS (por exemplo, script.js)

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');
    form.addEventListener('submit', validarFormulario);
});

function validarFormulario(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const assunto = document.getElementById('assunto').value;

    if (nome.trim() === '' || assunto.trim() === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false; // Impede o envio do formulário
    }

    // Aqui você pode adicionar mais validações, se necessário

    // Simule o envio do formulário para fins de teste
    alert('Formulário enviado com sucesso!'); // Remova esta linha quando conectar ao back-end
    return true; // Permite o envio do formulário
}

