function initMap() {
    // Set the coordinates for your map center
    const mapCenter = { lat: 37.7749, lng: -122.4194 };

    // Create a new map instance
    const map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 13, // Adjust the zoom level
        zoomControl: false, // Disable zoom control buttons
        streetViewControl: false, // Disable Street View control
        mapTypeControl: true, // Enable map type control buttons
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, // Adjust the style
            position: google.maps.ControlPosition.TOP_RIGHT, // Adjust the position
        },
        styles: [
            // Your custom map styles here
        ],
    });

    const marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        title: 'Custom Marker Title',
        icon: 'path/to/custom-marker.png', 
    });
}

google.maps.event.addDomListener(window, 'load', initMap);



$(document).ready(function () {
    $(".eclipse").on('click', function () {
        $('html, body').animate({
            scrollTop: '+=900vh'
        }, 800);
    });
});
$(document).ready(function () {
    $(".scroll-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
