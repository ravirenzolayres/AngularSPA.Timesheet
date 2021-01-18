import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from '../model/Company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  companiesDp : Company[] = [
    { IDNo:1,CompanyCode:'CompanyCode1',CompanyName:'CompanyName1',IsActive:true},
    { IDNo:2,CompanyCode:'CompanyCode2',CompanyName:'CompanyName2',IsActive:true},
    { IDNo:3,CompanyCode:'CompanyCode3',CompanyName:'CompanyName3',IsActive:true},
    { IDNo:4,CompanyCode:'CompanyCode4',CompanyName:'CompanyName4',IsActive:true},
    { IDNo:5,CompanyCode:'CompanyCode5',CompanyName:'CompanyName5',IsActive:true}
  ];
  
  constructor() { }

  GetCompanies(): Observable<Company[]>{
    return of(this.companiesDp);
  }
}
