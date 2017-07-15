var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 10.340298, lng: 123.922477},
        zoom: 15
    });
}