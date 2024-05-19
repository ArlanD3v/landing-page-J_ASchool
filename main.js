/* Declarando as variaveis */
var SetaDireita = window.document.getElementById("seta_direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaEsquerda = window.document.getElementById("seta_esquerda")

/* Criando as funções para o Carrossel */
function RolarDireita() {

    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

function RolarEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}

/* Function para limitar a quantidade de digitos */
function validatePhoneNumber(event) {
    var input_tel = event.target;
    var value = input_tel.value.replace(/\D/g, ''); // Expressão regular para não permitir caracteres não numericos
    var maxLength = 11; // Define que o máximo é 11 dígitos

    // Limita o número de dígitos ao máximo de 11
    if (value.length > maxLength) {
        value = value.slice(0, maxLength);
    }
    input_tel.value = value;
    
    // Valida se o valor tem exatamente 11 dígitos
    if (value.length !== maxLength) {
        input_tel.setCustomValidity('O número de telefone deve possuir 11 dígitos.');
    } else {
        input_tel.setCustomValidity('');
    }
}

// Evento de entrada para validar o campo de telefone
document.getElementById('tel').addEventListener('input', validatePhoneNumber);

// Impede que os dígitos sejam alterados através da seta do teclado
document.getElementById('tel').addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// Evento de envio do formulário
document.getElementById('formulario').addEventListener('submit', function (event) {
    // Impede o envio automático do formulário
    event.preventDefault();
    
    // Exibe o modal ao concluir o envio do formulário
    var modal = document.getElementById("modal");
    modal.style.display = "block";

   
    // Aguarda um pequeno intervalo antes de permitir o envio real do formulário
    setTimeout(function () {
        // Fecha o modal
        modal.style.display = "none";

        // Envio real do formulário
        event.target.submit(); // Envio direto do formulário usando o evento
    }, 2000); // Espera 2 segundos (2000 milissegundos) antes de enviar o formulário
});

/* Carregamento */
document.addEventListener("DOMContentLoaded", function () {
    var loadingOverlay = document.querySelector(".loading-overlay");
    var content = document.querySelector(".content");
    if (content) {
        // Esconde o conteúdo até que todos os recursos estejam carregados
        content.style.display = "none";
    }
    if (loadingOverlay) {
        // Aguarda até que todos os recursos, incluindo imagens, estejam carregados
        window.addEventListener('load', function () {
            if (loadingOverlay) {
                // Esconde o overlay de carregamento
                loadingOverlay.style.display = "none";
            }
            if (content) {
                // Mostra o conteúdo após todos os recursos estarem carregados
                content.style.display = "block";
            }
        });
    }
});