document.getElementById("rsvp-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var attendance = document.getElementById("attendance").value;

  var data = {
    name: name,
    attendance: attendance
  };

  fetch('/rsvp.json', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => {
    json.push(data);

    fetch('/rsvp.json', {
      method: 'PUT',
      body: JSON.stringify(json)
    })
    .then(() => {
      alert("Obrigado por confirmar sua presença, " + name + "!");
    })
    .catch(error => {
      console.error('Erro ao salvar os dados:', error);
    });
  })
  .catch(error => {
    console.error('Erro ao recuperar os dados:', error);
  });
});
