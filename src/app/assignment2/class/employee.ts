import { IAssigment2 } from '../Iassigment2';

export class Employee implements IAssigment2 {
    empId: number;
    empName: string;
    empSal: number;
    empDep: string;
    constructor(empId: number,empName: string, empSal: number, empDep: string){
        this.empId = empId;
        this.empName = empName;
        this.empSal = empSal;
        this.empDep = empDep;

        }
}
