import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { api } from '../src/api';
import { ToolMock } from '../src/tool/tool.service.factory';

let accessToken = '';
let toolId = '';
const user = { username: 'user-test', password: 'user-test' };

describe('AuthController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(201)
      .expect((res) => {
        accessToken = res.body.access_token;
      });
  });

});

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(api);
  });

});

describe('ToolController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tool (POST)', () => {
    return request(app.getHttpServer())
      .post('/tool')
      .auth(accessToken, { type: 'bearer' })
      .send(ToolMock[0])
      .expect((res) => { toolId = res.body._id; })
      .expect(201);
  });

  it('/tool (GET)', () => {
    return request(app.getHttpServer())
      .get('/tool')
      .auth(accessToken, { type: 'bearer' })
      .expect(200);
  });

  it('/tool?tag= (GET)', () => {
    return request(app.getHttpServer())
      .get('/tool')
      .auth(accessToken, { type: 'bearer' })
      .send('tag=' + ToolMock[0].tags[0])
      .expect(200);
  });

  it('/tool (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/tool/' + toolId)
      .auth(accessToken, { type: 'bearer' })
      .expect(200);
  });

});

describe('UserController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .auth(accessToken, { type: 'bearer' })
      .expect(200);
  });

  it('/user (DEL)', () => {
    return request(app.getHttpServer())
      .del('/user')
      .auth(accessToken, { type: 'bearer' })
      .expect(200);
  });

});
