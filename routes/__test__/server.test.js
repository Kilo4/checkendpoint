const app = require('../../app');
const request = require('supertest');

describe('user', ()=> {
   it('returns status 201 if service is alive passed', async () => {
       const res = await request(app)
           .get('/user')
           // .post('/user')
           // .send({firstName: 'Jan'});

        expect(res.statusCode).toEqual(201);
   });
});

// describe('GET / cards', ()=> {
//     it('returns status 201 if service is alive passed', async () => {
//         const res = request(app)
//             .get('/cards');
//
//         const resBody = req.body;
//         expect(res.statusCode).toEqual(200);
//     });
// })

const request = require('supertest');
const express = require('express');
const app = express();
const https = require('https')
const options = {
    hostname: 'https://phvspe538b.execute-api.eu-central-1.amazonaws.com/Test/cards',
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

// const xmlhttp = new XMLHttpRequest();
// const url='https://phvspe538b.execute-api.eu-central-1.amazonaws.com/Test/cards';
//
// describe('GET / cards req', ()=> {
//     it('returns status 201 if service is alive passed', () => {
//         xmlhttp.open("GET", url);
//         xmlhttp.send();
//
//         xmlhttp.onreadystatechange = (e) => {
//             console.log(xmlhttp.responseText)
//         }
//     })
// });

// describe('GET / cards', ()=> {
//     it('returns status 201 if service is alive passed', async () => {
//         const x = https.request(options, res => {
//             console.log(res.statusCode);
//         })
//     })
// });



describe('GET / cards', ()=> {
    it('returns status 201 if service is alive passed', async () => {
        const req = await https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)

            res.on('data', d => {
                const resBody = d.body;
                const resStatusCode = d.statusCode;

                expect(resStatusCode).toEqual('200')
            })
        })

        req.on('error', error => {
            console.error(error)
        })

        req.end()

    });

});

