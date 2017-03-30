import { Component } from '@angular/core';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private toasterService: ToasterService) {
    this.toasterService = toasterService;
  }
  title = 'app works!';

  popToast() {
    var toast: any = {
      type: 'info',
      title: 'Here is a Toast Title',
      body: 'Here is a Toast Body'
    };

    this.toasterService.pop(toast);
  }
}
