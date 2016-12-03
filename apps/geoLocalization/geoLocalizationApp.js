/**
 * Created by Konrad on 03.12.2016.
 */


(function () {

    function Map(options, mapDiv) {

        var options = options;
        var loc = options.location.split(',');
        var pos = new google.maps.LatLng(loc[0], loc[1]);
        var mapOptions = {
            zoom: 16,
            center: pos,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }


        var mapObj = new google.maps.Map(document.querySelector(mapDiv), mapOptions);

        var marker = new google.maps.Marker({
            map: mapObj,
            position: pos,
            animation: google.maps.Animation.BOUNCE,
            icon: options.mapMarker

        })


    }


    var optionsPiaski = {
        location: '51.13880529999999,22.848536299999978',
        mapMarker: 'lib/image/mapMarker.png'
    }

    var map1 = new Map(optionsPiaski, '#map');


    var init = function () {
        try {
            google.maps.event.addDomListener(window, 'load', map1);
        } catch (e) {
            return;
        }

    }


});

