import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Tests in 08-imp-exp', () => {  
    test('getHeroeById Should return a hero', () => {
        //Arrange
        const id = 1;
        const hero = getHeroeById(id);

        //Act
        
    
        //Assert
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById Should return a undefined if not exists', () => {
        //Arrange
        const id = 100;
        const hero = getHeroeById(id);

        //Assert
        expect(hero).toBeUndefined();
    });

    test('getHeroesByOwner DC Should return DC heroes', () => {
        //Arrange
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
    
        //Assert
        expect(heroes.length).toBe(3);
        // expect(heroes).toEqual([
        //     {
        //         id: 1,
        //         name: 'Batman',
        //         owner: 'DC'
        //     },
        //     {
        //         id: 3,
        //         name: 'Superman',
        //         owner: 'DC'
        //     },
        //     {
        //         id: 4,
        //         name: 'Flash',
        //         owner: 'DC'
        //     },
        // ]);
        expect(heroes).toEqual( heroes.filter(hero => hero.owner === owner) );
    });


    test('getHeroesByOwner Marvel Should return DC heroes', () => {
        //Arrange
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
    
        //Assert
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual( heroes.filter(hero => hero.owner === owner) );
    });
});
