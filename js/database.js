// ============================================================================
// BASE DE DADOS SIMULADA - RECIFE RUN CLUB
// Projeto Acadêmico de Engenharia de Software (2º Período)
// ============================================================================

// 1. Os 4 Pontos Fixos Obrigatórios de Hidratação em Recife (RN02)
const pontosHidratacaoRecife = [
    { id: 1, nome: "Marco Zero", bairro: "Bairro do Recife (Recife Antigo)", recursos: ["Água Gelada", "Isotônico", "Primeiros Socorros"] },
    { id: 2, nome: "Parque das Esculturas", bairro: "Molhe de Brasília Teimosa / Bacia do Pina", recursos: ["Água Mineral", "Frutas", "Posto Avançado"] },
    { id: 3, nome: "2º Jardim de Boa Viagem", bairro: "Avenida Boa Viagem (Zona Sul)", recursos: ["Água e Gelo", "Isotônico", "Fisioterapia"] },
    { id: 4, nome: "Forte do Brum", bairro: "Praça da Comunidade Luso-Brasileira", recursos: ["Água Gelada", "Frutas", "Ambulância de Apoio"] }
];

// 2. Modalidades de Corrida e Treino
const modalidadesCorridas = [
    { id: "bimestral-15km", tipo: "Bimestral Oficial", nome: "Desafio das Pontes do Recife (15km)", preco: 80.00 },
    { id: "bimestral-5km", tipo: "Bimestral Oficial", nome: "Desafio das Pontes do Recife (5km)", preco: 70.00 },
    { id: "mensal-10km", tipo: "Mensal Oficial", nome: "Circuito Noturno Boa Viagem (10km)", preco: 60.00 },
    { id: "treino-quinzenal", tipo: "Comunitário", nome: "Treinão Quinzenal da Madrugada", preco: 0.00 }
];

// 3. Estoque de Camisas e Opcionais
const estoqueKitsECamisas = {
    kitCompletoPreco: 45.00,
    descontoPacoteCompleto: 15.00,
    tamanhosDisponiveis: ["P", "M", "G", "GG"]
};

// 4. Ranking Oficial da Equipe (8 Integrantes)
const rankingEquipe = [
    { posicao: 1, nome: "Jorge", km: 82, pace: "4'10\" /km", melhorTempo: "41min 40s", medalhas: 7 },
    { posicao: 2, nome: "Maria Clara", km: 65, pace: "4'25\" /km", melhorTempo: "44min 10s", medalhas: 5, logado: true },
    { posicao: 3, nome: "Renato", km: 62, pace: "4'32\" /km", melhorTempo: "45min 20s", medalhas: 5 },
    { posicao: 4, nome: "Camila", km: 58, pace: "4'45\" /km", melhorTempo: "47min 30s", medalhas: 4 },
    { posicao: 5, nome: "Thiago", km: 54, pace: "4'50\" /km", melhorTempo: "48min 20s", medalhas: 4 },
    { posicao: 6, nome: "Isa", km: 49, pace: "5'02\" /km", melhorTempo: "50min 20s", medalhas: 3 },
    { posicao: 7, nome: "Rafa", km: 45, pace: "5'15\" /km", melhorTempo: "52min 30s", medalhas: 3 },
    { posicao: 8, nome: "Ruan", km: 40, pace: "5'28\" /km", melhorTempo: "54min 40s", medalhas: 2 }
];