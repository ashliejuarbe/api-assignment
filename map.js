function initMap() {

	var latlong5 = {lat: 18.466, lng: -66.116};
	var latlong4 = {lat: 38.936, lng: 1.236};
	var latlong3 = {lat: 38.881, lng: -77.036};
	var latlong2 = {lat: 43.774, lng: 11.253};
	var latlong1 = {lat: 41.902, lng: 12.454};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 2,
		center: latlong4,
	});

	var marker = new google.maps.Marker({
		position: latlong5, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong4,
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong3,
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong2,
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong1,
		map: map,
	});

};










