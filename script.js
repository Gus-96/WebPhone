const inputTextField = document.createElement("input");
inputTextField.type = "text";
inputTextField.value = null;
inputTextField.id = 'inputBox';
inputTextField.disabled = true;

const inputStatusPhone = document.createElement("input");
inputStatusPhone.type = "text";
inputStatusPhone.value = "Web Phone Desligado";
inputStatusPhone.id = 'statusPhone';
inputStatusPhone.disabled = true;

const keyboardDiv = document.createElement("div");
keyboardDiv.id = "keyboard";

const call_number = document.createElement('button');
call_number.textContent = 'Ligar';
call_number.id = 'call_number';
call_number.addEventListener('click', function() { 
  to_call_number()
});

const hung_up = document.createElement('button');
hung_up.textContent = 'Desligar';
hung_up.id = 'hung_up';
hung_up.style.display = "none";
hung_up.addEventListener('click', function(){
  to_hung_up()
});

const clean = document.createElement('button');
clean.textContent = 'Limpar';
clean.id = 'clean';
clean.addEventListener('click', function(){
  clean_text_field()
});

// Adiciona ao corpo da página HTML
document.body.appendChild(keyboardDiv);
document.body.appendChild(inputStatusPhone);
document.body.appendChild(inputTextField);
document.body.appendChild(call_number);
document.body.appendChild(clean);
document.body.appendChild(hung_up);

var current_text_field = 0;
var calling = new Audio("audio/chamando.mp3");


// Exibe o teclado
const button_container = document.getElementById("keyboard");
const button_value = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#",];

for (let i = 0; i < button_value.length; i++) {
  const button = document.createElement("button");
  button.innerText = button_value[i];
  button.addEventListener("click", function() {
    if (current_text_field <= 10) {
      add_text_in_field(button_value[i]);
    } 
  });
  
  button_container.appendChild(button);
}

// Escreve no campo de texto
function add_text_in_field(value) {
  const text_field = document.getElementById("inputBox");
  text_field.value += value;
  current_text_field += 1
}

// Limpa o campo de texto
function clean_text_field(){ 
  document.getElementById("inputBox").value = "";
  current_text_field = 0;
}

// Liga para o número informado
function to_call_number(){  
  var phone = document.getElementById("inputBox").value;
  const formattedPhoneNumber = formatPhoneNumberBR(phone);

  if (phone != "" && phone.length >= 10 && isNumeric(phone)){ 
    if (check_phone(phone)) {
      inputStatusPhone.value = `Chamando ... ${formattedPhoneNumber} `
      calling.currentTime = 0;
      calling.loop = true;
      calling.play();
      call_number.style.display = "none";
      hung_up.style.display = "block";
    } else{
      alert("Telefone inválido, informe: DDD + Número");
    }

  } else if (phone == ""){
    alert("Informe um número de telefone!");
  }  else {
    alert("Número informado inválido!");
  }
}

// Desliga a ligação
function to_hung_up(){
  calling.pause();
  inputStatusPhone.value = "Web Phone Desligado";
  hung_up.style.display = "none";
  call_number.style.display = "block";
}

// Valida telefone
function check_phone(phone) {
  const ddds = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "21", "22", "24", "27", "28",
    "31", "32", "33", "34", "35", "37", "38",
    "41", "42", "43", "44", "45", "46",
    "47", "48", "49",
    "51", "53", "54", "55",
    "61", "62", "64", "63", "65", "66",
    "67", "68",
    "69",
    "71", "73", "74", "75", "77",
    "79",
    "81", "82", "83", "84", "85", "86", "87", "88", "89",
    "91", "92", "93", "94", "95", "96", "97", "98", "99"
  ];
  
  var ddd = phone.substr(0, 2);
  
  if (ddds.includes(ddd)) {
    
    if (phone.length == 11){
      let mobile_code = phone.charAt(2);
      
      if (mobile_code == 9){  
        return true;
      }else {
        return false;
      }

    }
    
    return true;
  }
}

// Formata o telefone ao realizar a chamada
function formatPhoneNumberBR(phone) {
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

// Verifica se phone contém somente caracteres númericos
function isNumeric(phone) {
  return /^\d+$/.test(phone);
}
