const UserService = require('./../../app/services/UserService')

describe ("Tests for UserService", ()  => {
    
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1,"juanrdzv", "juan")
        expect(user.username).toBe("juanrdzv")
        expect(user.name).toBe("juan")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })
    test("2. Get all info using the UserService", () => {
        const user = UserService.create(1, "juanrdzv", "juan");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("juanrdzv");
        expect(userInfoInList[2]).toBe("juan");
        expect(userInfoInList[3]).toBe("Sin bio");
      })
      test("3. Update username", () => {
          const user = UserService.create(1, "juanrdzv", "juan")
          UserService.updateUserUsername(user, "juanR")
          expect(user.username).toBe("juanR")
      })
      test("4. Given a list of users give a list of usernames", () => {
        const user1 = UserService.create(1, "juan01", "Juan");
        const user2 = UserService.create(2, "juan02", "Juan");
        const user3 = UserService.create(3, "juan03", "Juan");
        const usernames = UserService.getAllUsernames([user1, user2, user3]);
    
        expect(usernames).toContain("juan01");
        expect(usernames).toContain("juan02");
        expect(usernames).toContain("juan03");
    })
})