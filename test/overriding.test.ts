describe('overriding', () => {

    class Employee {
        name: string;
        

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            // console.info(`Hello ${name}, my name is ${this.name}, i am your manager`)
            super.sayHello(name);
            console.info('And, i am is your manager');
        }
    }

    it('it support in ts', () => {
        const employee = new Employee("Alpian");
        employee.sayHello("Nova");

        const manager = new Manager("Joko");
        manager.sayHello("Joko");
    });
})