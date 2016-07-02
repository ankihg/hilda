'use strict';
const {expect, request} = require('chai').use(require('chai-http')),
  server = require('../config').SERVER;

describe('squirrel-sighting routes testing', () => {

  const path = '/squirrel-sighting';
  let squirrelId = '';

  before((done) => {
    request(server)
      .post(path)
      .send({"reporter":"tad", "loc":[55, -15]})
      .end((err, res) => {
        expect(err).eql(null);
        let sighting = res.body.data;
        expect(sighting).property('_id');
        squirrelId = sighting._id;
        expect(sighting.reporter).eql('tad');
        expect(sighting.loc).eql([55, -15]);
        done();
      })
  })

  it('get all squirrels', (done) => {
    request(server)
      .get(path)
      .end((err, res) => {
        expect(err).eql(null);
        expect(res.body.data.length).eql(1);
        expect(res.body.data[0]._id).eql(squirrelId);
        done();
      })
  })

  after((done) => {
    request(server)
      .delete(path+'/'+squirrelId)
      .end((err, res) => {
        expect(err).eql(null);
        expect(res.body.msg).eql('deleted squirrel-sighting:'+squirrelId);
        done();
      })
  })




})
