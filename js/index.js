const searchBtn = document.getElementById("searchBtn");
let ipAddress = document.getElementById("ipAddress");


const realIp = document.getElementById("realIp");
const realLocation = document.getElementById("realLocation");
const realTimezone = document.getElementById("realTimezone");
const realIsp = document.getElementById("realIsp");






searchBtn.onclick = function(){
    ipAddress = ipAddress.value;
    let apiUrl = "https://geo.ipify.org/api/v2/country,city?apiKey=at_zI4eaAgVOoaJWc8cbXCH8SSwVMNn9&ipAddress=" + ipAddress;

    fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data


    let locationCon = userData.location.country + ", " + userData.location.region;

    realIp.innerHTML = userData.ip
    realLocation.innerHTML = locationCon;
    realTimezone.innerHTML = userData.location.timezone;
    realIsp.innerHTML = userData.isp

    getMap(userData.location.lat, userData.location.lng);
    

  })
  .catch(error => {
    console.error('Error:', error);
  });



}

const resetBtn = document.getElementById("resetBtn");
resetBtn.onclick = function(){
  window.location.reload();
}

// map integration
// map integration
// map integration
// map integration
// map integration
// map integration
// map integration

function getMap(latitude, longitude) {

  console.log(latitude, longitude);
  const map = L.map('map').setView([latitude, longitude], 13);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([latitude, longitude]).addTo(map);
}


// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

