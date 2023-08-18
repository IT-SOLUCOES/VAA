// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMÍNIO.firebaseapp.com",
    projectId: "SEU_ID_DO_PROJETO",
    storageBucket: "SEU_ID_DO_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
  };
  
  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Referências para o Firebase Authentication e Firestore
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // Botão de login
  const loginButton = document.getElementById("login-button");
  loginButton.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(() => {
        console.log("Usuário logado com sucesso!");
        updateUI();
      })
      .catch(error => {
        console.error("Erro ao fazer login:", error);
      });
  });
  
  // Botão de logout
  const logoutButton = document.getElementById("logout-button");
  logoutButton.addEventListener("click", () => {
    auth.signOut()
      .then(() => {
        console.log("Usuário deslogado com sucesso!");
        updateUI();
      })
      .catch(error => {
        console.error("Erro ao fazer logout:", error);
      });
  });
  
  // Atualiza a interface com base no estado de autenticação
  function updateUI() {
    const user = auth.currentUser;
    if (user) {
      loginButton.style.display = "none";
      logoutButton.style.display = "block";
    } else {
      loginButton.style.display = "block";
      logoutButton.style.display = "none";
    }
  }
  
  // Lógica de agendamento (similar ao código anterior)
  document.getElementById("agendamento-form").addEventListener("submit", async function(event) {
    // ... Lógica de agendamento ...
  });
  