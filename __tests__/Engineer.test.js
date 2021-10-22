const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it("Testing Engineer object", () => {
        // act
        const engineer = new Engineer();
        //assert
        expect(typeof(engineer)).toBe("object");
    });
    it("Test Engineer gitUser property", () => {
        const name = "alex";
        const id = 2;
        const email = "alex@test.com";
        const gitUser = "alex.alex";
        //act
        const engineer = new Engineer(name, id, email, gitUser);
        //assert
        expect(engineer.gitUser).toBe(gitUser);
    });
    it("Test Engineer getGitUser() method", () => {

    const name = "alex";
    const id = 2;
    const email = "alex@test.com";
    const gitUser = "alex.alex";
    
        // act
    const engineer = new Engineer(name, id, email, gitUser);

        // assert
        expect(engineer.getGitUser()).toBe(gitUser);
    });

    it("Test Engineer getRole() method", () => {
        // arrange
        const name = "alex";
        const id = 2;
        const email = "alex@test.com";
        const gitUser = "alex.alex";
        const role = "Engineer";

        // act
        const engineer = new Engineer(name, id, email, gitUser);

        // assert
        expect(engineer.getRole()).toBe(role);
    });
});

