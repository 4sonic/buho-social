$(document).on('turbolinks:load', function() {

$(document).foundation();

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({
   offset: 64,
   easing: 'ease-in-out-quart',
   duration: 600
   });
});

$(function() {
  window.addEventListener('load', AOS.refresh);
});

$(function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiNHNvbmljIiwiYSI6ImNqbWd5NzV0aDA0Y2wzdm9tcW56bXQ5dm8ifQ.c1Z8TPxEqiegrleIGQyFog';
});

$(function(){
  if($('body').is('.contact')){

           // var london = new mapboxgl.Map({
           //      container: 'london',
           //      style: 'mapbox://styles/garethjohnsdesign/cjl4u2rwc31nd2sqakytpdf6b',
           //      center: [-0.138580, 51.541603],
           //      zoom: 13.88,
           //      scrollZoom: false
           //  });

            var losangeles = new mapboxgl.Map({
                container: 'zapopan',
                style: 'mapbox://styles/4sonic/cjmh0cq3r2u562sp7nk422eyk',
                center: [-103.418,20.686],
                zoom: 14.50,
                scrollZoom: false
            });

            var londonNav = new mapboxgl.NavigationControl();
            london.addControl(londonNav, 'top-left');

            var losangelesNav = new mapboxgl.NavigationControl();
            losangeles.addControl(losangelesNav, 'top-left');

    }
  });

});

var typed = new Typed('#typed', {
  strings: [
     "Buscamos",
     "Vemos",
     "Procesamos",
     "Lanzamos",
     "Conversamos",
     "Reajustamos",
  ],
  typeSpeed: 80,
  loop: true
});
