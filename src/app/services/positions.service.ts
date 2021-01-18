import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Position } from '../model/Position';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  positionsDp : Position[] = [
    { IDNo:1,PositionCode:'PositionCode1',PositionName:'PositionName1',IsActive:true},
    { IDNo:2,PositionCode:'PositionCode2',PositionName:'PositionName2',IsActive:true},
    { IDNo:3,PositionCode:'PositionCode3',PositionName:'PositionName3',IsActive:true},
    { IDNo:4,PositionCode:'PositionCode4',PositionName:'PositionName4',IsActive:true},
    { IDNo:5,PositionCode:'PositionCode5',PositionName:'PositionName5',IsActive:true}
  ];

  constructor() { }

  GetPositions() : Observable<Position[]>{
    return of(this.positionsDp);
  }
}
