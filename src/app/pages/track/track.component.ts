import { Component, OnInit } from "@angular/core";
import { gsap } from "gsap/gsap-core";
import * as L from "leaflet";
@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.scss"],
})
export class TrackComponent implements OnInit {
  map: L.map;
  ngOnInit() {
    this.map = L.map("mapId").setView([51.505, -0.09], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.marker([51.505, -0.09]).addTo(this.map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

    // const markerPoint = L.marker([51.505, -0.09])
    // this.map.addLayer(markerPoint);
  }
}
