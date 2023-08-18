document.getElementById("agendamento-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const horario = document.getElementById("horario").value;

    // Substitua o URL do Firestore pelo URL do seu próprio projeto no Firebase
    fetch("https://seu-projeto.firebaseio.com/agendamentos.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            horario: horario
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            alert("Agendamento realizado com sucesso!");
        } else {
            alert("Erro ao agendar. Tente novamente.");
        }
    });
});
