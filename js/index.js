var map = L.map('map').setView([51.505, -0.09], 14);

map.on('click', function(ev) {
    alert(ev.latlng); // ev is an event object (MouseEvent in this case)
});

/*
	z：当前瓦片缩放比例（0-18）
	x：当前瓦片的横坐标
	y：当前瓦片的纵坐标
	minZoom：设置最小的缩放比例（默认0）
	maxZoom：设置最大的缩放比例（默认18）
	attribution：右下角的标签
*/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	minZoom: 13,
	maxZoom: 16,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
.addTo(map);

/*customer icon*/
var myIcon = L.icon({
    iconUrl: '../icons/location.png',
    iconSize: [25, 35],
    iconAnchor: [12, 35],
    // popupAnchor: [-3, -76],
});

/*marker_a*/
var marker1 = L.marker([51.5, -0.09],{
	icon: myIcon
});
marker1
.bindPopup('Marker_a popup <br> City of London.')
.openPopup()
.addTo(map);

/*marker_b*/
var marker2 = L.marker([51.52, -0.09]);
marker2
.bindPopup('Marker_b popup <br> City of London.')
.openPopup()
.addTo(map);

/*
	polyline
*/
var latlngs = [
    [51.5, -0.09],
    [51.52, -0.09]
];
var polyline = L.polyline(latlngs, {color: 'green'}).addTo(map);
console.log(polyline.toGeoJSON())
/*
	Layergroup
*/
L.layerGroup([marker1, marker2])
.addLayer(polyline)
.addTo(map);
