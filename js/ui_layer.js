/*标签*/
var nanfang_maker;
var guantang_maker;
/*经纬度*/
var nanfang_latlng = L.latLng(22.37543,113.56732);
var guangtang_latlng = L.latLng(22.3756300, 113.5402700);
/*图标*/
var icon;

/*
	标记的基本用法
*/
$(document).ready(function(){
	/*标记南方软件园*/
	$("#nanfang_maker_button").click(locateNanfangMaker);
	/*使南方软件园的标记可移动*/
	$("#nanfang_draggable_button").click(moveNanfangMaker);
	/*标记观塘村*/
	$("#guantang_maker_button").click(locateGuangtangMaker);
	/*自定义图标*/
	icon = L.icon({
	    iconUrl: '../icons/location.png',
	    iconSize: [25, 35],
	    iconAnchor: [12, 35],
	});	
})

/*标记南方软件园*/
locateNanfangMaker = function(){
	if (nanfang_maker) {
		alert("请不要重复标记")
	}else{
		nanfang_maker = L.marker(nanfang_latlng,{
			opacity: 0.8, //透明度
			keyboard: true, //鼠标移到marker，按enter=鼠标左键
			title: '[Title]南方软件', //鼠标移上去显示title
		});
		/*maker添加到地图上*/
		nanfang_maker.addTo(map);
		/*弹出框*/
		nanfang_maker.bindPopup('[Popup]南方软件园').openPopup()
		/*添加提示框*/
		nanfang_maker.bindTooltip('[Tooltip]南方软件园').openTooltip();
		map.setZoom(14);
		map.flyTo([22.37543,113.56732]);
	}
}

/*移动南方软件园*/
moveNanfangMaker = function(){
	if (nanfang_maker) {
		nanfang_maker.dragging.enable();
		/*dragend event*/
		nanfang_maker.on('dragend',function(distance){
			console.log(distance)
			nanfang_maker.bindTooltip('[distance]'+distance.distance).openTooltip();
		})
	}else{
		alert("请先初始化南方软件园的标记")
	}
}


locateGuangtangMaker = function(){
	if (guantang_maker) {
		alert("请不要重复标记")
	}else{
		guantang_maker = L.marker(guangtang_latlng,{
			draggable: true,
			icon: icon
		});
		/*maker添加到地图上*/
		guantang_maker.addTo(map);
		map.setZoom(14);
		map.flyTo([22.3756300, 113.5402700]);	
	}
}

