// const app = require('../../app');
const request = require('supertest');

// describe('user', ()=> {
//    it('returns status 201 if service is alive passed', async () => {
//        const res = await request(app)
//            .get('/user')
//            // .post('/user')
//            // .send({firstName: 'Jan'});
//
//         expect(res.statusCode).toEqual(200);
//    });
// });

const url='https://phvspe538b.execute-api.eu-central-1.amazonaws.com/Test';

describe('GET / cards', ()=> {
    it('returns status 200 if service is alive passed', async () => {
        const res = await request(url)
            .get('/cards');
        console.log(res.body);
        expect(res.statusCode).toEqual(200);
    });
})

describe('Post / cards', ()=> {
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
            // .expect(201)
            // .expect(isValidOrg)
            // .end();

        console.log(res.body);
        expect(res.statusCode).toEqual(200);
    });
})

describe('Get / cards / ID', ()=> {
    it('returns status 200 if services find card id', async () => {
        const res = await request(url)
            .get('/cards/32d72d10-d6c2-4c87-9b27-179882ae8f90');
            // .expect((res) => {
            //     res.statusCode.toEqual(200);
            //     // res.body.should.have.property(id, '32d72d10-d6c2-4c87-9b27-179882ae8f90')
            //     // res.body.should.have.property(lockstatus, 'FixUpdatingNotExistingCard')
            //
            // })
            // .expect(200, )

        console.log(res.body);
        expect(res.statusCode).toEqual(200);
        expect(res.body.id).toEqual("32d72d10-d6c2-4c87-9b27-179882ae8f90");
        expect(res.body.lockstatus).toEqual("FixUpdatingNotExistingCard");
        // res.body.should.have.property(id, "32d72d10-d6c2-4c87-9b27-179882ae8f90");
        // res.body.should.have.property(lockstatus, "FixUpdatingNotExistingCard");
    });
})


describe('Post / cards / {id} /pin/ rest', ()=> {
    it('returns status 200 if service find id and reset pin', async () => {
        const res = await request(url)
            .post('/cards/32d72d10-d6c2-4c87-9b27-179882ae8f90/pin/reset')
            .send('pin1234');

        console.log(res.body);
        expect(res.statusCode).toEqual(200);
    });
})

describe('Put / cards / {id} /lockstatus ', ()=> {
    it('returns status 200 and cards if services find userid', async () => {
        const res = await request(url)
            .put('/cards/32d72d10-d6c2-4c87-9b27-179882ae8f90/lockstatus')
            .send('lock');
            // .send('FixUpdatingNotExistingCard');

        console.log(res.body);
        expect(res.statusCode).toEqual(200);
    });
})

describe('Get / user / {userid} /cards/ ', ()=> {
    it('returns status 200 and cards if services find userid', async () => {
        const res = await request(url)
            .get('/users/testUser101/cards');

        console.log(res.body);
        expect(res.statusCode).toEqual(200);
        //expect(res.body.count).toBeGreaterThan(0);
    });
})

// var isValidOrg = function(res) {
//     res.body.should.have.property("id", "new_org");
// };

