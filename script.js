const botaoTema = document.getElementById('tema');

botaoTema.addEventListener('click',() => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        botaoTema.textContent = '☀️';
    }else{
        botaoTema.textContent = '🌙';
    }
});