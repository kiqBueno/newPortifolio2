var conteudoOriginal = document.querySelector('.left-column').innerHTML;

  function alternarConteudo(conteudo) {
    var div = document.querySelector('.left-column');

    if (conteudo === 'capacitacoes') {
      if (div.innerHTML === '<h2>Capacitações</h2><p>Aqui estão suas capacitações.</p>') {
        div.innerHTML = conteudoOriginal;
      } else {
        div.innerHTML = '<h2>Capacitações</h2><p>Aqui estão suas capacitações.</p>';
      }
    } else if (conteudo === 'projetos'){
      if (div.innerHTML === '<h2>Projetos</h2><p>Aqui estão seus projetos1.</p>') {
        div.innerHTML = conteudoOriginal;
      } else {
        div.innerHTML = '<h2>Projetos</h2><p>Aqui estão seus projetos1.</p>';
      }
    }else if (conteudo === 'projetos1'){
        if (div.innerHTML === '<h2>Projetos</h2><p>Aqui estão seus projetos2.</p>') {
        div.innerHTML = conteudoOriginal;
        } else {
        div.innerHTML = '<h2>Projetos</h2><p>Aqui estão seus projetos2.</p>';
        }
    }
}