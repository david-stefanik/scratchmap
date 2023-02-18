
 
var map = L.map('map').setView([51.505, -0.09], 9)
 
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
navigator.geolocation.getCurrentPosition(sucess,error)







function sucess(pos){
    let lat= pos.coords.latitude;
    let long=pos.coords.longitude;
    let accuracy= pos.coords.accuracy;
 let marker=L.marker([lat,long]).addTo(map);
let circle=L.circle([lat,long],{radius: accuracy}).addTo(map);
marker.bindPopup("<b>you are here</b><br>").openPopup();
map.fitBounds(circle.getBounds())







}




function error(err){
    if (err.code===1){
        alert(`pleasse allow geolocator access`)

    }
    else {
        alert(`cannot get location`)
    }
}


  
 
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'fsq3FJmblxE33xXRrwVaQRsGS8De1JO/XLRKdqW87mcZ2nk='
        }
      };
      
      fetch('https://api.foursquare.com/v3/places/search?radius=500&categories=11002&fields=geocodes', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    
   
