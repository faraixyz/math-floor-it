function initMap(){
    var chicago = {lat: 41.8333925, lng: -88.0123333};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center:chicago
    });
}