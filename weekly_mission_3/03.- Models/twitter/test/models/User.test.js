const User = require('./../../app/models/user')

describe("Unit Tests For User Class", ()=> {
    test('Create an User Object', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "JuanRodriguez", "Juan", "Bio", "dateCreated", "lastUpdated")
        
        //Aqui validas los resultados de ese codigo
        //Esta es una comparacion que va a igualar el valor de la izq con el de la der. (valor esperado)

        expect(user.id).toBe(1)
        expect(user.username).toBe("JuanRodriguez")
        expect(user.name).toBe("Juan")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()

    })
    test('Add getters', () =>{
        const user = new User(1, "juanRodriguez", "Juan", "Bio")
        expect(user.getUsername).toBe("juanRodriguez")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()

    })
    test('Add setters', () =>{
        const user = new User(1, "JuanRodriguez", "Juan", "Bio")
        user.setUsername = "juan"
        expect(user.username).toBe("juan")
    
        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    
    })
})


