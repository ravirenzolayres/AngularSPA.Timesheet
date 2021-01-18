import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadBranchesComponent } from './upload-branches/upload-branches.component';
import { UploadCompaniesComponent } from './upload-companies/upload-companies.component';
import { UploadDepartmentsComponent } from './upload-departments/upload-departments.component';
import { UploadEmployeesComponent } from './upload-employees/upload-employees.component';
import { UploadEmploymentTypesComponent } from './upload-employment-types/upload-employment-types.component';
import { UploadHolidayCalendarsComponent } from './upload-holiday-calendars/upload-holiday-calendars.component';
import { UploadHolidayTypesComponent } from './upload-holiday-types/upload-holiday-types.component';
import { UploadPositionsComponent } from './upload-positions/upload-positions.component';
import { UploadUsersComponent } from './upload-users/upload-users.component';
import { UploadsComponent } from './uploads/uploads.component';

const routes: Routes = [
  {path:'uploads',component:UploadsComponent},
  {path:'upload-branches',component:UploadBranchesComponent},
  {path:'upload-companies',component:UploadCompaniesComponent},
  {path:'upload-departments',component:UploadDepartmentsComponent},
  {path:'upload-employees',component:UploadEmployeesComponent},
  {path:'upload-employmentTypes',component:UploadEmploymentTypesComponent},
  {path:'upload-holidays',component:UploadHolidayCalendarsComponent},
  {path:'upload-holidayTypes',component:UploadHolidayTypesComponent},
  {path:'upload-positions',component:UploadPositionsComponent},
  {path:'upload-users',component:UploadUsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploaderRoutingModule { }
