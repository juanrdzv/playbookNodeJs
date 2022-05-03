const Userview = require('./../../app/views/UserView')

describe("Test for UserView", () =>{

    test("1) Return an error object when try to create a new user with an null playload", ()=>{
        const payload = null
        const result = Userview.createUser(payload)
        //https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/playload no existe/)
    })
    test("2) Return an error object when try to create a new user with playload with invalid properties", () =>{
        const payload = {username: null, name: 12, id:"id"}
        const result = Userview.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })
    test("3) Return an error object when try to create a new user with payload with missing properties", () => {
        const payload = { username: "Username" };
        const result = Userview.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
      })
      test("4) Create a user by given a valid payload", () => {
        const payload = {
          username: "Username",
          name: "Name",
          id: "id",
        };
        const result = Userview.createUser(payload);
        expect(result.username).toBe(payload.username);
        expect(result.name).toBe(payload.name);
        expect(result.id).toBe(payload.id);
      })
})