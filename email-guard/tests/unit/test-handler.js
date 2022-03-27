'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var context;

let mockEvent = {
    Records: [
        {
            ses: {
                mail: {
                    headers: [
                        {
                            name: 'to',
                            value: 'test@domain.com'
                        }
                    ]
                }
            }
        }
    ]
}

describe('Tests index', function () {
    it('verifies successful response', () => {
        let callbackRuleset;
        const result = app.lambdaHandler(mockEvent, context, (a, ruleset) => {
            callbackRuleset = ruleset;
        });

        expect(ruleset).to.exist;
    });
});
