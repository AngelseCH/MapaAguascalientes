// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13);

// Añadir capa de OpenStreetMap
var openStreetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Crear íconos personalizados
var iconoBienvenida = L.icon({
    iconUrl: 'imagenes/welcome.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

var iconoMuseo = L.icon({
    iconUrl: 'imagenes/museum.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

var iconoPlaza = L.icon({
    iconUrl: 'imagenes/plaza.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Añadir un marcador personalizado en Aguascalientes capital
var marker = L.marker([21.88234, -102.28259], { icon: iconoBienvenida }).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador personalizado en la Plaza de la Patria
var plazaPatria = L.marker([21.88187, -102.29495], { icon: iconoPlaza }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

// Marcador personalizado en el Museo Nacional de la Muerte
var museoMuerte = L.marker([21.88417, -102.28878], { icon: iconoMuseo }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

// Dibujar un polígono para delimitar el Centro Histórico
var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

// Crear controles de capas
var baseMaps = {
    "Mapa base": openStreetMapLayer
};

var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
};

// Añadir controles de capas al mapa
L.control.layers(baseMaps, overlayMaps).addTo(map);
