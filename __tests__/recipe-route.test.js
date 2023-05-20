`use strict`;

const supertest = require('supertest');
const { app } = require('../src/server');
const { SequelizeDatabase } = require('../src/models');

const request = supertest(app);

beforeAll(async () =>{
  await SequelizeDatabase.sync();
});

afterAll(async () =>{
  await SequelizeDatabase.drop();
});

describe('recipe router', ()=>{
  test('handles create route', async() =>{
    const response = await request.post('/recipe').send({name: 'test', ingredients: 'tomato', flavors: 'savory', rating: 3});

    expect(response.status).toEqual(200);
    expect(response.body).toEqual('test');
  });
});