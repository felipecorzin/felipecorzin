import { Component, OnInit,ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  markersCorzin = [
    {
      id: 0,
      title: 'Felipe Díaz González',
      position: {lat:41.456702968223546,lng: 2.2172632272216926},
      icon: 'assets/imagenes/logo_small.png',
      info: 'Felipe Díaz González',
      infoBody: 'Consultor Web Mobile',
      options: { animation: google.maps.Animation.BOUNCE },
    },
  ];
  options: google.maps.MapOptions = {
    center: {lat:41.456702968223546,lng: 2.2172632272216926},
    zoom: 16,
    mapTypeId: 'roadmap',
  };
  markers: any = [];
  infoContentHeader = '';
  infoContentBody = '';
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;
  constructor(
  ) { }

  ngOnInit() {
  }

  addMarker() {
    this.markers = this.markersCorzin;
  }

  openInfo(marker: MapMarker,content:any,infoBody:any) {
    this.infoContentHeader = content;
    this.infoContentBody = infoBody;
    this.info.open(marker)
  }
}
