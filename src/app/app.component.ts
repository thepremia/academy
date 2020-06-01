import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'premia';

  constructor(private router: Router) {

    this.router.events.subscribe(routerEvent => {
        if (routerEvent instanceof NavigationStart) {
            if (routerEvent.url === '/') {
                this.router.navigate(['home'], {skipLocationChange: true});
            }
        }
        if (this.router.url === '/home') {
          document.body.classList.add('main-banner');
        } else {
          document.body.classList.remove('main-banner');
        }
    });
}
ngOnInit() {
  // Called after the constructor and called  after the first ngOnChanges() 
}
}
