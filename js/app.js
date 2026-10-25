// ============================================================================
// LÓGICA PRINCIPAL DA APLICAÇÃO - RECIFE RUN CLUB
// Projeto Acadêmico de Engenharia de Software (2º Período)
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {
    console.log("Recife Run Club: Sistema carregado com sucesso!");

    // ELEMENTOS DO DOM
    const selectEvento = document.getElementById("select-evento");
    const checkboxKit = document.getElementById("checkbox-incluir-kit");
    const valorResumoProva = document.getElementById("valor-resumo-prova");
    const valorResumoKit = document.getElementById("valor-resumo-kit");
    const linhaResumoKit = document.getElementById("linha-resumo-kit");
    const linhaDescontoPacote = document.getElementById("linha-desconto-pacote");
    const linhaDescontoMedalha = document.getElementById("linha-desconto-medalha");
    const valorTotalFinal = document.getElementById("valor-total-final");
    
    // Pagamento Pix vs Cartão
    const radioPix = document.getElementById("pagamento-pix");
    const radioCartao = document.getElementById("pagamento-cartao");
    const boxPix = document.getElementById("detalhes-pagamento-pix");
    const boxCartao = document.getElementById("detalhes-pagamento-cartao");

    // Modo de Medalhas
    const radioFidelidade = document.getElementById("modo-fidelidade");
    const radioTroca = document.getElementById("modo-troca");

    // Botão Finalizar
    const btnFinalizar = document.getElementById("btn-finalizar-inscricao");

    // FUNÇÃO DE CÁLCULO DINÂMICO DO CHECKOUT
    function calcularTotal() {
        let precoProva = 0;
        
        // Pega o preço da prova selecionada
        if (selectEvento) {
            const opcaoSelecionada = selectEvento.options[selectEvento.selectedIndex];
            precoProva = parseFloat(opcaoSelecionada.getAttribute("data-preco")) || 0;
            valorResumoProva.textContent = `R$ ${precoProva.toFixed(2).replace('.', ',')}`;
        }

        let total = precoProva;
        let precoKit = 45.00;
        let descontoPacote = 15.00;
        let descontoMedalha = 20.00;

        // Verifica se o kit está incluído
        if (checkboxKit && checkboxKit.checked) {
            linhaResumoKit.style.display = "flex";
            linhaDescontoPacote.style.display = "flex";
            
            // Regra do Pacote Completo: Prova + Kit ganha desconto
            total += precoKit - descontoPacote;
        } else {
            if (linhaResumoKit) linhaResumoKit.style.display = "none";
            if (linhaDescontoPacote) linhaDescontoPacote.style.display = "none";
        }

        // Verifica se usou Medalha no Modo Moeda de Troca
        if (radioTroca && radioTroca.checked) {
            if (linhaDescontoMedalha) linhaDescontoMedalha.style.display = "flex";
            total -= descontoMedalha;
        } else {
            if (linhaDescontoMedalha) linhaDescontoMedalha.style.display = "none";
        }

        // Garante que o total não fique abaixo de zero
        if (total < 0) total = 0;

        if (valorTotalFinal) {
            valorTotalFinal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }
    }

    // ALTERNAR ENTRE PIX E CARTÃO DE CRÉDITO
    if (radioPix && radioCartao) {
        radioPix.addEventListener("change", function () {
            if (radioPix.checked) {
                boxPix.style.display = "block";
                boxCartao.style.display = "none";
            }
        });

        radioCartao.addEventListener("change", function () {
            if (radioCartao.checked) {
                boxPix.style.display = "none";
                boxCartao.style.display = "block";
            }
        });
    }

    // EVENTOS PARA RECALCULAR AO ALTERAR OPÇÕES
    if (selectEvento) selectEvento.addEventListener("change", calcularTotal);
    if (checkboxKit) checkboxKit.addEventListener("change", calcularTotal);
    if (radioFidelidade) radioFidelidade.addEventListener("change", calcularTotal);
    if (radioTroca) radioTroca.addEventListener("change", calcularTotal);

    // SIMULAÇÃO DE FINALIZAÇÃO DA INSCRIÇÃO
    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", function () {
            alert("Inscrição simulada com sucesso! Dados salvos com base nas regras do Recife Run Club.");
        });
    }

    // Executa o cálculo inicial ao carregar a página
    calcularTotal();
});