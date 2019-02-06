function initMap() {
  // The location of Wapato
  var Wapato = {lat: 47.194973, lng: -122.454884};
  // The map, centered at Wapato
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: Wapato});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: Wapato, map: map});
}

