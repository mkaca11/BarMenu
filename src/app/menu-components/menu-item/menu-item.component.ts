import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  @Input() menuItemName: string = "";

}
