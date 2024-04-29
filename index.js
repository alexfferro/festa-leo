document.getElementById("rsvp-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obter o ID do formulário do Google Forms
  var formId = document.getElementById("form-id").value;

  // Obter os valores dos campos
  var name = document.getElementById("name").value;
  var attendance = document.getElementById("attendance").value;

  // Enviar os dados para o Google Forms
  fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `T2Ybvb2=${encodeURIComponent(name)}&T2Ybvb4=${attendance}`
  })
  .then(() => {
    // Exibir uma mensagem de confirmação para o usuário
    alert("Obrigado por confirmar sua presença, " + name + "!");
    // Limpar os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("attendance").value = "Sim"; // Defina o valor padrão conforme necessário
  })
  .catch(error => {
    console.error('Erro:', error);
  });
});
