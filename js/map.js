

let latitude = 26.624884
let longitude = 92.800653
const map = L.map('map').setView([latitude, longitude], 13);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([latitude, longitude]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();