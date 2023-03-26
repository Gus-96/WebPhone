var current_text_field = 0;

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
document.body.appendChild(inputStatusPhone);
document.body.appendChild(inputTextField);
show_keyboard()
document.body.appendChild(call_number);
document.body.appendChild(clean);
document.body.appendChild(hung_up);

// Exibe o teclado
function show_keyboard(){
  const button_container = document.getElementById("keyboard");
  const button_value = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#",];
  
  for (let i = 0; i < button_value.length; i++) {
    const botao = document.createElement("button");
    botao.innerText = button_value[i];
    botao.addEventListener("click", function() {
      if (current_text_field <= 10) {
        add_text_in_field(button_value[i]);
      } 
    });
    
    button_container.appendChild(botao);
  }
}

// Escreve no campo de texto
function add_text_in_field(value) {
  const text_field = document.getElementById("inputBox");
  text_field.value += value;
  current_text_field += 1
}

// limpa o campo de texto
function clean_text_field(){ 
  document.getElementById("inputBox").value = "";
  current_text_field = 0;
}

// liga para o número informado
function to_call_number(){
  var phone = document.getElementById("inputBox").value;
  if (phone != "" && current_text_field >= 3){ 
    if (check_phone(phone)) {
      inputStatusPhone.value = `Chamando ... ${phone} `
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

// Desliga a chamada
function to_hung_up(){
  inputStatusPhone.value = "Web Phone Desligado";
  hung_up.style.display = "none";
  call_number.style.display = "block";
}

function check_phone(phone) {
  if (phone.length !== 10 && phone.length !== 11) {
    return false;
  }

  var ddds = [
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

  // Extrai o DDD da string do número de phone
  var ddd = phone.substr(0, 2);

  // Verifica se o DDD está dentro da lista de DDDs válidos
  if (ddds.includes(ddd)) {
    return true;
  } else {
    return false;
  }

}

