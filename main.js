function initMap(){
    var chicago = {lat: 41.8333925, lng: -88.0123333};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center:chicago
    });
}

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }