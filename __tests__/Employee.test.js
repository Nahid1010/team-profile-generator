const Employee = require('../lib/Employe.js');
describe("Employee class", () => {
    it("Testing Employee object", () => {
        // act
        const employee = new Employee();
        // console.log(typeof(employee));
        expect(typeof(employee)).toBe("object");
    });

    it("Test Employee name property", () => {
          const name = "John";
          const id = 1;
          const email = "john@test.com";
           // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.name).toBe(name);
    });

    it("Test Employee id property", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);
        // console.log(employee);

        // assert
        expect(employee.id).toBe(id);
    });

    it("Test Employee email property", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.email).toBe(email);
    });

    it("Test Employee getName() method", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.getName()).toBe(name);
    });

    it("Test Employee getId() method", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.getId()).toBe(id);
    });

    it("Test Employee getEmail() method", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.getEmail()).toBe(email);
    });

    it("Test Employee getRole() method", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";
        const role = "Employee";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.getRole()).toBe(role);
    });
});