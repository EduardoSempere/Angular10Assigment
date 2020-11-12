import { ShowEmployeePipe } from './show-employee.pipe';

describe('ShowEmployeePipe', () => {
  it('create an instance', () => {
    const pipe = new ShowEmployeePipe();
    expect(pipe).toBeTruthy();
  });
});
