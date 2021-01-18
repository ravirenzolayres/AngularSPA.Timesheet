import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Branch } from '../model/Branch';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
  branchesDp :Branch[] =[
    {IDNo:1,BranchCode:'BranchCode1',BranchName:'BranchName1',IsActive:true},
    {IDNo:2,BranchCode:'BranchCode2',BranchName:'BranchName2',IsActive:true},
    {IDNo:3,BranchCode:'BranchCode3',BranchName:'BranchName3',IsActive:true},
    {IDNo:4,BranchCode:'BranchCode4',BranchName:'BranchName4',IsActive:true},
    {IDNo:5,BranchCode:'BranchCode5',BranchName:'BranchName5',IsActive:true},];

  constructor() { }

  GetBranches() : Observable<Branch[]>{
    return of(this.branchesDp);
  }

}
