describe('polymorphism', () => {
    
    class Employee {
        constructor(public name: string) {

        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        // console.info(`Hello ${employee.name}`);
        if(employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello Employee ${vp.name}`);
        } else if(employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello Employee ${manager.name}`);
        } else {
            console.info(`Hello Employee ${employee.name}`);
        }
    }

    it('it support in ts', () => {

        let employee: Employee = new Employee("Alpian");
        console.info(employee);

        employee = new Manager("Nova");
        console.info(employee);

        employee = new VicePresident("Joko");
        console.info(employee);

    })

    it('it support in ts', () => {
        sayHello(new Employee("Alpian"));
        sayHello(new Manager("Nova"));
        sayHello(new VicePresident("Joko"));
    })
})