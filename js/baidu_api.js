$(document).ready(function(){
    /*点击搜索*/
    $("#search_btn").click(searchLocation);
})

searchLocation = function(){
	var address = $("#address").val();
	var ak = 'vjy44i9dL3Cu5gLLYiSjH74wVbts7Anc';
	var output = 'json';
	var url = 'http://api.map.baidu.com/geocoder/v2/?address='+address+'&output='+output+'&ak='+ak+'&callback=showLocation'
	$.getScript(url);

}

showLocation = function(result){
	var status = result.status
	if (status != 0) {
		alert("输入有误")
	}
	var result = result.result
	var lat = result.location.lat
	var lng = result.location.lng
	jumpToLocation(lat,lng)
}

jumpToLocation = function(lat,lng){
	var location = L.latLng(lat,lng);
	location_marker = L.marker(location,{
		opacity: 0.8, //透明度
		keyboard: true, //鼠标移到marker，按enter=鼠标左键
		title: $("#address").val(), //鼠标移上去显示title
	});
	location_marker.addTo(map);
	location_marker.bindPopup($("#address").val()).openPopup()
	map.setZoom(14);
	map.flyTo(location);
}