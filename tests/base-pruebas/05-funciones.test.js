import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Tests in 05-funciones', () => {  
    test('getUser Should return an object', () => {
        //Arrange
        const testUser = {
            uid: 'ABC123',
            username: 'Spikex'
        };
    
        //Act
        const user = getUser(testUser);
    
        //Assert
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo Should return an object', () => {
        //Arrange
        const name = 'Spikex';
    
        //Act
        const user = getUsuarioActivo(name);
    
        //Assert
        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });
    });
});
