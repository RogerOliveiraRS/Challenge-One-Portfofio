


function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const assunto = document.getElementById('assunto').value;

    if (nome.trim() === '' || assunto.trim() === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false; // Impede o envio do formulário
    }



    return true; // Permite o envio do formulário
}
