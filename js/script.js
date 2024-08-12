//  Este bloco de código espera até que o DOM esteja completamente carregado antes de executar o código dentro da
// função
document.addEventListener('DOMContentLoaded', function() {

  //  Aqui, estamos usando document.querySelector para selecionar o elemento da navbar. O método offsetHeight 
  //  retorna a altura total do elemento, incluindo bordas e padding. Esta altura será usada para ajustar o 
  //  deslocamento ao rolar a página.
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
  
    // Este bloco de código seleciona todos os elementos <a> com a classe nav-link e adiciona um event 
    // listener para o evento click a cada um deles. Isso significa que cada vez que um link de 
    // navegação é clicado, a função dentro do event listener será executada.
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function(e) {

        // e.preventDefault() impede o comportamento padrão do navegador de seguir o link.
        e.preventDefault();

        // this.getAttribute('href').substring(1) obtém o valor do atributo href do link (por exemplo, #introducao)
        //  e remove o # no início, deixando apenas o ID do elemento de destino.
        var targetId = this.getAttribute('href').substring(1);

        // document.getElementById(targetId) usa o ID extraído para encontrar o elemento de destino no DOM.
        var targetElement = document.getElementById(targetId);
  
        // window.scrollTo rola a página para uma posição específica.
        window.scrollTo({
          // top: targetElement.offsetTop - navbarHeight define a posição de rolagem vertical. 
          // targetElement.offsetTop é a distância do topo da página até o elemento de destino, 
          // e subtrair navbarHeight ajusta a posição para compensar a altura da navbar fixa.
          top: targetElement.offsetTop - navbarHeight,
          // behavior: 'smooth' faz com que a rolagem seja suave em vez de instantânea.
          behavior: 'smooth'
        });
      });
    });
  });