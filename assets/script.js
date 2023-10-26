window.addEventListener('load', function(){ 
    setTimeout(function() {$('.nuvem').addClass('active')}, 200)
})

$('.tooltip-link').click((e)=>{e.preventDefault()})

//redimensionamento da tela
function resize_div(){
    var _x = 1920;
    var _y = 1080;
    var janelaUsuarioX = $(window).width();
    var janelaUsuarioY = $(window).height();
    var proporcao = ((janelaUsuarioX/_x)*100)/100;
    $('#tela-inicial').css('transform', 'scale(' +proporcao +')');
}

resize_div();

$(window).resize(resize_div);

// botao toTop:

// declare variable
var scrollTop = $(".btn-inicial");

//Click event to scroll to top
$(scrollTop).click(function() {
    $('html, body').animate({
    scrollTop: 0
    }, 800);
    setTimeout(() => {
        $('#booklet').hide();
    }, "1000")
    
    return false;
});



$('#b-verde').hover(function(){
    $('.verde').animate({width:'380px'}, 200)
},function(){
    $('.verde').animate({width:'0'}, 200)
})

$('#b-amarela').hover(function(){
    $('.amarela').animate({width:'380px'}, 200)
    $('.amarela').addClass('active')
},function(){
    $('.amarela').animate({width:'0'}, 200)
    $('.amarela').removeClass('active')
})

$('#b-vermelha-1').hover(function(){
    $('.vermelha').animate({width:'380px'}, 200)
    $('.vermelha').addClass('active')
},function(){
    $('.vermelha').animate({width:'0'}, 200)
    $('.vermelha').removeClass('active')
})

$('#b-vermelha-2').hover(function(){
    $('.vermelha-2').animate({width:'380px'}, 200)
    $('.vermelha-2').addClass('active')
},function(){
    $('.vermelha-2').animate({width:'0'}, 200)
    $('.vermelha-2').removeClass('active')
})

$('.obj-modal').hide()

$('#b-barragem').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-barragem').fadeIn()    
})
$('#b-reservatorio').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-reservatorio').fadeIn()    
})
$('#b-turbina').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-turbina').fadeIn()    
})
$('#b-gerador').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-gerador').fadeIn()    
})
$('#b-transformador').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-transformador').fadeIn()    
})
$('#b-transmissao').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-transmissao').fadeIn()    
})
$('#b-condutores').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-condutores').fadeIn()    
})

$('.fechar').click(()=>{
    $('.obj-modal').fadeOut()
})

$('#b-combustivel').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-combustivel').fadeIn()    
})

$('#b-caldeira').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-caldeira').fadeIn()    
})

$('#b-vapor').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-vapor').fadeIn()    
})

$('#b-turbina-2').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-turbina-2').fadeIn()    
})

$('#b-gerador-2').click(()=>{
    $('.obj-modal').fadeOut()
    $('.modal-gerador-2').fadeIn()    
})

$('.obj-luz').click(()=>{
    if($('.obj-luz').hasClass('ativo')){
        $('.obj-luz').removeClass('ativo')
        $('.container').addClass('apagado')
        $('.bloco17').addClass('apagado')
        $('body').addClass('apagado')
    } else {
        $('.obj-luz').addClass('ativo')
        $('.container').removeClass('apagado')
        $('.bloco17').removeClass('apagado')
        $('body').removeClass('apagado')
    }
    
})

$('.avancar-1').click(()=>{
    $('html, body').animate({
        scrollTop: $("#booklet").offset().top
    }, 2000);
    setTimeout(function(){
        $('.conteudo').fadeOut()
        $('#conteudo-2').fadeIn()
    }, 2200)    
})
$('.avancar-2').click(()=>{
    $('html, body').animate({
        scrollTop: $("#booklet").offset().top
    }, 2000);
    setTimeout(function(){
        $('.conteudo').fadeOut()
        $('#conteudo-3').fadeIn()
    }, 2200)    
})
$('.avancar-3').click(()=>{
    $('html, body').animate({
        scrollTop: $("#booklet").offset().top
    }, 2000);
    setTimeout(function(){
        $('.conteudo').fadeOut()
        $('#conteudo-4').fadeIn()
    }, 2200)    
})
$('.avancar-4').click(()=>{
    $('html, body').animate({
        scrollTop: $("#booklet").offset().top
    }, 2000);
    setTimeout(function(){
        $('.conteudo').fadeOut()
        $('#conteudo-5').fadeIn()
    }, 2200)    
})
$('.avancar-5').click(()=>{
    $('html, body').animate({
        scrollTop: $("#booklet").offset().top
    }, 2000);
    setTimeout(function(){
        $('.conteudo').fadeOut()
        $('#conteudo-6').fadeIn()
    }, 2200)    
})
$('.avancar-6').click(()=>{
    $('html, body').animate({
        scrollTop: $("#booklet").offset().top
    }, 2000);
    setTimeout(function(){
        $('.conteudo').fadeOut()
        $('#conteudo-7').fadeIn()
    }, 2200)    
})

$('.card-1-m').click(()=>{
    if($('.card-1-m').hasClass('ativo')){
        $('.card-1-m').removeClass('ativo')
    }
    else {
        $('.card-1-m').addClass('ativo')
    }
})
$('.card-2-m').click(()=>{
    if($('.card-2-m').hasClass('ativo')){
        $('.card-2-m').removeClass('ativo')
    }
    else {
        $('.card-2-m').addClass('ativo')
    }
})

$('#resultado').click(()=>{
    let p = document.getElementById('i-potencia').value
    let h = document.getElementById('i-horas').value
    let d = document.getElementById('i-dias').value
    let resultado = (p*h*d/1000)
    console.log(resultado)
    document.getElementById('texto-resultado').innerHTML = 'O consumo é de '+resultado+' kWh por mês.'
})

$('#cards-iniciar').click(()=>{
    $('.modal-inicio').fadeOut()
    $('.card').addClass('selecionado')
    window.setTimeout(()=>{$('.card').removeClass('selecionado')}, 3500)
})

$('.card').click(function() {
    
    $(this).addClass('selecionado')
    console.log($('.selecionado').length)
    if($('.selecionado').length==2){
        
        if (
                ($('.selecionado').hasClass('energia-sol')&&$('.selecionado').hasClass('problema-sol'))
                ||
                ($('.selecionado').hasClass('energia-vento')&&$('.selecionado').hasClass('problema-vento'))
            ){
            
            window.setTimeout(()=>{
                $('.selecionado').addClass('correto')
                $('.card').removeClass('selecionado')
            }, 1000)
            
        } else {
            window.setTimeout(()=>{
                $('.card').removeClass('selecionado')
            }, 2500)
            
        }

        
    }
})