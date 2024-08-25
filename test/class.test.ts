describe("Class", function () {
  class Customer {
    constructor() {
      console.info("Create New Customer");
    }
  }

  class Order {}
  it("it support in ts", function () {
    const customer: Customer = new Customer();
    const order: Order = new Order();
  });

  it("it support in ts", () => {
    new Customer();
    new Customer();
  });
});
