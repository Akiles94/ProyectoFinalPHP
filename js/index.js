/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10);
}

inicializarSlider();
playVideoOnScroll();

var cant=0;
var datos;
var precios;
var precio;
var direccion;
var telefono;
var codigo;
var ciudadRes;
var tipoRes;
var cont=0;
$("#formulario").submit(function(event){
   event.preventDefault();
   var ciudad=$("#ciudad").val();
   var tipo=$("#tipo").val();
   precio=$("#rangoPrecio").val();
   $.ajax({
      url:"php/index.php",
      type:"POST",
      datatype:"json",
      data:{
          "ciudad":ciudad,
          "tipo":tipo,
          "precio":precio
      },
      success:function(data){
          alert("Datos enviados correctamente");
          datos=$.parseJSON(data);
          mostrar="";
          for(i=0;i<12;i++){
            mostrar+="<div class='col l12 card resultado'><img src='img/home.jpg' class='imagen'/><div class='datos'>Direccion: "+datos["direccion"][i]+"<br>Ciudad: "+datos["ciudad"][i]+"<br>Telefono: "+datos["telefono"][i]+"<br>Codigo postal: "+datos["codigo"][i]+"<br>Tipo: "+datos["tipo"][i]+"<br>Precio: "+datos['precio'][i]+"</div></div>";   
          }
          $("#mostrarTodos").click(function(){
              $(".tituloContenido").html(mostrar);
          });
      },
      error:function(){
        alert("error papuh");  
      }
   });
});

$("#mostrarTodos").click(function(){
    
});