import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CompaniesComponent } from './companies/companies.component';
import { BranchesComponent } from './branches/branches.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PositionsComponent } from './positions/positions.component';
import { EmploymentTypesComponent } from './employment-types/employment-types.component';
import { HolidayTypesComponent } from './holiday-types/holiday-types.component';
import { EmployeesComponent } from './employees/employees.component';
import { UsersComponent } from './users/users.component';
import { DataTablesModule } from 'angular-datatables';
import { HolidaysComponent } from './holidays/holidays.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { AccessesComponent } from './accesses/accesses.component';
import { GendersComponent } from './genders/genders.component';
import { CivilStatusesComponent } from './civil-statuses/civil-statuses.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AccessesService } from 'src/app/services/accesses.service';
import { BioLogsService } from 'src/app/services/bio-logs.service';
import { BranchesService } from 'src/app/services/branches.service';
import { CivilStatusesService } from 'src/app/services/civil-statuses.service';
import { CompaniesService } from 'src/app/services/companies.service';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EducationInfosService } from 'src/app/services/education-infos.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeeCustomSchedulesService } from 'src/app/services/employee-custom-schedules.service';
import { EmploymentTypesService } from 'src/app/services/employment-types.service';
import { GendersService } from 'src/app/services/genders.service';
import { HolidaysService } from 'src/app/services/holidays.service';
import { HolidayTypesService } from 'src/app/services/holiday-types.service';
import { PersonalInfosService } from 'src/app/services/personal-infos.service';
import { PositionsService } from 'src/app/services/positions.service';
import { ShiftsService } from 'src/app/services/shifts.service';
import { ShiftWeeklysService } from 'src/app/services/shift-weeklys.service';
import { UsersService } from 'src/app/services/users.service';
import { UserAccessesService } from 'src/app/services/user-accesses.service';


@NgModule({
  declarations: [
    CompaniesComponent,
    BranchesComponent,
    DepartmentsComponent,
    PositionsComponent,
    EmploymentTypesComponent,
    HolidayTypesComponent,
    EmployeesComponent,
    UsersComponent,
    HolidaysComponent,
    ShiftsComponent,
    AccessesComponent,
    GendersComponent,
    CivilStatusesComponent
  ],
  imports: [
    DataTablesModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    DataTablesModule
  ],
  providers:[
    AccessesService,
    BioLogsService,
    BranchesService,
    CivilStatusesService,
    CompaniesService,
    DepartmentsService,
    EducationInfosService,
    EmployeesService,
    EmployeeCustomSchedulesService,
    EmploymentTypesService,
    GendersService,
    HolidaysService,
    HolidayTypesService,
    PersonalInfosService,
    PositionsService,
    ShiftsService,
    ShiftWeeklysService,
    UsersService,
    UserAccessesService
  ]
})
export class FileMaintenanceModule { }
