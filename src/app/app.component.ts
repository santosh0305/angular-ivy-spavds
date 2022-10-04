import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    // translate.addLangs(['sp']);
    // translate.setDefaultLang('sp');
    // const browserLang = translate.getBrowserLang();

    // var data = {
    //   HOME: {
    //     TITLE: 'Hola Angular con ngx-translate!',
    //     SELECT: 'Cambia el idioma',
    //   },
    //   ERROR: {
    //     INVALIDCART: 'Tarjeta no valida !!',
    //   },
    // };

    // translate.use(browserLang.match(/en|fr|sp|hn/) ? browserLang : '');
    translate.use('');
  }
}
