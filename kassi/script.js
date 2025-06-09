const btnVoltar = document.getElementById('btnVoltar');

// Mostrar o botão quando rolar a página
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnVoltar.style.display = "block";
    } else {
        btnVoltar.style.display = "none";
    }
};

// Função para voltar ao topo
btnVoltar.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
