import validator from 'validator';

function CPF(){'user_strict';function r(r){for(var t=null,n=0;9>n;++n)t+=r.toString().charAt(n)*(10-n);var i=t%11;return i=2>i?0:11-i;}function t(r){for(var t=null,n=0;10>n;++n)t+=r.toString().charAt(n)*(11-n);var i=t%11;return i=2>i?0:11-i;}var n=false,i=true;this.gera=function(){for(var n='',i=0;9>i;++i)n+=Math.floor(9*Math.random())+'';var o=r(n),a=n+'-'+o+t(n+''+o);return a;},this.valida=function(o){for(var a=o.replace(/\D/g,''),u=a.substring(0,9),f=a.substring(9,11),v=0;10>v;v++)if(''+u+f==''+v+v+v+v+v+v+v+v+v+v+v)return n;var c=r(u),e=t(u+''+c);return f.toString()===c.toString()+e.toString()?i:n;};}

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
document.body.appendChild(validar);

// const testaCpf = (cpf) => {
//     let soma;
//     let resto;
//     soma = 0;
//     if (cpf == '00000000000') return false;

//     for(let index = 1; index <= 9; index += 1) {
//         soma = soma + parseInt(cpf.substring(index - 1, index) * (11 - index));
//     }
//     resto = (soma * 10) % 11;

//     if((resto == 10) || (resto == 11)) {
//         resto = 0;
//     } 
//     if(resto != parseInt(cpf.substring(9, 10))) return false;

// };

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
const LOL = new CPF();
console.log(LOL.valida('093.743.993-222222222226'));