  O WebPhone é um aplicativo de telefone simples e interativo implementado utilizando JavaScript. Ele simula um telefone móvel em um navegador, permitindo realizar chamadas 
e visualizar chamadas recentes. A interface é composta por um teclado numérico com botões para fazer e desligar chamadas, além de campos de entrada para o número de telefone 
e o status do telefone.

Funcionalidades
- Teclado numérico: O WebPhone apresenta um teclado numérico, permitindo ao usuário digitar o número de telefone diretamente na interface.
- Realizar chamada: Quando o número de telefone é validado, o botão "Ligar" se torna disponível e toca uma música de chamada. A chamada pode ser desligada a qualquer momento.
- Chamadas recentes: O WebPhone mantém um histórico das últimas chamadas feitas, que são exibidas em uma área de texto dedicada.
- Validação de número de telefone: O WebPhone valida se o número informado é válido com base nos DDDs e formatos de telefone comuns no Brasil.
- Toques de chamada: Um áudio de chamada é tocado durante a tentativa de chamada.
  
O código é estruturado em três componentes principais:
1. WebPhone
- Gerencia a interface do telefone, incluindo o campo de texto para o número de telefone, o campo para chamadas recentes e o status de chamada.
- Controla a interação com o teclado numérico e os botões de "Ligar", "Desligar" e "Limpar".

2. Phone
- Gerencia a lógica das chamadas, incluindo validação do número de telefone, execução do áudio de chamada e controle do botão de "Desligar".

3. InputField
- Gerencia a entrada de texto no campo de número de telefone, com funções para adicionar texto, limpar o campo e apagar o último caractere digitado.

Tecnologias Utilizadas
- HTML: Para estruturar a interface.
- CSS: Para o estilo básico da interface.
- JavaScript: Para toda a lógica de interação do usuário e controle do telefone.

Como Usar
1. Clonar o repositório: Clone este repositório para o seu computador:
$ git clone https://github.com/Gus-96/webphone.git

2. Abrir o arquivo HTML: Abra o arquivo index.html em seu navegador.

3. Interação:
- Digite o número de telefone usando o teclado numérico.
- Clique no botão "Ligar" para realizar a chamada.
- Clique no botão "Desligar" para finalizar a chamada.
- O campo de "Chamadas Recentes" irá exibir todos os números de telefone que foram chamados.

Exemplos de Validação de Número de Telefone
- DDD válido: O número de telefone precisa ter um DDD válido (por exemplo, "11", "21", "31") seguido de um número celular com 9 dígitos (como "991234567").
- Formato: O número será formatado automaticamente para o formato (DD) 9XXXX-XXXX ao realizar a chamada.

Personalizações
- Estilos: Você pode adicionar o seu próprio arquivo de estilo CSS para personalizar a aparência da interface.
- Áudio: O áudio de chamada (audio/chamando.mp3) pode ser alterado ou substituído por um arquivo de sua escolha.

Contribuições são bem-vindas! Se você tem uma ideia ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.
1. Fork este repositório.
2. Crie uma branch (git checkout -b feature/MinhaFeature).
3. Faça suas alterações e commit (git commit -am 'Adicionando nova funcionalidade').
4. Push para a branch (git push origin feature/MinhaFeature).
5. Abra um pull request.
