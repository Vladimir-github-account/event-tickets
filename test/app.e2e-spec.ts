import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tickets/:eventId (GET)', async () => {
    const resEvent = await request(app.getHttpServer())
      .post('/event')
      .send({
        title: 'Stravinsky and Shostakovich with Dudamel',
      })
      .expect(201);
    expect(resEvent.body.id).toBeGreaterThan(0);
    await request(app.getHttpServer())
      .post('/tickets')
      .send({
        row: 'B',
        section: 'Balcony',
        eventId: resEvent.body.id,
        seat_number: 2,
        price: 800,
      })
      .expect(201);
    const res = await request(app.getHttpServer())
      .get(`/tickets/${resEvent.body.id}`)
      .expect(200);
    expect(res.body.length).toBeGreaterThan(0);
    console.log(res.body);
  });

  it('/tickets/:eventId (GET) - failed', async () => {
    await request(app.getHttpServer()).get(`/tickets/0`).expect(400);
    await request(app.getHttpServer()).get(`/tickets/string`).expect(400);
  });
});
