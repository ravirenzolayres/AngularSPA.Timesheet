import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from '../model/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  departmentDp : Department[] = [
    { IDNo:1,DepartmentCode:'DepartmentCode1',DepartmentName:'DepartmentName1',IsActive:true},
    { IDNo:2,DepartmentCode:'DepartmentCode2',DepartmentName:'DepartmentName2',IsActive:true},
    { IDNo:3,DepartmentCode:'DepartmentCode3',DepartmentName:'DepartmentName3',IsActive:true},
    { IDNo:4,DepartmentCode:'DepartmentCode4',DepartmentName:'DepartmentName4',IsActive:true},
    { IDNo:5,DepartmentCode:'DepartmentCode5',DepartmentName:'DepartmentName5',IsActive:true}
  ];

  constructor() { }

  GetDepartments() : Observable<Department[]>{
    return of(this.departmentDp);
  }
}
