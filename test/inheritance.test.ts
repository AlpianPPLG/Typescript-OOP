describe("inheritance", () => {
 
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {

    }

    class Director extends Employee {

    }

    it("it support in ts", () => {

        const employee = new Employee("Alpian");
        console.info(employee.name);

        const manager = new Manager("Nova");
        console.info(manager.name)

        const director = new Director("Joko");
        console.info(director.name);

  });
});
