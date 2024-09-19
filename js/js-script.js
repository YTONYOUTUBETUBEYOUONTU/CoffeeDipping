function inicio() {
  console.log('pagina cargada');
  $('#boton').click(function () {
    //console.log('Botón pulsado');
    //alert('El botón se ha pulsado');
    $('#img1').animate({
      opacity: 0.25,
      left: '+=50px',
      height: 'toggle',
      //width: '+=50px'
    }, 5000, function () {
      //Animacion completada
    });
  });
}

$(document).ready(function () {
  inicio();
});

$('p').dblclick(function () {
  $(this).hide();
});

/*$('#p1').mouseenter(function() {
  alert('Accediento al parrafo 1')
});

$('#p1').mouseleave(function() {
  alert('Saliendo del parrafo 1')
});*/

$('#p1').hover(
  function () {
    //alert('Accediendo al parrafo 1');
    console.log('Accediento al parrafo 1')
  },
  function () {
    //alert('Saliendo del parrafo 1');
    console.log('Saliendo del parrafo 1');
  }
);

$('.p2').on({
  mouseenter: function () {
    $(this).css('color', 'red');
  },
  mouseleave: function () {
    $(this).css('color', 'black');
  },
  click: function () {
    alert('Has clicado en el parrafo 2');
    $(this).css('color', 'blue');
  }
});

$('#boton2').on('click', function () {
  console.log('Botón 2 pulsado');
  //$('#div1').fadeOut();
  $('#div2').slideUp('slow');
  $('#div3').toggle(3000);
});

/*$('.seccion1').on('click', function () {
  console.log('Seccion 1 pulsada');
  //$('#s1p1').toggle();
  $('#s1p1').slideToggle('slow');
});*/

$('.seccion1').on('click', function () {
  console.log('Seccion 1 pulsada');
  $('#s1p1').slideToggle('slow', function() {
    if ($(this).is(':visible')) {
      $('.seccion1').find('span').css('transform', 'rotate(0deg)');
    } else {
      $('.seccion1').find('span').css('transform', 'rotate(90deg)');
    }
  });
});


//$(window).on('load',inicio);