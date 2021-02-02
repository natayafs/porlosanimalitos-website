import { Component } from '@angular/core';
@Component({
  selector: 'app-slidesroutes',
  templateUrl: './slidesroutes.component.html',
  styleUrls: ['./slidesroutes.component.css']
})
export class SlidesroutesComponent {
  config: any;
  fullpage_api: any;
  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      anchors: ['1', '2', '3', '4', '5', '6' ],
      sectionsColor: ['#8558c8', '#524c4f', '#524c4f', '#524c4f', '#524c4f', '#8558c8' ],
      menu: '#menu',
      // fullpage callbacks
      afterResize: () => {
      },
      afterLoad: (origin, destination, direction) => {
      }
    };
  }
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}