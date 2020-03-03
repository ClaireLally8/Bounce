var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 53.42620769757938, lng: -7.823638916015626},
    zoom: 6.8
  });
}