<img width="1030" height="620" alt="Captura de Tela 2025-07-17 às 14 26 55" src="https://github.com/user-attachments/assets/033f2409-023c-4e0e-a45d-3513090f3a26" />

# WebPhone - Simulador de Chamadas

O WebPhone é um aplicativo de telefone simples e interativo implementado utilizando JavaScript. Ele simula um telefone móvel em um navegador, permitindo realizar chamadas 
e visualizar chamadas recentes. A interface é composta por um teclado numérico com botões para fazer e desligar chamadas, além de campos de entrada para o número de telefone 
e o status do telefone.

### Tecnologias Utilizadas
- HTML: Para estruturar a interface.
- CSS: Para o estilo básico da interface.
- JavaScript: Para toda a lógica de interação do usuário e controle do telefone.
  
### Funcionalidades
- Teclado numérico: O WebPhone apresenta um teclado numérico, permitindo ao usuário digitar o número de telefone diretamente na interface.
- Realizar chamada: Quando o número de telefone é validado, o botão "Ligar" se torna disponível e toca uma música de chamada. A chamada pode ser desligada a qualquer momento.
- Chamadas recentes: O WebPhone mantém um histórico das últimas chamadas feitas, que são exibidas em uma área de texto dedicada.
- Validação de número de telefone: O WebPhone valida se o número informado é válido com base nos DDDs e formatos de telefone comuns no Brasil.
- Toques de chamada: Um áudio de chamada é tocado durante a tentativa de chamada.
  
### O código é estruturado em três componentes principais
1. WebPhone
- Gerencia a interface do telefone, incluindo o campo de texto para o número de telefone, o campo para chamadas recentes e o status de chamada.
- Controla a interação com o teclado numérico e os botões de "Ligar", "Desligar" e "Limpar".

2. Phone
- Gerencia a lógica das chamadas, incluindo validação do número de telefone, execução do áudio de chamada e controle do botão de "Desligar".

3. InputField
- Gerencia a entrada de texto no campo de número de telefone, com funções para adicionar texto, limpar o campo e apagar o último caractere digitado.
