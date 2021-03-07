import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private userService: UserService) {

  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logOut() {
    this.userService.logOut();
  }


}
