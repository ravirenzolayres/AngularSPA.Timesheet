import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DtrRoutingModule } from './modules/dtr/dtr-routing.module';
import { FileMaintenanceRoutingModule } from './modules/file-maintenance/file-maintenance-routing.module';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { HomeComponent } from './modules/shared/home/home.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { SidebarComponent } from './modules/shared/sidebar/sidebar.component';
import { UploaderRoutingModule } from './modules/uploader/uploader-routing.module';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'footer',component:FooterComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FileMaintenanceRoutingModule,
    UploaderRoutingModule,
    DtrRoutingModule
  ],
  exports: [
    RouterModule,
    FileMaintenanceRoutingModule,
    UploaderRoutingModule,
    DtrRoutingModule
  ]
})
export class AppRoutingModule { }
