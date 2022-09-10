const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
}
)

function checkInput(){
    const nomeValue = nome.Value.trim()
    const emailvalue = email.value.trim()
    const assuntolvalue = assunto.value.trim()
    const mensagemvalue = mensagem.value.trim()

    if(nomealue=== '') {
        //mostrar erro
        //adicionar a classe erro
        errovalidation( nome, 'preencha esse campo')
    } else{
        //adicionar a classe de sucesso
        successValidation(nome)
    }

    if(emailvalue=== ''){
        errovalidation( email, 'prencha esse campo')
    } else{
        successValidation(email)
    }

    if(assuntolvalue=== ''){
        errovalidation( assunto, 'preencha esse campo')
    }else{
        successValidation(assunto)
    }

    

function errovalidation(input, mensagem){

    const formcontrol = input.parentElement
    const small = formcontrol.queryselector('small')

    small.innerText = mensagem

    formcontrol.className = 'form-control erro'
}
