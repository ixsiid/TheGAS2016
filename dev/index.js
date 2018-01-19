const Log = require('./Log');

global.log = new Log('MAIN');
global.token = require('../secret/Google').token;

global.doGet = function (query) {
    const log = global.log;
    log.v('Call doGet function');
    log.v(`Query is '${JSON.stringify(query)}'`);

    if (query.parameter.token !== global.token) {
        log.e('Bad token access');
        return ContentService
            .createTextOutput(JSON.stringify({ content: 'Bad access' }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService
        .createTextOutput(JSON.stringify({ content: 'Process OK' }))
        .setMimeType(ContentService.MimeType.JSON);
};
