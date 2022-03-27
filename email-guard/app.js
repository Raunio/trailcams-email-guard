require('dotenv').config();

exports.lambdaHandler = (event, context, callback) => {
    let mail = event.Records[0].ses.mail;
    let domain = process.env.DOMAIN;

    mail.headers.forEach(header => {
        console.log(header);
        if(header.name === 'to' && header.value.split('@')[1] !== domain) {
            console.log('Dropping email because it\'s sent from a domain that is not accepted: ' + header.value);

            callback(null, { 'disposition': 'STOP_RULE_SET' });
        }
    });
    
    callback(null, null);
};
