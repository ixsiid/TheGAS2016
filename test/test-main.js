const assert = require('power-assert');
const glib = require('../GLibMock.js');

describe('doGet', function () {
    it('should return to BAD ACCESS', function () {
        const query = {
            parameter: {},
            contextPath: '',
            contentLength: -1,
            queryString: '',
            parameters: {},
        };
        assert.equal(glib.doGet(query).content, JSON.stringify({ content: 'Bad access' }));
    });

    it('should return to PROCESS OK', function () {
        const query = {
            parameter: { token: 'TEST_TOKEN' },
            contextPath: '',
            contentLength: -1,
            queryString: 'token=TEST_TOKEN',
            parameters: { token: ['TEST_TOKEN'] },
        };
        assert.equal(glib.doGet(query).content, JSON.stringify({ content: 'Process OK' }));
    });
});

