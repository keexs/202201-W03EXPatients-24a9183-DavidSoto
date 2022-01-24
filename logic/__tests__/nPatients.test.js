import patients from "../../index.js";

const nPatients = (arr) => arr.length;

describe("Given function nPatients", () => {
  describe("When recived the patients array", () => {
    test("Then return 6", () => {
      const arrayInput = patients;
      const numberOfPatients = nPatients(arrayInput);

      expect(numberOfPatients).toBe(6);
    });
  });
});
