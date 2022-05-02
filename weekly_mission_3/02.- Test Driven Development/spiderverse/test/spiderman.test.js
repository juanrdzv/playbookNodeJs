const Spiderman = require('./../app/spiderman')

describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {

        //Aqui escribimos el codigo que queremos usar tal cual
        //Quiero poder instanciar un objeto spiderman con esta informacion:
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", "Studios NY")
      expect(andrewGarfield.name).toBe("Spiderman Sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.studio).toBe("Studios NY");

    });
  })

  describe("Unit Tests for Tom Holland", () => {
    test('2) Create an spiderman object', () => {

        //Aqui escribimos el codigo que queremos usar tal cual
        //Quiero poder instanciar un objeto spiderman con esta informacion:
      const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", "Marvel")
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio");
    });
  })