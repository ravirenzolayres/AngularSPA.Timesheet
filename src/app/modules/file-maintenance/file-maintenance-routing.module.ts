import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessesComponent } from './accesses/accesses.component';
import { BranchesComponent } from './branches/branches.component';
import { CivilStatusesComponent } from './civil-statuses/civil-statuses.component';
import { CompaniesComponent } from './companies/companies.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmploymentTypesComponent } from './employment-types/employment-types.component';
import { GendersComponent } from './genders/genders.component';
import { HolidayTypesComponent } from './holiday-types/holiday-types.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { PositionsComponent } from './positions/positions.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'companies',component:CompaniesComponent},
  {path:'branches',component:BranchesComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'positions',component:PositionsComponent},
  {path:'employmentTypes',component:EmploymentTypesComponent},
  {path:'holidayTypes',component:HolidayTypesComponent},
  {path:'holidays',component:HolidaysComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'users',component:UsersComponent},
  {path:'shifts',component:ShiftsComponent},
  {path:'accesses',component:AccessesComponent},
  {path:'civilStatuses',component:CivilStatusesComponent},
  {path:'genders',component:GendersComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileMaintenanceRoutingModule { }
