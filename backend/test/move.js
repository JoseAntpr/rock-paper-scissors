const mongoose = require("mongoose");
const Move = require('../models/Move');

// Test dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Moves', () => {
    beforeEach((done) => {
        Move.remove({}, (err) => {
            done();
        });
    });

    describe('/GET ALL MOVES', () => {
        it('it Should Get all move a have 0 elements', (done) =>{
            chai.request(server)
                .get('/moves')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.moves.length.should.be.eql(0);
                    done();
                });
        });

        it('it Should Get all move messages and have 1 element', (done) => {

            let move = {
                text: 'You win',
                result: 'win',
                player1: 'scissors',
                player2: 'paper'
            }

            chai.request(server)
                .post('/moves')
                .send(move)
                .end()
            
                chai.request(server)
                .get('/moves')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.moves.length.should.be.eql(1);
                });
            done();

        })
    });

    describe('/POST move', () => {
        it('it Should post a move messages', (done) =>{
            let move = {
                text: 'You win',
                result: 'win',
                player1: 'scissors',
                player2: 'paper'
            }

            chai.request(server)
                .post('/moves')
                .send(move)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('move');
                    res.body.move.should.be.a('object');
                });
            done();
        });

        it('it Should not post a move messages', (done) =>{
            let move = {
                text: 'You win',
                result: 'win',
                player2: 'paper'
            }

            chai.request(server)
                .post('/moves')
                .send(move)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                });
            done();
        });
    });


});