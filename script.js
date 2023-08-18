// Importe as funções que você precisa do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMÍNIO.firebaseapp.com",
  projectId: "SEU_ID_DO_PROJETO",
  storageBucket: "SEU_ID_DO_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID",
  databaseURL: "SEU_URL_DO_BANCO_DE_DADOS" // Adicione esta linha
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Referência para o Firestore
const db = getFirestore(app);

document.getElementById("agendamento-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const horario = document.getElementById("horario").value;

    try {
        // Adicione um documento à coleção "agendamentos"
        const docRef = await addDoc(collection(db, "agendamentos"), {
            nome: nome,
            horario: horario
        });
        
        console.log("Agendamento realizado com sucesso, ID do documento:", docRef.id);
        alert("Agendamento realizado com sucesso!");
    } catch (error) {
        console.error("Erro ao agendar:", error);
        alert("Erro ao agendar. Tente novamente.");
    }
});
