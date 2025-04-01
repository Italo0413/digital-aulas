const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");

const errorEmail = document.getElementById("error-email");
const errorSenha = document.getElementById("error-senha");

function Logar() {
    const email = emailInput.value;
    const senha = senhaInput.value;

    if (email == "" || senha == "") {
        errorEmail.classList.remove("hidden");
        errorSenha.classList.remove("hidden");

        return;
    } 

    errorEmail.classList.add("hidden");
    errorSenha.classList.add("hidden");


    // simulação de login 

    Toastify({
        text: "Login realizado com sucesso!",
        duration: 3000,
        destination: "http://127.0.0.1:5500/Dashboard/index.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      
}

