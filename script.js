// Banco de dados de clientes
const clientes = [
    {
        "id": "1",
        "nome": "João Silva",
        "pix": "12345678901",
        "transacoes": [
            { "destinatario": "98765432101", "valor": 100, "endToEnd": "AAAA1111" },
            { "destinatario": "98765432101", "valor": 50, "endToEnd": "BBBB2222" },
            { "destinatario": "98765432101", "valor": 200, "endToEnd": "CCCC3333" }
        ]
    },
    {
        "id": "2",
        "nome": "Maria Santos",
        "pix": "98765432102",
        "transacoes": [
            { "destinatario": "12345678902", "valor": 150, "endToEnd": "DDDD4444" },
            { "destinatario": "12345678902", "valor": 80, "endToEnd": "EEEE5555" },
            { "destinatario": "12345678902", "valor": 250, "endToEnd": "FFFF6666" }
        ]
    },
    {
        "id": "3",
        "nome": "Pedro Rodrigues",
        "pix": "01010101010",
        "transacoes": [
            { "destinatario": "99999999999", "valor": 300, "endToEnd": "GGHH7777" },
            { "destinatario": "99999999999", "valor": 100, "endToEnd": "IIJJ8888" }
        ]
    },
    {
        "id": "4",
        "nome": "Ana Oliveira",
        "pix": "22222222222",
        "transacoes": [
            { "destinatario": "88888888888", "valor": 250, "endToEnd": "KKLL9999" },
            { "destinatario": "88888888888", "valor": 150, "endToEnd": "MMNN0000" }
        ]
    },
    {
        "id": "5",
        "nome": "Carlos Santos",
        "pix": "33333333333",
        "transacoes": [
            { "destinatario": "77777777777", "valor": 400, "endToEnd": "OOPQ1111" },
            { "destinatario": "77777777777", "valor": 120, "endToEnd": "RRSQ2222" }
        ]
    },
    {
        "id": "6",
        "nome": "Fernanda Alves",
        "pix": "44444444444",
        "transacoes": [
            { "destinatario": "66666666666", "valor": 350, "endToEnd": "TTUV3333" },
            { "destinatario": "66666666666", "valor": 90, "endToEnd": "WWXY4444" }
        ]
    },
    {
        "id": "7",
        "nome": "Gustavo Pereira",
        "pix": "55555555555",
        "transacoes": [
            { "destinatario": "55555555555", "valor": 200, "endToEnd": "ZZAA5555" },
            { "destinatario": "55555555555", "valor": 180, "endToEnd": "BBCC6666" }
        ]
    },
    {
        "id": "8",
        "nome": "Helena Costa",
        "pix": "66666666666",
        "transacoes": [
            { "destinatario": "44444444444", "valor": 280, "endToEnd": "DDFF7777" },
            { "destinatario": "44444444444", "valor": 160, "endToEnd": "EEGG8888" }
        ]
    },
    {
        "id": "9",
        "nome": "Igor Santos",
        "pix": "77777777777",
        "transacoes": [
            { "destinatario": "33333333333", "valor": 320, "endToEnd": "HHII9999" },
            { "destinatario": "33333333333", "valor": 110, "endToEnd": "JJKK0000" }
        ]
    },
    {
        "id": "10",
        "nome": "Júlia Oliveira",
        "pix": "88888888888",
        "transacoes": [
            { "destinatario": "22222222222", "valor": 260, "endToEnd": "LLMM1111" },
            { "destinatario": "22222222222", "valor": 140, "endToEnd": "NNPP2222" }
        ]
    },
    {
        "id": "11",
        "nome": "Rafael Costa",
        "pix": "99999999999",
        "transacoes": [
            { "destinatario": "11111111111", "valor": 100, "endToEnd": "AAAA1111" },
            { "destinatario": "11111111111", "valor": 50, "endToEnd": "BBBB2222" },
            { "destinatario": "11111111111", "valor": 200, "endToEnd": "CCCC3333" }
        ]
    },
    {
        "id": "12",
        "nome": "Bruna Silva",
        "pix": "88888888888",
        "transacoes": [
            { "destinatario": "22222222222", "valor": 150, "endToEnd": "DDDD4444" },
            { "destinatario": "22222222222", "valor": 80, "endToEnd": "EEEE5555" },
            { "destinatario": "22222222222", "valor": 250, "endToEnd": "FFFF6666" }
        ]
    },
    {
        "id": "13",
        "nome": "Lucas Santos",
        "pix": "77777777777",
        "transacoes": [
            { "destinatario": "33333333333", "valor": 100, "endToEnd": "GGHH7777" },
            { "destinatario": "33333333333", "valor": 50, "endToEnd": "IIJJ8888" },
            { "destinatario": "33333333333", "valor": 200, "endToEnd": "KKLL9999" },
        ]
    },
    {
        "id": "14",
        "nome": "Isabela Oliveira",
        "pix": "66666666666",
        "transacoes": [
            { "destinatario": "44444444444", "valor": 150, "endToEnd": "MMNN0000" },
            { "destinatario": "44444444444", "valor": 80, "endToEnd": "OOPQ1111" },
            { "destinatario": "44444444444", "valor": 250, "endToEnd": "RRSQ2222" }
        ]
    },
    {
        "id": "15",
        "nome": "Gabriel Pereira",
        "pix": "55555555555",
        "transacoes": [
            { "destinatario": "55555555555", "valor": 100, "endToEnd": "TTUV3333" },
            { "destinatario": "55555555555", "valor": 50, "endToEnd": "WWXY4444" },
            { "destinatario": "55555555555", "valor": 200, "endToEnd": "ZZAA5555" }
        ]
    },
    {
        "id": "16",
        "nome": "Laura Costa",
        "pix": "44444444444",
        "transacoes": [
            { "destinatario": "66666666666", "valor": 150, "endToEnd": "BBCC6666" },
            { "destinatario": "66666666666", "valor": 80, "endToEnd": "DDFF7777" },
            { "destinatario": "66666666666", "valor": 250, "endToEnd": "EEGG8888" }
        ]
    },
    {
        "id": "17",
        "nome": "Arthur Santos",
        "pix": "33333333333",
        "transacoes": [
            { "destinatario": "77777777777", "valor": 100, "endToEnd": "HHII9999" },
            { "destinatario": "77777777777", "valor": 50, "endToEnd": "JJKK0000" },
            { "destinatario": "77777777777", "valor": 200, "endToEnd": "LLMM1111" }
        ]
    },
    {
        "id": "18",
        "nome": "Sofia Oliveira",
        "pix": "22222222222",
        "transacoes": [
            { "destinatario": "88888888888", "valor": 150, "endToEnd": "NNPP2222" },
            { "destinatario": "88888888888", "valor": 80, "endToEnd": "OOPQ1111" },
            { "destinatario": "88888888888", "valor": 250, "endToEnd": "RRSQ2222" }
        ]
    },
    {
        "id": "19",
        "nome": "Carlos santiago",
        "pix": "9999999",
        "transacoes": [
            { "destinatario": "9999999999", "valor": 1500, "endToEnd": "oaoappd111" },
            { "destinatario": "9999999999", "valor": 800, "endToEnd": "OOPQeueiei111" },
            { "destinatario": "9999999999", "valor": 2500, "endToEnd": "aoaodjnd383" },
            { "destinatario": "9999999999", "valor": 2200, "endToEnd": "wmdkdj13454" },
        ]
    },
];

// Função para abrir a tela de confirmação de MEDs
function abrirConfirmacaoMEDs() {
    const endToEnd = document.getElementById("end-to-end").value;
    const devolutionType = document.getElementById("devolution-type").value;
    const devolutionReason = document.getElementById("devolution-reason").value;
    const details = document.getElementById("details").value; // Obtém o valor do campo de detalhes

    // Encontra o cliente com a transação correspondente ao End-to-End
    const cliente = clientes.find(c => c.transacoes.some(t => t.endToEnd === endToEnd));

    if (cliente) {
        // Encontra as transações com o end-to-end informado
        const transacoesMED = cliente.transacoes.filter(t => t.endToEnd === endToEnd);

        // Verifica se foram encontradas transações com o end-to-end
        if (transacoesMED.length > 0) {
            // Obtém o destinatário da primeira transação
            const destinatario = transacoesMED[0].destinatario;

            // Encontra todas as transações para o destinatário
            const todasTransacoesParaDestinatario = cliente.transacoes.filter(t => t.destinatario === destinatario);

            // Exibe o popup de sucesso com todas as transações para o destinatário
            document.getElementById("med-popup").style.display = "block";

            // Preenche o popup com as informações
            document.getElementById("popup-title").textContent = "MEDs Abertas";
            document.getElementById("popup-message").textContent = `Foram abertas **${todasTransacoesParaDestinatario.length}** MEDs para o destinatário **${destinatario}**!`;

            const popupTransactions = document.getElementById("popup-transactions");
            popupTransactions.innerHTML = "";

            todasTransacoesParaDestinatario.forEach(transacao => {
                const transactionItem = document.createElement("li");
                transactionItem.textContent = `Valor: ${transacao.valor} - End-to-End: ${transacao.endToEnd}`;
                popupTransactions.appendChild(transactionItem);
            });
        } else {
            alert("End-to-End inválido. Por favor, insira um End-to-End válido.");
        }
    } else {
        alert("Cliente não encontrado para o End-to-End informado.");
    }
}

// Função para fechar o popup
function fecharPopup() {
    document.getElementById("med-popup").style.display = "none";
}

// Eventos dos botões
document.getElementById("open-meds").addEventListener("click", abrirConfirmacaoMEDs);
