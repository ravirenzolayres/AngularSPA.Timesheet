import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { FileMaintenanceModule } from './modules/file-maintenance/file-maintenance.module';
import { UploaderModule } from './modules/uploader/uploader.module';
import { InputUploadService } from './services/input-upload.service';
import { DtrModule } from './modules/dtr/dtr.module';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FileMaintenanceModule,
    UploaderModule,
    DtrModule
  ],
  providers: [
    InputUploadService,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
