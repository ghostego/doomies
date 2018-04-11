import { Component } from '@angular/core';
import { MenuService } from './menu/menu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService]
})
export class AppComponent {
  title = 'app';
  isCollapsed = true;
}
