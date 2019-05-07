/*
	z：当前瓦片缩放比例（0-18）
	x：当前瓦片的横坐标
	y：当前瓦片的纵坐标
	minZoom：设置最小的缩放比例（默认0）
	maxZoom：设置最大的缩放比例（默认18）
	attribution：右下角的标签
*/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	minZoom: 0,
	maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
.addTo(map);

/*
TileLayer.WMS
这个还真的没有看懂
*/
// var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
//     layers: 'nexrad-n0r-900913',
//     format: 'image/png',
//     transparent: true,
//     attribution: "Weather data © 2012 IEM Nexrad"
// });


/*
ImageOverlay
在指定的区域显示图片
*/
// var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
//     imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
// L.imageOverlay(imageUrl, imageBounds).addTo(map);

/*
VideoOverlay
在指定的区域播放视频
*/
// var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
//     videoBounds = [[ 32, -130], [ 13, -100]];
// L.videoOverlay(videoUrl, videoBounds ).addTo(map);