import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Tests in 11-async-await', () => {  
    test('getImagen Should return an image url', async () => {
        //Arrange
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });
});
