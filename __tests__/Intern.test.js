// tests for Intern class
const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it("Testing Intern object", () => {
        // act
        const intern = new Intern();
        // assert
        expect(typeof(intern)).toBe("object");
    });

    it("Test Intern school property", () => {
        //arrange
   const name = "ron";
   const id = 3;
  const email = "ron@test.com";
  const school = "Columbia";
   // act
   const intern = new Intern(name, id, email, school);

   // assert
   expect(intern.school).toBe(school);
});

it("Test Intern getSchool() method", () => {
   // arrange
   const name = "ron";
   const id = 3;
   const email = "ron@test.com";
   const school = "Columbia";
   // act
   const intern = new Intern(name, id, email, school);

   // assert
   expect(intern.getSchool()).toBe(school);
});

it("Test Intern getRole() method", () => {
   // arrange
   const name = "ron";
   const id = 3;
   const email = "ron@test.com";
   const school = "Columbia";
   const role = "Intern";

   // act
   const intern = new Intern(name, id, email, school);

   // assert
   expect(intern.getRole()).toBe(role);
});
});