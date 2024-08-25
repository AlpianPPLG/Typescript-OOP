import { Mathutil } from "../src/math-util";

describe("namespace", () => {
  it("it support in ts", () => {
    console.info(Mathutil.PI);
    console.info(Mathutil.sum(1, 2, 3, 4, 5));
  });
});
