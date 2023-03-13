import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { TopWidgetsComponent } from './dashboard/top-widgets/top-widgets.component';
import { ChartModule } from 'angular-highcharts';
import { MatGridListModule } from '@angular/material/grid-list';
import { BodyComponent } from './component/body/body.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { TopThreeProductsComponent } from './component/statistics/top-three-products/top-three-products.component';
import { ListUserComponent } from './component/users/list-user/list-user.component';
import { DetailsUserComponent } from './component/users/details-user/details-user.component';
import { AddUserComponent } from './component/users/add-user/add-user.component';
import { GalleryLightboxComponent } from './component/gallery/gallery-lightbox/gallery-lightbox.component';
import { SalesByMonthComponent } from './component/statistics/sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './component/statistics/sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './component/statistics/last-few-transactions/last-few-transactions.component';
import { DetailsGameComponent } from './component/products/details-game/details-game.component';
import { ListGameComponent } from './component/products/list-game/list-game.component';
import { AddGameComponent } from './component/products/add-game/add-game.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { SettingsComponent } from './component/settings/settings.component';
import { UsersComponent } from './component/users/users.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { ProductsComponent } from './component/products/products.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    UsersComponent,
    GalleryComponent,
    SettingsComponent,
    AddGameComponent,
    ListGameComponent,
    DetailsGameComponent,
    LastFewTransactionsComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent,
    TopWidgetsComponent,
    TopThreeProductsComponent,
    GalleryLightboxComponent,
    AddUserComponent,
    DetailsUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgToastModule,
    NgConfirmModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    ChartModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
