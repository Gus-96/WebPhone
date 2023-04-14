const webPhone = new WebPhone();
const recentCalls = []

function WebPhone(){
  const inputField = new InputField();
  const phone = new Phone();

  // Declara os elementos HTML
  this.inputTextField = document.createElement("input");
  this.inputTextField.type = "text";
  this.inputTextField.value = null;
  this.inputTextField.id = 'inputBox';
  this.inputTextField.disabled = true;

  this.inputRecentCalls = document.createElement("textarea");
  this.inputRecentCalls.type = "text";
  this.inputRecentCalls.value = null;
  this.inputRecentCalls.id = 'recentCalls';
  this.inputRecentCalls.disabled = true;

  this.inputStatusPhone = document.createElement("input");
  this.inputStatusPhone.type = "text";
  this.inputStatusPhone.value = "Web Phone Desligado";
  this.inputStatusPhone.id = 'statusPhone';
  this.inputStatusPhone.disabled = true;

  const keyboardDiv = document.createElement("div");
  keyboardDiv.id = "keyboard";

  const call_number = document.createElement('button');
  call_number.textContent = 'Ligar';
  call_number.id = 'call_number';
  call_number.addEventListener('click', function() { 
    phone.to_call_number()
  });

  const hung_up = document.createElement('button');
  hung_up.textContent = 'Desligar';
  hung_up.id = 'hung_up';
  hung_up.style.display = "none";
  hung_up.addEventListener('click', function(){
    phone.to_hung_up()
  });

  const clean = document.createElement('button');
  clean.textContent = 'Limpar';
  clean.id = 'clean';
  clean.addEventListener('click', function(){
    inputField.clean_text_field()
  });

  const backspace = document.createElement('button');
  backspace.textContent = '<';
  backspace.id = 'backspace';
  backspace.addEventListener('click', function(){
    inputField.backspace_text_field()
  });

  const container = document.createElement("div");
  container.id = 'container';
  container.appendChild(this.inputTextField);
  container.appendChild(backspace);
  
  // Adiciona os elementos ao corpo da página HTML
  document.body.appendChild(keyboardDiv);
  document.body.appendChild(this.inputStatusPhone);
  document.body.appendChild(container);
  document.body.appendChild(call_number);
  document.body.appendChild(clean);
  document.body.appendChild(hung_up);
  document.body.appendChild(this.inputRecentCalls);
  
  // Exibe o teclado
  const button_container = document.getElementById("keyboard");
  const button_value = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#",];
  
  for (let i = 0; i < button_value.length; i++) {
    const button = document.createElement("button");
    button.innerText = button_value[i];
    button.addEventListener("click", function() {
      if (current_text_field <= 10) {
        inputField.add_text_in_field(button_value[i]);
      } 
    });
    
    button_container.appendChild(button);
  }
}

function InputField(){
  current_text_field = 0;

  // Escreve no campo de texto
  this.add_text_in_field = function (value) {
    const text_field = document.getElementById("inputBox");
    text_field.value += value;
    current_text_field += 1
  }
  
  // Limpa o campo de texto
  this.clean_text_field = function(){ 
    document.getElementById("inputBox").value = "";
    current_text_field = 0;
  }
  
  // Apagar o último caracter do número de telefone
  this.backspace_text_field = function(){
    const campoTexto = document.getElementById("inputBox");
    let valorAtual = campoTexto.value;
    valorAtual = valorAtual.slice(0, -1);
    campoTexto.value = valorAtual;
    current_text_field -= 1 ;
  }
}

function Phone(){
  const inputField = new InputField();
  var calling = new Audio("audio/chamando.mp3");
  
  // Liga para o número informado
  this.to_call_number = function (){ 
    var phone_number = document.getElementById("inputBox").value;
    const formattedPhoneNumber = formatPhoneNumberBR(phone_number);

    if (phone_number.length >= 10 && isNumber(phone_number) && check_phone(phone_number)){ 
      
      webPhone.inputStatusPhone.value = `Chamando ...`
      webPhone.inputTextField.value = `${formattedPhoneNumber} `
      call_number.style.display = "none";
      hung_up.style.display = "block";
      calling.play();
      calling.currentTime = 0;
      calling.loop = true;
      recentCalls.push(formattedPhoneNumber);
      formattedRecentCalls(recentCalls);

    } else if (phone_number == ""){
      alert("Informe um número de telefone!");
    } else if (phone_number.length == 3){
      alert("Não é possivel realizar chamadas de emergência no Web Phone!");
    } else if (phone_number.length >= 8 && phone_number.length <= 9){
      alert("Telefone inválido, informe: DDD + Número");
    } else {
      alert("Número informado inválido!");
    }
  }

  // Desliga a ligação
  this.to_hung_up = function (){ 
    webPhone.inputStatusPhone.value = "Web Phone Desligado";
    hung_up.style.display = "none";
    call_number.style.display = "block";
    calling.pause();
    inputField.clean_text_field()
  }

  // Valida telefone
  function check_phone(phone_number){ 
    const ddds = [
      "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "21", "22", "24", "27", "28",
      "31", "32", "33", "34", "35", "37", "38",
      "41", "42", "43", "44", "45", "46", "47", "48", "49",
      "51", "53", "54", "55",
      "61", "62", "64", "63", "65", "66", "67", "68", "69",
      "71", "73", "74", "75", "77", "79",
      "81", "82", "83", "84", "85", "86", "87", "88", "89",
      "91", "92", "93", "94", "95", "96", "97", "98", "99"
    ];
    
    var ddd = phone_number.substr(0, 2);
    var mobile_code = phone_number.charAt(2);
    
    // Validação DDD
    if (ddds.includes(ddd)) {
      
      // Validação Celular
      if (phone_number.length == 11){      
        if (mobile_code == 9){  
          return true;
        }else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  // Formata o telefone ao realizar a chamada
  function formatPhoneNumberBR(phone_number) {
    const match = phone_number.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
  }

  // Verifica se telefone contém somente caracteres númericos
  function isNumber(phone_number) {
    return /^\d+$/.test(phone_number);
  }

  function formattedRecentCalls(recentCalls){
    let calls = "";
    for (let i = 0; i < recentCalls.length; i++) {
      calls += recentCalls[i] + "\n";
    }
    document.getElementById("recentCalls").value = calls;    
  }
}
