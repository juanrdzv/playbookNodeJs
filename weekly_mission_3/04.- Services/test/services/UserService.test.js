const UserService = require('./../../app/services/UserService')

describe ("Tests for UserService", ()  => {
    
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create("juan", "juan", "juan")
        expect(user.username).toBe("juan")
        expect(user.name).toBe("juan")
        expect(user.id).toBe("juan")

    })
    test("2. Get user info using the UserService", () => {
        const user = UserService.create(1, "JorgeAgVel", "Jorge");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("JorgeAgVel");
        expect(userInfoInList[2]).toBe("Jorge");
        expect(userInfoInList[3]).toBe("Sin bio");
      });
    
      test("3. Update username", () => {
        const user = UserService.create(1, "JorgeAgVel", "Jorge");
        UserService.updateUserUsername(user, "JorgeToT");
        expect(user.username).toBe("JorgeToT");
      });
    
      test("4. Given a list of users give a list of usernames", () => {
        const user1 = UserService.create(1, "JorgeAgVel", "Jorge");
        const user2 = UserService.create(2, "JorgeToT", "Jorge");
        const user3 = UserService.create(3, "JorgeToTs", "Jorge");
        const usernames = UserService.getAllUsernames([user1, user2, user3]);
    
        expect(usernames).toContain("JorgeAgVel");
        expect(usernames).toContain("JorgeToT");
        expect(usernames).toContain("JorgeToT");
      })
})
