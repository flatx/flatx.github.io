var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 10.340298, lng: 123.922477},
        zoom: 15
    });

    var ctaLayer = new google.maps.KmlLayer({
        url: 'https://www.dropbox.com/s/1o0cmsb48cg2tdx/layer.kml',
        map: map
    });
}