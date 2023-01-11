import validator from 'validator';

const formulario = document.createElement('form');
document.body.appendChild(formulario);

const titleValidador = document.createElement('h1');
titleValidador.innerHTML = 'Validador de Campos';
formulario.appendChild(titleValidador);

const inputText = document.createElement('input');
inputText.id = 'inputvalue';
inputText.type = 'text';
inputText.placeholder = 'insira aqui o seu valor';
formulario.appendChild(inputText);

const dropbox = document.createElement('select');
formulario.appendChild(dropbox);
dropbox.id = 'select';


const optionCpf = document.createElement('option');
optionCpf.value = '0';
optionCpf.innerHTML = 'CPF';
dropbox.add(optionCpf, dropbox.options[0]);
// dropbox.appendChild(optionCpf);

const optionEmail = document.createElement('option');
optionEmail.value = '1';
optionEmail.innerHTML = 'EMAIL';
dropbox.add(optionEmail, dropbox.options[1]);
// dropbox.appendChild(optionEmail);

const buttonValidar = document.createElement('button');
buttonValidar.innerHTML = 'Validar';
document.body.appendChild(buttonValidar);

const validar = document.createElement('h2');
validar.innerHTML = 'Digite o valor, escolha a opção e clique em validar';
formulario.appendChild(validar);

// validator.isEmail(inputText);
window.onload = function() {  
    const dropSelected = document.getElementById('select');
    buttonValidar.onclick = function () {
        const selected = dropSelected.selectedIndex;
        const valor = document.getElementById('inputvalue').value;
        if(selected === 1) {
            if(validator.isEmail(valor)){
                validar.innerHTML = 'A validação retornou true';
            } else validar.innerHTML = 'A validação retornou false';
        }
    };
};

// const checkEmail = () => {
//     let valor = document.getElementsByTagName('input').value;
//     if(validator.isEmail(valor)){
//         validar.innerHTML = 'é email';
//         console.log('emai');
//     } console.log('zero');
// };
