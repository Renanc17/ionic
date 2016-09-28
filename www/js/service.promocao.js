angular.module('starter.service.promocao', ['ngResource'])

.service('servicePromocao', function ($resource) {
  var promocoes = [];

  var promo1 = { id: 1, title: 'COMBATE', description: 'O Combate exibe ao vivo, na íntegra e em HD todas as edições do UFC e os maiores eventos nacionais de MMA.', image: '../img/combate.png', channels: 'Combate UFC (162), Combate MMA (163)', duration: '6 meses.'  };
  var promo2 = { id: 2, title: 'TELECINE', description: 'O melhor do cinema chega primeiro no Telecine. Os maiores recordes de bilheteria você encontra no Telecine.', image: '../img/telecine.png', channels: 'Telecine Pipoca (197), Telecine Play (198), Telecine Premium (199)', duration: '8 meses.'  };
  var promo3 = { id: 3, title: 'HBO MAX', description: 'Só na HBO você assiste seus filmes favoritos, as séries mais premiadas e as estréias mais esperadas em alta definição.', image: '../img/hbomax.png', channels: 'HBO (71), HBO 2 (72), HBO Family (75), HBO Plus (73)', duration: '12 meses.'  };

  promocoes.push(promo1);
  promocoes.push(promo2);
  promocoes.push(promo3);

  var promocaoEscolhida = {};

  return $resource = {
    getPromocoes: function(){
      return promocoes;
    },

    promocaoEscolhida: function(id){
      var data = null;
      promocoes.forEach(function(promo){
        if (promo.id == id) {
          data = promo;
        }
      });
      promocaoEscolhida = data;
      if (data) {
        return true;
      }
      return false;
    },
    getPromoEscolhida: function(){
      return promocaoEscolhida;
    }
  }
});
