import {Component} from '@angular/core';
import * as configFile from 'firebase-config.json';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oc-angularjsTutorial';

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
}
