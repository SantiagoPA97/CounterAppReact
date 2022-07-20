import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Tests in 02-template-string', () => {  
    test('Should return "Hola Santiago"', () => {
        //Arrange
        const name = 'Santiago';
    
        //Act
        const message = getSaludo(name);
    
        //Assert
        expect(message).toBe(`Hola ${name}`);
    });
});
