const request = require('supertest')
module.require('./app')

describe('GET/iecho',()=>{
    test('It is expected to respond with a 404 status', async()=>{
        const response = await request('http://localhost:3001').get('/iecho').query({'text': ''})
        
        expect(response.status).toEqual(404)
        
    });

    test('It is expected to respond with a 200 status', async()=>{
        const response = await request('http://localhost:3001').get('/iecho').query({'text': 'adsdas'})
        expect(response.status).toEqual(200)
        
        
    });

    test('You are expected to respond with a palindrome', async()=>{
        const response = await request('http://localhost:3001').get('/iecho').query({'text': '¿neuquen?'})
        expect(response._body).toStrictEqual({palindromo: 'YES', response: '?neuquen¿'})
        expect(response.status).toEqual(200)
        
        
        
    });

    test('It is expected to return String inverted', async()=>{
        const response = await request('http://localhost:3001').get('/iecho').query({'text': 'asdasd'})
        expect(response._body).toStrictEqual({palindromo: "NO", response: "dsadsa"})
        expect(response.status).toEqual(200)
        
      
    });


})

