function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value;
  var elementoListaFilmes = document.getElementById('listaFilmes');
  var novoFilme = document.createElement('img');
  novoFilme.src = filmeFavorito;
  novoFilme.className = 'filme-item';
  elementoListaFilmes.appendChild(novoFilme);
  document.getElementById('filme').value = '';
}

var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
  "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
  "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
];

window.onload = function() {
  var elementoListaFilmes = document.getElementById('listaFilmes');
  listaFilmes.forEach(function(filmeUrl) {
    var novoFilme = document.createElement('img');
    novoFilme.src = filmeUrl;
    novoFilme.className = 'filme-item';
    elementoListaFilmes.appendChild(novoFilme);
  });
};
