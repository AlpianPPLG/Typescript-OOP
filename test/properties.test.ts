describe("properties", function () {
  class Customer {
    readonly id: number;
    name: string = "Guest";
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("it support in ts", function () {
    const customer = new Customer(1, "Alpian");
    customer.age = 17;

    console.info(customer.id);
    console.info(customer.name);
    console.info(customer.age);
    console.info(customer);
  });

  it("should support in ts", () => {
    const customer = new Customer(1, "Alpian");
    customer.sayHello("Nova");
  });
});
