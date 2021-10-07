const request = require('supertest');

describe('cards service', ()=> {

    const url='https://phvspe538b.execute-api.eu-central-1.amazonaws.com/Test';
    const cardId = '32d72d10-d6c2-4c87-9b27-179882ae8f90';


    describe('GET / cards', ()=> {
        it('returns status 200 if service is alive passed', async () => {
            const res = await request(url)
                .get('/cards');
            console.log(res.body);
            expect(res.statusCode).toEqual(200);

            // const card = JSON.parse(res.body);
            expect(res.body) //je ako array
        });
    })

    describe('POST / cards', ()=> {
        it('returns status 200 if service create new card', async () => {
            const res = await request(url)
                .post('/cards')
                .send({
                    "brand":"visa",
                    "type":"test-type",
                    "subType":null,
                    "name":"Test Card",
                    "status":"test-status",
                    "lockStatus":null,
                    "replacement":null,
                    "delivery":null,
                    "holder":null,
                    "expiryDate":"01/24",
                    "currency":"EUR",
                    "maskedNumber":"maskedNumber",
                    "limits":null,
                    "additions":null,
                    "userId":"testUser101"
                });

            console.log(res.body);
            expect(res.statusCode).toEqual(200);
        });
    })

    describe('GET / cards / ID', ()=> {
        it('returns status 200 if services find card id', async () => {
            const res = await request(url)
                .get(`/cards/${cardId}`);

            console.log(res.body);
            expect(res.statusCode).toEqual(200);
            expect(res.body.id).toEqual("32d72d10-d6c2-4c87-9b27-179882ae8f90");
        });
    })


    describe('POST / cards / {id} /pin/ rest', ()=> {
        it('returns status 200 if service find id and reset pin', async () => {
            const res = await request(url)
                .post(`/cards/${cardId}/pin/reset`)
                .send('pin1234');

            console.log(res.body);
            expect(res.statusCode).toEqual(200);
        });
    })

    describe('PUT / cards / {id} /lockstatus ', ()=> {
        it('returns status 200 and cards if services find userid', async () => {
            const res = await request(url)
                .put(`/cards/${cardId}/lock-status`)
                .send({lockStatus: "tatra"});

            console.log(res.body);
            expect(res.statusCode).toEqual(200);
            expect(res.body.lockstatus).toEqual("tatra");
        });
    })

    describe('GET / user / {userid} /cards/ ', ()=> {
        it('returns status 200 and cards if services find userid', async () => {
            const res = await request(url)
                .get('/users/testUser101/cards');

            console.log(res.body);
            expect(res.statusCode).toEqual(200);
        });
    })

});

