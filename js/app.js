var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 10.340298, lng: 123.922477},
        zoom: 15
    });

    var ctaLayer = new google.maps.KmlLayer({
        url: 'https://flatx.github.io/js/layer.kml',
        map: map
    });
}