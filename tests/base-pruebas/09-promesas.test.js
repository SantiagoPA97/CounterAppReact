import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Tests in 09-promesas', () => { 
    test('getHeroeByIdAsync Should return a heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });
    });

    test('getHeroeByIdAsync Should return a error if heroe not exists', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toEqual('No se pudo encontrar el héroe');
            done();
        });
    })
 });