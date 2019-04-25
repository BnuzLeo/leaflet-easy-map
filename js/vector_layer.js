var beiligong_latlng = [22.3663, 113.5368]
var car_latlng = [22.3671, 113.5565]
var beiligong_cricle;

$(document).ready(function(){
	$("#add_polyline_button").click(addPolyLine)
	$("#add_polygon_button").click(addPolygon)
	$("#add_circle_button").click(addCricle)
})

/*
	连接两个坐标
*/
addPolyLine = function(){
	if(!guantang_maker || !nanfang_maker){
		alert("请先初始化南方软件园和观塘村的标记")
		return;
	}
	var latlngs = [
		nanfang_maker._latlng,
		guantang_maker._latlng
	]
	var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
	// 自动对焦polyline
	map.fitBounds(polyline.getBounds());
	
	L.layerGroup([guantang_maker, nanfang_maker])
    .addLayer(polyline)
    .addTo(map);
}

/*
	连接一个区域
*/
addPolygon = function(){
	if(!guantang_maker || !nanfang_maker){
		alert("请先初始化南方软件园和观塘村的标记")
		return;
	}
	var latlngs = [
		nanfang_maker._latlng,
		guantang_maker._latlng,
		beiligong_latlng,
		car_latlng
	];
	var polygon = L.polygon(latlngs, {color: 'green'}).addTo(map);
	// 自动对焦polygon
	map.fitBounds(polygon.getBounds());
}

/*
	画出北理工的300米范围
*/
addCricle = function(){
	if (beiligong_cricle) {
		alert("请勿重复标记");
		return;
	}
	beiligong_cricle = L.circle(beiligong_latlng, {radius: 200}).addTo(map);
}
