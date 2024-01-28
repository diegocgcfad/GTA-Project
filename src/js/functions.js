const button = document.querySelector('.btn-plataforma');
const list = document.querySelectorAll('.plataformas');

button.addEventListener('click', function(){
    list[1].classList.toggle('ativo');
});