import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ThemeService} from "./services/theme.service";
import {BusinessData} from "./interfaces/business-data";
import {Store} from "@ngrx/store";
import {RootStore} from "./interfaces/root-store";
import {loadBusinessData} from "./actions/business.actions";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BarMenu';
  businessData$: Observable<BusinessData | null> = this.store.select(state => state.business.data);
  loadingData$: Observable<boolean> = this.store.select(state => state.business.loading);
  isDarkTheme?: Observable<boolean> = this.themeService.isDarkTheme;

  constructor(private themeService: ThemeService, private store: Store<RootStore>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadBusinessData())
  }
}
