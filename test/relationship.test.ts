describe('Relationship', () => {

    class Person {
        constructor(public name: string) {
            
        }
    }

    class Customer {
        constructor(public name: string) {

        }
    }
    
    it('it support in ts', () => {
        const person : Person = new Customer("Alpian"); 
        console.info(person.name);
    })
})