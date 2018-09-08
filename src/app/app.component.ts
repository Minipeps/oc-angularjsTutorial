import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n' +
        '    sed do eiusmod tempor incididunt ut labore\n' +
        '    et dolore magna aliqua. Ut enim ad minim veniam, quis'
    },
    {
      title: 'Mon deuxième post',
      content: 'et dolore magna aliqua. Ut enim ad minim veniam, quis'
    },
    {
      title: 'Encore un post',
      content: 'Contenu du post blablabla'
    }
  ];

  constructor() {}
}

