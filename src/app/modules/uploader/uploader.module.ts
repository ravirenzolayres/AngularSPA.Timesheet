import { NgModule } from '@angular/core';

import { UploadCompaniesComponent } from './upload-companies/upload-companies.component';
import { UploadBranchesComponent } from './upload-branches/upload-branches.component';
import { UploadDepartmentsComponent } from './upload-departments/upload-departments.component';
import { UploadEmployeesComponent } from './upload-employees/upload-employees.component';
import { UploadEmploymentTypesComponent } from './upload-employment-types/upload-employment-types.component';
import { UploadHolidayCalendarsComponent } from './upload-holiday-calendars/upload-holiday-calendars.component';
import { UploadHolidayTypesComponent } from './upload-holiday-types/upload-holiday-types.component';
import { UploadPositionsComponent } from './upload-positions/upload-positions.component';
import { UploadUsersComponent } from './upload-users/upload-users.component';
import { UploadsComponent } from './uploads/uploads.component';
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
    UploadCompaniesComponent,
    UploadBranchesComponent,
    UploadDepartmentsComponent,
    UploadEmployeesComponent,
    UploadEmploymentTypesComponent,
    UploadHolidayCalendarsComponent,
    UploadHolidayTypesComponent,
    UploadPositionsComponent,
    UploadUsersComponent,
    UploadsComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    UploadCompaniesComponent,
    UploadBranchesComponent,
    UploadDepartmentsComponent,
    UploadEmployeesComponent,
    UploadEmploymentTypesComponent,
    UploadHolidayCalendarsComponent,
    UploadHolidayTypesComponent,
    UploadPositionsComponent,
    UploadUsersComponent,
    UploadsComponent
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
export class UploaderModule { }
