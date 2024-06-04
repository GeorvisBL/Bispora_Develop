
window.onload = function(){
    
}


function mostrarMenu(cod) {

    if (cod == 0) {
        $('.mostraMenu').css('left', '-297px');
        $('#containerWhatsappF').css({'display': 'block', 'right': '30px'});
        $('#containerRenderBody').css('overflow', 'auto');
    }
    else {
        $('.mostraMenu').css('left', '0px');
        $('#containerWhatsappF').css({'display': 'block', 'right': '-60px'});
        $('#containerRenderBody').css('overflow', 'hidden');
    }
    
}