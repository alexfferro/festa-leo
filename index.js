document.getElementById("rsvp-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obter os valores dos campos
  var name = document.getElementById("name").value;
  var attendance = document.getElementById("attendance").value;

  // Criar um objeto com os dados do formulário
  var formData = new FormData();
  formData.append("T2Ybvb2", name); 
  formData.append("T2Ybvb4", attendance);

  // Enviar os dados para o servidor
  fetch('https://forms.gle/pJ5btJLUFXpcEUzd6', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao enviar os dados');
    }
    return response.text();
  })
  .then(data => {
    // Exibir uma mensagem de confirmação para o usuário
    alert("Obrigado por confirmar sua presença, " + name + "!");
  })
  .catch(error => {
    console.error('Erro:', error);
  });
});
