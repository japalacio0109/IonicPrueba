import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';


import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage{

  constructor(private platform: Platform){

  }

  map: GoogleMap;

  async ngOnInit(){
    await this.platform.ready();
    await this.loadMap()
  }

  async loadMap() {

    Environment.setEnv({
        // api key for server
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDjhFTcMtBsfwapiioQdeZBkLuLK2dBNnk',

        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDjhFTcMtBsfwapiioQdeZBkLuLK2dBNnk'
      });

    this.map = await GoogleMaps.create('map');

  }

}
