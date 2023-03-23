var current_text_field = 0;

let inputTextField = document.createElement("input");
inputTextField.type = "text";
inputTextField.value = null;
inputTextField.id = 'inputBox';
inputTextField.disabled = true;

let inputStatusPhone = document.createElement("input");
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
      if (current_text_field <= 13) {
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
  var num = document.getElementById("inputBox").value;
  if (num != "" && current_text_field >= 3){  
    inputStatusPhone.value = `Chamando ... ${num} `
  }
}

// Desliga a chamada
function to_hung_up(){
  inputStatusPhone.value = "Web Phone Desligado";
  clean_text_field();
}

