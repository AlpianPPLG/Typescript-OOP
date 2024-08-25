describe('super constructor', () => {
    
    class Person {
        name: string;

        constructor(name: string) {
            this.name= name;
        }
    }

    class Employee extends Person {
        departement: string;

        constructor(name: string, departement: string) {
            super(name);
            this.departement = departement;
        }
    }
    
    it('should work', () => {
        const employee = new Employee("Alpian", "Tech");
        console.info(employee.name);
        console.info(employee.departement);
    })
})