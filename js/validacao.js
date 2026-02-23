const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {
    if (campo.validity.valid) {
        campo.parentElement.classList.remove("input-container--invalido");
        campo.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
    } else {
        campo.parentElement.classList.add("input-container--invalido");
        campo.parentElement.querySelector(".input-mensagem-erro").innerHTML =
            mostraMensagemDeErro(campo);
    }
}

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "rangeUnderflow"
];

const mensagensDeErro = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio."
    },
    email: {
        valueMissing: "O campo de email não pode estar vazio.",
        typeMismatch: "O email digitado não é válido."
    },
    telefone: {
        valueMissing: "O campo de telefone não pode estar vazio.",
        patternMismatch: "Digite DDD + número (11 números)."
    },
    instagram: {
        valueMissing: "O campo de Instagram não pode estar vazio.",
        patternMismatch: "O Instagram deve começar com @."
    },
    quantidade: {
        valueMissing: "A quantidade não pode estar vazia.",
        rangeUnderflow: "A quantidade deve ser maior que 0."
    }
};

function mostraMensagemDeErro(campo) {
    let mensagem = "";

    tiposDeErro.forEach((erro) => {
        if (campo.validity[erro]) {
            mensagem = mensagensDeErro[campo.dataset.tipo][erro];
        }
    });

    return mensagem;
}