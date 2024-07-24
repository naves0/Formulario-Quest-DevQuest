const botaoEnviar = document.querySelector(".btn-enviar");
const dadosRecebidosDoUsuario = document.querySelectorAll(".dados-usuario");

botaoEnviar.addEventListener("click", function (e) {
    e.preventDefault();
    verificarCampos();
});

dadosRecebidosDoUsuario.forEach(function (item) {
    item.addEventListener("change", function () {
        if (item.value != "") {
            item.parentElement.classList.remove("campo-vazio");
            item.parentElement.classList.add("campo-preenchido");
        } else if (item.value === "") {
            item.parentElement.classList.remove("campo-preenchido");
        };
    });
});

function verificarCampos() {
    dadosRecebidosDoUsuario.forEach(function (item) {
        if (item.value === "") {
            item.parentElement.classList.add("campo-vazio");
        };
    });
};