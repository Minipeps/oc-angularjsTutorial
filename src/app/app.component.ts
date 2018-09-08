import {Component} from '@angular/core';
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
      apiKey: 'AIzaSyAg8NCtGzWZAIzTu39znZZUYn-82Ir5ehM',
      authDomain: 'application-angular-firebase.firebaseapp.com',
      databaseURL: 'https://application-angular-firebase.firebaseio.com',
      projectId: 'application-angular-firebase',
      storageBucket: '',
      messagingSenderId: '911560564969'
    };
    firebase.initializeApp(config);
  }
}
