const form = document.getElementById('formDeposito')
const nomeBeneficiario = document.getElementById('nomeBeneficiario');
let formValido = false

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.lenght >= 2;
}

form.addEventListener('submit', function(){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numeroConta');
    const valorDeposito = document.getElementById('valorDeposito');
    const mensagemSucesso = 'montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>';
    
    formValido = validaNome(nomeBeneficiario.value)
    if (formValido){
        const conteinerMensagemSucesso = document.querySelector('.successeMessage');
        conteinerMensagemSucesso.innerHTML = mensagemSucesso;
        conteinerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.errorMessage').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if (!formValido){
        nomeBeneficiario.classList.add('error');
        document.querySelector('.errorMessage').style.display = 'block';
    } else{
        nomeBeneficiario.classList.remove('error') ;
        document.querySelector('.errorMessage').style.display = 'none';
    }
});





