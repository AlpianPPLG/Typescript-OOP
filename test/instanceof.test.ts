describe("instanceof", () => { 

    class Employee{}
    class Manager{}
    
    const budi = new Employee();
    const eko = new Manager();

    it("it support in ts", () => {

        console.info(typeof budi);
        console.info(typeof eko);
    
  });

  it('it support in ts', () => {
    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manager).toBe(false);


    expect(eko instanceof Employee).toBe(false);
    expect(eko instanceof Manager).toBe(true);

  })
});
