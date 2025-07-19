
window.revelar = ScrollReveal({reset:true});

//topo do site
revelar.reveal('.efeito_txt_topo', 
{
    duration: 2000,
    origin: 'right',
    distance: '50px',
})

revelar.reveal('.efeito_botao_menu', 
{
    duration: 2000,
    origin: 'bottom',
    distance: '20px',
    delay: 300,
})
