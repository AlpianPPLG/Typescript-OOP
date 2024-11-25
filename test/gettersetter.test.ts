describe("getter-setter", function () {

    class Category {
        _name?: string;

        get name(): string {
            if(this._name) {
                return this._name;
            } else {
                return "default";
            }
        }

        set name(value: string) {
            if(value !== "") {
                this._name = value;
            }
        }
    }

    it("should work", function () {
        const category = new Category();
        console.info(category.name);

        category.name = "Apapun";
        console.info(category.name);

        category.name = "";
        console.info(category.name);
    });
});
