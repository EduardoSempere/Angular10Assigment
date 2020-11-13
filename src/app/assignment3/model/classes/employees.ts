import { IAssigment3 } from '../Iassigment3';

export class Employees implements IAssigment3{
    empId: number;
    empName: string;
    empSal: number;
    empDep: string;

    constructor(empId: number,
        empName: string,
        empSal: number,
        empDep: string,){

            this.empDep = empDep;
            this.empId = empId;
            this.empName = empName;
            this.empSal = empSal;
        }


}
