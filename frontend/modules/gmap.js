var gmap = document.getElementById('map');

function initMap() {
	var map,
			marker,
			center = {
				lat: 55.702993,
				lng: 37.530362
			},
			zoom = 15;
			

	map = new google.maps.Map(gmap , {
		center: center,
		scrollwheel: false,
		zoom: zoom
	});

	marker = new google.maps.Marker({
		position: center,
		map: map
	})


}

if (gmap) google.maps.event.addDomListener(window, 'load', initMap);
