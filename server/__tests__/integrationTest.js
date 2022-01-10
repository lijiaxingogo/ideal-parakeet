const request = require('supertest');
require('dotenv').config();

describe('Route integration', () => {
    describe('/pokemon/slowpoke', () => {
        describe('GET', () => {
            it('responds with 200 status and json content type', () => {
                return request(process.env.SERVER)
                    .get('/pokemon/slowpoke')
                    .expect('Content-Type', /json/)
                    .expect(200);
            });
        });
        describe('GET', () => {
            it('responds with body id equals to 79, hp equals to 90 and type has two elements ', () => {
                return request(process.env.SERVER)
                    .get('/pokemon/slowpoke')
                    .expect((res) => {
                        (res.body.index = 79),
                            (res.body.hp = 90),
                            (res.body.type.length = 2);
                    });
            });
        });
    });
    describe('/pokemon/fastpoke', () => {
        describe('GET', () => {
            it('responds to invalid request with 400 status', () => {
                return request(process.env.SERVER)
                    .get('/pokemon/fastpoke')
                    .expect(400);
            });
        });
    });
});
