import validator from 'validator';
import {CPF} from '/home/gustavo/Documentos/validadorDeCampos/cpfFunction.js';


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

const optionEmail = document.createElement('option');
optionEmail.value = '1';
optionEmail.innerHTML = 'EMAIL';
dropbox.add(optionEmail, dropbox.options[1]);

const buttonValidar = document.createElement('button');
buttonValidar.innerHTML = 'Validar';
document.body.appendChild(buttonValidar);

const validar = document.createElement('h2');
validar.innerHTML = 'Digite o valor, escolha a opção e clique em validar';
document.body.appendChild(validar);

window.onload = function() {  
    const dropSelected = document.getElementById('select');
    buttonValidar.onclick = function () {
        const selected = dropSelected.selectedIndex;
        const valor = document.getElementById('inputvalue').value;
        if(selected === 1) {
            if(validator.isEmail(valor)){
                validar.innerHTML = 'O seu email é válido';
            } else validar.innerHTML = 'O seu email é inválido';
        } if(selected === 0) {
            const cpfUsuario = new CPF();
            if(cpfUsuario.valida(valor) === true) {
                validar.innerHTML = 'O seu CPF é válido';
            } else if (cpfUsuario.valida(valor) === false) {
                validar.innerHTML = 'O seu CPF é inválido';
            }
        }
    };
};
