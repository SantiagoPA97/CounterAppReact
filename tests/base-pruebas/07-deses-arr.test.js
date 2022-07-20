import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Tests in 07-deses-arr', () => {  
    test('Should return a string and a number', () => {
        //Arrange
        const [ letters, numbers ] = retornaArreglo();
    
        //Act
        
    
        //Assert
        expect(typeof letters).toBe('string');
        expect(letters).toEqual(expect.any(String));
        expect(typeof numbers).toBe('number');
    });
});
