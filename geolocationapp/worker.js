var lat='' ,
    lon='',
    clon='',
    clat ='';
 var R = 6371; 
self.addEventListener("message",function(e){
    lat = parseFloat(e.data.lat);
    lon = parseFloat(e.data.lon);
    clat =parseFloat(e.data.clat);
    clon = parseFloat(e.data.clon);
    var dLat = deg2rad(clat - lat);
    var dLon = deg2rad(clon - lon);
    var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat)) * Math.cos(deg2rad(clat)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
    console.log(d);
    postMessage(d);
},false)

function deg2rad(deg) {
  return deg * (Math.PI/180)
}