function initMap() {
    var location = {lat: 43.53321805465838, lng: 1.2266942492984056}; // Coordonnées de la localisation

    var map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15
    });

    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Emplacement"
    });
  }