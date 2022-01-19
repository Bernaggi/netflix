document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});


  var netflixIntro = document.getElementById('container');
  var content = document.querySelector('.wrapper');

  setTimeout(() => {
    netflixIntro.style.display = 'none';
    content.style.display = 'block'
  }, 5000)
});