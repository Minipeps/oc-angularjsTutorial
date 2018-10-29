import {Component, OnInit} from '@angular/core';
import * as configFile from 'firebase-config.json';
import * as firebase from 'firebase';
import Map from 'ol/Map';
import View from 'ol/View';
import Draw from 'ol/interaction/Draw';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {fromLonLat} from 'ol/proj';
import { IGC } from 'ol/format';
import {defaults as defaultInteractions } from 'ol/interaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'oc-angularjsTutorial';
  map: any;
  latitude = 60.776372;
  longitude = 10.675170;

  constructor() {
    const config = {
      apiKey: (<any>configFile).apiKey,
      authDomain: (<any>configFile).authDomain,
      databaseURL: (<any>configFile).databaseURL,
      projectId: (<any>configFile).projectId,
      storageBucket: (<any>configFile).storageBucket,
      messagingSenderId: (<any>configFile).messagingSenderId
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  ngOnInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([this.longitude, this.latitude]),
        zoom: 8
      })
    });

    this.drawLineInteraction();
  }

  setCenter() {
    const view = this.map.getView();
    view.setCenter(fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }

  drawLineInteraction() {
    const draw = new Draw({
      source: new VectorSource({wrapX: false}),
      type: 'LineString'
    });
    this.map.addInteraction(draw);
  }
}
