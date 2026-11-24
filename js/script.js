"use strict";

/* ---------- Questions button (safe on any page) ---------- */
const questionsBtn = document.getElementById("questionsBtn");
if (questionsBtn) {
  questionsBtn.addEventListener("click", function () {
    alert("If you have questions, contact me at:\nokulinski@cps.edu");
  });
}

/* ---------- Google Map ---------- */
function initMap() {
  const mapEl = document.getElementById("map");
  if (!mapEl || !window.google) {
    return; // not the map page, so do nothing
  }

  const center = { lat: 41.8781, lng: -87.6298 }; // change to your location

  const map = new google.maps.Map(mapEl, {
    center: center,
    zoom: 12,
    mapTypeControl: true
  });

  // Feature 1: marker with an info window
  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "My Location"
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Hello!</h3><p>This is my favorite place.</p>"
  });
  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

  // Feature 2: click anywhere on the map to drop a new marker
  map.addListener("click", function (event) {
    new google.maps.Marker({
      position: event.latLng,
      map: map
    });
  });

  // Feature 3: button that toggles the live traffic layer
  const trafficLayer = new google.maps.TrafficLayer();
  let trafficOn = false;
  const trafficBtn = document.getElementById("trafficBtn");
  if (trafficBtn) {
    trafficBtn.addEventListener("click", function () {
      trafficOn = !trafficOn;
      trafficLayer.setMap(trafficOn ? map : null);
    });
  }
}