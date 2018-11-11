process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const Move = require('../models/Move');

// Test dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Game', () => {
    beforeEach((done) => {
        Move.remove({}, (err) => {
            done();
        });
    });

    describe('/GET Hand', () => {
        it('it Should Get randome number', (done) =>{
            chai.request(server)
                .get('/hand')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('ok');
                    res.body.ok.should.be.eql(true);
                    res.body.hand.should.be.a('number');
                    done();
                });
        });
    });
});