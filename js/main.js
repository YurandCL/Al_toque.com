$(document).ready(function(){
	/*Mostrar menu movil*/
	var NavBar=$('.NavBar');
	var body=$('body,html');
	var btnMenu=$('.btn-menu');
	$('.btn-menu').on('click', function(e){
		e.preventDefault();
		if(NavBar.hasClass('NavBar-show')){
			btnMenu.removeClass('zmdi-close').addClass('zmdi-more-vert');
			NavBar.removeClass('NavBar-show');
			body.removeClass('No-Scroll');
		}else{
			btnMenu.removeClass('zmdi-more-vert').addClass('zmdi-close');
			NavBar.addClass('NavBar-show');
			body.addClass('No-Scroll');
		}
	});
	/*Mostrar carrito de compras*/
	$('.btn-shopcart').on('click', function(e){
		e.preventDefault();
		var kart=$('.ShoppingCart');
		if(kart.hasClass('ShoppingCart-show')){
			kart.removeClass('ShoppingCart-show');
		}else{
			kart.addClass('ShoppingCart-show');
		}
		btnMenu.removeClass('zmdi-close').addClass('zmdi-more-vert');
		NavBar.removeClass('NavBar-show');
		body.removeClass('No-Scroll');
	});
	/*Mostrar modal*/
	$('.modal-trigger').leanModal({
		dismissible: false
	});
	/*Mostrar tooltips*/
	$('.tooltipped').tooltip({delay: 50});

	$( "#btn_agregar" ).click(function() {
  	$('td').eq("0").replaceWith("<td>Zapatilla</td>");
		$('td').eq("1").replaceWith("<td>S/229</td>");
	});

	$( "#btn_quitar1" ).click(function() {
  	$('td').eq("0").replaceWith("<td>Producto #1</td>");
		$('td').eq("1").replaceWith("<td>----</td>");
	});
//---------------------------------------------------------------

//uso del slide
	var slideIndex = 0;
	showSlides();
	function showSlides(){
		var i;
		var slides=document.getElementsByClassName("mySlides");
		for(i=0; i<slides.length; i++){
			slides[i].style.display = "none";
		}
		slideIndex++;
		if(slideIndex > slides.length){
			slideIndex = 1;
		}
		slides[slideIndex-1].style.display = "block";
		setTimeout(showSlides,10000);
	}
});
