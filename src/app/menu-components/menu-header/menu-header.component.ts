import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {Observable, take} from "rxjs";

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  brandImage: string = "https://mycodelesswebsite.com/wp-content/uploads/2020/10/Nom-Nom-Coffee-Shop-Website-Example.jpg";
  companyName: string = "Company Name";
  slogan: string = "slogan";
  isDarkTheme?: Observable<boolean>;
  darkTheme = false

  constructor(private themeService: ThemeService) {
    const storedTheme = localStorage.getItem("dark")
    if (storedTheme) {
      this.darkTheme = storedTheme == "true"
    }
  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme
  }

  toggleDarkTheme() {
    this.darkTheme = !this.darkTheme
    this.themeService.setDarkTheme(this.darkTheme)
    localStorage.setItem("dark", `${this.darkTheme}`)
  }
}
