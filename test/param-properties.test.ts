describe('param properties', () => {

    class Person {
        constructor(public name: string) {
        }
    }

    it('should support in ts', () => {
        const person = new Person("Alpian");
        console.info(person.name);

        person.name = "Nova";
        console.info(person.name);
    })
})