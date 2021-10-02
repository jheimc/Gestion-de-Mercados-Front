import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { RegisterStoreComponent } from './components/register-store/register-store.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ShowStoresComponent } from './components/show-stores/show-stores.component';
import { StoreContentComponent } from './components/store-content/store-content.component';

const routes: Routes = [
  {path:'manageAccounts',component: HomeAdminComponent},
  {path:'registerStores',component: RegisterStoreComponent},
  {path:'showStores',component: ShowStoresComponent},
  {path:'showStores/:id',component: StoreContentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
