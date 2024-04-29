document.getElementById("rsvp-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Obter os valores dos campos
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var attendance = document.getElementById("attendance").value;
  
  // Aqui você pode enviar os dados para o servidor, armazenar em um banco de dados, ou enviar por e-mail
  console.log("Nome: " + name);
  console.log("E-mail: " + email);
  console.log("Confirmação de Presença: " + attendance);
  
  // Você também pode exibir uma mensagem de confirmação para o usuário
  alert("Obrigado por confirmar sua presença, " + name + "!");
});
