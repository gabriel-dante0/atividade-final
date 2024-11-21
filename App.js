new Vue({
  el: '#app',
  data: {
    screen: 'cadastro', // Controle de telas: 'cadastro' ou 'listagem'
    newPlayer: {
      name: '',
      marketValue: '',
      team: '',
      position: ''
    },
    players: [] // Lista de jogadores cadastrados
  },
  methods: {
    // Função para adicionar um novo jogador
    addPlayer() {
      // Verifica se todos os campos estão preenchidos
      if (this.newPlayer.name && this.newPlayer.marketValue && this.newPlayer.team && this.newPlayer.position) {
        // Adiciona o jogador à lista de jogadores
        this.players.push({
          name: this.newPlayer.name,
          marketValue: parseFloat(this.newPlayer.marketValue), // Garante que o valor seja um número
          team: this.newPlayer.team,
          position: this.newPlayer.position
        });
        
        // Limpa os campos após adicionar
        this.newPlayer = { name: '', marketValue: '', team: '', position: '' };
      } else {
        alert('Por favor, preencha todos os campos!');
      }
    },
    // Função para deletar um jogador da lista
    deletePlayer(index) {
      this.players.splice(index, 1); // Remove o jogador da lista pelo índice
    },
    // Mudar para a tela de listagem
    goToListScreen() {
      this.screen = 'listagem';
    },
    // Mudar para a tela de cadastro
    goToCadastroScreen() {
      this.screen = 'cadastro';
    }
  },
  filters: {
    // Formatar o valor de mercado como moeda
    currency(value) {
      if (value) {
        return `R$ ${value.toFixed(2).replace('.', ',')}`;
      }
      return 'R$ 0,00';
    }
  }
});
