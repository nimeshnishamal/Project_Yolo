import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { UsersComponent } from './component/users/users.component';
import { ProductsComponent } from './component/products/products.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { SettingsComponent } from './component/settings/settings.component';
import { AddGameComponent } from './component/products/add-game/add-game.component';
import { DetailsGameComponent } from './component/products/details-game/details-game.component';
import { AddUserComponent } from './component/users/add-user/add-user.component';
import { DetailsUserComponent } from './component/users/details-user/details-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'settings', component: SettingsComponent},

  {path: 'products/add', component: AddGameComponent},
  {path: 'products/detail/:id', component: DetailsGameComponent},
  {path: 'products/update/:id', component: AddGameComponent},

  {path: 'users/add', component: AddUserComponent},
  {path: 'users/detail/:id', component: DetailsUserComponent},
  {path: 'users/update/:id', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
