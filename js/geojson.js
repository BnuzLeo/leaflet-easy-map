$(document).ready(function(){
    /*添加九段线*/
    $("#add_nine_line").click(locateNineLine);
})

locateNineLine = function(){
    //定义线
    var nineLineJson = [{
        "type": "LineString",
        "coordinates": [[109.301510, 16.199545], [109.855090, 15.158954]]
    },{
        "type": "LineString",
        "coordinates": [[110.323250, 12.240500], [110.065410, 11.251521]]
    },{
        "type": "LineString",
        "coordinates": [[108.234310, 7.073835], [108.302020, 6.010893]]
    },{
        "type": "LineString",
        "coordinates": [[111.794560, 3.408477], [112.849480, 3.744957]]
    },{
        "type": "LineString",
        "coordinates": [[115.544110, 7.158346], [116.242160, 7.982450]]
    },{
        "type": "LineString",
        "coordinates": [[118.538600, 10.906545], [118.978140, 11.979657]]
    },{
        "type": "LineString",
        "coordinates": [[119.059050, 15.008851], [119.061310, 16.028913]]
    },{
        "type": "LineString",
        "coordinates": [[119.473080, 18.015577], [120.019230, 19.024357]]
    },{
        "type": "LineString",
        "coordinates": [[121.174030, 20.826548], [121.911690, 21.367513]]
    }];
    //定义style
    var lineStyle = {
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    };
    //添加到地图上
    L.geoJSON(nineLineJson, {
        style: lineStyle
    }).addTo(map);

    map.setZoom(4);
    map.flyTo([16.199545,109.301510]);
}
