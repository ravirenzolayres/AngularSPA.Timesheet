export interface Employee{
    IDNo:number,
    EmployeeId:number,
    BioId:number,
    CompanyId:number,
    BranchId:number,
    DepartmentId:number,
    PositionId:number,
    EmployeeTypeId:number, 
    PersonalInfoId:number, 
    EducationInfoId :number,
    ProfileImg?:string, 
    DefaultShiftCodeId:number, 
    UserId:number, 
    DateHired?:string, 
    DateRegularized?:string, 
    DateResigned?:string,
    IsActive:boolean
}