'use strict';

var expect = require('chai').expect;
var calculator = require('../app/calculator');

describe("Calculator - Test", function(){
    describe("Testing the Operations", function(){
        it("Testing the sum operation", function(){
            expect(calculator.add(1,1)).to.equal(1+1);
        });
        it("Testing the minus operation", function(){
            expect(calculator.minus(1,1)).to.equal(1-1);
        });
        it("Testing the mulitply operation", function(){
            expect(calculator.multiply(3,3)).to.equal(3*3);
        });
        it("Testing the divide operation", function(){
            expect(calculator.divide(3,3)).to.equal(3/3);
        });
        it("Testing the operation by zero", function(){
            const expectedError = new Error("no puedo dividir por cero");
            expect(calculator.divide(3,0).message).to.equal(expectedError.message);
        });
    });
});